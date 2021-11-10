import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function PropertyTabs({
  property,
  source,
}: {
  property: Models.PropertyType;
  source: Models.SourceType;
}) {
  let tabs = ["edit"];

  if (grouparooUiEdition() === "enterprise") {
    tabs.push("records", "groups", "runs", "logs");
  }

  return (
    <>
      <Tabs name={property.key} draftType={source.name} tabs={tabs} />
    </>
  );
}
