import Tabs from "../tabs";
import { EventAPIData } from "../../utils/apiData";

export default function ({ event }: { event: EventAPIData }) {
  const tabs = ["edit", "logs"];
  return <Tabs name={event.guid} tabs={tabs} />;
}
