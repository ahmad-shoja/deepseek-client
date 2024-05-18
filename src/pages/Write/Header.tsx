import Tabs from "../../components/ui/Tabs";
import { useWriteContext } from "../../providers/WriteProvider";
import { Mode } from "../../types/Write";

const tabs = [
  { content: "Compose", id: "compose" },
  { content: "Reply", id: "reply" },
];

export default function Header() {
  const { mode, setMode } = useWriteContext();
  return (
    <div className="sticky top-0 z-10 flex flex-col gap-y-2 bg-white p-4">
      <p className="text-2xl font-semibold">Write</p>
      <Tabs
        tabs={tabs}
        selected={mode}
        onSelect={(id) => setMode(id as Mode)}
      />
    </div>
  );
}
