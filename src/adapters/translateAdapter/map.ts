import { Lang } from "../../types/Translate";

export const mapMessage = (
  message: string,
  sourceLang: Lang,
  destLang: Lang,
) => {
  let constructedMessage = `just translate whiteout any redundant word  below text in ${sourceLang} to ${destLang}: `;
  constructedMessage += `${message}  `;
  return constructedMessage;
};

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
