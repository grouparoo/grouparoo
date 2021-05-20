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
    <Tabs name={destination.name} draftType={destination.type} tabs={tabs} />
  );
}
