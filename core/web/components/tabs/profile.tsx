import Tabs from "../tabs";
import { ProfileAPIData } from "../../utils/apiData";
import getProfileDisplayName from "../profile/getProfileDisplayName";

export default function ProfileTabs({ profile }: { profile: ProfileAPIData }) {
  const tabs = ["edit", "imports", "events", "exports", "logs"];
  return <Tabs name={getProfileDisplayName(profile)} tabs={tabs} />;
}
