import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function DestinationTabs({
  destination,
}: {
  destination: Models.DestinationType;
}) {
  const tabs =
    process.env.GROUPAROO_UI_EDITION === "enterprise"
      ? ["edit", "data", "exports"]
      : ["exports"];

  return (
    <Tabs name={destination.name} draftType={destination.type} tabs={tabs} />
  );
}
