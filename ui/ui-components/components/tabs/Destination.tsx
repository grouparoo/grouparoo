import Tabs from "../Tabs";
import { Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function DestinationTabs({
  destination,
  model,
}: {
  destination: Models.DestinationType;
  model: Models.GrouparooModelType;
}) {
  let tabs = [];
  switch (grouparooUiEdition()) {
    case "enterprise":
      tabs.push("edit");
      if (destination.state !== "draft") tabs.push("data");
      tabs.push("exports");
      break;
    case "config":
      tabs.push("edit");
      if (destination.state !== "draft") tabs.push("data");
      break;
    default:
      tabs.push("exports");
      break;
  }

  return (
    <Tabs
      name={destination.name}
      draftType={destination.type}
      tabs={tabs}
      parentNames={[model.name]}
      hideScopeBreadcrumb
    />
  );
}
