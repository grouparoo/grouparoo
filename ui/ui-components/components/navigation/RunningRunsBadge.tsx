import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Misc } from "../../utils/apiData";
import { statusHandler } from "../../eventHandlers";

export default function RunningRunsBadge() {
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
