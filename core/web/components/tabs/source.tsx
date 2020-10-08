import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function SourceTabs({ source }: { source: Models.SourceType }) {
  const tabs = ["overview", "edit"];

  if (source.app.type !== "events") {
    tabs.push("mapping");
  }

  if (source.schedule) {
    tabs.push("schedule");
    tabs.push("runs");
  }

  return <Tabs name={source.name} draftType={source.type} tabs={tabs} />;
}
