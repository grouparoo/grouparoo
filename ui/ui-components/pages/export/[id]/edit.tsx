import { Row, Col, Table, Alert, Card, Badge } from "react-bootstrap";
import Link from "next/link";
import EnterpriseLink from "../../../components/GrouparooLink";
import Head from "next/head";
import ExportTabs from "../../../components/tabs/Export";
import { Models } from "../../../utils/apiData";
import {
  ExportGroupsDiff,
  ExportRecordPropertiesDiff,
} from "../../../components/export/Diff";
import StateBadge from "../../../components/badges/StateBadge";
import { DurationTime } from "../../../components/DurationTime";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { generateClient } from "../../../client/client";
import { NextPageContext } from "next";

export default function Page({
  _export,
  groups,
}: {
  _export: Models.ExportType;
  groups: Models.GroupType[];
}) {
  return (
    <>
      <Head>
        <title>Grouparoo: {_export.id}</title>
      </Head>

      <ExportTabs export={_export} />

      <h1>Export {_export.id}</h1>

      <Card>
        <Card.Body>
          <h2>Details</h2>
          <p>
            State: <StateBadge state={_export.state} marginBottom={0} />
            <br />
            Destination:{" "}
            {_export.destination ? (
              <EnterpriseLink
                href={`/model/${_export.destination.modelId}/destination/${_export.destination.id}/edit`}
              >
                <a>{_export.destination.name}</a>
              </EnterpriseLink>
            ) : (
              <Badge variant="secondary">deleted</Badge>
            )}
            <br />
            {_export.exportProcessorId ? (
              <>
                <span>Processor</span>:{" "}
                <Link
                  href={`/exportProcessor/${_export.exportProcessorId}/edit`}
                >
                  <a>{_export.exportProcessorId}</a>
                </Link>
                <br />
              </>
            ) : null}
            Record:{" "}
            <Link
              href={`/model/${_export.modelId}/record/${_export.recordId}/edit`}
            >
              <a>{_export.recordId}</a>
            </Link>
            <br />
            Model:{" "}
            <Link href={`/model/${_export.modelId}/overview`}>
              <a>{_export.modelId}</a>
            </Link>
            <br />
            To Delete?{" "}
            <Badge variant={_export.toDelete ? "danger" : "secondary"}>
              {_export.toDelete.toString()}
            </Badge>
            <br />
            Has Changes?{" "}
            <Badge variant={_export.hasChanges ? "success" : "secondary"}>
              {_export.hasChanges.toString()}
            </Badge>
            <br />
            Forced:{" "}
            <Badge variant={_export.force ? "warning" : "secondary"}>
              {_export.force.toString()}
            </Badge>
            <br />
            Retry Count: {_export.retryCount}
          </p>
          {_export.errorMessage ? (
            <Alert variant="warning">
              <p>{_export.errorMessage}</p>
            </Alert>
          ) : null}
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Data</h2>

          <Row>
            <Col>
              <strong>Record Properties</strong>
              <ExportRecordPropertiesDiff _export={_export} />
            </Col>
            <Col>
              <strong>Groups</strong>
              <ExportGroupsDiff _export={_export} groups={groups} />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <DurationTime
                start={_export.createdAt}
                end={_export.completedAt}
              />
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
                <td>
                  {_export.createdAt
                    ? formatTimestamp(_export.createdAt)
                    : "pending"}
                </td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Send</td>
                <td>
                  {_export.sendAt ? formatTimestamp(_export.sendAt) : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_export.createdAt}
                    end={_export.sendAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Started</td>
                <td>
                  {_export.startedAt
                    ? formatTimestamp(_export.startedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_export.sendAt}
                    end={_export.startedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>
                  {_export.completedAt
                    ? formatTimestamp(_export.completedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_export.startedAt}
                    end={_export.completedAt}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const client = generateClient(ctx);
  const { export: _export } = await client.request("get", `/export/${id}`);
  const { groups } = await client.request("get", `/groups`);
  return { _export, groups };
};
