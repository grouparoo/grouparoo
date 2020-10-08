import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function ImportTabs({
  import: _import,
}: {
  import: Models.ImportType;
}) {
  const tabs = ["edit"];
  return <Tabs name={_import.guid} tabs={tabs} />;
}
