import TranslateIcon from "../../ui/icons/TranslateIcon";
import WriteIcon from "../../ui/icons/WriteIcon";
import NavBarItem from "./NavBarItem";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-[500px] w-full p-5 ">
      <div className="flex size-full flex-col gap-2 ">
        <NavBarItem
          Icon={TranslateIcon}
          path="/translate"
          onClick={navigate}
          selected={pathname.startsWith("/translate")}
        >
          Translate
        </NavBarItem>
        <NavBarItem
          Icon={WriteIcon}
          path="/write"
          onClick={navigate}
          selected={pathname.startsWith("/write")}
        >
          Write
        </NavBarItem>
      </div>
    </div>
  );
}
