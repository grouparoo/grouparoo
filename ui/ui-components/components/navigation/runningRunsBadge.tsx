import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { StatusHandler } from "../../utils/statusHandler";
import { Misc } from "../../utils/apiData";

export default function RunningRunsBadge({
  statusHandler,
}: {
  statusHandler: StatusHandler;
}) {
  const [pendingRuns, setPendingRuns] = useState(0);

  useEffect(() => {
    statusHandler.subscribe(
      "navigation-runs-badge",
      ({ metrics }: { metrics: Misc.StatusMetricType[] }) => {
        setPendingRuns(metrics[0].count);
      },
      { topic: "Run", collection: "pending" }
    );

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
