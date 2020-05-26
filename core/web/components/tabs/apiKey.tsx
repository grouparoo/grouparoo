import Tabs from "../tabs";

export default function AppTabs({ name }: { name: string }) {
  const tabs = ["edit"];
  return <Tabs name={name} tabs={tabs} />;
}
