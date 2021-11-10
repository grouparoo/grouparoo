import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function TeamTabs({ team }: { team: Models.TeamType }) {
  const tabs = ["edit", "members"];
  return <Tabs name={team.name} tabs={tabs} />;
}
