import { useApi } from "../../hooks/useApi";
import { Fragment, useState, useEffect } from "react";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import { Row, Col, ButtonGroup, Button, Alert } from "react-bootstrap";
import Moment from "react-moment";
import Router from "next/router";
import Link from "next/link";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import RunDurationChart from "../visualizations/runDurations";
import { RunAPIData } from "../../utils/apiData";

export default function RunsList(props) {
  const { errorHandler, runsHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(props.total);
  const [runs, setRuns] = useState<RunAPIData[]>(props.runs);
  const [stateFilter, setStateFilter] = useState(query.state || "");
  const [errorFilter, setErrorFilter] = useState(query.error || "");

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
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

    if (query.guid) {
      params["guid"] = query.guid;
    }

    if (stateFilter !== "") {
      params["state"] = stateFilter;
    }

    if (errorFilter !== "") {
      params["hasError"] = errorFilter;
    }

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
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    if (stateFilter !== "") {
      url += `state=${stateFilter}&`;
    }
    if (errorFilter != "") {
      url += `error=${errorFilter}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
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
              onClick={() => setStateFilter("")}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "running" ? "secondary" : "info"}
              onClick={() => setStateFilter("running")}
            >
              Running
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "complete" ? "secondary" : "info"}
              onClick={() => setStateFilter("complete")}
            >
              Complete
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "stopped" ? "secondary" : "info"}
              onClick={() => setStateFilter("stopped")}
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
              onClick={() => setErrorFilter("")}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={errorFilter === "true" ? "secondary" : "info"}
              onClick={() => setErrorFilter("true")}
            >
              True
            </Button>
            <Button
              size="sm"
              variant={errorFilter === "false" ? "secondary" : "info"}
              onClick={() => setErrorFilter("false")}
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
            <th>Created At</th>
            <th>Creator Type</th>
            <th>Completed At</th>
            <th>State</th>
            <th>Filter</th>
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
                    <Moment fromNow>{run.createdAt}</Moment>
                  </td>
                  <td>
                    <Link prefetch={false} href={`/object/${run.creatorGuid}`}>
                      <a>{run.creatorType}</a>
                    </Link>
                  </td>
                  <td>
                    {run.completedAt ? (
                      <>
                        <Moment fromNow>{run.completedAt}</Moment>
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
                  <td>{run.state}</td>
                  <td>
                    {/* <code>{JSON.stringify(run.filter)}</code> */}
                    {run.filter ? (
                      <>
                        <strong>{Object.keys(run.filter)[0]}</strong>: <br />
                        {Object.values(run.filter)[0]}
                      </>
                    ) : null}
                  </td>
                  <td>
                    <Link
                      href="/imports/[creatorGuid]"
                      as={`/imports/${run.guid}`}
                    >
                      <a>Imports Created: {run.importsCreated}</a>
                    </Link>
                    <br />
                    Profiles Created: {run.profilesCreated}
                    <br />
                    Profiles Imported: {run.profilesImported}
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
