import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Button, Table, Row, Col } from "react-bootstrap";
import Pagination from "../pagination";
import Router from "next/router";

export default function ResqueQueue(props) {
  const { errorHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [queue, setQueue] = useState(query.queue || "");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    if (queue === "") {
      return;
    }

    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/resque/queued`, {
      queue: queue,
      limit,
      offset,
    });
    setLoading(false);

    setJobs(response.jobs);
    setTotal(response.queueLength);
  }

  async function delQueue() {
    if (window.confirm("Are you sure?")) {
      await execApi("post", `/resque/delQueue`, { queue });
      window.location.href = "/resque";
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    url += `tab=queue&`;
    url += `queue=${queue}&`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    Router.push(Router.route, url, { shallow: true });
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
        {queue} ({total})
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
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPress={setOffset}
          />

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
                    <td>{offset + idx + 1}</td>
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

          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPress={setOffset}
          />
        </Col>
      </Row>
    </>
  );
}
