import Button from "../../components/ui/button";
import { useTranslateContext } from "../../providers/TranslateProvider";

export default function Footer() {
  const { loading, ask } = useTranslateContext();

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
