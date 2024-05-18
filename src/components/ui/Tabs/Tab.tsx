type PropTypes = {
  children: string;
  id: string;
  selected?: boolean;
  onClick: (id: string) => void;
};
export default function Tab({ id, selected, onClick, children }: PropTypes) {
  return (
    <div
      className={`rounded-full p-1 ${selected ? "bg-black" : ""} cursor-pointer px-3`}
      onClick={() => onClick(id)}
    >
      <p className={`text-sm ${selected ? "text-white" : "text-black"}`}>
        {children}
      </p>
    </div>
  );
}
