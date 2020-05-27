import Tabs from "../tabs";

export default function ({ name }: { name: string }) {
  const tabs = ["overview", "edit", "mapping", "schedule", "runs"];
  return <Tabs name={name} tabs={tabs} />;
}
