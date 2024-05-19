import { token, writeUrl } from "../../constants";
import { Format, Lang, Length, Tone } from "../../types/Write";
import { mapCodeResponse, mapMessage } from "./map";
import { ParsedResponse } from "./types";

export const ask = async (
  message: string,
  options?: {
    length?: Length;
    format?: Format;
    tone?: Tone;
    lang?: Lang;
  },
): Promise<Array<ParsedResponse>> => {
  const constructedMessage = mapMessage(message, options);
  const response = await fetch(writeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      messages: [{ content: constructedMessage, role: "user" }],
      model: "deepseek-coder",
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      stop: null,
      temperature: 1,
      top_p: 1,
    }),
  });
  const res = await response.json();
  return mapCodeResponse(res.choices[0]?.message.content);
};
