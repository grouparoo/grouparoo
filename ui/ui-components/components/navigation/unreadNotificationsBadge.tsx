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
      ({ metrics }: { metrics: Misc.StatusMetricType[] }) => {
        setUnreadCount(metrics[0].count);
      },
      { topic: "unreadNotifications", collection: "cluster" }
    );

    return () => {
      statusHandler.unsubscribe("unread-notifications-badge");
    };
  }, []);

  if (navigationMode === "unauthenticated") return null;
  if (unreadCount < 1) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="warning">
        {unreadCount}
      </Badge>
    </span>
  );
}
