import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../appIcon";

export default function ({ apiVersion, errorHandler }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [app, setApp] = useState({ type: "" });

  useEffect(() => {
    loadOptions();
  }, []);

  async function loadOptions() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/appOptions`);
    setLoading(false);
    if (response?.types) {
      setTypes(response.types);
    }
  }

  async function create(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/app`, app);
    setLoading(false);
    if (response?.app) {
      return Router.push(`/app/${response.app.guid}`);
    }
  }

  return (
    <>
      <Form id="form" onSubmit={create}>
        <Row>
          {types.map((_app) => {
            return (
              <Col key={`plugin-${_app.name}`} md={3}>
                <Card
                  bg={app.type === _app.name ? "success" : "light"}
                  onClick={() => {
                    const __app = Object.assign({}, app);
                    __app.type = _app.name;
                    setApp(__app);
                  }}
                >
                  <Card.Body>
                    <AppIcon
                      className="card-img"
                      src={_app.plugin.icon}
                      size={1000}
                    />
                    <br />
                    <br />
                    <strong>App</strong>: {_app.name}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <br />

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
