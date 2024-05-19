import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Lang } from "../types/Translate";
import { ask as askTranslate } from "../adapters/translateAdapter";
import { useDebounced } from "../hooks/useDebounced";

type PropsTypes = PropsWithChildren;

type ContextValueTypes = {
  message: string;
  response: string;
  sourceLang: Lang;
  destLang: Lang;
  error: string;
  loading: boolean;
};

type ContextSetterTypes = {
  setMessage: (message: string) => void;
  setResponse: (response: string) => void;
  setSourceLang: (lang: Lang) => void;
  setDestLang: (lang: Lang) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  ask: () => void;
};
type ContextType = ContextValueTypes & ContextSetterTypes;

const defaultValues: ContextType = {
  message: "",
  setMessage: function (): void {},
  response: "",
  setResponse: function (): void {},
  sourceLang: "auto-english",
  setSourceLang: function (): void {},
  destLang: "persian",
  setDestLang: function (): void {},
  loading: false,
  setLoading: function (): void {},
  error: "",
  setError: function (): void {},
  ask: function (): void {},
};
const TranslateContext = createContext<ContextType>(defaultValues);

export default function TranslateProvider({ children }: PropsTypes) {
  const [message, setMessage] = useState<string>(defaultValues.message);
  const [response, setResponse] = useState<string>(defaultValues.response);
  const [sourceLang, setSourceLang] = useState<Lang>(defaultValues.sourceLang);
  const [destLang, setDestLang] = useState<Lang>(defaultValues.destLang);
  const [loading, setLoading] = useState<boolean>(defaultValues.loading);
  const [error, setError] = useState<string>(defaultValues.error);
  const debouncedSetResponse = useDebounced(setResponse, 30);

  const ask = () => {
    if (!message) return;
    setLoading(true);
    let lResponse = "";
    askTranslate(message, sourceLang, destLang, (chunk, done) => {
      lResponse += chunk;
      debouncedSetResponse(lResponse);
      setLoading(false);
    });
  };
  const debouncedAsk = useDebounced(ask, 1000);

  useEffect(() => {
    if (!message) return;
    debouncedAsk(message);
  }, [message]);

  return (
    <TranslateContext.Provider
      value={{
        message,
        response,
        sourceLang,
        destLang,
        loading,
        error,
        setMessage,
        setResponse,
        ask,
        setError,
        setLoading,
        setSourceLang,
        setDestLang,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

export const useTranslateContext = () => {
  return useContext(TranslateContext);
};
