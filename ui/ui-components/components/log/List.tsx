import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { ButtonGroup, Button, Alert } from "react-bootstrap";
import { updateURLParams, useOffset } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useRealtimeStream } from "../../hooks/useRealtimeStream";
import EnterpriseLink from "../GrouparooLink";
import Pagination from "../Pagination";
import LoadingTable from "../LoadingTable";
import { Models, Actions } from "../../utils/apiData";
import LoadingButton from "../LoadingButton";
import { getRequestContext, useApi } from "../../contexts/api";
import { Client } from "../../client/client";

const getOwnerId = (query: { [key: string]: string | string[] }) => {
  const { id, recordId, propertyId, sourceId, destinationId, groupId } = query;
  return id ?? recordId ?? propertyId ?? sourceId ?? destinationId ?? groupId;
};

export default function LogsList(props) {
  const router = useRouter();
  const { client } = useApi();
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
    const response: Actions.LogsList = await client.request("get", `/logs`, {
      limit,
      offset,
      topic,
      ownerId: getOwnerId(router.query),
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

    if (topic === "grouparooRecord") {
      topic = "record";
    }

    if (topic === "groupMember") {
      topic = "group";
      ownerId = log.data.groupId;
    }

    if (ownerId) {
      return [
        <EnterpriseLink href={`/object/${ownerId}`} prefetch={false}>
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

      <strong>Topics:</strong>
      <br />
      <ButtonGroup id="log-types">
        <Button
          size="sm"
          disabled={loading}
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
              disabled={loading}
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
          <LoadingButton size="sm" onClick={load} loading={loading}>
            Load
          </LoadingButton>
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
                      <EnterpriseLink href={`/object/${log.ownerId}`}>
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

LogsList.hydrate = async (ctx: NextPageContext) => {
  const client = new Client(getRequestContext(ctx));
  const { limit, offset, topic } = ctx.query;
  const { logs, total } = await client.request("get", `/logs`, {
    ownerId: getOwnerId(ctx.query),
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
