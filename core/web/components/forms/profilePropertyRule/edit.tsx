import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Button, Form, Table, Badge } from "react-bootstrap";
import Router from "next/router";
import Loader from "../../loader";
import AppIcon from "../../appIcon";
import StateBadge from "../../stateBadge";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  profilePropertyRulesHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [pluginOptions, setPluginOptions] = useState([]);
  const [profilePropertyRule, setProfilePropertyRule] = useState({
    key: "",
    guid: "",
    type: "",
    unique: false,
    state: "",
    sourceGuid: "",
    options: {},
    source: {
      name: "",
      guid: "",
      type: "",
      app: { name: "", guid: "", icon: "" },
    },
  });

  const { guid } = query;

  useEffect(() => {
    async function loadAll() {
      await loadOptions();
      await load();
    }

    loadAll();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRule/${guid}`
    );
    setLoading(false);
    if (response?.profilePropertyRule) {
      setProfilePropertyRule(response.profilePropertyRule);
      setPluginOptions(response.pluginOptions);
    }
  }

  async function loadOptions() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRuleOptions`
    );
    setLoading(false);
    if (response?.types) {
      setTypes(response.types);
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (
      window.confirm(
        "Are you sure?  This will also update all profile properties with this key"
      )
    ) {
      setLoading(true);
      const response = await execApi(
        "put",
        `/api/${apiVersion}/profilePropertyRule/${guid}`,
        Object.assign({}, profilePropertyRule, { state: "ready" })
      );
      setLoading(false);
      if (response?.profilePropertyRule) {
        successHandler.set({ message: "Profile Property Rule Updated" });
        setProfilePropertyRule(response.profilePropertyRule);
        setPluginOptions(response.pluginOptions);
        profilePropertyRulesHandler.set();
      }
    }
  }

  async function handleDelete() {
    if (
      window.confirm(
        "Are you sure?  This will also delete all profile properties with this key"
      )
    ) {
      setLoading(true);
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/profilePropertyRule/${guid}`
      );
      setLoading(false);
      if (response) {
        Router.push("/profilePropertyRules");
      }
    }
  }

  const update = async (event) => {
    const _profilePropertyRule = Object.assign({}, profilePropertyRule);
    _profilePropertyRule[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setProfilePropertyRule(_profilePropertyRule);
  };

  function updateOption(key, value) {
    const _profilePropertyRule = Object.assign({}, profilePropertyRule);
    _profilePropertyRule.options[key] = value;
    setProfilePropertyRule(_profilePropertyRule);
  }

  if (profilePropertyRule.guid === "") {
    return <Loader />;
  }

  return (
    <>
      <Form id="form" onSubmit={onSubmit}>
        <Row>
          <Col md={1}>
            <br />
            <AppIcon
              src={profilePropertyRule.source.app.icon}
              fluid
              size={100}
            />
          </Col>
          <Col>
            <StateBadge state={profilePropertyRule.state} />
            <br />
            <br />

            <Form.Group controlId="key">
              <Form.Label>Key</Form.Label>
              <Form.Control
                required
                type="text"
                value={profilePropertyRule.key}
                onChange={(e) => update(e)}
              />
              <Form.Control.Feedback type="invalid">
                Key is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Profile Property Type</Form.Label>
              <Form.Control
                as="select"
                value={profilePropertyRule.type}
                onChange={(e) => update(e)}
              >
                {types.map((type) => (
                  <option key={`type-${type}`}>{type}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="unique">
              <Form.Check
                type="checkbox"
                label="Unique"
                checked={profilePropertyRule.unique}
                onChange={(e) => update(e)}
              />
            </Form.Group>

            <Form.Group controlId="sourceGuid">
              <Form.Label>Profile Property Rule Source</Form.Label>
              <Form.Control
                as="select"
                disabled
                value={profilePropertyRule.sourceGuid}
              >
                <option value={profilePropertyRule.source.guid}>
                  {profilePropertyRule.source.name}
                </option>
              </Form.Control>
            </Form.Group>

            <hr />

            <p>
              <strong>
                Options for a {profilePropertyRule.source.type} Profile Property
                Rule
              </strong>
            </p>
            {pluginOptions.map((opt, idx) => (
              <div key={`opt-${idx}`}>
                <p>
                  {opt.required ? (
                    <>
                      <Badge variant="info">required</Badge>&nbsp;
                    </>
                  ) : null}
                  <code>{opt.key}</code>: <small>{opt.description}</small>
                </p>

                {/* list options */}
                {opt.type === "list" ? (
                  <Table size="sm" variant="dark">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Key</th>
                        {opt?.options[0].description ? (
                          <th>Description</th>
                        ) : null}
                        {opt?.options[0].examples ? <th>Examples</th> : null}
                      </tr>
                    </thead>
                    <tbody>
                      {opt?.options?.map((col) => (
                        <tr key={`source-${col.key}`}>
                          <td>
                            <Form.Check
                              inline
                              type="radio"
                              id={col}
                              name={opt.key}
                              defaultChecked={
                                profilePropertyRule.options[opt.key] === col.key
                              }
                              onClick={() => updateOption(opt.key, col.key)}
                            />
                          </td>
                          <td>
                            <strong>{col.key}</strong>
                          </td>
                          {col.description ? <td>{col.description}</td> : null}

                          {col.examples ? (
                            <td>{col.examples.slice(0, 3).join(", ")}</td>
                          ) : null}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : null}

                {/* textarea options */}
                {opt.type === "text" ? (
                  <Form.Group controlId="key">
                    <Form.Control
                      required
                      type="text"
                      value={profilePropertyRule.options[opt.key]}
                      onChange={(e) => updateOption(opt.key, e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Key is required
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : null}

                {/* text options */}
                {opt.type === "textarea" ? (
                  <Form.Group controlId="key">
                    <Form.Control
                      required
                      as="textarea"
                      rows={5}
                      value={profilePropertyRule.options[opt.key]}
                      onChange={(e) => updateOption(opt.key, e.target["value"])}
                      placeholder="select statement with mustache template"
                      style={{
                        fontFamily:
                          'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        color: "#e83e8c",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Key is required
                    </Form.Control.Feedback>
                  </Form.Group>
                ) : null}
              </div>
            ))}

            <hr />
            <Button variant="primary" type="submit" active={!loading}>
              Update
            </Button>

            <hr />
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
