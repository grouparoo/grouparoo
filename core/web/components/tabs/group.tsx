import Tabs from "../tabs";
import { usePlugins } from "../../hooks/usePlugins";
import { GroupAPIData } from "../../utils/apiData";

export default function GroupTabs({ group }: { group: GroupAPIData }) {
  const [plugins, pluginMetadata] = usePlugins("group/tabs");
  const tabs = ["edit", "rules", "members", "destinations", "runs", "logs"];

  if (group.type === "manual") {
    tabs.splice(tabs.indexOf("rules"), 1);
  }

  pluginMetadata.forEach((p) => {
    tabs.push(p.key);
  });

  return <Tabs name={group.name} tabs={tabs} />;
}
