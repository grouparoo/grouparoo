import Tabs from "../tabs";

export default function AppTabs({ name }: { name: string }) {
  const tabs = ["edit", "data", "exports"];
  return <Tabs name={name} tabs={tabs} />;
}
