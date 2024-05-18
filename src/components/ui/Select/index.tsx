type PropsTypes = {
  onSelect: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  label: string;
};

export default function select({ onSelect, options, label }: PropsTypes) {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="text-sm font-normal">{label}</p>
      <div className="w-fit rounded-full bg-[#f1f2f3] px-9 py-1 hover:bg-[#eaebec]">
        <select
          onChange={(e) => onSelect(e.currentTarget.value)}
          name="selectedFruit"
          aria-label="Select a fruit"
          className="w-fit border-none bg-transparent px-4 outline-none"
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
