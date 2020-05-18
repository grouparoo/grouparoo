import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import { Row, Col, ButtonGroup, Button, Alert } from "react-bootstrap";
import Moment from "react-moment";
import Router from "next/router";
import Link from "next/link";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { ResponsiveLine } from "@nivo/line";

import { RunAPIData } from "../../utils/apiData";

const NodeMoment = require("moment");

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [runs, setRuns] = useState<RunAPIData[]>([]);
  const [stateFilter, setStateFilter] = useState(query.state || "");
  const [errorFilter, setErrorFilter] = useState(query.error || "");
  const { guid } = query;

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [limit, offset, stateFilter, errorFilter]);

  async function load() {
    const params = {
      guid,
      limit,
      offset,
    };

    if (stateFilter !== "") {
      params["state"] = stateFilter;
    }

    if (errorFilter !== "") {
      params["hasError"] = errorFilter;
    }

    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/runs`, params);
    setLoading(false);
    if (response?.runs) {
      setRuns(response.runs);
      setTotal(response.total);
    }
  }

  async function enqueueScheduleRun() {
    setLoading(true);
    try {
      const { source } = await execApi(
        "get",
        `/api/${apiVersion}/source/${guid}`
      );
      await execApi(
        "post",
        `/api/${apiVersion}/schedule/${source.schedule.guid}/run`
      );
      await load();
      successHandler.set({ message: "run enqueued" });
    } finally {
      setLoading(false);
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (guid) {
      url += "tab=runs&";
    }
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
      {guid && window.location.pathname.match("source") ? (
        <>
          <Button
            size="sm"
            variant="warning"
            onClick={() => {
              enqueueScheduleRun();
            }}
          >
            Run Now
          </Button>
          <hr />
          <br />
        </>
      ) : null}

      <Row>
        <Col>
          <strong>{total} runs with these filters</strong>
        </Col>
        <Col>
          State:{" "}
          <ButtonGroup>
            <Button
              size="sm"
              variant={stateFilter === "" ? "success" : "info"}
              onClick={() => setStateFilter("")}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "running" ? "success" : "info"}
              onClick={() => setStateFilter("running")}
            >
              Running
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "complete" ? "success" : "info"}
              onClick={() => setStateFilter("complete")}
            >
              Complete
            </Button>
            <Button
              size="sm"
              variant={stateFilter === "stopped" ? "success" : "info"}
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
              variant={errorFilter === "" ? "success" : "info"}
              onClick={() => setErrorFilter("")}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={errorFilter === "true" ? "success" : "info"}
              onClick={() => setErrorFilter("true")}
            >
              True
            </Button>
            <Button
              size="sm"
              variant={errorFilter === "false" ? "success" : "info"}
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
          </tr>
        </thead>
        <tbody>
          {runs.map((run) => {
            return (
              <Fragment key={`profile-${run.guid}`}>
                <tr>
                  <td>
                    Guid:{" "}
                    <Link href="/run/[guid]" as={`/run/${run.guid}`}>
                      <a>{run.guid}</a>
                    </Link>
                  </td>
                  <td>
                    <Moment fromNow>{run.createdAt}</Moment>
                  </td>
                  <td>
                    <Link
                      prefetch={false}
                      href={`/${run.creatorType}/${run.creatorGuid}`}
                    >
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
                    <code>{JSON.stringify(run.filter)}</code>
                  </td>
                </tr>

                <tr>
                  <td colSpan={7} style={{ border: 0 }}>
                    <Alert variant="secondary">
                      <Row>
                        <Col>
                          <Link
                            href="/imports/[creatorGuid]"
                            as={`/imports/${run.guid}`}
                          >
                            <a>Imports Created: {run.importsCreated}</a>
                          </Link>
                        </Col>
                        <Col>Profiles Created: {run.profilesCreated}</Col>
                        <Col>Profiles Imported: {run.profilesImported}</Col>
                        <Col>Profiles Exported: {run.profilesExported}</Col>
                      </Row>
                    </Alert>
                  </td>
                </tr>

                {run.error ? (
                  <tr>
                    <td colSpan={7} style={{ border: 0 }}>
                      <Alert variant="warning">
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

function RunDurationChart({ runs }) {
  const chartData = [];
  const typeTotals = {};

  runs.map((run) => {
    const type = run.creatorType;
    if (run.completedAt) {
      if (!typeTotals[type]) {
        typeTotals[type] = [];
      }
      const start = NodeMoment(run.createdAt).format("YYYY-MM-DDTHH:mm:ss");
      const durationMinutes =
        (Date.parse(run.completedAt) - Date.parse(run.createdAt)) / 1000 / 60;
      typeTotals[type].push({ x: start, y: durationMinutes });
    }
  });

  for (const type in typeTotals) {
    chartData.push({
      id: type,
      data: typeTotals[type].sort((a, b) => {
        return a.x - b.x;
      }),
    });
  }

  if (chartData.length === 0) {
    return null;
  }

  return (
    <Row>
      <Col md={12} style={{ height: 450 }}>
        <h3>Run Duration Times</h3>
        <ResponsiveLine
          data={chartData}
          colors={{ scheme: "category10" }}
          useMesh={true}
          animate={false}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          curve={"monotoneX"}
          lineWidth={10}
          pointSize={15}
          xScale={{
            type: "time",
            format: "%Y-%m-%dT%H:%M:%S",
            precision: "second",
          }}
          xFormat="time:%Y-%m-%dT%H:%M:%S"
          yScale={{
            type: "linear",
          }}
          axisBottom={{
            format: "%Y-%m-%d %H:%M",
            tickValues: 5,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "minutes",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Col>
    </Row>
  );
}
