import Tabs from "../tabs";
import { TeamAPIData } from "../../utils/apiData";

export default function ({ team }: { team: TeamAPIData }) {
  const tabs = ["edit", "members"];
  return <Tabs name={team.name} tabs={tabs} />;
}
