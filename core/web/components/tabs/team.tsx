import Tabs from "../tabs";

export default function ({ name }: { name: string }) {
  const tabs = ["edit", "members"];
  return <Tabs name={name} tabs={tabs} />;
}
