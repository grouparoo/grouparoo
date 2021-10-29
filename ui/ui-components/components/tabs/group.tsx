import Tabs from "../tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function GroupTabs({ group }: { group: Models.GroupType }) {
  let tabs = ["edit", "rules"];

  if (grouparooUiEdition === "enterprise") {
    tabs.push("members", "destinations", "runs", "logs");
  }

  if (group.type === "manual") {
    tabs.splice(tabs.indexOf("rules"), 1);
  }

  return (
    <Tabs
      name={group.name}
      tabs={tabs}
      defaultTab={group.type === "calculated" ? "rules" : "edit"}
    />
  );
}
