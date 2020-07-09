import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";
import { RunAPIData } from "../utils/apiData";
import { Badge } from "react-bootstrap";
import Link from "next/link";

const TIMEOUT = 10 * 1000;

export default function RunningRuns(props) {
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [runs, setRuns] = useState<RunAPIData[]>([]);
  let timer;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, []);

  function startTimer() {
    load();
    timer = setInterval(load, TIMEOUT);
  }

  async function load() {
    const response = await execApi("get", `/runs`, {
      state: "running",
    });

    if (response?.runs) {
      setRuns(response.runs);
    }
  }

  if (runs.length === 0) return null;

  return (
    <div>
      <Link href="/runs?state=running">
        <a>
          <Badge variant="info">
            {runs.length} active run{runs.length === 1 ? "" : "s"}
          </Badge>
        </a>
      </Link>
    </div>
  );
}
