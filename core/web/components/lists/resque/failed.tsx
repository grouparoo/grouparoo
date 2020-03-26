import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { ButtonToolbar, Button, Table, Modal, Row, Col } from "react-bootstrap";

export default function ({ apiVersion, errorHandler, query, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [failed, setFailed] = useState([]);
  const [focusedException, setFocusedException] = useState({
    exception: "",
    error: "",
    queue: "",
    worker: {},
    payload: { args: [] },
    renderedStack: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(query.page || 0);

  const perPage = 1000;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi("get", "/api/1/resque/resqueFailed", {
      start: page * perPage,
      stop: page * perPage + (perPage - 1),
    });

    setFailed(response.failed);
  }

  async function removeFailedJob(index) {
    await execApi("post", "/api/1/resque/removeFailed", { id: index });
    successHandler.set({ message: "removed" });
    await load();
  }

  async function retryFailedJob(index) {
    await execApi("post", "/api/1/resque/retryAndRemoveFailed", {
      id: index,
    });
    successHandler.set({ message: "retried" });
    await load();
  }

  async function removeAllFailedJobs() {
    if (window.confirm("Are you sure?")) {
      await execApi("post", "/api/1/resque/removeAllFailed");
      successHandler.set({ message: "removed all" });
      await load();
    }
  }

  async function retryAllFailedJobs() {
    if (window.confirm("Are you sure?")) {
      await execApi("post", "/api/1/resque/retryAndRemoveAllFailed");
      successHandler.set({ message: "retried all" });
      await load();
    }
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
      <h1>Failed Jobs ({failed.length})</h1>

      <Row>
        <Col md={12}>
          <ButtonToolbar>
            <Button
              onClick={() => {
                retryAllFailedJobs();
              }}
              size="sm"
              variant="warning"
            >
              Retry All
            </Button>
            &nbsp;
            <Button
              onClick={() => {
                removeAllFailedJobs();
              }}
              size="sm"
              variant="danger"
            >
              Remove All
            </Button>
          </ButtonToolbar>
        </Col>
        <br />
        <br />
      </Row>

      <Row>
        <Col md={12}>
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
                    <td>{idx + 1}</td>
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
                      <Button
                        onClick={() => retryFailedJob(idx)}
                        variant="warning"
                        size="sm"
                      >
                        Retry
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => removeFailedJob(idx)}
                        variant="danger"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
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
