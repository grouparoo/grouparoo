import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { Row, Col, Card, Table, Alert } from "react-bootstrap";
import {
  GrouparooChart,
  ChartLinData,
} from "../../components/visualizations/grouparooChart";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/resque";

const refreshInterval = 1000 * 2;
const maxSampleLength = 30;
const samples: ChartLinData = [];

export default function ResqueOverview(props) {
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [queues, setQueues] = useState({});
  const [workers, setWorkers] = useState({});
  const [leader, setLeader] = useState("");
  const [failedCount, setFailedCount] = useState(0);
  const [stats, setStats] = useState({});

  let loading = false;
  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();
    timer = setInterval(() => {
      load();
    }, refreshInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function load() {
    if (loading) return;
    loading = true;

    let _queues = {};
    let _workers = {};
    let _stats = {};
    let _leader = "";

    const detailsResponse: Actions.ResqueResqueDetails = await execApi(
      "get",
      `/resque/resqueDetails`,
      {},
      null,
      null,
      false
    );
    _queues = detailsResponse?.resqueDetails?.queues || {};
    _workers = detailsResponse?.resqueDetails?.workers || {};
    _stats = detailsResponse?.resqueDetails?.stats || {};
    _leader = detailsResponse?.resqueDetails?.leader || "";

    const failedResponse: Actions.ResqueFailedCount = await execApi(
      "get",
      `/resque/resqueFailedCount`,
      {},
      null,
      null,
      false
    );

    Object.keys(_workers).forEach((workerName) => {
      const worker = _workers[workerName];
      if (typeof worker === "string") {
        _workers[workerName] = {
          status: worker,
          statusString: worker,
        };
      } else {
        worker.delta = Math.round(
          (new Date().getTime() - new Date(worker.run_at).getTime()) / 1000
        );
        worker.statusString =
          "working on " +
          worker.queue +
          "#" +
          worker.payload.class +
          " for " +
          worker.delta +
          "s";
      }
    });

    const queueNames = Object.keys(_queues);
    const now = new Date().getTime();
    for (const i in queueNames) {
      if (!samples[i]) samples[i] = [];
      samples[i].push({ x: now, y: _queues[queueNames[i]].length });
      if (samples[i].length > maxSampleLength) {
        samples[i].shift();
      }
    }

    setWorkers(_workers);
    setStats(_stats);
    setQueues(_queues);
    setLeader(_leader);
    setFailedCount(failedResponse?.failedCount);
    loading = false;
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
            <GrouparooChart
              data={samples}
              keys={Object.keys(queues)}
              minPoints={maxSampleLength}
            />
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
                      <a href="/resque/failed">
                        <strong>failed</strong>
                      </a>
                    </td>
                    <td>
                      <a href="/resque/failed">
                        <strong>{failedCount || 0}</strong>
                      </a>
                    </td>
                  </tr>

                  {Object.keys(queues).map((q) => {
                    return (
                      <tr key={q}>
                        <td>
                          <a href={`/resque/queue/${q}`}>{q}</a>
                        </td>
                        <td>
                          <a href={`/resque/queue/${q}`}>{queues[q].length}</a>
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
                          <span
                            className={worker.delta > 0 ? "text-success" : ""}
                          >
                            {name}
                          </span>
                        </td>
                        <td>
                          <span
                            className={worker.delta > 0 ? "text-primary" : ""}
                          >
                            {worker.statusString}
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
