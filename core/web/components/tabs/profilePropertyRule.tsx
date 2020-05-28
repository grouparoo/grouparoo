import Tabs from "../tabs";
import { Alert } from "react-bootstrap";
import Link from "next/link";
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
      <Alert variant="info">
        <Link
          href="/source/[guid]/overview"
          as={`/source/${profilePropertyRule.source.guid}/overview`}
        >
          <a>↞ Back to Source {profilePropertyRule.source.name}</a>
        </Link>
      </Alert>

      <Tabs name={profilePropertyRule.key} tabs={tabs} />
    </>
  );
}
