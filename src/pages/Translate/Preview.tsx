import { CopyBlock, github } from "react-code-blocks";
import { useWriteContext } from "../../providers/WriteProvider";

export default function Preview() {
  const { response } = useWriteContext();


  return (
    <div className="flex w-1/2 flex-col overflow-x-hidden px-6 gap-y-5">
      {response.map(({ content, type, lang }) =>
        type === "code" ? (
          <CopyBlock
            text={content}
            language={lang ?? ""}
            showLineNumbers={true}
            theme={github}
          />
        ) : (
          <p>{content}</p>
        ),
      )}
    </div>
  );
}
