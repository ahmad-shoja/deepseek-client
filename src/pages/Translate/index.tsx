import TranslateProvider from "../../providers/TranslateProvider";
import Content from "./Content";
import Header from "./Header";
export default function Translate() {
  return (
    <TranslateProvider>
      <Header />
      <Content />
    </TranslateProvider>
  );
}
