import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { StatusHandler } from "../../utils/statusHandler";

export default function ResqueFailedCountBadge({
  statusHandler,
  navigationMode,
}: {
  statusHandler: StatusHandler;
  navigationMode: string;
}) {
  const [resqueFailedCount, setResqueFailedCount] = useState(0);

  useEffect(() => {
    statusHandler.subscribe("resque-failed-badge", ({ metrics }) => {
      const _failedCount =
        metrics.find(
          (m) => m.collection === "cluster" && m.topic === "resqueErrors"
        )?.count ?? -1;
      setResqueFailedCount(_failedCount);
    });

    return () => {
      statusHandler.unsubscribe("resque-failed-badge");
    };
  }, []);

  if (navigationMode === "unauthenticated") return null;
  if (resqueFailedCount < 1) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="danger">
        {resqueFailedCount}
      </Badge>
    </span>
  );
}
