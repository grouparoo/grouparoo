import { useState, useEffect } from "react";
import { Actions } from "../../utils/apiData";
import Link from "next/link";
import { Row, Col, Card, Table, Alert } from "react-bootstrap";
import {
  GrouparooChart,
  ChartLinData,
} from "../../components/visualizations/grouparooChart";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/resque";
import { StatusHandler } from "../../utils/statusHandler";

const maxSampleLength = 30;

export default function ResqueOverview(props) {
  const { statusHandler }: { statusHandler: StatusHandler } = props;
  const [queues, setQueues] = useState({});
  const [workers, setWorkers] = useState({});
  const [leader, setLeader] = useState("");
  const [failedCount, setFailedCount] = useState(0);
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState<ChartLinData>([]);

  useEffect(() => {
    statusHandler.subscribe("resque-overview", () => {
      load();
    });

    return () => {
      statusHandler.unsubscribe("resque-overview");
    };
  }, []);

  function load() {
    const _chartData: ChartLinData = [];
    const samples = statusHandler.samples;

    let _queues = {};
    let _workers = {};
    let _stats = {};
    let _leader = "";
    let _failedCount = 0;

    samples.forEach(({ metrics, timestamp }) => {
      const resqueDetails: Actions.ResqueResqueDetails["resqueDetails"] = JSON.parse(
        metrics.find(
          (m) => m.collection === "cluster" && m.topic === "resqueDetails"
        ).metadata
      );

      console.log(resqueDetails);

      _queues = resqueDetails?.queues || _queues;
      _workers = resqueDetails?.workers || _workers;
      _stats = resqueDetails?.stats || _stats;
      _leader = resqueDetails?.leader || _leader;
      _failedCount = _queues["failed"] || _failedCount;

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
      for (const i in queueNames) {
        if (!_chartData[i]) _chartData[i] = [];
        _chartData[i].push({ x: timestamp, y: _queues[queueNames[i]].length });
        if (_chartData[i].length > maxSampleLength) {
          _chartData[i].shift();
        }
      }
    });

    setWorkers(_workers);
    setStats(_stats);
    setQueues(_queues);
    setLeader(_leader);
    setFailedCount(_failedCount);
    setChartData(_chartData);
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
              data={chartData}
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
