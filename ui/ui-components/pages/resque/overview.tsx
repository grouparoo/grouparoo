import { useState, useEffect } from "react";
import { Actions } from "../../utils/apiData";
import { UseApi } from "../../hooks/useApi";
import Link from "next/link";
import { Row, Col, Card, Table, Alert } from "react-bootstrap";
import {
  GrouparooChart,
  ChartLinData,
} from "../../components/visualizations/GrouparooChart";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/Resque";

const maxSampleLength = 30;
const DELAY = 1000 * 3;

export default function ResqueOverview(props) {
  const { execApi } = UseApi(props, props.errorHandler);
  const {
    resqueDetails,
    failedCount: _failedCount,
  }: {
    resqueDetails: Actions.ResqueResqueDetails["resqueDetails"];
    failedCount: Actions.ResqueResqueDetails["failedCount"];
  } = props;
  const [queues, setQueues] = useState(resqueDetails.queues);
  const [workers, setWorkers] = useState(
    formatWorkersForDisplay(resqueDetails.workers)
  );
  const [leader, setLeader] = useState(resqueDetails.leader);
  const [failedCount, setFailedCount] = useState(_failedCount);
  const [stats, setStats] = useState(resqueDetails.stats);
  const [chartData, setChartData] = useState<ChartLinData>([]);
  const [unmounted, setUnmounted] = useState(false);

  let timer;

  useEffect(() => {
    load();

    return () => {
      setUnmounted(true);
      clearInterval(timer);
    };
  }, []);

  async function load() {
    const response: Actions.ResqueResqueDetails = await execApi(
      "get",
      "/resque/resqueDetails",
      {},
      false
    );

    if (response?.resqueDetails) {
      const now = new Date().getTime();
      const queueNames = Object.keys(response.resqueDetails.queues);
      for (const i in queueNames) {
        if (!chartData[i]) chartData[i] = [];
        chartData[i].push({
          x: now,
          y: response.resqueDetails.queues[queueNames[i]].length,
        });
      }

      for (const i in chartData) {
        if (chartData[i].length > maxSampleLength) chartData[i].shift();
      }

      setQueues(response.resqueDetails.queues);
      setWorkers(formatWorkersForDisplay(response.resqueDetails.workers));
      setLeader(response.resqueDetails.leader);
      setFailedCount(response.failedCount);
      setStats(response.resqueDetails.stats);
      setChartData(chartData);
    }

    if (!unmounted) timer = setTimeout(load, DELAY);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque Overview</title>
      </Head>

      <ResqueTabs />

      <h1>Resque Overview</h1>

      <Row>
        <Col md={12}>
          <Card style={{ height: 450 }}>
            <GrouparooChart data={chartData} keys={Object.keys(queues)} />
          </Card>
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={2}>
          <Card>
            <Card.Header>
              <h5>Stats</h5>
            </Card.Header>
            <Card.Body>
              <Table hover striped size="sm">
                <tbody>
                  {Object.keys(stats).map((k) => {
                    const v = stats[k];
                    if (k.indexOf(":") > 0) {
                      return null;
                    }

                    return (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card>
            <Card.Header>
              <h5>Queues ({Object.keys(queues).length})</h5>
            </Card.Header>
            <Card.Body>
              <Table hover striped size="sm">
                <thead>
                  <tr>
                    <th>Queue Name</th>
                    <th>Jobs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-warning">
                    <td>
                      <Link href="/resque/failed">
                        <a>
                          <strong>failed</strong>
                        </a>
                      </Link>
                    </td>
                    <td>
                      <Link href="/resque/failed">
                        <a>
                          <strong>{failedCount || 0}</strong>
                        </a>
                      </Link>
                    </td>
                  </tr>

                  {Object.keys(queues).map((q) => {
                    return (
                      <tr key={q}>
                        <td>
                          <Link href={`/resque/queue/${q}`}>
                            <a>{q}</a>
                          </Link>
                        </td>
                        <td>
                          <Link href={`/resque/queue/${q}`}>
                            <a>{queues[q].length}</a>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card>
            <Card.Header>
              <h5>Leader</h5>
            </Card.Header>
            <Card.Body>
              {leader !== "" ? (
                leader
              ) : (
                <Alert variant="danger">No Leader</Alert>
              )}
            </Card.Body>
          </Card>

          <br />

          <Card>
            <Card.Header>
              <h5>Workers ({Object.keys(workers).length})</h5>
            </Card.Header>
            <Card.Body>
              <Table hover striped size="sm">
                <thead>
                  <tr>
                    <th>Worker Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(workers).map((name) => {
                    const worker = workers[name];
                    return (
                      <tr key={name}>
                        <td>
                          <Link
                            href={
                              "/resque/workers#" +
                              `${worker.host}:${worker.id}`.replace(
                                /[\W_-]/g,
                                "-"
                              )
                            }
                          >
                            <a>
                              <span
                                className={
                                  worker.delta > 0 ? "text-success" : ""
                                }
                              >
                                {name}
                              </span>
                            </a>
                          </Link>
                        </td>
                        <td>
                          <span
                            className={worker.delta > 0 ? "text-primary" : ""}
                          >
                            {worker.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

ResqueOverview.getInitialProps = async function (ctx) {
  const { execApi } = UseApi(ctx);
  const { resqueDetails, failedCount }: Actions.ResqueResqueDetails =
    await execApi("get", "/resque/resqueDetails");

  return { resqueDetails, failedCount };
};

function formatWorkersForDisplay(
  _workers: Actions.ResqueResqueDetails["resqueDetails"]["workers"]
) {
  const response: {
    [workerName: string]: {
      host: string;
      id: string;
      status: string;
      delta: number;
    };
  } = {};

  for (const [name, worker] of Object.entries(_workers)) {
    const delta = Math.ceil(
      (new Date().getTime() - new Date(worker.run_at).getTime()) / 1000
    );
    const nameParts = name.split(":");
    const id = nameParts.pop();
    const host = nameParts.join(":");

    response[name] = {
      host,
      id,
      delta,
      status: worker.payload
        ? "working on " +
          worker.queue +
          "#" +
          worker.payload.class +
          " for " +
          delta +
          "s"
        : "pending",
    };
  }

  return response;
}
