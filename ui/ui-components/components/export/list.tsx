import { Fragment, useState } from "react";
import { UseApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import EnterpriseLink from "../grouparooLink";
import { useRouter } from "next/router";
import { Row, Col, Button, ButtonGroup, Badge, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { Models, Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { ExportGroupsDiff, ExportRecordPropertiesDiff } from "./diff";
import { capitalize } from "../../utils/languageHelper";
import { formatTimestamp } from "../../utils/formatTimestamp";
import StateBadge from "../badges/stateBadge";
import { DurationTime } from "../durationTime";

const states = [
  "all",
  "pending",
  "processing",
  "canceled",
  "failed",
  "complete",
];

export default function ExportsList(props) {
  const {
    errorHandler,
    groups,
  }: { errorHandler: ErrorHandler; groups: Models.GroupType[] } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
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
    const response: Actions.ExportsList = await execApi("get", `/exports`, {
      limit,
      offset,
      state: state === "all" ? undefined : state,
      recordId,
      destinationId,
      exportProcessorId,
    });
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
    if (!_export.errorMessage) {
      return null;
    }

    let level = "warning";
    if (_export.errorLevel === "info") {
      level = "info";
    }
    return (
      <tr>
        <td colSpan={7} style={{ border: 0 }}>
          <Alert variant={level}>{_export.errorMessage}</Alert>
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
                      href={`/model/${_export.destination.modelId}/record/${_export.recordId}/edit`}
                    >
                      <a>{_export.recordId}</a>
                    </Link>
                    <br />
                    Destination:{" "}
                    <EnterpriseLink
                      href={`/model/${_export.destination.modelId}/destination/${_export.destination.id}/edit`}
                    >
                      <a>{_export.destination.name}</a>
                    </EnterpriseLink>
                    <br />
                    Model:{" "}
                    <EnterpriseLink
                      href={`/model/${_export.destination.modelId}/edit`}
                    >
                      <a>{_export.destination.modelId}</a>
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

ExportsList.hydrate = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { id, limit, offset, state, recordId, destinationId } = ctx.query;
  const { groups } = await execApi("get", `/groups`);

  let exportProcessorId: string;
  if (id && ctx.pathname.match("/exportProcessor/")) {
    exportProcessorId = id;
  }

  const { exports: _exports, total } = await execApi("get", `/exports`, {
    limit,
    offset,
    state: state === "all" ? undefined : state,
    destinationId,
    exportProcessorId,
    recordId,
  });

  return { groups, _exports, total };
};
