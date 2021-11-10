import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function RunTabs({ run }: { run: Models.RunType }) {
  const tabs = ["edit"];
  return <Tabs name={run.id} tabs={tabs} />;
}
