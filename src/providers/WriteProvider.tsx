import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Mode, Length, Format, Tone } from "../types/Write";
type PropsTypes = PropsWithChildren;

type ContextValueTypes = {
  mode: Mode;
  message: string;
  length: Length;
  format: Format;
  tone: Tone;
  originalText: string;
  whatToReply: string;
};

type ContextSetterTypes = {
  setMode: (mode: Mode) => void;
  setMessage: (message: string) => void;
  setLength: (length: Length) => void;
  setFormat: (format: Format) => void;
  setTone: (tone: Tone) => void;
  setOriginalText: (originalText: string) => void;
  setWhatToReply: (whatToReply: string) => void;
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
};
const WriteContext = createContext<ContextType>(defaultValues);

export default function WriteProvider({ children }: PropsTypes) {
  const [state, setState] = useState<ContextValueTypes>(defaultValues);

  const setMode = (mode: Mode) => setState({ ...state, mode });
  const setMessage = (message: string) => setState({ ...state, message });
  const setLength = (length: Length) => setState({ ...state, length });
  const setFormat = (format: Format) => setState({ ...state, format });
  const setTone = (tone: Tone) => setState({ ...state, tone });
  const setOriginalText = (originalText: string) =>
    setState({ ...state, originalText });
  const setWhatToReply = (whatToReply: string) =>
    setState({ ...state, whatToReply });

  return (
    <WriteContext.Provider
      value={{
        ...state,
        setMode,
        setMessage,
        setLength,
        setFormat,
        setTone,
        setOriginalText,
        setWhatToReply,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
}

export const useWriteContext = () => {
  return useContext(WriteContext);
};
