import Button from "../../components/ui/button";

export default function Footer() {
  return (
    <div className="sticky bottom-0 flex w-1/2 flex-row-reverse bg-white pb-4">
      <div className="w-80">
        <Button onClick={() => {}}>Regenerate</Button>
      </div>
    </div>
  );
}
