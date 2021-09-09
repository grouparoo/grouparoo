import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { updateURLParams, useOffset } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useRealtimeStream } from "../../hooks/useRealtimeStream";
import EnterpriseLink from "../enterpriseLink";
import { useRouter } from "next/router";
import { ButtonGroup, Button, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { Models, Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";

export default function LogsList(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<Models.LogType[]>(props.logs);
  const [total, setTotal] = useState(props.total);

  // websocket
  useRealtimeStream("model:log", "list-list", handleMessage);
  const [newLogs, setNewLogs] = useState<number>(0);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [topic, setTopic] = useState(router.query.topic?.toString() || null);

  let topics = [
    "app",
    "destination",
    "file",
    "group",
    "groupMember",
    "record",
    "recordProperty",
    "property",
    "schedule",
    "setting",
    "team",
    "teamMember",
  ];

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, topic]);

  async function load() {
    updateURLParams(router, { offset, topic });
    setLoading(true);
    setNewLogs(0);
    const response: Actions.LogsList = await execApi("get", `/logs`, {
      limit,
      offset,
      topic,
      ownerId: router.query.id,
    });
    setLoading(false);
    if (response?.logs) {
      setLogs(response.logs);
      setTotal(response.total);
    }
  }

  function formatTopicsAndLinks(log) {
    let ownerId = log.ownerId;
    let topic = log.topic;

    if (topic === "recordProperty") {
      topic = "record";
      ownerId = log.data.recordId;
    }

    if (topic === "groupMember") {
      topic = "group";
      ownerId = log.data.groupId;
    }

    if (ownerId) {
      return [
        <EnterpriseLink
          href="/object/[id]"
          as={`/object/${ownerId}`}
          prefetch={false}
        >
          <a>{`${topic}`}</a>
        </EnterpriseLink>,
      ];
    } else {
      return [topic];
    }
  }

  function handleMessage({ model }) {
    if ((topic && model.topic === topic) || !topic) {
      if (
        (router.query.id && model.ownerId === router.query.id) ||
        !router.query.id
      ) {
        setNewLogs((newLogs) => newLogs + 1);
      }
    }
  }

  return (
    <>
      {props.header ? props.header : <h1>Logs</h1>}

      <ButtonGroup id="log-types">
        <Button
          size="sm"
          variant={topic ? "info" : "secondary"}
          onClick={() => {
            setTopic(null);
            setOffset(0);
          }}
        >
          All
        </Button>
        {topics.map((t) => {
          const variant = t === topic ? "secondary" : "info";
          return (
            <Button
              key={`topic-${t}`}
              size="sm"
              variant={variant}
              onClick={() => {
                setTopic(t);
                setOffset(0);
              }}
            >
              {t}
            </Button>
          );
        })}
      </ButtonGroup>

      <br />
      <br />

      <p>
        {total} {topic ? topic : null} Logs
      </p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      {newLogs > 0 ? (
        <Alert variant="secondary">
          {newLogs} new logs.{" "}
          <Button size="sm" onClick={load}>
            Load
          </Button>
        </Alert>
      ) : null}

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>When</th>
            <th>Message</th>
            <th>Topic</th>
            <th>Verb</th>
            {/* <th>Who</th> */}
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => {
            return (
              <tr key={`log-${log.id}`}>
                <td>{formatCreatedAt(log.createdAt)}</td>
                <td>
                  <strong>{log.message}</strong>{" "}
                  {log.ownerId ? (
                    <>
                      <br />
                      <EnterpriseLink
                        href="/object/[id]"
                        as={`/object/${log.ownerId}`}
                      >
                        <a className="text-muted">{log.ownerId}</a>
                      </EnterpriseLink>
                    </>
                  ) : null}
                </td>
                <td>
                  {formatTopicsAndLinks(log).map((link) => (
                    <p key={`log-${log.id}-${link.href}`}>{link}</p>
                  ))}
                </td>
                <td>{log.verb}</td>
                {/* <td>{log.who}</td> */}
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
    </>
  );
}

LogsList.hydrate = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { id, limit, offset, topic } = ctx.query;
  const { logs, total } = await execApi("get", `/logs`, {
    ownerId: id,
    limit,
    offset,
    topic,
  });
  return { logs, total };
};

function formatCreatedAt(timestamp) {
  const [date, time] = new Date(timestamp).toLocaleString().split(",");
  return `${date} ${time}`;
}
