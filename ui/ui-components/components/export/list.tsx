import { Fragment, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import EnterpriseLink from "../enterpriseLink";
import { useRouter } from "next/router";
import { Row, Col, ButtonGroup, Button, Badge, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";
import { Models, Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { ExportGroupsDiff, ExportRecordPropertiesDiff } from "./diff";
import { capitalize } from "../../utils/languageHelper";
import { formatTimestamp } from "../../utils/formatTimestamp";
import StateBadge from "../badges/stateBadge";

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
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [_exports, setExports] = useState<Models.ExportType[]>(props._exports);
  const [total, setTotal] = useState<number>(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [state, setState] = useState(router.query.state?.toString() || "all");

  let recordId: string;
  let exportProcessorId: string;
  let destinationId: string;
  if (router.query.id) {
    if (router.pathname.match("/record/")) {
      recordId = router.query.id.toString();
    } else if (router.pathname.match("/exportProcessor/")) {
      exportProcessorId = router.query.id.toString();
    } else {
      destinationId = router.query.id.toString();
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
                    <Link
                      href="/export/[id]/edit"
                      as={`/export/${_export.id}/edit`}
                    >
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
                    Destination:{" "}
                    <EnterpriseLink
                      href="/destination/[id]/edit"
                      as={`/destination/${_export.destination.id}/edit`}
                    >
                      <a>{_export.destination.name}</a>
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
                      : null}
                    <br />
                    Send:{" "}
                    {_export.startedAt ? formatTimestamp(_export.sendAt) : null}
                    <br />
                    Start:{" "}
                    {_export.startedAt
                      ? formatTimestamp(_export.startedAt)
                      : null}
                    <br />
                    End:{" "}
                    {_export.completedAt
                      ? formatTimestamp(_export.completedAt)
                      : null}
                    <br />
                    Duration:{" "}
                    {_export.completedAt ? (
                      <Moment
                        duration={_export.createdAt}
                        date={_export.completedAt}
                      />
                    ) : null}
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
  const { execApi } = useApi(ctx);
  const { id, limit, offset, state } = ctx.query;
  const { groups } = await execApi("get", `/groups`);

  let recordId: string;
  let exportProcessorId: string;
  let destinationId: string;
  if (id) {
    if (ctx.pathname.match("/record/")) {
      recordId = id;
    } else if (ctx.pathname.match("/exportProcessor/")) {
      exportProcessorId = id;
    } else {
      destinationId = id;
    }
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
