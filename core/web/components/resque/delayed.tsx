import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Button, Table, Row, Col } from "react-bootstrap";
import Pagination from "../pagination";
import Router from "next/router";

export default function ({ errorHandler, query, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [timestamps, setTimestamps] = useState([]);
  const [delayedJobs, setDelayedJobs] = useState({});
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams();
    const response = await execApi(
      "get",
      "/resque/delayedjobs",
      {
        limit,
        offset,
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
      setTotal(response.total);
    }

    setDelayedJobs(response.delayedjobs);
    setTimestamps(_timestamps);
  }

  async function delDelayed(timestamp, count) {
    if (window.confirm("Are you sure?")) {
      await execApi("post", "/resque/delDelayed", {
        timestamp: timestamp,
        count: count,
      });
      successHandler.set({ message: "deleted" });
      await load();
    }
  }

  async function runDelayed(timestamp, count) {
    await execApi("post", "/resque/runDelayed", {
      timestamp: timestamp,
      count: count,
    });
    successHandler.set({ message: "run" });
    await load();
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    url += `tab=delayed&`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    Router.push(Router.route, url, { shallow: true });
  }

  return (
    <>
      <h1>Delayed Jobs ({total} unique timestamps)</h1>

      <Row>
        <Col md={12}>
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPress={setOffset}
          />

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
