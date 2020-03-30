import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import AppIcon from "../../appIcon";
import Link from "next/link";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const [connectionApps, setConnectionApps] = useState([]);
  const [destination, setDestination] = useState({
    name: "",
    appGuid: "",
    type: "",
  });

  useEffect(() => {
    loadApps();
  }, []);

  async function loadApps() {
    const connectionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/destinations/connectionApps`
    );
    if (connectionsResponse?.connectionApps) {
      setConnectionApps(connectionsResponse.connectionApps);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await execApi(
      "post",
      `/api/${apiVersion}/destination`,
      destination
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination Created" });
      Router.push(`/destination/${response.destination.guid}?tab=edit`);
    }
  };

  const update = async (event) => {
    const _destination = Object.assign({}, destination);
    _destination[event.target.id] = event.target.value;
    setDestination(_destination);
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
            placeholder="Destination Name"
            value={destination.name}
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
            value={destination.type}
          />
        </Form.Group>

        <Form.Group controlId="appGuid">
          <Form.Control
            hidden={true}
            type="text"
            disabled
            value={destination.appGuid}
          />
        </Form.Group>

        <Row>
          {connectionApps.map((pair) => {
            const { connection: _connection, app: _app } = pair;
            return (
              <Col key={`connection-${_app.name}-${_connection.name}`} md={3}>
                <Card
                  bg={
                    destination.appGuid === _app.guid &&
                    destination.type === _connection.name
                      ? "success"
                      : "light"
                  }
                  onClick={() => {
                    const _destination = Object.assign({}, destination);
                    _destination.type = _connection.name;
                    _destination.appGuid = _app.guid;
                    setDestination(_destination);
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
        <Button type="submit">Create Destination</Button>
      </Form>
    </>
  );
}
