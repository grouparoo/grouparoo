import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { getRecordDisplayName } from "../record/GetRecordDisplayName";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function RecordTabs({
  record,
  model,
}: {
  record: Models.GrouparooRecordType;
  model: Models.GrouparooModelType;
}) {
  const tabs = ["edit", "imports", "exports", "logs"];

  if (grouparooUiEdition() === "config") {
    tabs.splice(tabs.indexOf("imports"), 1);
  }

  return (
    <Tabs
      name={getRecordDisplayName(record)}
      tabs={tabs}
      parentNames={[model.name]}
      hideScopeBreadcrumb
    />
  );
}
