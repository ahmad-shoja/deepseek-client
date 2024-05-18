import Badge from "../badge";

type PropsTypes = {
  options: Array<{ value: string; label: string }>;
  label: string;
  onSelect: (value: string) => void;
  selected: string;
};
export default function BadgeSelect({
  label,
  selected,
  onSelect,
  options,
}: PropsTypes) {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm font-normal">{label}</p>
      <div className="flex flex-row gap-x-3">
        {options.map(({ value, label: optionLabel }, index) => (
          <Badge
            key={index}
            onSelect={() => onSelect(value)}
            selected={value === selected}
          >
            {optionLabel}
          </Badge>
        ))}
      </div>
    </div>
  );
}
