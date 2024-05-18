import WriteProvider from "../../providers/WriteProvider";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Preview from "./Preview";

export default function Write() {
  return (
    <WriteProvider>
      <Header />
      <div className="flex flex-row gap-2 divide-x px-6 pb-16">
        <Content />
        <Preview />
      </div>
      <Footer />
    </WriteProvider>
  );
}
