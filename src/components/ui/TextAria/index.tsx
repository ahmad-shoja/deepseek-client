type PropTypes = {
  onChange: (value: string) => void;
  value: string;
  label: string;
  placeHolder: string;
  rows?: number;
  cols?: number;
};
export default function TextAria({
  value,
  onChange,
  label,
  placeHolder,
  rows,
  cols,
}: PropTypes) {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm font-normal">{label}</p>
      <textarea
        rows={rows}
        cols={cols}
        aria-label={label}
        className="box-border h-full w-full resize-none overflow-auto rounded-xl bg-[#f1f2f3] px-3 py-2 align-top outline-none"
        placeholder={placeHolder}
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
      ></textarea>
    </div>
  );
}
