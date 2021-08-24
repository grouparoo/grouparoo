import Tabs from "../tabs";
import { Models } from "../../utils/apiData";
import { getRecordDisplayName } from "../record/getRecordDisplayName";

export default function RecordTabs({
  record,
}: {
  record: Models.GrouparooRecordType;
}) {
  const tabs = ["edit", "imports", "exports", "logs"];

  if (process.env.GROUPAROO_UI_EDITION === "config") {
    tabs.splice(tabs.indexOf("imports"), 1);
  }

  return <Tabs name={getRecordDisplayName(record)} tabs={tabs} />;
}
