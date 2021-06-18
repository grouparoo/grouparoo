import Tabs from "../tabs";
import { Models } from "../../utils/apiData";
import { getProfileDisplayName } from "../profile/getProfileDisplayName";

export default function ProfileTabs({
  profile,
}: {
  profile: Models.ProfileType;
}) {
  const tabs = ["edit", "imports", "exports", "logs"];

  if (process.env.GROUPAROO_UI_EDITION === "config") {
    tabs.splice(tabs.indexOf("imports"), 2);
  }

  return <Tabs name={getProfileDisplayName(profile)} tabs={tabs} />;
}
