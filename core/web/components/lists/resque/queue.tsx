import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Button, Table, Row, Col } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [queue, setQueue] = useState(query.queue || "");
  const [page, setPage] = useState(query.page || 0);
  const [jobs, setJobs] = useState([]);
  const [queueLength, setQueueLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const perPage = 1000;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    if (queue === "") {
      return;
    }

    const response = await execApi("get", `/api/${apiVersion}/resque/queued`, {
      queue: queue,
      start: page * perPage,
      stop: page * perPage + (perPage - 1),
    });

    setJobs(response.jobs);
    setQueueLength(response.queueLength);
  }

  async function delQueue() {
    if (window.confirm("Are you sure?")) {
      await execApi("post", `/api/${apiVersion}/resque/delQueue`, { queue });
      Router.push("/resque");
    }
  }

  if (queue === "") {
    return (
      <p>
        <a href="/resque?tab=overview">choose a queue</a>
      </p>
    );
  }

  return (
    <>
      <h1>
        {queue} ({queueLength})
      </h1>

      <p>
        <Button
          onClick={() => {
            delQueue();
          }}
          variant="danger"
          size="sm"
        >
          Delete Queue
        </Button>
      </p>

      <Row>
        <Col md="12">
          <Table id="jobTable" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Class</th>
                <th>Arguments</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => {
                return (
                  <tr key={JSON.stringify(job)}>
                    <td>{idx + 1}</td>
                    <td>{job.class}</td>
                    <td>
                      <ul>
                        {job.args.map((a, aidx) => {
                          return (
                            <li key={`arg-${idx}-${aidx}`}>
                              {JSON.stringify(a)}
                            </li>
                          );
                        })}
                      </ul>
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
