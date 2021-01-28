import { Badge } from "react-bootstrap";

export default function ResqueFailedCountBadge({
  unreadNotificationsCount,
  navigationMode,
}: {
  unreadNotificationsCount: number;
  navigationMode: string;
}) {
  if (navigationMode === "unauthenticated") return null;
  if (unreadNotificationsCount === 0) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="warning">
        {unreadNotificationsCount}
      </Badge>
    </span>
  );
}
