import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function DestinationTabs({
  destination,
}: {
  destination: Models.DestinationType;
}) {
  const tabs = ["edit", "data", "exports"];
  return (
    <Tabs name={destination.name} draftType={destination.type} tabs={tabs} />
  );
}
