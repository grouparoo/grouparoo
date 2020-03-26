import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Button, Table, Row, Col } from "react-bootstrap";

export default function ({ apiVersion, errorHandler, query, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [timestamps, setTimestamps] = useState([]);
  const [delayedJobs, setDelayedJobs] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(query.page || 0);

  const perPage = 1000;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      "/api/1/resque/delayedjobs",
      {
        start: page * perPage,
        stop: page * perPage + (perPage - 1),
      },
      null,
      null,
      false
    );

    const _timestamps = [];

    if (response.delayedjobs) {
      Object.keys(response.delayedjobs).forEach(function (t) {
        _timestamps.push({
          date: new Date(parseInt(t)),
          key: t,
        });
      });
    }

    setDelayedJobs(response.delayedjobs);
    setTimestamps(_timestamps);
  }

  async function delDelayed(timestamp, count) {
    if (window.confirm("Are you sure?")) {
      await execApi("post", "/api/1/resque/delDelayed", {
        timestamp: timestamp,
        count: count,
      });
      successHandler.set({ message: "deleted" });
      await load();
    }
  }

  async function runDelayed(timestamp, count) {
    await execApi("post", "/api/1/resque/runDelayed", {
      timestamp: timestamp,
      count: count,
    });
    successHandler.set({ message: "run" });
    await load();
  }

  return (
    <>
      <h1>Delayed Jobs</h1>

      <Row>
        <Col md={12}>
          {timestamps.map((t, tidx) => {
            return (
              <div key={t.date.getTime()} className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">{t.date.toString()}</h3>
                </div>
                <div className="panel-body">
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <td>
                          <strong>Class</strong>
                        </td>
                        <td>
                          <strong>Queue</strong>
                        </td>
                        <td>
                          <strong>Arguments</strong>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    </thead>
                    <tbody>
                      {delayedJobs?.[t.key]
                        ? delayedJobs[t.key].tasks.map((job, jidx) => {
                            return (
                              <tr
                                key={`${t.date.getTime()}-${
                                  job.queue
                                }-${JSON.stringify(job.args)}`}
                              >
                                <td>{job.class}</td>
                                <td>{job.queue}</td>
                                <td>
                                  <ul>
                                    {job.args.map((a) => {
                                      return (
                                        <li key={`arg-${tidx}-${jidx}`}>
                                          {JSON.stringify(a)}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </td>
                                <td>
                                  <Button
                                    onClick={() => runDelayed(t.key, jidx)}
                                    variant="warning"
                                    size="sm"
                                  >
                                    Run Now
                                  </Button>
                                </td>
                                <td>
                                  <Button
                                    onClick={() => delDelayed(t.key, jidx)}
                                    variant="danger"
                                    size="sm"
                                  >
                                    Remove
                                  </Button>
                                </td>
                              </tr>
                            );
                          })
                        : null}
                    </tbody>
                  </Table>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
