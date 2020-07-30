import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Badge, Alert } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/stateBadge";
import { Typeahead } from "react-bootstrap-typeahead";
import AppTabs from "../../../components/tabs/app";
import Loader from "../../../components/loader";

import { AppAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    appHandler,
    query,
    types,
    environmentVariableOptions,
    optionOptions,
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [app, setApp] = useState<AppAPIData>(props.app);
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    error: string;
    message: string;
  }>({ success: null, error: null, message: null });
  const [ranTest, setRanTest] = useState(false);
  const { guid } = query;

  async function edit(event) {
    event.preventDefault();
    const state = app.state === "ready" ? undefined : "ready";
    setLoading(true);
    const response = await execApi(
      "put",
      `/app/${guid}`,
      Object.assign({}, app, { state })
    );
    setLoading(false);
    if (response?.app) {
      if (response.app.state === "ready" && app.state === "draft") {
        Router.push("/apps");
      } else {
        successHandler.set({ message: "App Updated" });
        setApp(response.app);
        appHandler.set(response.app);
      }
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi("delete", `/app/${guid}`);
      if (response?.success) {
        successHandler.set({ message: "App Deleted" });
        Router.push("/apps");
      }
    }
  }

  async function test() {
    setLoading(true);
    setRanTest(false);
    setTestResult({ success: null, message: null, error: null });
    const response = await execApi("put", `/app/${guid}/test`, {
      options: app.options,
    });
    setLoading(false);
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

  const updateOption = async (optKey, optValue) => {
    const _app = Object.assign({}, app);
    _app.options[optKey] = optValue;
    setApp(_app);
  };

  return (
    <>
      <Head>
        <title>Grouparoo: {app.name || `Draft`}</title>
      </Head>

      <AppTabs app={app} />

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
                        <code>{opt.key}</code>
                      </Form.Label>
                      {(() => {
                        if (optionOptions[opt.key]?.type === "typeahead") {
                          return (
                            <>
                              <Typeahead
                                id="typeahead"
                                labelKey="key"
                                onChange={(selected) => {
                                  updateOption(opt.key, selected[0]?.key);
                                }}
                                options={optionOptions[opt.key]?.options.map(
                                  (k, idx) => {
                                    return {
                                      key: k,
                                      descriptions:
                                        optionOptions[k]?.descriptions[idx],
                                    };
                                  }
                                )}
                                placeholder={`Select ${opt.key}`}
                                renderMenuItemChildren={(opt, props, idx) => {
                                  return [
                                    <span key={`opt-${idx}-key`}>
                                      {opt.key}
                                      <br />
                                    </span>,
                                    <small
                                      key={`opt-${idx}-descriptions`}
                                      className="text-small"
                                    >
                                      <em>
                                        Descriptions:{" "}
                                        {opt.descriptions
                                          ? opt.descriptions.join(", ")
                                          : "None"}
                                      </em>
                                    </small>,
                                  ];
                                }}
                                defaultSelected={
                                  app.options[opt.key]
                                    ? [app.options[opt.key]]
                                    : undefined
                                }
                              />
                              <Form.Text className="text-muted">
                                {opt.description}
                              </Form.Text>
                            </>
                          );
                        } else if (optionOptions[opt.key]?.type === "list") {
                          return (
                            <>
                              <Form.Control
                                as="select"
                                required={opt.required}
                                defaultValue={app.options[opt.key] || ""}
                                onChange={(e) => {
                                  updateOption(e.target.id, e.target.value);
                                }}
                              >
                                <option value={""} disabled>
                                  Choose an option
                                </option>
                                {optionOptions[opt.key].options.map(
                                  (o, idx) => (
                                    <option
                                      key={`opt~${opt.key}-${o}`}
                                      value={o}
                                    >
                                      {o}{" "}
                                      {optionOptions[opt.key]?.descriptions &&
                                      optionOptions[opt.key]?.descriptions[idx]
                                        ? ` | ${
                                            optionOptions[opt.key]
                                              ?.descriptions[idx]
                                          }`
                                        : null}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                              <Form.Text className="text-muted">
                                {opt.description}
                              </Form.Text>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <Form.Control
                                required={opt.required}
                                type="text"
                                defaultValue={app.options[opt.key]}
                                onChange={(e) => {
                                  updateOption(e.target.id, e.target.value);
                                }}
                              />
                              <Form.Text className="text-muted">
                                {opt.description}
                              </Form.Text>
                            </>
                          );
                        }
                      })()}
                    </Form.Group>
                  );
                })}
              </>
            ) : null}

            {environmentVariableOptions.length > 0 ? (
              <Row>
                <Col>
                  <p>
                    Environment Variable Options for Apps:{" "}
                    {environmentVariableOptions.sort().map((envOpt) => (
                      <Badge key={`envOpt-${envOpt}`} variant="info">
                        {envOpt}
                      </Badge>
                    ))}
                  </p>
                  <br />
                </Col>
              </Row>
            ) : null}

            <Row>
              <Col>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={test}
                  disabled={loading}
                >
                  Test Connection
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {testResult.success !== null &&
                testResult.success !== undefined &&
                !testResult.error ? (
                  <Alert variant="success">
                    <strong>Test Passed</strong> {testResult.message}
                  </Alert>
                ) : ranTest ? (
                  <Alert variant="warning">
                    <strong>Test Failed</strong> {testResult.error}
                  </Alert>
                ) : null}
                {loading ? <Loader /> : null}
              </Col>
            </Row>

            <hr />

            <Button variant="primary" type="submit">
              Update
            </Button>

            <br />
            <br />

            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { app } = await execApi("get", `/app/${guid}`);
  const { types, environmentVariableOptions } = await execApi(
    "get",
    `/appOptions`
  );
  const { options } = await execApi("get", `/app/${guid}/optionOptions`);
  return { app, types, environmentVariableOptions, optionOptions: options };
};
