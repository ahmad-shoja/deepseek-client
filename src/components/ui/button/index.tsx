type PropsTypes = {
  children: string;
  onClick: () => void;
  disabled?: boolean;
};
export default function Button({ children, onClick, disabled }: PropsTypes) {
  return (
    <div
      className={`cursor-pointer rounded-full p-3 transition duration-500 hover:bg-[#b3a0f4] ${disabled ? "bg-[#b3a0f4]" : "bg-primary"}`}
      onClick={onClick}
    >
      <p className="text-center text-lg text-white">{children}</p>
    </div>
  );
}
