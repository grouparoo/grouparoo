import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Badge, Alert } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Moment from "react-moment";
import ExportTabs from "../../../components/tabs/exportTabs";

import { ExportAPIData } from "../../../utils/apiData";

export default function Page({ _export, groups }) {
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

      <ExportTabs name={_export.guid} />

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
                        <Link
                          href="/group/[guid]/edit"
                          as={`/group/${getGroupGuid(groupGuid)}/edit`}
                        >
                          <a>{groupGuid}</a>
                        </Link>
                      </Badge>
                    </li>
                  );
                })}

                {_export.newGroups.map((groupGuid) =>
                  !_export.oldGroups.includes(groupGuid) ? (
                    <li key={`grp-${groupGuid}`}>
                      <Badge variant="success">
                        <Link
                          href="/group/[guid]/edit"
                          as={`/group/${getGroupGuid(groupGuid)}/edit`}
                        >
                          <a>{groupGuid}</a>
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
                <td>{new Date(_export.startedAt).toLocaleString()}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>{new Date(_export.completedAt).toLocaleString()}</td>
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
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { export: _export } = await execApi("get", `/export/${guid}`);
  const { groups } = await execApi("get", `/groups`);
  return { _export, groups };
};
