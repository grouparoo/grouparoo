import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function EventTabs({ event }: { event: Models.EventType }) {
  const tabs = ["edit", "logs"];
  return <Tabs name={event.guid} tabs={tabs} />;
}
