import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Badge, Alert } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Moment from "react-moment";
import ExportTabs from "../../../components/tabs/export";
import { Models } from "../../../utils/apiData";

export default function Page({
  _export,
  groups,
}: {
  _export: Models.ExportType;
  groups: Models.GroupType[];
}) {
  function getGroupGuid(groupName) {
    const group = groups.filter((g) => g.name === groupName)[0];
    if (group) {
      return group.guid;
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {_export.guid}</title>
      </Head>

      <ExportTabs export={_export} />

      <h1>{_export.guid}</h1>

      <p>
        Destination:{" "}
        <Link
          href="/destination/[guid]/edit"
          as={`/destination/${_export.destination.guid}/edit`}
        >
          <a>{_export.destination.name}</a>
        </Link>
        <br />
        Profile:{" "}
        <Link
          href="/profile/[guid]/edit"
          as={`/profile/${_export.profileGuid}/edit`}
        >
          <a>{_export.profileGuid}</a>
        </Link>
        <br />
        <br />
        Forced: {_export.force.toString()}
      </p>
      {_export.errorMessage ? (
        <Alert variant="warning">
          <p>{_export.errorMessage}</p>
        </Alert>
      ) : null}

      <hr />

      <Row>
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
                          <Badge variant="danger">-</Badge>{" "}
                          {_export.oldProfileProperties[k]?.toString()}
                          {_export.newProfileProperties[k] !== null &&
                          _export.newProfileProperties[k] !== undefined ? (
                            <>
                              {" "}
                              | <Badge variant="success">+</Badge>{" "}
                              {_export.newProfileProperties[k]?.toString()}
                            </>
                          ) : null}
                        </>
                      ) : (
                        _export.oldProfileProperties[k]?.toString()
                      )}
                    </li>
                  );
                })}

                {Object.keys(_export.newProfileProperties).map((k) =>
                  _export.oldProfileProperties[k] === undefined ? (
                    <li key={`old-${k}`}>
                      {k}: <Badge variant="success">+</Badge>{" "}
                      {_export.newProfileProperties[k]?.toString()}
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
                      {!_export.newGroups.includes(groupGuid) ? (
                        <Badge variant="danger">-</Badge>
                      ) : null}{" "}
                      <Link
                        href="/group/[guid]/edit"
                        as={`/group/${getGroupGuid(groupGuid)}/edit`}
                      >
                        <a>{groupGuid}</a>
                      </Link>
                    </li>
                  );
                })}

                {_export.newGroups.map((groupGuid) =>
                  !_export.oldGroups.includes(groupGuid) ? (
                    <li key={`grp-${groupGuid}`}>
                      <Badge variant="success">+</Badge>{" "}
                      <Link
                        href="/group/[guid]/edit"
                        as={`/group/${getGroupGuid(groupGuid)}/edit`}
                      >
                        <a>{groupGuid}</a>
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <Moment duration={_export.createdAt} date={_export.completedAt} />
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
                <td>{new Date(_export.createdAt).toLocaleString()}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Started</td>
                <td>
                  {_export.startedAt
                    ? new Date(_export.startedAt).toLocaleString()
                    : null}
                </td>
                <td>
                  ⇣
                  {_export.startedAt ? (
                    <Moment
                      duration={_export.createdAt}
                      date={_export.startedAt}
                    />
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>
                  {_export.completedAt
                    ? new Date(_export.completedAt).toLocaleString()
                    : null}
                </td>
                <td>
                  ⇣
                  {_export.completedAt ? (
                    <Moment
                      duration={_export.startedAt}
                      date={_export.completedAt}
                    />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { export: _export } = await execApi("get", `/export/${guid}`);
  const { groups } = await execApi("get", `/groups`);
  return { _export, groups };
};
