import Tabs from "../tabs";
import { Models } from "../../utils/apiData";
import { getRecordDisplayName } from "../record/getRecordDisplayName";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function RecordTabs({
  record,
}: {
  record: Models.GrouparooRecordType;
}) {
  const tabs = ["edit", "imports", "exports", "logs"];

  if (grouparooUiEdition === "config") {
    tabs.splice(tabs.indexOf("imports"), 1);
  }

  return <Tabs name={getRecordDisplayName(record)} tabs={tabs} />;
}
