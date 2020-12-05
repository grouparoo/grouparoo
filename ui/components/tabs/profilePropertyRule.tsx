import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function ProfilePropertyRuleTabs({
  profilePropertyRule,
  source,
}: {
  profilePropertyRule: Models.ProfilePropertyRuleType;
  source: Models.SourceType;
}) {
  const tabs = ["edit", "profiles", "groups", "runs", "logs"];

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
