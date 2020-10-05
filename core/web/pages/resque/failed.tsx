import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { ButtonToolbar, Button, Table, Modal, Row, Col } from "react-bootstrap";
import Pagination from "../../components/pagination";
import Router from "next/router";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/resque";
import LoadingButton from "../../components/loadingButton";

export default function ResqueFailedList(props) {
  const { errorHandler, query, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState([]);
  const [focusedException, setFocusedException] = useState({
    exception: "",
    error: "",
    queue: "",
    worker: {},
    payload: { args: [] },
    renderedStack: "",
  });
  const [showModal, setShowModal] = useState(false);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", "/resque/resqueFailed", {
      offset,
      limit,
    });

    setFailed(response.failed);
    setTotal(response.total);
    setLoading(false);
  }

  async function removeFailedJob(index) {
    setLoading(true);
    await execApi("post", "/resque/removeFailed", { id: index });
    successHandler.set({ message: "removed" });
    await load();
    setLoading(false);
  }

  async function retryFailedJob(index) {
    setLoading(true);
    await execApi("post", "/resque/retryAndRemoveFailed", {
      id: index,
    });
    successHandler.set({ message: "retried" });
    await load();
    setLoading(false);
  }

  async function removeAllFailedJobs() {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      await execApi("post", "/resque/removeAllFailed");
      successHandler.set({ message: "removed all" });
      await load();
      setLoading(false);
    }
  }

  async function retryAllFailedJobs() {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      await execApi("post", "/resque/retryAndRemoveAllFailed");
      successHandler.set({ message: "retried all" });
      await load();
      setLoading(false);
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}`;
    if (offset && offset !== 0) url += `?offset=${offset}&`;

    Router.push(Router.route, url, { shallow: true });
  }

  function renderFailureStack(index) {
    const _focusedException = failed[index];
    _focusedException.renderedStack = "";
    if (_focusedException.backtrace) {
      _focusedException.renderedStack = _focusedException.backtrace.join(
        "\r\n"
      );
    }

    const showModal = true;
    setFocusedException(_focusedException);
    setShowModal(true);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Failed Tasks</title>
      </Head>

      <ResqueTabs />

      <h1>Failed Jobs ({total})</h1>

      <Row>
        <Col md={12}>
          <ButtonToolbar>
            <LoadingButton
              disabled={loading}
              onClick={() => {
                retryAllFailedJobs();
              }}
              size="sm"
              variant="warning"
            >
              Retry All
            </LoadingButton>
            &nbsp;
            <LoadingButton
              disabled={loading}
              onClick={() => {
                removeAllFailedJobs();
              }}
              size="sm"
              variant="danger"
            >
              Remove All
            </LoadingButton>
          </ButtonToolbar>
        </Col>
        <br />
        <br />
      </Row>

      <Row>
        <Col md={12}>
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPress={setOffset}
          />

          <Table id="failureTable" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Date</th>
                <th>Exception</th>
                <th>Queue</th>
                <th>Method</th>
                <th>Worker</th>
                <th>Arguments</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {failed.map((f, idx) => {
                return (
                  <tr key={`failure-${idx}`}>
                    <td>{offset + idx + 1}</td>
                    <td>{f.failed_at}</td>
                    <td>
                      <a onClick={() => renderFailureStack(idx)}>➕</a>
                      &nbsp;
                      <strong>
                        {f.exception}: {f.error}
                      </strong>
                    </td>
                    <td>
                      <span className="text-success">{f.queue}</span>
                    </td>
                    <td>{f.payload.class}</td>
                    <td>{f.worker}</td>
                    <td>
                      <ul>
                        {f.payload.args.map((a, aidx) => {
                          return (
                            <li key={`arg-${idx}-${aidx}`}>
                              {JSON.stringify(a)}
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                    <td>
                      <LoadingButton
                        disabled={loading}
                        onClick={() => retryFailedJob(offset + idx)}
                        variant="warning"
                        size="sm"
                      >
                        Retry
                      </LoadingButton>
                    </td>
                    <td>
                      <LoadingButton
                        disabled={loading}
                        onClick={() => removeFailedJob(offset + idx)}
                        variant="danger"
                        size="sm"
                      >
                        Remove
                      </LoadingButton>
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

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        size="xl"
      >
        <Modal.Header>
          <h3>
            {focusedException.exception}: {focusedException.error}
          </h3>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Queue</strong>: {focusedException.queue}{" "}
          </p>
          <p>
            <strong>Worker</strong>: {focusedException.worker}{" "}
          </p>
          <p>
            <strong>Payload</strong>:
          </p>
          <pre>
            {focusedException.payload
              ? JSON.stringify(focusedException.payload.args)
              : null}
          </pre>
          <p>
            <strong>Stack</strong>:
          </p>
          <pre>{focusedException.renderedStack}</pre>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
