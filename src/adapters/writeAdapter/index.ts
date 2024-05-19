import { Format, Lang, Length, Tone } from "../../types/Write";
import { mapMessage, parseChunk } from "./map";

export const ask = async (
  message: string,
  onChunk: (chunk: string, done: boolean) => void,
  options?: {
    length?: Length;
    format?: Format;
    tone?: Tone;
    lang?: Lang;
  },
): Promise<void> => {
  const constructedMessage = mapMessage(message, options);
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"sk-ca38a341295f4e12b27c18e94d71f222"}`,
    },
    body: JSON.stringify({
      messages: [{ content: constructedMessage, role: "user" }],
      model: "deepseek-coder",
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      stop: null,
      temperature: 1,
      stream: true,
      top_p: 1,
    }),
  });

  if (response.status === 200) {
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let done = false;
      while (!done) {
        const { value, done: innerDone } = await reader.read();
        done = innerDone;
        const chunk = decoder.decode(value);
        const parsedChunk = parseChunk(chunk);
        onChunk(parsedChunk, done);
      }
    }
  }
};
