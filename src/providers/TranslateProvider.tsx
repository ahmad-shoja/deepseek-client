import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Lang } from "../types/Translate";
import { ask as askTranslate } from "../adapters/translateAdapter";

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

  const timeout = useRef(0);
  useEffect(() => {
    if (!message) return;
    if (timeout) clearTimeout(timeout.current);
    timeout.current = setTimeout(async () => {
      setLoading(true);
      const res = await askTranslate(message, sourceLang, destLang);
      setResponse(res);
      setLoading(false);
    }, 2000);
  }, [destLang, message, sourceLang, timeout]);

  const ask = async () => {
    setLoading(true);
    askTranslate(message, sourceLang, destLang).then((res) => {
      setLoading(false);
      setResponse(res);
    });
  };
  const debouncedSetResponse = useDebounced(setResponse, 30);

  const ask = async () => {
    setLoading(true);
    let lResponse = "";
    askCoder(
      message,
      (chunk, done) => {
        lResponse += chunk;
        debouncedSetResponse(lResponse);
        setLoading(!done);
      },
      { length, format, lang, tone },
    );
  };
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
