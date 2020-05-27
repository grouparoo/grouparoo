import Tabs from "../tabs";

export default function ({ name }: { name: string }) {
  const tabs = ["edit"];
  return <Tabs name={name} tabs={tabs} />;
}
