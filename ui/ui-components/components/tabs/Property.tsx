import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";
import { useGrouparooModel } from "../../contexts/grouparooModel";

interface Props {
  property: Models.PropertyType;
  source: Models.SourceType;
}

const PropertyTabs: React.FC<Props> = ({ property, source }) => {
  const { model } = useGrouparooModel();

  let tabs = ["edit"];

  if (grouparooUiEdition() === "enterprise") {
    tabs.push("records", "groups", "runs", "logs");
  }

  return (
    <Tabs
      name={property.key}
      tabs={tabs}
      parentNames={[model.name, source.name]}
      hideScopeBreadcrumb
    />
  );
};

export default PropertyTabs;
