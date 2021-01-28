import { Badge } from "react-bootstrap";

export default function ResqueFailedCountBadge({
  resqueFailedCount,
  navigationMode,
}: {
  resqueFailedCount: number;
  navigationMode: string;
}) {
  if (navigationMode === "unauthenticated") return null;
  if (resqueFailedCount === 0) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="danger">
        {resqueFailedCount}
      </Badge>
    </span>
  );
}
