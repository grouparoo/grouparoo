import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function GroupTabs({ group }: { group: Models.GroupType }) {
  const tabs = ["edit", "rules", "members", "destinations", "runs", "logs"];

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
