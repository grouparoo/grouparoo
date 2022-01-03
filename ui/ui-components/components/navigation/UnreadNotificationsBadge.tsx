import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { StatusHandler } from "../../utils/statusHandler";
import { Misc } from "../../utils/apiData";

export default function UnreadNotificationCountBadge({
  statusHandler,
  navigationMode,
}: {
  statusHandler: StatusHandler;
  navigationMode: string;
}) {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    statusHandler.subscribe(
      "unread-notifications-badge",
      ({ metric }: { metric: Misc.StatusMetricType }) => {
        setUnreadCount(metric.count);
      },
      { topic: "unreadNotifications", collection: "cluster" }
    );

    return () => {
      statusHandler.unsubscribe("unread-notifications-badge");
    };
  }, [statusHandler]);

  if (navigationMode === "unauthenticated") return null;
  if (unreadCount < 1) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill bg="warning">
        {unreadCount}
      </Badge>
    </span>
  );
}
