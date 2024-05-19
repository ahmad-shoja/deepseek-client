type PropTypes = {
  onChange: (value: string) => void;
  value: string;
  label?: string;
  placeHolder: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  loading?: boolean;
};
export default function TextAria({
  value,
  onChange,
  label,
  placeHolder,
  rows,
  cols,
  disabled,
  loading,
}: PropTypes) {
  return (
    <div className="flex flex-col gap-y-2">
      {label && <p className="text-sm font-normal">{label}</p>}
      <div className="relative">
        <textarea
          disabled={disabled || loading}
          rows={rows}
          cols={cols}
          aria-label={label}
          className={`box-border h-full w-full resize-none overflow-auto rounded-xl bg-[#f1f2f3] px-3 py-2 align-top outline-none ${
            loading ? "opacity-50" : ""
          }`}
          placeholder={placeHolder}
          onChange={(e) => onChange(e.currentTarget.value)}
          value={value}
        ></textarea>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-500 border-t-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
}
