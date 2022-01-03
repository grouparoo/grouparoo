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
      ({ metric }: { metric: Misc.StatusMetricType }) => {
        setPendingRuns(metric.count);
      },
      { topic: "Run", collection: "pending" }
    );

    return () => {
      statusHandler.unsubscribe("navigation-runs-badge");
    };
  }, [statusHandler]);

  if (pendingRuns < 1) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill bg="info">
        {pendingRuns}
      </Badge>
    </span>
  );
}
