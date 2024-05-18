import Tab from "./Tab";

type PropTypes = {
  tabs: Array<{ content: string; id: string }>;
  selected: string;
  onSelect: (id: string) => void;
};
export default function Tabs({ tabs, onSelect, selected }: PropTypes) {
  return (
    <div className="flex w-fit flex-row rounded-full bg-[#f1f2f3] px-1 py-1">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          selected={tab.id === selected}
          onClick={onSelect}
        >
          {tab.content}
        </Tab>
      ))}
    </div>
  );
}
