import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Badge, Alert } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";

import { ImportAPIData } from "../../../utils/apiData";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [_import, setImport] = useState<ImportAPIData>({
    oldProfileProperties: {},
    newProfileProperties: {},
    oldGroupGuids: [],
    newGroupGuids: [],
  });
  const [groups, setGroups] = useState([{ name: "", guid: "" }]);

  const { guid } = query;

  useEffect(() => {
    load();
    loadGroups();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/import/${guid}`);
    setLoading(false);
    if (response?.import) {
      setImport(response.import);
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

  function groupName(groupGuid) {
    const group = groups.filter((g) => g.guid === groupGuid)[0];
    if (group) {
      return group.name;
    }
  }

  const errorMetadata = _import.errorMetadata
    ? JSON.parse(_import.errorMetadata)
    : {};

  return (
    <>
      <h1>{guid}</h1>
      <p>
        Creator:{" "}
        <Link
          href=""
          as={`/${
            _import.creatorType === "run" ? "imports" : _import.creatorType
          }/${_import.creatorGuid}`}
          prefetch={false}
        >
          <a>
            {_import.creatorType === "group"
              ? `"${groupName(_import.creatorGuid)}"`
              : null}{" "}
            {_import.creatorGuid}
          </a>
        </Link>
      </p>
      <p>
        Profile:{" "}
        <Link href="/profile/[guid]" as={`/profile/${_import.profileGuid}`}>
          <a>{_import.profileGuid}</a>
        </Link>
      </p>
      {_import.errorMessage ? (
        <Alert variant="warning">
          <p>{_import.errorMessage}</p>
          <p>Step: {errorMetadata.step}</p>
          stack:
          <ul>
            {errorMetadata.stack.split("\n").map((line, idx) => (
              <li key={`err-${idx}`}>{line}</li>
            ))}
          </ul>
        </Alert>
      ) : null}
      <hr />
      <Row>
        <Col>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <Moment duration={_import.createdAt} date={_import.exportedAt} />
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
                <td>Created</td>
                <td>{_import.createdAt}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Associated</td>
                <td>{_import.profileAssociatedAt}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.profileAssociatedAt}
                    date={_import.createdAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Profile Updated</td>
                <td>{_import.profileUpdatedAt}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.profileAssociatedAt}
                    date={_import.profileUpdatedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Groups Updated</td>
                <td>{_import.groupsUpdatedAt}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.groupsUpdatedAt}
                    date={_import.profileUpdatedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Exported</td>
                <td>{_import.exportedAt}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.groupsUpdatedAt}
                    date={_import.exportedAt}
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
                {Object.keys(_import.oldProfileProperties).map((k) => {
                  return (
                    <li key={`old-${k}`}>
                      {k}:{" "}
                      {_import.oldProfileProperties[k] !==
                      _import.newProfileProperties[k] ? (
                        <>
                          <Badge variant="danger">
                            {_import.oldProfileProperties[k]?.toString()}
                          </Badge>
                          |
                          <Badge variant="success">
                            {_import.newProfileProperties[k]?.toString()}
                          </Badge>
                        </>
                      ) : (
                        <Badge variant="light">
                          {_import.oldProfileProperties[k]?.toString()}
                        </Badge>
                      )}
                    </li>
                  );
                })}

                {Object.keys(_import.newProfileProperties).map((k) =>
                  _import.oldProfileProperties[k] === undefined ? (
                    <li key={`old-${k}`}>
                      {k}:{" "}
                      <Badge variant="success">
                        {_import.newProfileProperties[k]?.toString()}
                      </Badge>
                    </li>
                  ) : null
                )}
              </ul>
            </Col>
            <Col>
              <strong>Groups</strong>
              <ul>
                {_import.oldGroupGuids.map((groupGuid) => {
                  return (
                    <li key={`grp-${groupGuid}`}>
                      <Badge
                        variant={
                          !_import.newGroupGuids.includes(groupGuid)
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

                {_import.newGroupGuids.map((groupGuid) =>
                  !_import.oldGroupGuids.includes(groupGuid) ? (
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

          <Row>
            <Col>
              <strong>Data</strong>
              <pre>
                <code>{JSON.stringify(_import.data, null, 4)}</code>
              </pre>
            </Col>
            <Col>
              <strong>Raw Data</strong>
              <pre>
                <code>{JSON.stringify(_import.rawData, null, 4)}</code>
              </pre>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
