import Tabs from "../tabs";
import { ExportAPIData } from "../../utils/apiData";

export default function ({ export: _export }: { export: ExportAPIData }) {
  const tabs = ["edit"];
  return <Tabs name={_export.guid} tabs={tabs} />;
}
