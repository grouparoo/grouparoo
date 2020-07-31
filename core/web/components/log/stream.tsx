import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useRealtimeModelStream } from "../../hooks/useRealtimeModelStream";

import { LogAPIData } from "../../utils/apiData";
const limit = 1000;

export default function LogsList(props) {
  const [logs, setLogs] = useState<LogAPIData[]>(props.logs);
  const [latestTimestamp, setLatestTimestamp] = useState(0);

  // websocket
  useRealtimeModelStream("log", "log-stream", handleMessage);

  useEffect(() => {
    const listElement = document.getElementById("logs-stream");
    listElement.scrollTop = listElement.scrollHeight;
  }, [latestTimestamp]);

  function handleMessage({ model }) {
    setLogs((logs) => {
      logs.push(model);
      while (logs.length > limit) logs.shift();
      return logs;
    });

    setLatestTimestamp(new Date().getTime());
  }

  return (
    <>
      <h1>Logs Stream</h1>

      <div
        id="logs-stream"
        style={{
          backgroundColor: "black",
          color: "white",
          height: 800,
          overflow: "auto",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 10,
          }}
        >
          {logs.map((log, idx) => (
            <li key={`log-${log.guid}`}>
              <span>[ {formatCreatedAt(log.createdAt)} ]</span>{" "}
              <strong>
                <a href={`/object/${log.ownerGuid}`}>
                  {log.topic}/{log.verb}
                </a>
              </strong>{" "}
              <span className="text-light">{log.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

LogsList.hydrate = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { logs } = await execApi("get", `/logs`, { limit });
  return { logs: logs.reverse() };
};

function formatCreatedAt(timestamp) {
  const [date, time] = new Date(timestamp).toLocaleString().split(",");
  return `${date} ${time}`;
}
