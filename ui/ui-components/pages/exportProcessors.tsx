import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Alert, Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { errorHandler } from "../eventHandlers";
import StateBadge from "../components/badges/StateBadge";
import LoadingTable from "../components/LoadingTable";
import Pagination from "../components/Pagination";
import EnterpriseLink from "../components/GrouparooLink";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { UseApi } from "../hooks/useApi";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { Models, Actions } from "../utils/apiData";
import { capitalize } from "../utils/languageHelper";
import { formatTimestamp } from "../utils/formatTimestamp";
import { DurationTime } from "../components/DurationTime";

const states = ["all", "pending", "failed", "complete"];

export default function Page(props) {
  const router = useRouter();
  const { client } = useApi();
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
    const response: Actions.ExportProcessorsList = await client.request(
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
      <Head>
        <title>Grouparoo: Export Processors</title>
      </Head>

      <h1>Export Processors</h1>

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
                    <Link href={`/exportProcessor/${exportProcessor.id}/edit`}>
                      <a>{exportProcessor.id}</a>
                    </Link>
                    <br />
                    Destination:{" "}
                    <EnterpriseLink
                      href={`/model/${exportProcessor.destination.modelId}/destination/${exportProcessor.destination.id}/edit`}
                    >
                      <a>{exportProcessor.destination.name}</a>
                    </EnterpriseLink>
                  </td>
                  <td>
                    Created:{" "}
                    {exportProcessor.createdAt
                      ? formatTimestamp(exportProcessor.createdAt)
                      : "pending"}
                    <br />
                    Process:{" "}
                    {exportProcessor.processAt
                      ? formatTimestamp(exportProcessor.processAt)
                      : "pending"}
                    <br />
                    Start:{" "}
                    {exportProcessor.startedAt
                      ? formatTimestamp(exportProcessor.startedAt)
                      : "pending"}
                    <br />
                    End:{" "}
                    {exportProcessor.completedAt
                      ? formatTimestamp(exportProcessor.completedAt)
                      : "pending"}
                    <br />
                    Duration:{" "}
                    <DurationTime
                      start={exportProcessor.createdAt}
                      end={exportProcessor.completedAt}
                    />
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

Page.getInitialProps = async (ctx) => {
  const { client } = useApi();
  const { limit, offset, state } = ctx.query;

  const { exportProcessors, total } = await client.request(
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
