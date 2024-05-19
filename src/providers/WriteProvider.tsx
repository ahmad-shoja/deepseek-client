import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Mode, Length, Format, Tone, Lang } from "../types/Write";
import { ParsedResponse } from "../adapters/writeAdapter/types";
import { ask as askCoder } from "../adapters/writeAdapter";

type PropsTypes = PropsWithChildren;

type ContextValueTypes = {
  mode: Mode;
  message: string;
  length: Length;
  format: Format;
  tone: Tone;
  originalText: string;
  whatToReply: string;
  response: Array<ParsedResponse>;
  lang: Lang;
  error: string;
  loading: boolean;
};

type ContextSetterTypes = {
  setMode: (mode: Mode) => void;
  setMessage: (message: string) => void;
  setLength: (length: Length) => void;
  setFormat: (format: Format) => void;
  setTone: (tone: Tone) => void;
  setOriginalText: (originalText: string) => void;
  setWhatToReply: (whatToReply: string) => void;
  setResponse: (response: Array<ParsedResponse>) => void;
  setLang: (lang: Lang) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  ask: () => void;
};
type ContextType = ContextValueTypes & ContextSetterTypes;

const defaultValues: ContextType = {
  mode: "compose",
  setMode: function (): void {},
  message: "",
  setMessage: function (): void {},
  length: "auto",
  setLength: function (): void {},
  format: "auto",
  setFormat: function (): void {},
  tone: "auto",
  setTone: function (): void {},
  originalText: "",
  setOriginalText: function (): void {},
  whatToReply: "",
  setWhatToReply: function (): void {},
  response: [],
  setResponse: function (): void {},
  lang: "auto",
  setLang: function (): void {},
  loading: false,
  setLoading: function (): void {},
  ask: function (): void {},
  setError: function (): void {},
  error: "",
};
const WriteContext = createContext<ContextType>(defaultValues);

export default function WriteProvider({ children }: PropsTypes) {
  const [mode, setMode] = useState<Mode>(defaultValues.mode);
  const [message, setMessage] = useState<string>(defaultValues.message);
  const [length, setLength] = useState<Length>(defaultValues.length);
  const [format, setFormat] = useState<Format>(defaultValues.format);
  const [tone, setTone] = useState<Tone>(defaultValues.tone);
  const [originalText, setOriginalText] = useState<string>(
    defaultValues.originalText,
  );
  const [whatToReply, setWhatToReply] = useState<string>(
    defaultValues.whatToReply,
  );
  const [response, setResponse] = useState<Array<ParsedResponse>>(
    defaultValues.response,
  );
  const [lang, setLang] = useState<Lang>(defaultValues.lang);
  const [loading, setLoading] = useState<boolean>(defaultValues.loading);
  const [error, setError] = useState<string>(defaultValues.error);

  const ask = async () => {
    setLoading(true);
    askCoder(message, { length, format, lang, tone }).then((res) => {
      setLoading(false);
      setResponse(res);
    });
  };

  return (
    <WriteContext.Provider
      value={{
        mode,
        message,
        length,
        format,
        tone,
        originalText,
        whatToReply,
        response,
        lang,
        loading,
        error,
        setMode,
        setMessage,
        setLength,
        setFormat,
        setTone,
        setOriginalText,
        setWhatToReply,
        setResponse,
        setLang,
        ask,
        setError,
        setLoading,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
}

export const useWriteContext = () => {
  return useContext(WriteContext);
};
