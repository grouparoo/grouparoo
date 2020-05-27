import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Badge, Alert } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/stateBadge";
import { Typeahead } from "react-bootstrap-typeahead";
import AppTabs from "../../../components/tabs/app";

import { AppAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    appHandler,
    query,
    types,
    optionOptions,
  } = props;
  const { execApi } = useApi(errorHandler);
  const [app, setApp] = useState<AppAPIData>(props.app);
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState({ result: null, error: null });
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
      successHandler.set({ message: "App Updated" });
      if (response.app.state === "ready" && app.state === "draft") {
        Router.push("/apps");
      }
      setApp(response.app);
      appHandler.set(response.app);
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
    const response = await execApi("put", `/app/${guid}/test`, {
      options: app.options,
    });
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
        <title>Grouparoo: {app.name}</title>
      </Head>

      <AppTabs name={app.name} />

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
                              console.log(selected);
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
                            {optionOptions[opt.key].options.map((o, idx) => (
                              <option key={`opt~${opt.key}-${o}`} value={o}>
                                {o}{" "}
                                {optionOptions[opt.key]?.descriptions &&
                                optionOptions[opt.key]?.descriptions[idx]
                                  ? ` | ${
                                      optionOptions[opt.key]?.descriptions[idx]
                                    }`
                                  : null}
                              </option>
                            ))}
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

        <Row>
          <Col md={3}>
            <Button variant="secondary" onClick={test}>
              Test Connection
            </Button>
          </Col>
          <Col>
            {testResult.result !== null &&
            testResult.result !== undefined &&
            !testResult.error ? (
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
        <Button variant="primary" type="submit">
          Update
        </Button>

        <hr />

        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { app } = await execApi("get", `/app/${guid}`);
  const { types } = await execApi("get", `/appOptions`);
  const { options } = await execApi("get", `/app/${guid}/optionOptions`);
  return { app, types, optionOptions: options };
};
