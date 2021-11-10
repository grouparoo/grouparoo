import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function TeamMemberTabs({
  teamMember,
}: {
  teamMember: Models.TeamMemberType;
}) {
  const tabs = ["edit"];
  return <Tabs name={teamMember.email} tabs={tabs} />;
}
