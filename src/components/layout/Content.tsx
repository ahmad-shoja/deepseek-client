import { PropsWithChildren } from "react";

type PropTypes = PropsWithChildren;

export default function Content({ children }: PropTypes) {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-hidden bg-white">
      {children}
    </div>
  );
}
