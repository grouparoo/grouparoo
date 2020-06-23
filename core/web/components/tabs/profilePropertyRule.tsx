import Tabs from "../tabs";
import { usePlugins } from "../../hooks/usePlugins";
import { ProfilePropertyRuleAPIData } from "../../utils/apiData";

export default function ({
  profilePropertyRule,
}: {
  profilePropertyRule: ProfilePropertyRuleAPIData;
}) {
  const [plugins, pluginMetadata] = usePlugins("profilePropertyRules/tabs");
  const tabs = ["edit", "profiles", "groups", "runs", "logs"];
  pluginMetadata.forEach((p) => {
    tabs.push(p.key);
  });

  return (
    <>
      <Tabs
        name={profilePropertyRule.key}
        draftType={profilePropertyRule.source.name}
        tabs={tabs}
      />
    </>
  );
}
