import Tabs from "../tabs";
import { DestinationAPIData } from "../../utils/apiData";

export default function ({ destination }: { destination: DestinationAPIData }) {
  const tabs = ["edit", "data", "exports"];
  return <Tabs name={destination.name} tabs={tabs} />;
}
