import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function GroupTabs({ group }: { group: Models.GroupType }) {
  let tabs = ["edit", "rules"];

  if (grouparooUiEdition() === "enterprise") {
    tabs.push("members", "destinations", "runs", "logs");
  }

  return <Tabs name={group.name} tabs={tabs} defaultTab="rules" />;
}
