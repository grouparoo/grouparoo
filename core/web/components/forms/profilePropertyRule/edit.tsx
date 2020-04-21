import { useState, useEffect, Fragment } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Button, Form, Table, Badge } from "react-bootstrap";
import Router from "next/router";
import Loader from "../../loader";
import AppIcon from "../../appIcon";
import StateBadge from "../../stateBadge";
import ProfilePreview from "./profilePreview";

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
  const [filterOptions, setFilterOptions] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const [profilePropertyRule, setProfilePropertyRule] = useState({
    key: "",
    guid: "",
    type: "",
    unique: false,
    state: "",
    sourceGuid: "",
    options: {},
    filters: [],
    source: {
      name: "",
      guid: "",
      type: "",
      app: { name: "", guid: "", icon: "" },
    },
  });
  const [localFilters, setLocalFilters] = useState([]);

  const { guid } = query;

  useEffect(() => {
    async function loadAll() {
      await loadOptions();
      await loadFilterOptions();
      await load();
      await loadProfilePropertyRules();
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
      setLocalFilters(response.profilePropertyRule.filters);
    }
  }

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
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

  async function loadFilterOptions() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRule/${guid}/filterOptions`
    );
    setLoading(false);
    if (response?.options) {
      setFilterOptions(response.options);
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
        Object.assign({}, profilePropertyRule, {
          filters: localFilters,
          state: "ready",
        })
      );
      setLoading(false);
      if (response?.profilePropertyRule) {
        successHandler.set({ message: "Profile Property Rule Updated" });
        setProfilePropertyRule(response.profilePropertyRule);
        setPluginOptions(response.pluginOptions);
        profilePropertyRulesHandler.set();
        if (
          response.profilePropertyRule.state === "ready" &&
          profilePropertyRule.state === "draft"
        ) {
          Router.push(`/profilePropertyRules`);
        }
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

  function addRule() {
    const ruleLimit = 10;

    const _localFilters = [...localFilters];
    if (_localFilters.length >= ruleLimit) {
      alert(`only ${ruleLimit} rules allowed`);
      return;
    }

    _localFilters.push({
      key: filterOptions[0].key,
      op: filterOptions[0].ops[0],
      match: "",
    });

    setLocalFilters(_localFilters);
  }

  function deleteRule(idx: number) {
    const _localFilters = [...localFilters];
    _localFilters.splice(idx, 1);
    setLocalFilters(_localFilters);
  }

  if (profilePropertyRule.guid === "") {
    return <Loader />;
  }

  let rowChanges = false;

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
          <Col md={8}>
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
                  <Table bordered striped size="sm" variant="light">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Key</th>
                        {opt?.options[0]?.description ? (
                          <th>Description</th>
                        ) : null}
                        {opt?.options[0]?.examples ? <th>Examples</th> : null}
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
                  <>
                    <Form.Group controlId="key">
                      <Form.Control
                        required
                        as="textarea"
                        rows={5}
                        value={profilePropertyRule.options[opt.key]}
                        onChange={(e) =>
                          updateOption(opt.key, e.target["value"])
                        }
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
                    <p>
                      Profile Property Variables:{" "}
                      <Badge variant="light">{`{{ now }}`}</Badge>
                      &nbsp;
                      <Badge variant="light">{`{{ createdAt }}`}</Badge>&nbsp;
                      <Badge variant="light">{`{{ updatedAt }}`}</Badge>&nbsp;
                      {profilePropertyRules
                        .sort((a, b) => {
                          if (a.key > b.key) {
                            return 1;
                          } else {
                            return -1;
                          }
                        })
                        .map((ppr) => (
                          <Fragment key={`var-badge-${ppr.key}`}>
                            <Badge variant="light">{`{{ ${ppr.key} }}`}</Badge>
                            &nbsp;
                          </Fragment>
                        ))}
                    </p>
                    <p>
                      For dates, you can expand them to the <code>sql</code>,{" "}
                      <code>date</code>, <code>time</code>, or <code>iso</code>{" "}
                      formats, ie:{" "}
                      <Badge variant="light">{`{{ now.sql }}`}</Badge>
                    </p>
                  </>
                ) : null}
              </div>
            ))}

            {filterOptions.length > 0 ? (
              <>
                <hr />
                <strong>Filters</strong>
                <p>
                  Are there any criteria where you’d want to filter out rows
                  from being included in{" "}
                  <Badge variant="info">{profilePropertyRule.key}</Badge>?
                </p>

                <Table bordered size="sm">
                  <thead>
                    <tr>
                      <td />
                      <td>
                        <strong>Key</strong>
                      </td>
                      <td>
                        <strong>Operation</strong>
                      </td>
                      <td>
                        <strong>Value</strong>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                  </thead>

                  <tbody>
                    {localFilters.map((localFilter, idx) => {
                      let rowChanged = false;
                      if (
                        !rulesAreEqual(
                          profilePropertyRule.filters[idx],
                          localFilters[idx]
                        )
                      ) {
                        rowChanged = true;
                        rowChanges = true;
                      }

                      return (
                        <tr key={`rule-${localFilter.key}-${idx}`}>
                          <td>
                            <h5>
                              <Badge variant={rowChanged ? "warning" : "light"}>
                                {idx}
                              </Badge>
                            </h5>
                          </td>
                          <td>
                            <Form.Group
                              controlId={`${localFilter.key}-key-${idx}`}
                            >
                              <Form.Control
                                as="select"
                                value={localFilter.key}
                                onChange={(e: any) => {
                                  const _localFilters = [...localFilters];
                                  localFilter.key = e.target.value;
                                  _localFilters[idx] = localFilter;
                                  setLocalFilters(_localFilters);
                                }}
                              >
                                {filterOptions.map((filter) => (
                                  <option
                                    key={`ruleKeyOpt-${filter.key}-${idx}`}
                                  >
                                    {filter.key}
                                  </option>
                                ))}
                              </Form.Control>
                            </Form.Group>
                          </td>

                          <td>
                            <Form.Group
                              controlId={`${localFilter.key}-op-${idx}`}
                            >
                              <Form.Control
                                as="select"
                                value={localFilter.op}
                                onChange={(e: any) => {
                                  const _localFilters = [...localFilters];
                                  localFilter.op = e.target.value;
                                  _localFilters[idx] = localFilter;
                                  setLocalFilters(_localFilters);
                                }}
                              >
                                {filterOptions.filter(
                                  (fo) => fo.key === localFilter.key
                                ).length === 1
                                  ? filterOptions
                                      .filter(
                                        (fo) => fo.key === localFilter.key
                                      )[0]
                                      .ops.map((op) => (
                                        <option
                                          key={`op-opt-${localFilter.key}-${op}`}
                                        >
                                          {op}
                                        </option>
                                      ))
                                  : null}
                              </Form.Control>
                            </Form.Group>
                          </td>

                          <td>
                            <Form.Group
                              controlId={`${localFilter.key}-match-${idx}`}
                            >
                              <Form.Control
                                required
                                type="text"
                                value={localFilter.match.toString()}
                                onChange={(e: any) => {
                                  const _localFilter = [...localFilters];
                                  localFilter.match = e.target.value;
                                  _localFilter[idx] = localFilter;
                                  setLocalFilters(_localFilter);
                                }}
                              />
                            </Form.Group>
                          </td>

                          <td>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => {
                                deleteRule(idx);
                              }}
                            >
                              x
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                {localFilters.length < profilePropertyRule.filters.length ||
                rowChanges ? (
                  <p>
                    <Badge variant="warning">Unsaved Rule Changes</Badge>
                  </p>
                ) : null}
                <Button size="sm" variant="info" onClick={addRule}>
                  Add Filter
                </Button>
              </>
            ) : null}

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
          <Col md={3}>
            <ProfilePreview
              apiVersion={apiVersion}
              errorHandler={errorHandler}
              profilePropertyRule={profilePropertyRule}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
}

function rulesAreEqual(a, b) {
  let matched = true;

  const keys = [
    "key",
    "op",
    "match",
    "relativeMatchNumber",
    "relativeMatchUnit",
    "relativeMatchDirection",
  ];

  if (!a || !b) {
    return false;
  }

  for (const i in keys) {
    const key = keys[i];

    if (
      (a[key] === undefined || a[key] == null) &&
      (b[key] === undefined || b[key] == null)
    ) {
      continue;
    }

    if (a[key] !== b[key]) {
      matched = false;
      break;
    }
  }

  return matched;
}
