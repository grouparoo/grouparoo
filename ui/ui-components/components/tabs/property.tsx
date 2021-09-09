import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function PropertyTabs({
  property,
  source,
}: {
  property: Models.PropertyType;
  source: Models.SourceType;
}) {
  let tabs = ["edit"];

  if (process.env.GROUPAROO_UI_EDITION === "enterprise") {
    tabs.push("records", "groups", "runs", "logs");
  }

  return (
    <>
      <Tabs name={property.key} draftType={source.name} tabs={tabs} />
    </>
  );
}
