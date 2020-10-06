import { useApi } from "../../hooks/useApi";
import { useOffset } from "../../hooks/useOffset";
import { Fragment, useState, useEffect } from "react";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import { Row, Col, ButtonGroup, Button, Alert } from "react-bootstrap";
import Moment from "react-moment";
import { useRouter } from "next/router";
import Link from "next/link";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import RunDurationChart from "../visualizations/runDurations";
import { RunAPIData } from "../../utils/apiData";

export default function RunsList(props) {
  const { errorHandler, runsHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(props.total);
  const [runs, setRuns] = useState<RunAPIData[]>(props.runs);
  const [stateFilter, setStateFilter] = useState(
    router.query.state?.toString() || ""
  );
  const [errorFilter, setErrorFilter] = useState(
    router.query.error?.toString() || ""
  );

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [limit, offset, stateFilter, errorFilter]);

  useEffect(() => {
    runsHandler.subscribe("runs-list", load);
    return () => {
      runsHandler.unsubscribe("runs-list");
    };
  }, []);

  async function load() {
    const params = { limit, offset };
    if (router.query.guid) params["guid"] = router.query.guid.toString();
    if (stateFilter !== "") params["state"] = stateFilter;
    if (errorFilter !== "") params["hasError"] = errorFilter;

    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/runs`, params);
    setLoading(false);
    if (response?.runs) {
      setRuns(response.runs);
      setTotal(response.total);
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) url += `offset=${offset}&`;
    if (stateFilter !== "") url += `state=${stateFilter}&`;
    if (errorFilter != "") url += `error=${errorFilter}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    router[routerMethod](router.route, url, { shallow: true });
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
      <h1>Runs</h1>

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
      <RunDurationChart runs={runs} />
      <br />
      <br />
      <br />
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Guid</th>
            <th>Times</th>
            <th>Creator</th>
            <th>State</th>
            <th>Filters</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          {runs.map((run) => {
            return (
              <Fragment key={`profile-${run.guid}`}>
                <tr>
                  <td>
                    Guid:{" "}
                    <Link href="/run/[guid]/edit" as={`/run/${run.guid}/edit`}>
                      <a>{run.guid}</a>
                    </Link>
                  </td>
                  <td>
                    Created: <Moment fromNow>{run.createdAt}</Moment>
                    {run.completedAt ? (
                      <>
                        <br />
                        Completed: <Moment fromNow>{run.completedAt}</Moment>
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
                    <Link prefetch={false} href={`/object/${run.creatorGuid}`}>
                      <a>
                        {run.creatorType}: {run.creatorName}
                      </a>
                    </Link>
                  </td>
                  <td>
                    {run.state} <br />
                    {run.percentComplete}%
                  </td>
                  <td>
                    {/* <code>{JSON.stringify(run.filter)}</code> */}
                    <>
                      groupMemberLimit: {run.groupMemberLimit} <br />
                      groupMemberOffset: {run.groupMemberOffset} <br />
                      groupHighWaterMark: {run.groupHighWaterMark} <br />
                      sourceOffset: {run.sourceOffset} <br />
                      force: {run.force.toString()}
                    </>
                    {run.highWaterMark ? (
                      <>
                        <br />
                        {Object.keys(run.highWaterMark)[0]}:{" "}
                        {Object.values(run.highWaterMark)[0]}
                      </>
                    ) : null}
                  </td>
                  <td>
                    <Link href="/imports/[guid]" as={`/imports/${run.guid}`}>
                      <a>Imports Created: {run.importsCreated}</a>
                    </Link>
                    <br />
                    Profiles Created: {run.profilesCreated}
                    <br />
                    Profiles Imported: {run.profilesImported}
                    <br />
                    Exports Created: {run.exportsCreated}
                    <br />
                    Profiles Exported: {run.profilesExported}
                  </td>
                </tr>

                {run.error ? (
                  <tr>
                    <td colSpan={7} style={{ border: 0 }}>
                      <Alert variant="danger">
                        {run.error.split("\n").map((err, errIdx) => (
                          <Fragment key={`err-${run.guid}-${errIdx}`}>
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

RunsList.hydrate = async (ctx) => {
  const { guid, limit, offset, state, error } = ctx.query;
  const { execApi } = useApi(ctx);
  const { runs, total } = await execApi("get", `/runs`, {
    guid,
    limit,
    offset,
    state,
    hasError: error,
  });
  return { runs, total };
};
