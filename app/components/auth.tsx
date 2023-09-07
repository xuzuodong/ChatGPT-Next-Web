import styles from "./auth.module.scss";
import { IconButton } from "./button";

import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useAccessStore } from "../store";
import Locale from "../locales";

import BotIcon from "../icons/bot.svg";
import { useEffect, useState } from "react";
import { getClientConfig } from "../config/client";

export function AuthPage() {
  const navigate = useNavigate();
  const access = useAccessStore();

  const goHome = () => navigate(Path.Home);

  useEffect(() => {
    if (getClientConfig()?.isApp) {
      navigate(Path.Settings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loading, setLoading] = useState(false);

  function handleConfirm() {
    setLoading(true);
    access
      .login()
      .then((res) => {
        access.updateLoginToken(res.data.token);
        navigate(Path.Home);
      })
      .catch((err: unknown) => {
        console.error(err);
        alert("登录失败");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className={styles["auth-page"]}>
      <div className={`no-dark ${styles["auth-logo"]}`}>
        <BotIcon />
      </div>

      <div className={styles["auth-title"]}>{Locale.Auth.Title}</div>
      <div className={styles["auth-tips"]}>{Locale.Auth.Tips}</div>

      <input
        className={styles["auth-input"]}
        type="text"
        placeholder={Locale.Auth.Input}
        value={access.loginName}
        onChange={(e) => {
          access.updateLoginName(e.currentTarget.value);
        }}
      />

      <input
        className={styles["auth-password"]}
        type="password"
        placeholder={Locale.Auth.Password}
        value={access.loginPassword}
        onChange={(e) => {
          access.updateLoginPassword(e.currentTarget.value);
        }}
      />

      <div className={styles["auth-actions"]}>
        <IconButton
          disabled={loading}
          text={Locale.Auth.Confirm}
          type="primary"
          onClick={handleConfirm}
        />
        {/* <IconButton text={Locale.Auth.Later} onClick={goHome} /> */}
      </div>
    </div>
  );
}
