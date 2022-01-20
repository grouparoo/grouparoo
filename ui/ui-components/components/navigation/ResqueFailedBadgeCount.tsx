import { Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { statusHandler } from "../../eventHandlers";
import { Misc } from "../../utils/apiData";

export default function ResqueFailedCountBadge({
  navigationMode,
}: {
  navigationMode: string;
}) {
  const [resqueFailedCount, setResqueFailedCount] = useState(0);

  useEffect(() => {
    statusHandler.subscribe(
      "resque-failed-badge",
      ({ metric }: { metric: Misc.StatusMetricType }) => {
        setResqueFailedCount(metric.count);
      },
      { topic: "resqueErrors", collection: "cluster" }
    );

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
