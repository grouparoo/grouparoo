import Tabs from "../tabs";
import { Alert } from "react-bootstrap";
import Link from "next/link";
import { ProfilePropertyRuleAPIData } from "../../utils/apiData";

export default function ({
  profilePropertyRule,
}: {
  profilePropertyRule: ProfilePropertyRuleAPIData;
}) {
  const tabs = ["edit", "profiles", "groups", "runs"];
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
