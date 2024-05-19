import { CopyBlock, github } from "react-code-blocks";
import { useWriteContext } from "../../providers/WriteProvider";
import { mapCodeResponse } from "../../adapters/writeAdapter/map";

export default function Preview() {
  const { response } = useWriteContext();

  return (
    <div className="flex w-1/2 flex-col gap-y-5 overflow-x-hidden px-6">
      {mapCodeResponse(response).map(({ content, type, lang }) =>
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
