import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";

export default function ImportTabs({
  import: _import,
}: {
  import: Models.ImportType;
}) {
  const tabs = ["edit"];
  return <Tabs name={_import.id} tabs={tabs} />;
}
