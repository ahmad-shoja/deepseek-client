import { Lang } from "../../types/Translate";

export const mapMessage = (
  message: string,
  sourceLang: Lang,
  destLang: Lang,
) => {
  let constructedMessage = `translate below text from ${sourceLang} to ${destLang}: `;
  constructedMessage += `${message}  `;
  return constructedMessage;
};
