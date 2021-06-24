import { useApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { Fragment, useState, useEffect } from "react";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { Row, Col, ButtonGroup, Button, Alert, Card } from "react-bootstrap";
import Moment from "react-moment";
import { useRouter } from "next/router";
import Link from "next/link";
import EnterpriseLink from "../enterpriseLink";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import RunDurationChart from "../visualizations/runDurations";
import { Models, Actions } from "../../utils/apiData";
import { formatTimestamp } from "../../utils/formatTimestamp";

export default function RunsList(props) {
  const { errorHandler, topic } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [runs, setRuns] = useState<Models.RunType[]>(props.runs);
  const [stateFilter, setStateFilter] = useState(
    router.query.stateFilter?.toString() || ""
  );
  const [errorFilter, setErrorFilter] = useState(
    router.query.error?.toString() || ""
  );

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [limit, offset, stateFilter, errorFilter]);

  async function load() {
    const params = { limit, offset, topic };
    if (router.query.id) params["id"] = router.query.id.toString();
    if (stateFilter !== "") params["state"] = stateFilter;
    if (errorFilter !== "") params["hasError"] = errorFilter;

    updateURLParams(router, { offset, stateFilter, errorFilter });
    setLoading(true);
    const response: Actions.RunsList = await execApi("get", `/runs`, params);
    setLoading(false);
    if (response?.runs) {
      setRuns(response.runs);
      setTotal(response.total);
    }
  }

  function setFilter({
    errorFilter,
    stateFilter,
  }: {
    errorFilter?: string;
    stateFilter?: string;
  }) {
    if (errorFilter !== undefined) setErrorFilter(errorFilter);
    if (stateFilter !== undefined) setStateFilter(stateFilter);
    setOffset(0);
  }

  return (
    <>
      {props.header ? props.header : <h1>Runs</h1>}

      <Row>
        <Col>
          <strong>{total} runs with these filters</strong>
        </Col>
        <Col>
          State:{" "}
          <ButtonGroup>
            <Button
              size="sm"
              variant={stateFilter === "" ? "secondary" : "info"}
              onClick={() => setFilter({ stateFilter: "" })}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "running" ? "secondary" : "info"}
              onClick={() => setFilter({ stateFilter: "running" })}
            >
              Running
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "complete" ? "secondary" : "info"}
              onClick={() => setFilter({ stateFilter: "complete" })}
            >
              Complete
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "stopped" ? "secondary" : "info"}
              onClick={() => setFilter({ stateFilter: "stopped" })}
            >
              Stopped
            </Button>
          </ButtonGroup>
        </Col>
        <Col>
          Has Error:{" "}
          <ButtonGroup>
            <Button
              size="sm"
              variant={errorFilter === "" ? "secondary" : "info"}
              onClick={() => setFilter({ errorFilter: "" })}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={errorFilter === "true" ? "secondary" : "info"}
              onClick={() => setFilter({ errorFilter: "true" })}
            >
              True
            </Button>
            <Button
              size="sm"
              variant={errorFilter === "false" ? "secondary" : "info"}
              onClick={() => setFilter({ errorFilter: "false" })}
            >
              False
            </Button>
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

      {runs.length > 0 ? (
        <>
          <Card>
            <Card.Body>
              <h2>Run Durations</h2>
              <RunDurationChart runs={runs} />
            </Card.Body>
          </Card>
          <br />
          <br />
        </>
      ) : null}

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Times</th>
            <th>Creator</th>
            <th>State</th>
            <th>Filters</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          {runs
            .sort((a, b) => b.updatedAt - a.updatedAt) // TODO: Why do we need to re-sort the array returned by the API?  The order changes based on getInitialProps or browser load
            .map((run) => {
              return (
                <Fragment key={`profile-${run.id}`}>
                  <tr>
                    <td>
                      id:{" "}
                      <Link href="/run/[id]/edit" as={`/run/${run.id}/edit`}>
                        <a>{run.id}</a>
                      </Link>
                    </td>
                    <td>
                      Created: {formatTimestamp(run.createdAt)}
                      {run.completedAt ? (
                        <>
                          <br />
                          Completed: {formatTimestamp(run.completedAt)}
                          <br />
                          <small>
                            Duration:{" "}
                            <Moment
                              duration={run.createdAt}
                              date={run.completedAt}
                            />
                          </small>
                        </>
                      ) : null}
                    </td>
                    <td>
                      <EnterpriseLink
                        prefetch={false}
                        href={`/object/${run.creatorId}`}
                      >
                        <a>
                          {run.creatorType}: {run.creatorName}
                        </a>
                      </EnterpriseLink>
                    </td>
                    <td>
                      {run.state} <br />
                      {run.percentComplete}%
                    </td>
                    <td>
                      {/* <code>{JSON.stringify(run.filter)}</code> */}
                      <>
                        {run.creatorType === "group" ? (
                          <>
                            groupMemberLimit: {run.groupMemberLimit} <br />
                          </>
                        ) : null}
                        {run.creatorType === "group" ? (
                          <>
                            groupMemberOffset: {run.groupMemberOffset} <br />
                          </>
                        ) : null}
                        {run.creatorType === "group" ? (
                          <>
                            groupHighWaterMark: {run.groupHighWaterMark} <br />
                          </>
                        ) : null}
                        {run.creatorType !== "group" ? (
                          <>
                            sourceOffset: {run.sourceOffset} <br />
                          </>
                        ) : null}
                        force: {run.force.toString()}
                      </>
                      {run.highWaterMark &&
                      Object.keys(run.highWaterMark).length > 0 ? (
                        <>
                          <br />
                          {Object.keys(run.highWaterMark)[0]}:{" "}
                          {Object.values(run.highWaterMark)[0]}
                        </>
                      ) : null}
                    </td>
                    <td>
                      <Link href="/imports/[id]" as={`/imports/${run.id}`}>
                        <a>Imports Created: {run.importsCreated}</a>
                      </Link>
                      <br />
                      Profiles Created: {run.profilesCreated}
                      <br />
                      Profiles Imported: {run.profilesImported}
                    </td>
                  </tr>

                  {run.error ? (
                    <tr>
                      <td colSpan={7} style={{ border: 0 }}>
                        <Alert variant="danger">
                          {run.error.split("\n").map((err, errIdx) => (
                            <Fragment key={`err-${run.id}-${errIdx}`}>
                              {err}
                              <br />
                            </Fragment>
                          ))}
                        </Alert>
                      </td>
                    </tr>
                  ) : null}
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

RunsList.hydrate = async (ctx, options: { topic?: string } = {}) => {
  const { id, limit, offset, stateFilter, error } = ctx.query;
  const { execApi } = useApi(ctx);
  const { runs, total } = await execApi("get", `/runs`, {
    id,
    topic: options.topic,
    limit,
    offset,
    state: stateFilter,
    hasError: error,
  });
  return { runs, total, topic: options.topic };
};
