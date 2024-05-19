type Mode = "compose" | "reply";
type Length = "auto" | "short" | "medium" | "long";
type Format = "auto" | "email" | "message" | "comment";
type Tone = "auto" | "amicable" | "casual" | "friendly";
type Lang = "auto" | "english" | "persian";
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

export type { Mode, Length, Format, Tone, Lang, ApiResponse };
