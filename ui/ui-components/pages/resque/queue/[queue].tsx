import { useState, useEffect } from "react";
import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { Table, Row, Col } from "react-bootstrap";
import Pagination from "../../../components/Pagination";
import { useRouter } from "next/router";
import Head from "next/head";
import ResqueTabs from "../../../components/tabs/Resque";
import LoadingButton from "../../../components/LoadingButton";
import { errorHandler } from "../../../eventHandlers";

export default function ResqueQueue(props) {
  const router = useRouter();
  const { client } = useApi();
  const [queue, setQueue] = useState(router.query.queue || "");
  const [jobs, setJobs] = useState([]);
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
    const response = await client.request("get", `/resque/queued`, {
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
      await client.request("post", `/resque/delQueue`, { queue });
      window.location.href = "/resque";
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque Queue: {queue}</title>
      </Head>

      <ResqueTabs />

      <h1>
        {queue} ({total})
      </h1>

      <p>
        <LoadingButton
          loading={loading}
          onClick={() => {
            delQueue();
          }}
          variant="danger"
          size="sm"
        >
          Delete Queue
        </LoadingButton>
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
