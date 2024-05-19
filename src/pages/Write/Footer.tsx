import Button from "../../components/ui/button";
import { useWriteContext } from "../../providers/WriteProvider";

export default function Footer() {
  const { loading, ask } = useWriteContext();

  return (
    <div className="sticky bottom-0 flex w-1/2 flex-row-reverse bg-white pb-4">
      <div className="w-80">
        <Button
          loading={loading}
          onClick={() => {
            ask();
          }}
        >
          Regenerate
        </Button>
      </div>
    </div>
  );
}
