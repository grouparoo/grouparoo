import Tabs from "../tabs";
import { ImportAPIData } from "../../utils/apiData";

export default function ImportTabs({
  import: _import,
}: {
  import: ImportAPIData;
}) {
  const tabs = ["edit"];
  return <Tabs name={_import.guid} tabs={tabs} />;
}
