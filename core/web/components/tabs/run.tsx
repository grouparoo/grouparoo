import Tabs from "../tabs";
import { RunAPIData } from "../../utils/apiData";

export default function RunTabs({ run }: { run: RunAPIData }) {
  const tabs = ["edit"];
  return <Tabs name={run.guid} tabs={tabs} />;
}
