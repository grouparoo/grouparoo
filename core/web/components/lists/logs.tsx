import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import Router from "next/router";
import { ButtonGroup, Button } from "react-bootstrap";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";

export default function ({ apiVersion, errorHandler, query, ownerType }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [total, setTotal] = useState(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const ownerGuid = query.guid;
  const [topic, setTopic] = useState(query.topic || null);

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
  if (ownerType === "profile") {
    topics = ["groupMember", "profile", "profileProperty"];
  }
  if (ownerType === "group") {
    topics = ["group", "groupMember", "profile"];
  }

  useEffect(() => {
    load();
  }, [offset, limit, topic, ownerGuid]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/logs`, {
      limit,
      offset,
      topic,
      ownerGuid,
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
    if (
      window.location.pathname.indexOf("/profile/") >= 0 ||
      window.location.pathname.indexOf("/group/") >= 0
    ) {
      url += "tab=logs&";
    }
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    if (topic) {
      url += `topic=${topic}&`;
    }

    Router.push(Router.route, url, { shallow: true });
  }

  return (
    <>
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
                  {log.ownerGuid ? (
                    <>
                      {log.ownerGuid}
                      <br />
                    </>
                  ) : null}
                  <strong>{log.message}</strong>
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

function formatCreatedAt(timeString) {
  // 2019-12-07T00:03:23.417Z
  const date = timeString.split("T")[0];
  const time = timeString.split("T")[1].split(".")[0];
  return `${date} ${time}`;
}
