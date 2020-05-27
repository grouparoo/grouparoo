import Tabs from "../tabs";

export default function ({ name }: { name: string }) {
  const tabs = ["edit", "profiles", "groups", "runs"];
  return <Tabs name={name} tabs={tabs} />;
}
