import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function PropertyTabs({
  property,
  source,
}: {
  property: Models.PropertyType;
  source: Models.SourceType;
}) {
  const tabs = ["edit", "profiles", "groups", "runs", "logs"];

  return (
    <>
      <Tabs name={property.key} draftType={source.name} tabs={tabs} />
    </>
  );
}
