import Tabs from "../tabs";
import { DestinationAPIData } from "../../utils/apiData";

export default function DestinationTabs({
  destination,
}: {
  destination: DestinationAPIData;
}) {
  const tabs = ["edit", "data", "exports"];
  return (
    <Tabs name={destination.name} draftType={destination.type} tabs={tabs} />
  );
}
