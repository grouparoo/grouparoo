import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function ExportTabs({
  export: _export,
}: {
  export: Models.ExportType;
}) {
  const tabs = ["edit"];
  return <Tabs name={_export.guid} tabs={tabs} />;
}
