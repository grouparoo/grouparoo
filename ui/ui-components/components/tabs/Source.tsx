import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function SourceTabs({ source }: { source: Models.SourceType }) {
  const tabs = ["overview", "edit"];

  if (source.schedule) {
    tabs.push("schedule");
    if (grouparooUiEdition() === "enterprise") tabs.push("runs");
  }

  return <Tabs name={source.name} draftType={source.type} tabs={tabs} />;
}
