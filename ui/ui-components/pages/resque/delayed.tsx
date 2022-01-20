import { useState, useEffect } from "react";
import { UseApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { Table, Row, Col } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/Resque";
import LoadingButton from "../../components/LoadingButton";
import { errorHandler, successHandler } from "../../eventHandlers";

export default function ResqueDelayedList(props) {
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [timestamps, setTimestamps] = useState([]);
  const [delayedJobs, setDelayedJobs] = useState({});
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response = await execApi(
      "get",
      "/resque/delayedjobs",
      {
        limit,
        offset,
      },
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
    setLoading(false);
  }

  async function delDelayed(timestamp, count) {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      await execApi("post", "/resque/delDelayed", {
        timestamp: timestamp,
        count: count,
      });
      successHandler.set({ message: "deleted" });
      await load();
      setLoading(false);
    }
  }

  async function runDelayed(timestamp, count) {
    setLoading(true);
    await execApi("post", "/resque/runDelayed", {
      timestamp: timestamp,
      count: count,
    });
    successHandler.set({ message: "run" });
    await load();
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Delayed Resque Tasks</title>
      </Head>

      <ResqueTabs />

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
                                  <LoadingButton
                                    loading={loading}
                                    onClick={() => runDelayed(t.key, jidx)}
                                    variant="warning"
                                    size="sm"
                                  >
                                    Run Now
                                  </LoadingButton>
                                </td>
                                <td>
                                  <LoadingButton
                                    loading={loading}
                                    onClick={() => delDelayed(t.key, jidx)}
                                    variant="danger"
                                    size="sm"
                                  >
                                    Remove
                                  </LoadingButton>
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
