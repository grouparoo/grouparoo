import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Alert, Card, Badge } from "react-bootstrap";
import Link from "next/link";
import EnterpriseLink from "../../../components/enterpriseLink";
import Head from "next/head";
import Moment from "react-moment";
import ExportTabs from "../../../components/tabs/export";
import { Models } from "../../../utils/apiData";
import {
  ExportGroupsDiff,
  ExportRecordPropertiesDiff,
} from "../../../components/export/diff";
import StateBadge from "../../../components/badges/stateBadge";

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
            <EnterpriseLink
              href="/destination/[id]/edit"
              as={`/destination/${_export.destination.id}/edit`}
            >
              <a>{_export.destination.name}</a>
            </EnterpriseLink>
            <br />
            {_export.exportProcessorId ? (
              <>
                <span>Processor</span>:{" "}
                <Link
                  href="/exportProcessor/[id]/edit"
                  as={`/exportProcessor/${_export.exportProcessorId}/edit`}
                >
                  <a>{_export.exportProcessorId}</a>
                </Link>
                <br />
              </>
            ) : null}
            Record:{" "}
            <Link
              href="/record/[id]/edit"
              as={`/record/${_export.recordId}/edit`}
            >
              <a>{_export.recordId}</a>
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
                <td>Send</td>
                <td>
                  {_export.sendAt
                    ? new Date(_export.sendAt).toLocaleString()
                    : null}
                </td>
                <td>
                  ⇣
                  {_export.sendAt ? (
                    <Moment
                      duration={_export.createdAt}
                      date={_export.sendAt + 1} // +1 needed as the times may be exactly the same
                    />
                  ) : null}
                </td>
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
                      duration={_export.sendAt}
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
        </Card.Body>
      </Card>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { export: _export } = await execApi("get", `/export/${id}`);
  const { groups } = await execApi("get", `/groups`);
  return { _export, groups };
};
