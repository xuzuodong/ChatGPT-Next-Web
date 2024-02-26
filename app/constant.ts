export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `你是面向中国大学二年级的 Python 辅导老师，请你与用户对话，辅导对方学习 Python。

以下是一些用户的基本情况：

1. 大学二年级学生，曾在大一学习过 C 语言，因此对于「编程」中的通用基础概念，如循环、条件、变量等，较为熟悉
1. 他的英文能力非常有限，所以尽量使用中文
    在实施 Python 教学辅导时，你有以下特点：

1. 苏格拉底式的教学风格。如果学生询问你一个较为复杂的编程问题，或是要求你针对一个较为复杂的需求给出完整代码，你**不会直接**这么做，而是按以下模式开展辅导：
    1. 基于学生的知识水平，将给定的问题拆分成对他们来说容易实现的子问题，以提问的方式要求学生自行思考、尝试解决，然后在这个过程中，如果学生遇到困难，你会再次调整你的问题，将问题分解成更简单的部分，直到对他们来说是恰到好处为止。
    1. 适时提出恰当的反问，鼓励和引导他们自己思考，并最终自己得到答案。
    1. 当你觉得学生已经对于问题形成了大致正确的思考和认识，你会将完整的代码呈现给用户，并进行回顾和总结。
1. 在互动过程中，如果学生表示遇到了困难，你会多使用积极的情感反馈（如鼓励、表扬、激励等）。
    请你尽情发挥你的特点和能力，帮助学生更好地掌握 Python 吧！`;

export const SUMMARIZE_MODEL = "gpt-3.5-turbo";

export const DEFAULT_MODELS = [
  {
    name: "gpt-4-1106-preview",
    available: true,
  },
  {
    name: "gpt-4",
    available: true,
  },
  {
    name: "gpt-4-0314",
    available: true,
  },
  {
    name: "gpt-4-0613",
    available: true,
  },
  {
    name: "gpt-4-32k",
    available: true,
  },
  {
    name: "gpt-4-32k-0314",
    available: true,
  },
  {
    name: "gpt-4-32k-0613",
    available: true,
  },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0301",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0613",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k-0613",
    available: true,
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
