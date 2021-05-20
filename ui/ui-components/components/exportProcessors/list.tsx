import { Fragment, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import EnterpriseLink from "../enterpriseLink";
import { useRouter } from "next/router";
import { Row, Col, ButtonGroup, Button, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";
import { Models, Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { capitalize } from "../../utils/languageHelper";
import StateBadge from "../badges/stateBadge";

const states = ["all", "pending", "failed", "complete"];

export default function ExportProcessorsList(props) {
  const {
    errorHandler,
  }: { errorHandler: ErrorHandler; groups: Models.GroupType[] } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [exportProcessors, setExportProcessors] = useState<
    Models.ExportProcessorType[]
  >(props.exportProcessors);
  const [total, setTotal] = useState<number>(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [state, setState] = useState(router.query.state?.toString() || "all");

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, state]);

  async function load() {
    updateURLParams(router, { state, offset });
    setLoading(true);
    const response: Actions.ExportProcessorsList = await execApi(
      "get",
      `/exportProcessors`,
      {
        limit,
        offset,
        state: state === "all" ? undefined : state,
      }
    );
    setLoading(false);
    if (response?.exportProcessors) {
      setExportProcessors(response.exportProcessors);
      setTotal(response.total);

      if (response.total === 0 && offset > 0) {
        setOffset(0);
      }
    }
  }

  function formatTimestamp(timestamp) {
    const [date, time] = new Date(timestamp).toLocaleString().split(",");
    return `${date} ${time}`;
  }

  function getErrorRow(_export: Models.ExportProcessorType) {
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
      {props.header ? props.header : <h1>Export Processors</h1>}

      <Row>
        <Col md={3}>
          <strong>{total} export processors with these filters</strong>
        </Col>
        <Col>
          State:{" "}
          <ButtonGroup>
            {states.map((_state) => {
              return (
                <Fragment key={`export-processor-state-button-${_state}`}>
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
            <th>Exports Count</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {exportProcessors.map((exportProcessor) => {
            return (
              <Fragment key={`export-processor-${exportProcessor.id}`}>
                <tr>
                  <td>
                    <span>Id</span>:{" "}
                    <Link
                      href="/exportProcessor/[id]/edit"
                      as={`/exportProcessor/${exportProcessor.id}/edit`}
                    >
                      <a>{exportProcessor.id}</a>
                    </Link>
                    <br />
                    Destination:{" "}
                    <EnterpriseLink
                      href="/destination/[id]/edit"
                      as={`/destination/${exportProcessor.destination.id}/edit`}
                    >
                      <a>{exportProcessor.destination.name}</a>
                    </EnterpriseLink>
                  </td>
                  <td>
                    Created:{" "}
                    {exportProcessor.createdAt
                      ? formatTimestamp(exportProcessor.createdAt)
                      : null}
                    <br />
                    Process:{" "}
                    {exportProcessor.processAt
                      ? formatTimestamp(exportProcessor.processAt)
                      : null}
                    <br />
                    Start:{" "}
                    {exportProcessor.startedAt
                      ? formatTimestamp(exportProcessor.startedAt)
                      : null}
                    <br />
                    End:{" "}
                    {exportProcessor.completedAt
                      ? formatTimestamp(exportProcessor.completedAt)
                      : null}
                    <br />
                    Duration:{" "}
                    {exportProcessor.completedAt ? (
                      <Moment
                        duration={exportProcessor.createdAt}
                        date={exportProcessor.completedAt}
                      />
                    ) : null}
                  </td>
                  <td>{exportProcessor.exportsCount}</td>
                  <td>
                    <StateBadge
                      state={exportProcessor.state}
                      marginBottom={0}
                    />
                  </td>
                </tr>

                {getErrorRow(exportProcessor)}
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

ExportProcessorsList.hydrate = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset, state } = ctx.query;

  const { exportProcessors, total } = await execApi(
    "get",
    `/exportProcessors`,
    {
      limit,
      offset,
      state: state === "all" ? undefined : state,
    }
  );

  return { exportProcessors, total };
};
