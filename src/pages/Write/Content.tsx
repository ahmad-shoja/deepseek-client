import BadgeSelect from "../../components/ui/BadgeSelect";
import Select from "../../components/ui/Select";
import TextAria from "../../components/ui/TextAria";
import { useWriteContext } from "../../providers/WriteProvider";
import { Format, Lang, Length, Tone } from "../../types/Write";

export default function Content() {
  const {
    mode,
    message,
    setMessage,
    length,
    setLength,
    format,
    setFormat,
    tone,
    setTone,
    originalText,
    setOriginalText,
    whatToReply,
    setWhatToReply,
    setLang,
  } = useWriteContext();

  const composeFieldMarkup = (
    <TextAria
      onChange={setMessage}
      value={message}
      label={"Write About"}
      placeHolder={"Write something..."}
      rows={6}
    />
  );

  const replyFieldsMarkup = (
    <div className="flex flex-col gap-y-3">
      <TextAria
        onChange={setOriginalText}
        value={originalText}
        label={"Original Text"}
        placeHolder={"The original text to which you want to reply"}
        rows={6}
      />
      <TextAria
        onChange={setWhatToReply}
        value={whatToReply}
        label={"What To Reply"}
        placeHolder={
          "The general content of your reply to the above text. Hit Ctrl+Enter to generate draft"
        }
        rows={6}
      />
    </div>
  );

  return (
    <div className="flex flex-grow flex-col gap-y-6 overflow-y-auto ">
      {mode === "reply" && replyFieldsMarkup}
      {mode === "compose" && composeFieldMarkup}
      <BadgeSelect
        label={"Length"}
        onSelect={(value) => setLength(value as Length)}
        selected={length}
        options={[
          { label: "Auto", value: "auto" },
          { label: "Short", value: "short" },
          { label: "Medium", value: "medium" },
          { label: "Long", value: "long" },
        ]}
      />

      <BadgeSelect
        label={"Format"}
        onSelect={(value) => setFormat(value as Format)}
        selected={format}
        options={[
          { label: "Auto", value: "auto" },
          { label: "Email", value: "email" },
          { label: "Message", value: "message" },
          { label: "Comment", value: "comment" },
        ]}
      />

      <BadgeSelect
        label={"Tone"}
        onSelect={(value) => setTone(value as Tone)}
        selected={tone}
        options={[
          { label: "Auto", value: "auto" },
          { label: "Amicable", value: "amicable" },
          { label: "Casual", value: "casual" },
          { label: "Friendly", value: "friendly" },
        ]}
      />

      <Select
        label="Output Language"
        onSelect={(val) => setLang(val as Lang)}
        options={[
          { label: "Auto", value: "auto" },
          { label: "English", value: "english" },
          { label: "Persian", value: "persian" },
        ]}
      ></Select>
    </div>
  );
}
