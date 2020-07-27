import Tabs from "../tabs";
import { TeamMemberAPIData } from "../../utils/apiData";

export default function TeamMemberTabs({
  teamMember,
}: {
  teamMember: TeamMemberAPIData;
}) {
  const tabs = ["edit"];
  return <Tabs name={teamMember.email} tabs={tabs} />;
}
