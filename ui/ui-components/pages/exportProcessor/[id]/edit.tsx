import { UseApi } from "../../../hooks/useApi";
import { Table, Alert, Card } from "react-bootstrap";
import EnterpriseLink from "../../../components/enterpriseLink";
import Head from "next/head";
import ExportProcessorTabs from "../../../components/tabs/exportProcessor";
import { Models } from "../../../utils/apiData";
import StateBadge from "../../../components/badges/stateBadge";
import { DurationTime } from "../../../components/durationTime";
import { formatTimestamp } from "../../../utils/formatTimestamp";

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
              href="/model/[modelId]/destination/[destinationId]/edit"
              as={`/model/${exportProcessor.destination.modelId}/destination/${exportProcessor.destination.id}/edit`}
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
              <DurationTime
                start={exportProcessor.createdAt}
                end={exportProcessor.completedAt}
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
                <td>{formatTimestamp(exportProcessor.createdAt)}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Process</td>
                <td>
                  {exportProcessor.processAt
                    ? formatTimestamp(exportProcessor.processAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={exportProcessor.createdAt}
                    end={exportProcessor.processAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Started</td>
                <td>
                  {exportProcessor.startedAt
                    ? formatTimestamp(exportProcessor.startedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={exportProcessor.processAt}
                    end={exportProcessor.startedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Completed</td>
                <td>
                  {exportProcessor.completedAt
                    ? formatTimestamp(exportProcessor.completedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={exportProcessor.startedAt}
                    end={exportProcessor.completedAt}
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

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { exportProcessor } = await execApi("get", `/exportProcessor/${id}`);
  return { exportProcessor };
};
