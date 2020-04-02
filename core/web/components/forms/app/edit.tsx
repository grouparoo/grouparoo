import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Badge, Alert } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../appIcon";
import StateBadge from "../../stateBadge";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [testResult, setTestResult] = useState({ result: null, error: null });
  const [ranTest, setRanTest] = useState(false);
  const [app, setApp] = useState({
    icon: "",
    guid: "",
    name: "",
    type: "",
    state: "",
    options: {},
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);

    const appResponse = await execApi("get", `/api/${apiVersion}/app/${guid}`);
    if (appResponse?.app) {
      setApp(appResponse.app);
    }

    const typesResponse = await execApi("get", `/api/${apiVersion}/appOptions`);
    if (typesResponse?.types) {
      setTypes(typesResponse.types);
    }

    setLoading(false);
  }

  async function edit(event) {
    event.preventDefault();
    const state = app.state === "ready" ? undefined : "ready";
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/app/${guid}`,
      Object.assign({}, app, { state })
    );
    setLoading(false);
    if (response?.app) {
      successHandler.set({ message: "App Updated" });
      await load();
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/app/${guid}`
      );
      if (response?.success) {
        successHandler.set({ message: "App Deleted" });
        Router.push("/apps");
      }
    }
  }

  async function test() {
    const response = await execApi(
      "put",
      `/api/${apiVersion}/app/${guid}/test`,
      { options: app.options }
    );
    if (response) {
      setRanTest(true);
      setTestResult(response.test);
    }
  }

  let typeOptions = [];
  types.forEach((type) => {
    if (app.type === type.name) {
      typeOptions = type.options;
    }
  });

  const update = async (event) => {
    const _app = Object.assign({}, app);
    _app[event.target.id] = event.target.value;
    setApp(_app);
  };

  const updateOption = async (event) => {
    const _app = Object.assign({}, app);
    _app.options[event.target.id] = event.target.value;
    setApp(_app);
  };

  return (
    <>
      <p>
        <span className="text-muted">{app.guid}</span>
      </p>

      <Form id="form" onSubmit={edit}>
        <Row>
          <Col md={1}>
            <br />
            <AppIcon src={app.icon} fluid size={100} />
          </Col>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={app.name}
                onChange={(e) => update(e)}
              />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={app.type}
                onChange={(e) => update(e)}
                disabled
              >
                {types.map((type) => (
                  <option key={`type-${type.name}`}>{type.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <p>
              <StateBadge state={app.state} />
            </p>
          </Col>
        </Row>
        {typeOptions.length > 0 ? (
          <>
            <hr />
            <strong>Options for a {app.type} app</strong>
            <br />
            <br />

            {typeOptions.map((opt) => {
              return (
                <Form.Group key={`opt-${opt.key}`} controlId={opt.key}>
                  <Form.Label>
                    {opt.required ? (
                      <>
                        <Badge variant="info">required</Badge>&nbsp;
                      </>
                    ) : null}
                    <code>{opt.key}</code>: <small>{opt.description}</small>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required={opt.required}
                    placeholder="..."
                    value={app.options[opt.key] || ""}
                    onChange={(e) => updateOption(e)}
                  />
                </Form.Group>
              );
            })}
          </>
        ) : null}

        <Button variant="primary" type="submit">
          Update
        </Button>

        <hr />

        <Row>
          <Col md={3}>
            <Button variant="secondary" onClick={test}>
              Test Connection
            </Button>
          </Col>
          <Col>
            {testResult.result ? (
              <Alert variant="success">Test Passed</Alert>
            ) : ranTest ? (
              <Alert variant="warning">Test Failed</Alert>
            ) : null}
            {testResult.error ? (
              <Alert variant="danger">{testResult.error}</Alert>
            ) : null}
          </Col>
        </Row>

        <hr />

        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </>
  );
}
