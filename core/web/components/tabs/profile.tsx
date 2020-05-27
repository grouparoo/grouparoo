import Tabs from "../tabs";

export default function ({ name }: { name: string }) {
  const tabs = ["edit", "logs", "imports", "exports", "events"];
  return <Tabs name={name} tabs={tabs} />;
}
