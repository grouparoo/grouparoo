import Tabs from "../tabs";
import { SourceAPIData } from "../../utils/apiData";

export default function ({ source }: { source: SourceAPIData }) {
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
