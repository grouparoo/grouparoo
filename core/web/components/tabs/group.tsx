import Tabs from "../tabs";

export default function AppTabs({ name }: { name: string }) {
  const tabs = ["edit", "rules", "members", "destinations", "runs", "logs"];
  return <Tabs name={name} tabs={tabs} />;
}
