import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Table, Alert, Card } from "react-bootstrap";
import Link from "next/link";
import EnterpriseLink from "../../../components/enterpriseLink";
import Head from "next/head";
import Moment from "react-moment";
import ExportProcessorTabs from "../../../components/tabs/exportProcessor";
import { Models } from "../../../utils/apiData";
import StateBadge from "../../../components/badges/stateBadge";

export default function Page({
  exportProcessor,
}: {
  exportProcessor: Models.ExportProcessorType;
}) {
  return (
    <>
      <Head>
        <title>Grouparoo: {exportProcessor.id}</title>
      </Head>

      <ExportProcessorTabs exportProcessor={exportProcessor} />

      <h1>Export Processor {exportProcessor.id}</h1>

      <Card>
        <Card.Body>
          <h2>Details</h2>
          <p>
            State: <StateBadge state={exportProcessor.state} marginBottom={0} />
            <br />
            Destination:{" "}
            <EnterpriseLink
              href="/destination/[id]/edit"
              as={`/destination/${exportProcessor.destination.id}/edit`}
            >
              <a>{exportProcessor.destination.name}</a>
            </EnterpriseLink>
            <br />
            Remote Key: <code>{exportProcessor.remoteKey}</code>
            <br />
            Retry Count: {exportProcessor.retryCount}
          </p>
          {exportProcessor.errorMessage ? (
            <Alert variant="warning">
              <p>{exportProcessor.errorMessage}</p>
            </Alert>
          ) : null}
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <Moment
                duration={exportProcessor.createdAt}
                date={exportProcessor.completedAt}
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
                <td>{new Date(exportProcessor.createdAt).toLocaleString()}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Process</td>
                <td>
                  {exportProcessor.processAt
                    ? new Date(exportProcessor.processAt).toLocaleString()
                    : null}
                </td>
                <td>
                  ⇣
                  {exportProcessor.processAt ? (
                    <Moment
                      duration={exportProcessor.createdAt}
                      date={exportProcessor.processAt + 1} // +1 needed as the times may be exactly the same
                    />
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>Started</td>
                <td>
                  {exportProcessor.startedAt
                    ? new Date(exportProcessor.startedAt).toLocaleString()
                    : null}
                </td>
                <td>
                  ⇣
                  {exportProcessor.startedAt ? (
                    <Moment
                      duration={exportProcessor.processAt}
                      date={exportProcessor.startedAt}
                    />
                  ) : null}
                </td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>
                  {exportProcessor.completedAt
                    ? new Date(exportProcessor.completedAt).toLocaleString()
                    : null}
                </td>
                <td>
                  ⇣
                  {exportProcessor.completedAt ? (
                    <Moment
                      duration={exportProcessor.startedAt}
                      date={exportProcessor.completedAt}
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
  const { execApi } = UseApi(ctx);
  const { exportProcessor } = await execApi("get", `/exportProcessor/${id}`);
  return { exportProcessor };
};
