type Lang = "auto-english" | "english" | "persian" | "spanish";
type ApiResponse = {
  id: string;
  choices: {
    index: number;
    message: { content: string; role: string };
    finish_reason: string;
  }[];
  created: number;
  model: string;
  system_fingerprint: null;
  object: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type { Lang, ApiResponse };
