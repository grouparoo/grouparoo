import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Row, Col } from "react-bootstrap";
import Chart from "../../components/visualizations/resqueChart";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/resque";

const refreshInterval = 1000 * 2;
const maxSampleLength = 20;
const samples = [];

export default function ResqueOverview(props) {
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [queues, setQueues] = useState({});
  const [workers, setWorkers] = useState({});
  const [failedCount, setFailedCount] = useState(0);
  const [stats, setStats] = useState({});

  let timer: NodeJS.Timeout;

  useEffect(() => {
    load();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  async function load() {
    let _queues = {};
    let _workers = {};
    let _stats = {};

    let response = await execApi(
      "get",
      `/resque/resqueDetails`,
      {},
      null,
      null,
      false
    );
    _queues = response?.resqueDetails?.queues || {};
    _workers = response?.resqueDetails?.workers || {};
    _stats = response?.resqueDetails?.stats || {};

    response = await execApi(
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

    const sample = { time: new Date() };
    for (const name in _queues) {
      sample[name] = _queues[name].length;
    }

    samples.push(sample);
    if (samples.length > maxSampleLength) {
      samples.shift();
    }

    setWorkers(_workers);
    setStats(_stats);
    setQueues(_queues);
    setFailedCount(response?.failedCount);

    timer = setTimeout(() => {
      load();
    }, refreshInterval);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque Overview</title>
      </Head>

      <ResqueTabs />

      <h1>Resque Overview</h1>

      <Row>
        <Col md={12} style={{ height: 450 }}>
          <Chart data={samples} queueNames={Object.keys(queues)} />
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <h3>Stats:</h3>
          <table className="table table-hover">
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
          </table>
        </Col>

        <Col md={4}>
          <h2>Queues ({Object.keys(queues).length})</h2>

          <table className="table table-hover ">
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
          </table>
        </Col>

        <Col md={5}>
          <h2>Workers ({Object.keys(workers).length})</h2>

          <table className="table table-striped table-hover ">
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
                      <span className={worker.delta > 0 ? "text-success" : ""}>
                        {name}
                      </span>
                    </td>
                    <td>
                      <span className={worker.delta > 0 ? "text-primary" : ""}>
                        {worker.statusString}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
}
