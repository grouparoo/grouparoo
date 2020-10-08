import Tabs from "../tabs";
import { usePlugins } from "../../hooks/usePlugins";
import { Models } from "../../utils/apiData";

export default function ProfilePropertyRuleTabs({
  profilePropertyRule,
  source,
}: {
  profilePropertyRule: Models.ProfilePropertyRuleType;
  source: Models.SourceType;
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
        draftType={source.name}
        tabs={tabs}
      />
    </>
  );
}
