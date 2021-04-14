import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { StatusHandler } from "../../utils/statusHandler";

export default function RunningRunsBadge({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
  const [pendingRuns, setPendingRuns] = useState(0);

  useEffect(() => {
    statusHandler.subscribe("navigation-runs-badge", ({ metrics }) => {
      const _pendingRuns =
        metrics.find((m) => m.collection === "pending" && m.topic === "Run")
          ?.count ?? -1;
      setPendingRuns(_pendingRuns);
    });

    return () => {
      statusHandler.unsubscribe("navigation-runs-badge");
    };
  }, []);

  if (pendingRuns < 1) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="info">
        {pendingRuns}
      </Badge>
    </span>
  );
}
