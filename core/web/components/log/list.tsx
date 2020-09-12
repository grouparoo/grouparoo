import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import { useRealtimeModelStream } from "../../hooks/useRealtimeModelStream";
import Link from "next/link";
import Router from "next/router";
import { ButtonGroup, Button, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";

import { LogAPIData } from "../../utils/apiData";

export default function LogsList(props) {
  const { errorHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<LogAPIData[]>(props.logs);
  const [total, setTotal] = useState(props.total);

  // websocket
  useRealtimeModelStream("log", "list-list", handleMessage);
  const [newLogs, setNewLogs] = useState<number>(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [topic, setTopic] = useState(query.topic || null);
  useHistoryPagination(offset, "offset", setOffset);

  let topics = [
    "app",
    "destination",
    "event",
    "file",
    "group",
    "groupMember",
    "profile",
    "profileProperty",
    "profilePropertyRule",
    "schedule",
    "setting",
    "team",
    "teamMember",
  ];

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, topic]);

  async function load() {
    updateURLParams();
    setLoading(true);
    setNewLogs(0);
    const response = await execApi("get", `/logs`, {
      limit,
      offset,
      topic,
      ownerGuid: query.guid,
    });
    setLoading(false);
    if (response?.logs) {
      setLogs(response.logs);
      setTotal(response.total);
    }
  }

  function formatTopicsAndLinks(log) {
    let ownerGuid = log.ownerGuid;
    let topic = log.topic;

    if (topic === "profileProperty") {
      topic = "profile";
      ownerGuid = log.data.profileGuid;
    }

    if (topic === "groupMember") {
      topic = "group";
      ownerGuid = log.data.groupGuid;
    }

    if (ownerGuid) {
      return [
        <Link
          href="/object/[guid]"
          as={`/object/${ownerGuid}`}
          prefetch={false}
        >
          <a>{`${topic}`}</a>
        </Link>,
      ];
    } else {
      return [topic];
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) url += `offset=${offset}&`;
    if (topic) url += `topic=${topic}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  function handleMessage({ model }) {
    if ((topic && model.topic === topic) || !topic) {
      if ((query.guid && model.ownerGuid === query.guid) || !query.guid) {
        setNewLogs((newLogs) => newLogs + 1);
      }
    }
  }

  return (
    <>
      <h1>Logs</h1>

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
              <tr key={`log-${log.guid}`}>
                <td>{formatCreatedAt(log.createdAt)}</td>
                <td>
                  <strong>{log.message}</strong>{" "}
                  {log.ownerGuid ? (
                    <>
                      <br />
                      <Link
                        href="/object/[guid]"
                        as={`/object/${log.ownerGuid}`}
                      >
                        <a className="text-muted">{log.ownerGuid}</a>
                      </Link>
                    </>
                  ) : null}
                </td>
                <td>
                  {formatTopicsAndLinks(log).map((link) => (
                    <p key={`log-${log.guid}-${link.href}`}>{link}</p>
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
  const { guid, limit, offset, topic, ownerGuid } = ctx.query;
  const { logs, total } = await execApi("get", `/logs`, {
    ownerGuid: guid,
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
