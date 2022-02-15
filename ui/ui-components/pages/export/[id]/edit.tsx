import { ExportsRetryFailed } from "@grouparoo/core/src/actions/exports";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Alert, Badge, Card, Col, Row, Table } from "react-bootstrap";
import { generateClient } from "../../../client/client";
import StateBadge from "../../../components/badges/StateBadge";
import { DurationTime } from "../../../components/DurationTime";
import {
  ExportGroupsDiff,
  ExportRecordPropertiesDiff,
} from "../../../components/export/Diff";
import EnterpriseLink from "../../../components/GrouparooLink";
import ManagedCard from "../../../components/lib/ManagedCard";
import LoadingButton from "../../../components/LoadingButton";
import ExportTabs from "../../../components/tabs/Export";
import { useApi } from "../../../contexts/api";
import { errorHandler, successHandler } from "../../../eventHandlers";
import { Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { NextPageWithInferredProps } from "../../../utils/pageHelper";
import { withServerErrorHandler } from "../../../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const { id } = ctx.query;
  const client = generateClient(ctx);
  const { export: _export } = await client.request<Actions.ExportView>(
    "get",
    `/export/${id}`
  );
  const { groups } = await client.request<Actions.GroupsList>("get", `/groups`);
  return { props: { _export, groups } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  groups,
  ...props
}) => {
  const { client } = useApi();
  const [_export, setExport] = useState(props._export);
  const [loading, setLoading] = useState(false);

  const retryExport = useCallback(async () => {
    setLoading(true);
    try {
      const { count } = await client
        .requestAction<ExportsRetryFailed>(
          "get",
          `/exports/retryFailed`,
          {
            destinationId: _export.destination.id,
            startTimestamp: _export.createdAt,
            endTimestamp: _export.createdAt,
          },
          { useCache: false }
        )
        .catch(() => ({ count: 0 }));
      if (count) {
        successHandler.publish({ message: "Export Retried" });
        const { export: refreshedExport } =
          await client.request<Actions.ExportView>(
            "get",
            `/export/${_export.id}`
          );
        setExport(refreshedExport);
      } else {
        errorHandler.publish({
          message: "There was an issue retrying the export, please try again.",
        });
      }
    } catch (err) {
      errorHandler.publish({
        message: err,
      });
    }
    setLoading(false);
  }, [_export.createdAt, _export.destination.id, _export.id, client]);

  return (
    <>
      <Head>
        <title>Grouparoo: {_export.id}</title>
      </Head>

      <ExportTabs export={_export} />

      <h1>Export {_export.id}</h1>

      <ManagedCard
        title="Details"
        actions={[
          <LoadingButton
            variant="outline-primary"
            size="sm"
            loading={loading}
            disabled={!["failed", "canceled"].includes(_export.state)}
            className="ml-auto"
            onClick={retryExport}
            key={_export.state}
          >
            Retry Export
          </LoadingButton>,
        ]}
      >
        <Card.Body>
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
      </ManagedCard>

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
};
export default Page;
