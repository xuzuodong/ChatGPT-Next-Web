import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_API_HOST, DEFAULT_MODELS, StoreKey } from "../constant";
import { getHeaders } from "../client/api";
import { BOT_HELLO } from "./chat";
import { getClientConfig } from "../config/client";

export interface AccessControlStore {
  loginName: string;
  loginPassword: string;
  loginToken: string;
  accessCode: string;
  token: string;

  needCode: boolean;
  hideUserApiKey: boolean;
  hideBalanceQuery: boolean;
  disableGPT4: boolean;

  openaiUrl: string;

  updateLoginName: (_: string) => void;
  updateLoginPassword: (_: string) => void;
  updateLoginToken: (_: string) => void;
  login: () => Promise<any>;
  updateToken: (_: string) => void;
  updateCode: (_: string) => void;
  updateOpenAiUrl: (_: string) => void;
  enabledAccessControl: () => boolean;
  isAuthorized: () => boolean;
  fetch: () => void;
}

let fetchState = 0; // 0 not fetch, 1 fetching, 2 done

const DEFAULT_OPENAI_URL =
  getClientConfig()?.buildMode === "export" ? DEFAULT_API_HOST : "/api/openai/";
console.log("[API] default openai url", DEFAULT_OPENAI_URL);

export const useAccessStore = create<AccessControlStore>()(
  persist(
    (set, get) => ({
      loginName: "",
      loginPassword: "",
      loginToken: "",
      token: "",
      accessCode: "",
      needCode: true as boolean,
      hideUserApiKey: false,
      hideBalanceQuery: false,
      disableGPT4: false,

      openaiUrl: DEFAULT_OPENAI_URL,

      enabledAccessControl() {
        get().fetch();

        return get().needCode;
      },
      updateLoginName(val) {
        set(() => ({ loginName: val.trim() }));
      },
      updateLoginPassword(val) {
        set(() => ({ loginPassword: val?.trim() }));
      },
      updateLoginToken(val) {
        set(() => ({ loginToken: val?.trim() }));
      },
      updateCode(code: string) {
        set(() => ({ accessCode: code?.trim() }));
      },
      updateToken(token: string) {
        set(() => ({ token: token?.trim() }));
      },
      updateOpenAiUrl(url: string) {
        set(() => ({ openaiUrl: url?.trim() }));
      },
      isAuthorized() {
        get().fetch();

        // has token or has code or disabled access control
        return (
          !!get().token ||
          !!get().accessCode ||
          !get().enabledAccessControl() ||
          !!get().loginToken
        );
      },
      login() {
        return fetch("/api/login", {
          method: "post",
          body: JSON.stringify({
            name: get().loginName,
            password: get().loginPassword,
          }),
        }).then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error("Login failed");
          }
        });
      },
      fetch() {
        if (fetchState > 0 || getClientConfig()?.buildMode === "export") return;
        fetchState = 1;
        fetch("/api/config", {
          method: "post",
          body: null,
          headers: {
            ...getHeaders(),
          },
        })
          .then((res) => res.json())
          .then((res: DangerConfig) => {
            console.log("[Config] got config from server", res);
            set(() => ({ ...res }));

            if (res.disableGPT4) {
              DEFAULT_MODELS.forEach(
                (m: any) => (m.available = !m.name.startsWith("gpt-4")),
              );
            }
          })
          .catch(() => {
            console.error("[Config] failed to fetch config");
          })
          .finally(() => {
            fetchState = 2;
          });
      },
    }),
    {
      name: StoreKey.Access,
      version: 1,
      partialize: (state) => ({
        loginToken: state.loginToken,
      }),
    },
  ),
);
