type PropsTypes = {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};
export default function Button({
  children,
  onClick,
  disabled,
  loading,
}: PropsTypes) {
  return (
    <div
      className={`cursor-pointer rounded-full p-3 transition duration-500 hover:bg-[#b3a0f4]
       ${disabled ? "bg-[#b3a0f4]" : "bg-primary"} ${loading ? "cursor-wait opacity-50" : ""}`}
      onClick={!loading ? onClick : undefined}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        </div>
      ) : (
        <p className="text-center text-lg text-white">{children}</p>
      )}
    </div>
  );
}
