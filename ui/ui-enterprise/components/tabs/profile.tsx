import Tabs from "../tabs";
import { Models } from "../../utils/apiData";
import getProfileDisplayName from "../profile/getProfileDisplayName";

export default function ProfileTabs({
  profile,
}: {
  profile: Models.ProfileType;
}) {
  const tabs = ["edit", "imports", "events", "exports", "logs"];
  return <Tabs name={getProfileDisplayName(profile)} tabs={tabs} />;
}
