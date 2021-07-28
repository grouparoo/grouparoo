import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function SourceTabs({ source }: { source: Models.SourceType }) {
  const tabs = ["overview", "edit"];

  if (source.previewAvailable) {
    tabs.push("mapping");
  }

  if (source.schedule) {
    tabs.push("schedule");
    if (process.env.GROUPAROO_UI_EDITION === "enterprise") tabs.push("runs");
  }

  if (process.env.GROUPAROO_UI_EDITION !== "community") {
    tabs.push("properties");
  }

  return <Tabs name={source.name} draftType={source.type} tabs={tabs} />;
}
