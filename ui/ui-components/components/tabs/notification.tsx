import Tabs from "../tabs";
import { Models } from "../../utils/apiData";

export default function NotificationTabs({
  notification,
}: {
  notification: Models.NotificationType;
}) {
  const tabs = ["edit"];
  return <Tabs name={notification.subject} tabs={tabs} />;
}
