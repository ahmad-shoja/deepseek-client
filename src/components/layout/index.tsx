import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

type PropTypes = PropsWithChildren;

export default function Layout({ children }: PropTypes) {
  return (
    <div className="flex size-full flex-row">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}
