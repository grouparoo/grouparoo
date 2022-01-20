import { useState, useEffect, Fragment } from "react";
import { UseApi } from "../../hooks/useApi";
import { Table, Row, Col, Accordion, Button } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import ResqueTabs from "../../components/tabs/Resque";
import LoadingButton from "../../components/LoadingButton";
import { errorHandler, successHandler } from "../../eventHandlers";
import { Actions } from "../../utils/apiData";

type DisplayedWorker = {
  id: string;
  name: string;
  host: string;
  queues: string[];
  status: "working" | "pending";
  job: string;
  args: any[];
  delta: number;
};

export default function ResqueWorkersList(props) {
  const { execApi } = UseApi(props, errorHandler);
  const [workers, setWorkers] = useState<DisplayedWorker[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const { resqueDetails }: Actions.ResqueResqueDetails = await execApi(
      "get",
      `/resque/resqueDetails`,
      {},
      false
    );
    const { workerQueues: workerQueues }: Actions.ResqueLoadWorkerQueues =
      await execApi("get", `/resque/loadWorkerQueues`, {}, false);
    setLoading(false);

    const _workers: DisplayedWorker[] = [];

    for (const [workerName, worker] of Object.entries(resqueDetails.workers)) {
      const nameParts = workerName.split(":");
      const id = nameParts.pop();
      const host = nameParts.join(":");

      _workers.push({
        id,
        name: workerName,
        host,
        queues: workerQueues[workerName]?.split(",") ?? [],
        status: worker.payload ? "working" : "pending",
        job: worker.payload?.class,
        args: worker.payload?.args,
        delta: Math.round(
          (new Date().getTime() - new Date(worker.run_at).getTime()) / 1000
        ),
      });
    }

    setWorkers(_workers);

    setTimeout(() => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) element.scrollIntoView();
      }
    }, 100);
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
                  <strong>Host</strong>
                </td>
                <td>
                  <strong>ID</strong>
                </td>
                <td>
                  <strong>Queues</strong>
                </td>
                <td>
                  <strong>Status</strong>
                </td>
                <td>
                  <strong>Job</strong>
                </td>
                <td>
                  <strong>Args</strong>
                </td>
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => {
                return (
                  <tr key={`${worker.host}:${worker.id}`}>
                    <td
                      id={`${worker.host}:${worker.id}`.replace(/[\W_-]/g, "-")}
                    >
                      {worker.host}
                    </td>
                    <td>{worker.id}</td>
                    <td>
                      <Accordion>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <small>{worker.queues.length} queues</small>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <small>
                            {worker.queues.map((q, idx, arr) => (
                              <Fragment key={`${worker}-${q}`}>
                                {idx + 1}.{" "}
                                <Link href={`/resque/queue/${q}`}>
                                  <a>{q}</a>
                                </Link>
                                {idx < arr.length ? <br /> : ""}
                              </Fragment>
                            ))}
                          </small>
                        </Accordion.Collapse>
                      </Accordion>
                    </td>
                    <td>
                      <span className={worker.delta > 0 ? "text-success" : ""}>
                        {worker.status}{" "}
                        {worker.delta ? `(${worker.delta}s)` : null}
                      </span>
                    </td>
                    <td>{worker.job}</td>
                    <td>
                      <code>{JSON.stringify(worker.args, null, 2)}</code>
                    </td>
                    <td>
                      <LoadingButton
                        loading={loading}
                        onClick={() => {
                          forceCleanWorker(worker.name);
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
