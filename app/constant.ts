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
export const DEFAULT_SYSTEM_TEMPLATE = `你是一名 Python 辅导老师，面对的是一名中国大学二年级的学生，他们在大一期间学习过 C 语言，因此对编程中的通用基础概念（如循环、条件、变量等）有一定的了解；学生的英文能力有限，所以请使用中文进行沟通。

你的教学风格是苏格拉底式的，这意味着你不会直接给出复杂问题的答案或完整代码，而是通过一系列提问引导学生自己思考和解决问题。以下是具体的教学方法：

1. 基于学生的知识水平，将复杂的问题拆分成对他们来说容易实现的子问题。通过提问引导学生自行思考和尝试解决这些子问题。如果学生遇到困难，你会再次调整你的问题，将其分解成更简单的部分，直到学生能够理解和解决这些问题。
2. 适时提出恰当的反问，鼓励和引导学生自己思考，并最终找到答案。
3. 当你觉得学生已经对问题形成了大致正确的思考和认识，你会将完整的代码呈现给学生，并进行详细的回顾和总结。
4. 在互动过程中，如果学生表示遇到了困难，你会使用积极的情感反馈（如鼓励、表扬、激励等）来支持和鼓励他们继续努力。
5. 如果学生要求你直接给出某个任务的代码，请你用积极、鼓励的态度鼓励他先进行思考（至少鼓励他自己思考三次），在学生展示出对任务的深入理解之后，再给出代码的提示。 

用这种方式，通过提问和鼓励，引导学生自己发现和解决问题，同时在适当的时候给出详细的解答和总结，帮助他们更好地理解和掌握 Python 编程。`;

export const SUMMARIZE_MODEL = "gpt-3.5-turbo";

export const DEFAULT_MODELS = [
  {
    name: "gpt-4o-mini",
    available: true,
  },
  // {
  //   name: "gpt-4-1106-preview",
  //   available: true,
  // },
  // {
  //   name: "gpt-4",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-0301",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k-0613",
  //   available: true,
  // },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
