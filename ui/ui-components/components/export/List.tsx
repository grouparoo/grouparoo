import { Fragment, useState } from "react";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import EnterpriseLink from "../GrouparooLink";
import { useRouter } from "next/router";
import { Row, Col, Button, ButtonGroup, Badge, Alert } from "react-bootstrap";
import { errorHandler } from "../../eventHandlers";
import Pagination from "../Pagination";
import LoadingTable from "../LoadingTable";
import { Models, Actions } from "../../utils/apiData";
import { ExportGroupsDiff, ExportRecordPropertiesDiff } from "./Diff";
import { capitalize } from "../../utils/languageHelper";
import { formatTimestamp } from "../../utils/formatTimestamp";
import StateBadge from "../badges/StateBadge";
import { DurationTime } from "../DurationTime";
import { getRequestContext, useApi } from "../../contexts/api";
import { Client } from "../../client/client";
import { AppContext } from "next/app";
import { NextPageContext } from "next";

const states = [
  "all",
  "pending",
  "processing",
  "canceled",
  "failed",
  "complete",
];

export default function ExportsList(props) {
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

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, state]);

  async function load() {
    updateURLParams(router, { state, offset });
    setLoading(true);
    const response: Actions.ExportsList = await client.action(
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
          {_exports.map((_export) => {
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

ExportsList.hydrate = async (appContext: NextPageContext) => {
  console.log(appContext);
  const getContext = getRequestContext(appContext);
  const client = new Client(getContext);

  const { id, limit, offset, state, recordId, destinationId } =
    appContext.query;
  const { groups } = await client.action("get", `/groups`);

  let exportProcessorId: string;
  if (id && appContext.pathname.match("/exportProcessor/")) {
    exportProcessorId = String(id);
  }

  const { exports: _exports, total } = await client.action("get", `/exports`, {
    limit,
    offset,
    state: state === "all" ? undefined : state,
    destinationId,
    exportProcessorId,
    recordId,
  });

  return { groups, _exports, total };
};
