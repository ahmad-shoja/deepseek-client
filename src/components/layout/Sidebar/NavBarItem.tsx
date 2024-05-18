import { PropsWithChildren } from "react";
import { theme } from "../../../theme";

type PropTypes = PropsWithChildren & {
  Icon: (props: { color?: string }) => JSX.Element;
  selected?: boolean;
  path: string;
  onClick: (path: string) => void;
};
export default function NavBarItem({
  children,
  Icon,
  selected,
  path,
  onClick,
}: PropTypes) {
  return (
    <div
      className={`${selected ? "bg-accent" : ""}  flex flex-row items-center gap-1 rounded-full px-3 py-2 hover:bg-[#f4f4f5] cursor-pointer`}
      onClick={() => onClick(path)}
    >
      {<Icon color={selected ? theme.colors.primary : undefined} />}
      <p className="text-sm">{children}</p>
    </div>
  );
}
