import { useState, useEffect } from "react";
import { UseApi } from "../../hooks/useApi";
import { Table, Row, Col } from "react-bootstrap";
import Head from "next/head";
import ResqueTabs from "../../components/tabs/Resque";
import { errorHandler } from "../../eventHandlers";

export default function ResqueRedis(props) {
  const { execApi } = UseApi(props, errorHandler);
  const [redisInfo, setRedisInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/resque/redisInfo`);
    setLoading(false);
    if (response?.redisInfo) {
      setRedisInfo(response.redisInfo);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Redis</title>
      </Head>

      <ResqueTabs />

      <h1>Redis Information</h1>
      <p>
        <em>
          Note: This data was retrieved from the ActionHero Resque Queue
          connection. If you are using Redis cluster or split Redis
          configurations this data will be inaccurate.
        </em>
      </p>
      <Row>
        <Col md={12}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {redisInfo.map((row) => {
                const parts = row.split(":");
                if (parts.length === 1 && row.length < 2) {
                  return null;
                } else if (parts.length === 1) {
                  return (
                    <tr key={row} className="table-primary">
                      <td colSpan={2}>
                        <h3>{row}</h3>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={row}>
                      <td>{parts[0]}</td>
                      <td>{parts[1]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
