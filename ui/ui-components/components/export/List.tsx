import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExportRetryById } from "@grouparoo/core/src/actions/exports";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useState } from "react";
import { Alert, Badge, Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { Client, generateClient } from "../../client/client";
import { useApi } from "../../contexts/api";
import { errorHandler, successHandler } from "../../eventHandlers";
import { updateURLParams, useOffset } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { Actions, Models } from "../../utils/apiData";
import { formatTimestamp } from "../../utils/formatTimestamp";
import { capitalize } from "../../utils/languageHelper";
import StateBadge from "../badges/StateBadge";
import { DurationTime } from "../DurationTime";
import EnterpriseLink from "../GrouparooLink";
import LoadingTable from "../LoadingTable";
import Pagination from "../Pagination";
import { ExportGroupsDiff, ExportRecordPropertiesDiff } from "./Diff";

const states = [
  "all",
  "pending",
  "processing",
  "canceled",
  "failed",
  "complete",
];

interface Props extends Awaited<ReturnType<typeof ExportsList.hydrate>> {
  header?: React.ReactNode;
}

export const retryExport = async (
  client: Client,
  _export: Models.ExportType
) => {
  const { count } = await client.requestAction<ExportRetryById>(
    "post",
    `/export/retry/`,
    {
      exportId: _export.id,
    },
    { useCache: false }
  );
  if (count) {
    successHandler.set({ message: "Export Retried" });
    const { export: refreshedExport } =
      await client.request<Actions.ExportView>("get", `/export/${_export.id}`);
    return refreshedExport;
  } else {
    errorHandler.set({
      message: "There was an issue retrying the export, please try again.",
    });
  }
};

export default function ExportsList(props: Props) {
  const { groups }: { groups: Models.GroupType[] } = props;
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [_exports, setExports] = useState<Models.ExportType[]>(props._exports);
  const [total, setTotal] = useState<number>(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [state, setState] = useState(router.query.state?.toString() || "all");

  const recordId = router.query.recordId;
  let exportProcessorId: string;
  let destinationId = router.query.destinationId;
  if (router.query.id) {
    if (router.pathname.match("/exportProcessor/")) {
      exportProcessorId = router.query.id.toString();
    }
  }

  const doRetryExport = useCallback(
    async (_export: Models.ExportType, index: number) => {
      setLoading(true);
      const refreshedExport = await retryExport(client, _export);
      if (refreshedExport) {
        setExports((_exports) => {
          _exports[index] = refreshedExport;
          return _exports;
        });
      }
      setLoading(false);
    },
    [client]
  );

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, state]);

  async function load() {
    updateURLParams(router, { state, offset });
    setLoading(true);
    const response = await client.request<Actions.ExportsList>(
      "get",
      `/exports`,
      {
        limit,
        offset,
        state: state === "all" ? undefined : state,
        recordId,
        destinationId,
        exportProcessorId,
      }
    );
    setLoading(false);
    if (response?.exports) {
      setExports(response.exports);
      setTotal(response.total);

      if (response.total === 0 && offset > 0) {
        setOffset(0);
      }
    }
  }

  function getErrorRow(_export: Models.ExportType) {
    if (!_export.errorMessage) return null;

    const delayMessage =
      ["pending", "processing"].includes(_export.state) &&
      _export.sendAt > new Date().getTime()
        ? `Export will be retried after ${formatTimestamp(_export.sendAt)}`
        : null;

    let level = "warning";
    if (_export.errorLevel === "info" || delayMessage) {
      level = "info";
    }

    return (
      <tr>
        <td colSpan={7} style={{ border: 0 }}>
          <Alert variant={level}>
            {_export.errorMessage}
            {delayMessage ? (
              <>
                <br />
                <small>{delayMessage}</small>
              </>
            ) : null}
          </Alert>
        </td>
      </tr>
    );
  }

  return (
    <>
      {props.header ? props.header : <h1>Exports</h1>}

      <Row>
        <Col md={3}>
          <strong>{total} exports with these filters</strong>
        </Col>
        <Col>
          State:{" "}
          <ButtonGroup>
            {states.map((_state) => {
              return (
                <Fragment key={`export-state-button-${_state}`}>
                  <Button
                    size="sm"
                    disabled={loading}
                    variant={state === _state ? "secondary" : "info"}
                    onClick={() => setState(_state)}
                  >
                    {capitalize(_state)}
                  </Button>
                </Fragment>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>

      <hr />
      <br />

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Ids</th>
            <th>Times</th>
            <th>Record Properties Exported</th>
            <th>Groups Exported</th>
          </tr>
        </thead>
        <tbody>
          {_exports.map((_export, index) => {
            return (
              <Fragment key={`export-${_export.id}`}>
                <tr>
                  <td>
                    <span>Id</span>:{" "}
                    <Link href={`/export/${_export.id}/edit`}>
                      <a>{_export.id}</a>
                    </Link>
                    <br />
                    <span>State</span>:{" "}
                    <StateBadge state={_export.state} marginBottom={0} />
                    {["failed", "canceled"].includes(_export.state) ? (
                      <FontAwesomeIcon
                        className="ml-1"
                        icon="sync-alt"
                        size="xs"
                        style={{ cursor: "pointer" }}
                        onClick={() => doRetryExport(_export, index)}
                      />
                    ) : null}
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
                    Model:{" "}
                    <EnterpriseLink href={`/model/${_export.modelId}/overview`}>
                      <a>{_export.modelId}</a>
                    </EnterpriseLink>
                    <br />
                    To Delete?{" "}
                    <Badge variant={_export.toDelete ? "danger" : "secondary"}>
                      {_export.toDelete.toString()}
                    </Badge>
                    <br />
                    Has Changes?{" "}
                    <Badge
                      variant={_export.hasChanges ? "success" : "secondary"}
                    >
                      {_export.hasChanges.toString()}
                    </Badge>
                    <br />
                    Forced:{" "}
                    <Badge variant={_export.force ? "warning" : "secondary"}>
                      {_export.force.toString()}
                    </Badge>
                  </td>
                  <td>
                    Created:{" "}
                    {_export.createdAt
                      ? formatTimestamp(_export.createdAt)
                      : "pending"}
                    <br />
                    Send:{" "}
                    {_export.startedAt
                      ? formatTimestamp(_export.sendAt)
                      : "pending"}
                    <br />
                    Start:{" "}
                    {_export.startedAt
                      ? formatTimestamp(_export.startedAt)
                      : "pending"}
                    <br />
                    End:{" "}
                    {_export.completedAt
                      ? formatTimestamp(_export.completedAt)
                      : "pending"}
                    <br />
                    Duration:{" "}
                    <DurationTime
                      start={_export.createdAt}
                      end={_export.completedAt}
                    />
                  </td>
                  <td>
                    <ExportRecordPropertiesDiff _export={_export} />
                  </td>
                  <td>
                    <ExportGroupsDiff _export={_export} groups={groups} />
                  </td>
                </tr>

                {getErrorRow(_export)}
              </Fragment>
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

ExportsList.hydrate = async (ctx: GetServerSidePropsContext) => {
  const client = generateClient(ctx);

  const { id, limit, offset, state, recordId, destinationId } = ctx.query;
  const { groups } = await client.request<Actions.GroupsList>("get", `/groups`);

  let exportProcessorId: string;
  if (id && ctx.req.url.match("/exportProcessor/")) {
    exportProcessorId = String(id);
  }

  const { exports: _exports, total } =
    await client.request<Actions.ExportsList>("get", `/exports`, {
      limit,
      offset,
      state: state === "all" ? undefined : state,
      destinationId,
      exportProcessorId,
      recordId,
    });

  return { groups, _exports, total };
};
