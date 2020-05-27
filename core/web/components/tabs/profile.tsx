import Tabs from "../tabs";
import { ProfileAPIData } from "../../utils/apiData";
import getProfileDisplayName from "../profile/getProfileDisplayName";

export default function ({ profile }: { profile: ProfileAPIData }) {
  const tabs = ["edit", "logs", "imports", "exports", "events"];
  return <Tabs name={getProfileDisplayName(profile)} tabs={tabs} />;
}
