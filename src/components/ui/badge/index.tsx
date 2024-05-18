type PropsTypes = {
  children: string;
  selected?: boolean;
  onSelect: () => void;
};
export default function Badge({ selected, children, onSelect }: PropsTypes) {
  return (
    <div
      className={`rounded-lg px-2 py-1 ${selected ? "bg-primaryLight" : "bg-[#f1f2f3]  hover:bg-[#dadee3]"} cursor-pointer`}
      onClick={onSelect}
    >
      <p className="text-sm">{children}</p>
    </div>
  );
}
