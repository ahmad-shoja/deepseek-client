import { token, writeUrl } from "../../constants";
import { Lang } from "../../types/Translate";
import { mapMessage, parseChunk } from "./map";

export const ask = async (
  message: string,
  sourceLang: Lang,
  destLang: Lang,
  onChunk: (chunk: string, done: boolean) => void,
): Promise<void> => {
  const constructedMessage = mapMessage(message, sourceLang, destLang);
  const response = await fetch(writeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      messages: [{ content: constructedMessage, role: "user" }],
      model: "deepseek-chat",
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      stop: null,
      stream: true,
      temperature: 1,
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
