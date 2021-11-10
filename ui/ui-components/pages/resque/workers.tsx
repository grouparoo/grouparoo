import { useState, useEffect } from "react";
import { UseApi } from "../../hooks/useApi";
import { Table, Row, Col } from "react-bootstrap";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/Resque";
import LoadingButton from "../../components/LoadingButton";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";

export default function ResqueWorkersList(props) {
  const {
    errorHandler,
    successHandler,
  }: { errorHandler: ErrorHandler; successHandler: SuccessHandler } = props;
  const { execApi } = UseApi(props, errorHandler);
  const [workers, setWorkers] = useState({});
  const [workerQueues, setWorkerQueues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const { resqueDetails } = await execApi(
      "get",
      `/resque/resqueDetails`,
      {},
      null,
      null,
      false
    );
    const { workerQueues: _workerQueues } = await execApi(
      "get",
      `/resque/loadWorkerQueues`,
      {},
      null,
      null,
      false
    );
    setLoading(false);

    const _workers = resqueDetails.workers;
    const builtWorkerQueues = [];

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

    Object.keys(_workerQueues).forEach((workerName) => {
      const parts = workerName.split(":");
      const id = parts.pop();
      const host = parts.join(":");
      const queues = _workerQueues[workerName].split(",");

      let worker = {};
      if (_workers[workerName]) {
        worker = _workers[workerName];
      }

      builtWorkerQueues.push({
        id: id,
        host: host,
        queues: queues,
        worker: worker,
        workerName: workerName,
      });
    });

    setWorkers(_workers);
    setWorkerQueues(builtWorkerQueues);
  }

  async function forceCleanWorker(workerName) {
    if (window.confirm("Are you sure?")) {
      await execApi("post", `/resque/forceCleanWorker`, {
        workerName: workerName,
      });
      successHandler.set({ message: "worker removed" });
      await load();
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque Workers</title>
      </Head>

      <ResqueTabs />

      <h1>Workers ({Object.keys(workers).length})</h1>
      <Row>
        <Col md={12}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <td>
                  <strong>ID</strong>
                </td>
                <td>
                  <strong>Host</strong>
                </td>
                <td>
                  <strong>Queues</strong>
                </td>
                <td>
                  <strong>Status</strong>
                </td>
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              {workerQueues.map((w) => {
                return (
                  <tr key={w.workerName}>
                    <td>{w.id}</td>
                    <td>{w.host}</td>
                    <td>
                      <ul>
                        {w.queues.map((q) => {
                          return (
                            <li key={`${w}-${q}`}>
                              <a href={`/resque/queue/${q}`}>{q}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                    <td>
                      <span
                        className={w.worker.delta > 0 ? "text-success" : ""}
                      >
                        {w.worker.statusString}
                      </span>
                    </td>
                    <td>
                      <LoadingButton
                        disabled={loading}
                        onClick={() => {
                          forceCleanWorker(w.workerName);
                        }}
                        variant="danger"
                        size="sm"
                      >
                        Remove Worker
                      </LoadingButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
