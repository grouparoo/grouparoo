import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Badge, Alert } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";

import { ExportAPIData } from "../../../utils/apiData";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [_export, setExport] = useState<ExportAPIData>();
  const [groups, setGroups] = useState([{ name: "", guid: "" }]);

  const { guid } = query;

  useEffect(() => {
    load();
    loadGroups();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/export/${guid}`);
    setLoading(false);
    if (response?.export) {
      setExport(response.export);
    }
  }

  async function loadGroups() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/groups`);
    setLoading(false);
    if (response?.groups) {
      setGroups(response.groups);
    }
  }

  function groupName(groupName) {
    const group = groups.filter((g) => g.name === groupName)[0];
    if (group) {
      return group.name;
    }
  }

  return (
    <>
      <h1>{guid}</h1>
      <p>
        Destination:{" "}
        <Link
          href="/destination/[guid]"
          as={`/destination/${_export.destination.guid}`}
        >
          <a>{_export.destination.name}</a>
        </Link>
      </p>
      <p>
        Profile:{" "}
        <Link href="/profile/[guid]" as={`/profile/${_export.profileGuid}`}>
          <a>{_export.profileGuid}</a>
        </Link>
      </p>
      {_export.errorMessage ? (
        <Alert variant="warning">
          <p>{_export.errorMessage}</p>
        </Alert>
      ) : null}
      <hr />
      <Row>
        <Col>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <Moment duration={_export.startedAt} date={_export.completedAt} />
            </strong>
          </p>
          <Table size="sm">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Time</th>
                <th>Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Started</td>
                <td>{_export.startedAt}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>{_export.completedAt}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_export.startedAt}
                    date={_export.completedAt}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2>Data</h2>

          <Row>
            <Col>
              <strong>Profile Properties</strong>
              <ul>
                {Object.keys(_export.oldProfileProperties).map((k) => {
                  return (
                    <li key={`old-${k}`}>
                      {k}:{" "}
                      {_export.oldProfileProperties[k] !==
                      _export.newProfileProperties[k] ? (
                        <>
                          <Badge variant="danger">
                            {_export.oldProfileProperties[k]?.toString()}
                          </Badge>
                          |
                          <Badge variant="success">
                            {_export.newProfileProperties[k]?.toString()}
                          </Badge>
                        </>
                      ) : (
                        <Badge variant="light">
                          {_export.oldProfileProperties[k]?.toString()}
                        </Badge>
                      )}
                    </li>
                  );
                })}

                {Object.keys(_export.newProfileProperties).map((k) =>
                  _export.oldProfileProperties[k] === undefined ? (
                    <li key={`old-${k}`}>
                      {k}:{" "}
                      <Badge variant="success">
                        {_export.newProfileProperties[k]?.toString()}
                      </Badge>
                    </li>
                  ) : null
                )}
              </ul>
            </Col>
            <Col>
              <strong>Groups</strong>
              <ul>
                {_export.oldGroups.map((groupGuid) => {
                  return (
                    <li key={`grp-${groupGuid}`}>
                      <Badge
                        variant={
                          !_export.newGroups.includes(groupGuid)
                            ? "danger"
                            : "light"
                        }
                      >
                        <Link href="/group/[guid]" as={`/group/${groupGuid}`}>
                          <a>{groupName(groupGuid)}</a>
                        </Link>
                      </Badge>
                    </li>
                  );
                })}

                {_export.newGroups.map((groupGuid) =>
                  !_export.oldGroups.includes(groupGuid) ? (
                    <li key={`grp-${groupGuid}`}>
                      <Badge variant="success">
                        <Link href="/group/[guid]" as={`/group/${groupGuid}`}>
                          <a>{groupName(groupGuid)}</a>
                        </Link>
                      </Badge>
                    </li>
                  ) : null
                )}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
