import Tabs from "../tabs";
import { usePlugins } from "../../hooks/usePlugins";
import { GroupAPIData } from "../../utils/apiData";

export default function ({ group }: { group: GroupAPIData }) {
  const [plugins, pluginMetadata] = usePlugins("group/tabs");
  const tabs = ["edit", "rules", "members", "destinations", "runs", "logs"];
  pluginMetadata.forEach((p) => {
    tabs.push(p.key);
  });

  return <Tabs name={group.name} tabs={tabs} />;
}
