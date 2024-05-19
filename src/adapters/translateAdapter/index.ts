import { token, writeUrl } from "../../constants";
import { Lang } from "../../types/Translate";
import { mapMessage } from "./map";

export const ask = async (
  message: string,
  sourceLang: Lang,
  destLang: Lang,
): Promise<string> => {
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
      temperature: 1,
      top_p: 1,
    }),
  });
  const res = await response.json();
  return res.choices[0]?.message.content;
};
