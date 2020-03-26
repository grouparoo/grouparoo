import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Table, Row, Col, Button } from "react-bootstrap";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [locks, setLocks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/resque/locks`);
    const _locks = [];
    Object.keys(response.locks).forEach(function (l) {
      _locks.push({
        lock: l,
        at: new Date(parseInt(response.locks[l]) * 1000),
      });
    });
    setLoading(false);
    setLocks(_locks);
  }

  async function delLock(lock) {
    if (window.confirm("Are you sure?")) {
      await execApi("post", `/api/${apiVersion}/resque/delLock`, {
        lock: lock,
      });
      successHandler.set({ message: "lock deleted" });
      await load();
    }
  }

  return (
    <>
      <h1>Locks ({locks.length})</h1>

      <Row>
        <Col md={12}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Expires</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {locks.map((l, idx) => {
                return (
                  <tr key={`${idx}-${l.at.getTime()}`}>
                    <td>{idx + 1}</td>
                    <td>{l.lock}</td>
                    <td>{l.at.toString()}</td>
                    <td>
                      <Button
                        onClick={() => {
                          delLock(l.lock);
                        }}
                        size="sm"
                        variant="warning"
                      >
                        Delete
                      </Button>
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
