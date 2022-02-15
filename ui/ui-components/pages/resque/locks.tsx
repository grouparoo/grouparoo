import { useApi } from "../../contexts/api";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
import { successHandler } from "../../eventHandlers";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import Pagination from "../../components/Pagination";
import ResqueTabs from "../../components/tabs/Resque";
import LoadingButton from "../../components/LoadingButton";
import { Actions } from "../../utils/apiData";

export default function ResqueLocksList(props) {
  const router = useRouter();
  const { client } = useApi();
  const [locks, setLocks] = useState([]);
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
    const response = await client.request<Actions.ResqueLocks>(
      "get",
      `/resque/locks`
    );
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
      await client.request("post", `/resque/delLock`, {
        lock: lock,
      });
      successHandler.set({ message: "lock deleted" });
      await load();
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Resque Locks</title>
      </Head>

      <ResqueTabs />

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
                      <LoadingButton
                        loading={loading}
                        onClick={() => {
                          delLock(l.lock);
                        }}
                        size="sm"
                        variant="warning"
                      >
                        Delete
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
    </>
  );
}
