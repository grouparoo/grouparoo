import Tabs from "../tabs";

export default function ({ name }: { name: string }) {
  const tabs = ["edit", "data", "exports"];
  return <Tabs name={name} tabs={tabs} />;
}
