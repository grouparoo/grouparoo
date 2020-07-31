import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Table, Row, Col, Button } from "react-bootstrap";
import Pagination from "../pagination";
import Router from "next/router";

export default function ResqueLocksList(props) {
  const { errorHandler, successHandler, query } = props;
  const { execApi } = useApi(props);
  const [locks, setLocks] = useState([]);
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
    setLoading(true);
    const response = await execApi("get", `/resque/locks`);
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
      await execApi("post", `/resque/delLock`, {
        lock: lock,
      });
      successHandler.set({ message: "lock deleted" });
      await load();
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    url += `tab=locks&`;
    if (offset && offset !== 0) url += `offset=${offset}&`;

    Router.push(Router.route, url, { shallow: true });
  }

  return (
    <>
      <h1>Locks ({locks.length})</h1>

      <Row>
        <Col md={12}>
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPress={setOffset}
          />

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
                    <td>{idx + offset + 1}</td>
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
