import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import { ButtonGroup, Button } from "react-bootstrap";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";

import { LogAPIData } from "../../utils/apiData";

export default function LogsList(props) {
  const { errorHandler, query } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<LogAPIData[]>(props.logs);
  const [total, setTotal] = useState(props.total);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [topic, setTopic] = useState(query.topic || null);
  useHistoryPagination(offset, "offset", setOffset);

  let topics = [
    "group",
    "groupMember",
    "profile",
    "profileProperty",
    "profilePropertyRule",
    "setting",
    "team",
    "teamMember",
    "app",
    "schedule",
    "file",
  ];

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, topic]);

  async function load() {
    updateURLParams();
    setLoading(true);
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

      if (response.logs.length === 0 && offset > 0) {
        setOffset(0);
      }
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
        <Link href={`/${topic}/${ownerGuid}`} as={undefined} prefetch={false}>
          <a>{`${topic}`}</a>
        </Link>,
      ];
    } else {
      return [topic];
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    if (topic) {
      url += `topic=${topic}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  return (
    <>
      <h1>Logs</h1>

      <ButtonGroup id="log-types">
        <Button
          size="sm"
          variant={topic ? "info" : "success"}
          onClick={() => setTopic(null)}
        >
          All
        </Button>
        {topics.map((t) => {
          const variant = t === topic ? "success" : "info";
          return (
            <Button
              key={`topic-${t}`}
              size="sm"
              variant={variant}
              onClick={() => setTopic(t)}
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
                      <Link href={`/object/${log.ownerGuid}`}>
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
  const { execApi } = useApi(null, ctx);
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
