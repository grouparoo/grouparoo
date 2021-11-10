import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function ExportTabs({
  export: _export,
}: {
  export: Models.ExportType;
}) {
  const tabs = ["edit"];
  return <Tabs name={_export.id} tabs={tabs} />;
}
