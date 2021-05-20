import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function ExportProcessorTabs({
  exportProcessor,
}: {
  exportProcessor: Models.ExportProcessorType;
}) {
  const tabs = ["edit", "exports"];
  return <Tabs name={exportProcessor.id} tabs={tabs} defaultTab={"edit"} />;
}
