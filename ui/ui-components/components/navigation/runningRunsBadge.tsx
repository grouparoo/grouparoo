import { Badge } from "react-bootstrap";
import { useRealtimeModelStream } from "../../hooks/useRealtimeModelStream";
import { useState, useEffect } from "react";
import { Models } from "../../utils/apiData";

export default function RunningRunsBadge({ execApi }) {
  useRealtimeModelStream("run", "navigation-runs-badge", load);
  const [runs, setRuns] = useState<Models.RunType[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { runs } = await execApi(
      "get",
      `/runs`,
      { state: "running" },
      null,
      null,
      false
    );
    setRuns(runs);
  }

  if (runs.length === 0) return null;

  return (
    <span style={{ paddingLeft: 5 }}>
      <Badge pill variant="info">
        {runs.length}
      </Badge>
    </span>
  );
}
