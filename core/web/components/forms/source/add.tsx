import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import AppIcon from "../../appIcon";
import Link from "next/link";
import Router from "next/router";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  sourceHandler,
  onClose,
}) {
  const { execApi } = useApi(errorHandler);
  const [tabKey, setTabKey] = useState("connection");
  const [connectionApps, setConnectionApps] = useState([]);
  const [connection, setConnection] = useState({ app: [], options: [] });
  const [source, setSource] = useState({
    name: "",
    appGuid: "",
    type: "",
    options: {},
  });

  useEffect(() => {
    loadApps();
  }, []);

  async function loadApps() {
    const connectionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/connectionApps`
    );
    if (connectionsResponse?.connectionApps) {
      setConnectionApps(connectionsResponse.connectionApps);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await execApi("post", `/api/${apiVersion}/source`, source);
    if (response?.source) {
      successHandler.set({ message: "Source Created" });
      Router.push(`/source/${response.source.guid}?tab=edit`);
    }
  };

  const update = async (event) => {
    const _source = Object.assign({}, source);
    _source[event.target.id] = event.target.value;
    setSource(_source);
  };

  if (connectionApps.length === 0) {
    return (
      <p>
        Please create an{" "}
        <Link href="/apps">
          <a>App</a>
        </Link>{" "}
        first.
      </p>
    );
  }

  return (
    <>
      <h2>Choose App and Connection</h2>

      <Form id="form" onSubmit={onSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            placeholder="Source Name"
            value={source.name}
            onChange={(e) => update(e)}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="type">
          <Form.Control
            hidden={true}
            type="text"
            disabled
            value={source.type}
          />
        </Form.Group>

        <Form.Group controlId="appGuid">
          <Form.Control
            hidden={true}
            type="text"
            disabled
            value={source.appGuid}
          />
        </Form.Group>

        <Row>
          {connectionApps.map((pair) => {
            const { connection: _connection, app: _app } = pair;
            return (
              <Col key={`connection-${_app.name}-${_connection.name}`} md={3}>
                <Card
                  bg={
                    source.appGuid === _app.guid &&
                    source.type === _connection.name
                      ? "success"
                      : "light"
                  }
                  onClick={() => {
                    const _source = Object.assign({}, source);
                    _source.type = _connection.name;
                    _source.appGuid = _app.guid;
                    setSource(_source);
                    setConnection(_connection);
                    setTabKey("details");
                  }}
                >
                  <Card.Body>
                    <AppIcon className="card-img" src={_app.icon} size={1000} />
                    <br />
                    <br />
                    <strong>App</strong>: {_app.name}
                    <br />
                    <strong>connection</strong>: {_connection.name}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <br />
        <Button type="submit">Create Source</Button>
      </Form>
    </>
  );
}
