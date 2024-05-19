import { Length, Format, Tone, Lang } from "../../types/Write";
import { ParsedResponse } from "./types";

export const parseChunk = (chunksString: string): string => {
  const parsedChunk = chunksString
    .substring(6)
    .replace("\n\ndata: [DONE]", "")
    .split("\n\ndata: ")
    .map((chunkString) => {
      if (!chunkString) return "";
      return JSON.parse(chunkString).choices[0].delta.content;
    });
  return parsedChunk.join(" ");
};
export const mapCodeResponse = (text: string): Array<ParsedResponse> => {
  const pattern = /(```\w*\n[\s\S]*?\n```)/g;
  const parts = text.split(pattern);

  const result = parts.map((part) => {
    if (part.startsWith("```")) {
      const langMatch = part.match(/```(\w*)\n/);
      const lang = langMatch ? langMatch[1] : undefined;
      const codeContent = part.slice(langMatch?.[0].length, -4);
      return {
        content: codeContent,
        type: "code",
        lang: lang,
      } as ParsedResponse;
    } else {
      return { content: part, type: "text", lang: undefined } as ParsedResponse;
    }
  });

  return result;
};

export const mapMessage = (
  message: string,
  options?: {
    length?: Length;
    format?: Format;
    tone?: Tone;
    lang?: Lang;
    [key: string]: string | undefined;
  },
) => {
  let constructedMessage = "please do following request";
  if (!options) return constructedMessage;
  for (const key in options) {
    constructedMessage += ` ${options[key] ? `in ${key} ${options[key]}` : ""}`;
  }
  constructedMessage += `\`\`\` ${message} \`\`\` `;
  return constructedMessage;
};
