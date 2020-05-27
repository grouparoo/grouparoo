import Tabs from "../tabs";
import { GroupAPIData } from "../../utils/apiData";

export default function ({ group }: { group: GroupAPIData }) {
  const tabs = ["edit", "rules", "members", "destinations", "runs", "logs"];
  return <Tabs name={group.name} tabs={tabs} />;
}
