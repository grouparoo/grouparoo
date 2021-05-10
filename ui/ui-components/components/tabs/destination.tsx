import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function DestinationTabs({
  destination,
}: {
  destination: Models.DestinationType;
}) {
  let tabs = [];
  switch (process.env.GROUPAROO_UI_EDITION) {
    case "enterprise":
      tabs.push("edit", "data", "exports");
      break;
    case "config":
      tabs.push("edit", "data");
      break;

    default:
      tabs.push("exports");
      break;
  }

  return (
    <Tabs name={destination.name} draftType={destination.type} tabs={tabs} />
  );
}
