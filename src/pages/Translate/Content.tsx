import Tabs from "../../components/ui/Tabs";
import TextAria from "../../components/ui/TextAria";
import { useTranslateContext } from "../../providers/TranslateProvider";
import { Lang } from "../../types/Translate";

export default function Content() {
  const {
    message,
    setMessage,
    response,
    sourceLang,
    setSourceLang,
    destLang,
    setDestLang,
    loading,
  } = useTranslateContext();

  const sourceFieldMarkup = (
    <div className="flex w-1/2 flex-col gap-y-4">
      <Tabs
        tabs={[
          { id: "auto-english", content: "Auto-english" },
          { id: "english", content: "English" },
          { id: "persian", content: "Persian" },
          { id: "spanish", content: "Spanish" },
        ]}
        selected={sourceLang}
        onSelect={(id) => setSourceLang(id as Lang)}
      />
      <TextAria
        rows={6}
        onChange={setMessage}
        value={message}
        placeHolder={"source language"}
      />
    </div>
  );
  const destFieldMarkup = (
    <div className="flex w-1/2 flex-col gap-y-4">
      <Tabs
        tabs={[
          { id: "auto-english", content: "Auto-english" },
          { id: "english", content: "English" },
          { id: "persian", content: "Persian" },
          { id: "spanish", content: "Spanish" },
        ]}
        selected={destLang}
        onSelect={(id) => setDestLang(id as Lang)}
      />
      <TextAria
        loading={loading}
        disabled
        rows={6}
        onChange={() => {}}
        value={response}
        placeHolder={"source language"}
      />
    </div>
  );
  return (
    <div className="flex flex-col gap-9 px-6 pb-16">
      {sourceFieldMarkup}
      {destFieldMarkup}
    </div>
  );
}
