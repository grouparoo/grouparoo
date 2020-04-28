import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import Moment from "react-moment";
import { Alert, Row, Col, Form, Button, Badge, Table } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";
import AppIcon from "../../appIcon";
import StateBadge from "../../stateBadge";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [guid, setGuid] = useState("");
  const [pluginOptions, setPluginOptions] = useState([]);
  const [run, setRun] = useState({
    guid: "",
    state: "",
    createdAt: "",
    updatedAt: "",
    completedAt: "",
    importsCreated: 0,
    profilesCreated: 0,
    profilesImported: 0,
    profilesExported: 0,
  });
  const [schedule, setSchedule] = useState({
    guid: "",
    name: "",
    state: "",
    direction: "",
    source: {
      guid: "",
      name: "",
      type: "string",
      app: {
        guid: "",
        type: "",
        icon: "",
      },
    },
    recurring: false,
    options: {},
    recurringFrequency: 0,
    recurringFrequencyMinutes: 0,
  });

  const { guid: sourceGuid } = query;

  useEffect(() => {
    loadSource();
  }, []);

  async function loadSource() {
    setLoading(true);

    const sourceResponse = await execApi(
      "get",
      `/api/${apiVersion}/source/${sourceGuid}`
    );
    setLoading(false);

    if (sourceResponse?.source?.schedule?.guid) {
      setGuid(sourceResponse.source.schedule.guid);
      load(sourceResponse.source.schedule.guid);
    }
  }

  async function load(_guid = guid) {
    setLoading(true);

    const scheduleResponse = await execApi(
      "get",
      `/api/${apiVersion}/schedule/${_guid}`
    );
    if (scheduleResponse?.schedule) {
      scheduleResponse.schedule.recurringFrequencyMinutes =
        scheduleResponse.schedule.recurringFrequency / (60 * 1000);
      setSchedule(scheduleResponse.schedule);
      setPluginOptions(scheduleResponse.pluginOptions);
    }

    const runsResponse = await execApi("get", `/api/${apiVersion}/runs`, {
      guid: _guid,
      limit: 1,
    });
    if (runsResponse?.runs) {
      setRun(runsResponse.runs[0]);
    }

    setLoading(false);
  }

  async function edit(event) {
    event.preventDefault();
    const response = await execApi(
      "put",
      `/api/${apiVersion}/schedule/${guid}`,
      Object.assign({}, schedule, { state: "ready" })
    );
    if (response?.schedule) {
      successHandler.set({ message: "Schedule Updated" });
      response.schedule.recurringFrequencyMinutes =
        response.schedule.recurringFrequency / (60 * 1000);
      setSchedule(response.schedule);
      if (response.schedule.state === "ready" && schedule.state === "draft") {
        Router.push("/source/[guid]", `/source/${schedule.source.guid}`);
      }
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/schedule/${guid}`
      );
      if (response) {
        Router.push({
          pathname: `/source/${sourceGuid}`,
          query: { tab: "overview" },
        });
      }
    }
  }

  const update = async (event) => {
    const _schedule = Object.assign({}, schedule);
    _schedule[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    _schedule.recurringFrequency =
      _schedule.recurringFrequencyMinutes * (60 * 1000);
    setSchedule(_schedule);
  };

  function updateOption(key, value) {
    const _schedule = Object.assign({}, schedule);
    _schedule.options[key] = value;
    setSchedule(_schedule);
  }

  return (
    <>
      <p>
        <span className="text-muted">{schedule.guid}</span>
      </p>

      <Form id="form" onSubmit={edit} noValidate>
        <Row>
          <Col md={1}>
            <br />
            <AppIcon src={schedule?.source?.app?.icon} fluid size={100} />
          </Col>
          <Col>
            <h2>
              Schedule for source{" "}
              <Badge variant="secondary">{schedule.source.name}</Badge>
            </h2>
            <StateBadge state={schedule.state} />
            <br />
            <br />
            <Form.Group controlId="recurring">
              <Form.Check
                type="checkbox"
                label="Recurring"
                checked={schedule.recurring}
                onChange={(e) => update(e)}
              />
            </Form.Group>
            {schedule.recurring ? (
              <Row>
                <Col>
                  <Form.Group controlId="recurringFrequencyMinutes">
                    <Form.Label>Recurring Frequency (minutes)</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      min={1}
                      placeholder="Recurring Frequency"
                      value={schedule.recurringFrequencyMinutes.toString()}
                      onChange={(e) => update(e)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Alert variant="success">
                    <strong>Most Recent Run</strong>
                    {run ? (
                      <>
                        <br /> State: {run.state}
                        <br />
                        {run.createdAt ? (
                          <>
                            Started <Moment fromNow>{run.createdAt}</Moment>
                            <ul>
                              <li>Imports Created: {run.importsCreated}</li>
                              <li>Profiles Created: {run.profilesCreated}</li>
                              <li>Profiles Imported: {run.profilesImported}</li>
                              <li>Profiles Exported: {run.profilesExported}</li>
                            </ul>
                          </>
                        ) : (
                          <span>never run</span>
                        )}
                        {run.completedAt ? (
                          <p>
                            Completed <Moment fromNow>{run.completedAt}</Moment>
                          </p>
                        ) : null}
                        <p>
                          <Link href="/run/[guid]" as={`/run/${run.guid}`}>
                            <a>See More</a>
                          </Link>
                        </p>
                      </>
                    ) : (
                      <p>no runs yet</p>
                    )}{" "}
                  </Alert>
                </Col>
                <Col>
                  <Alert variant="info">
                    <p>
                      <strong>Next Run</strong>
                      <br />
                      {run?.updatedAt &&
                      Date.parse(run.updatedAt) + schedule.recurringFrequency >
                        new Date().getTime() &&
                      schedule.recurringFrequencyMinutes > 0 ? (
                        <>
                          in{" "}
                          <Moment
                            add={{
                              minutes: schedule.recurringFrequencyMinutes,
                            }}
                            toNow
                            ago
                          >
                            {run.updatedAt}
                          </Moment>
                        </>
                      ) : null}

                      {(run?.updatedAt &&
                        Date.parse(run.updatedAt) +
                          schedule.recurringFrequency <=
                          new Date().getTime() &&
                        schedule.recurringFrequencyMinutes) ||
                      !run ? (
                        schedule.recurring ? (
                          <strong>ASAP</strong>
                        ) : (
                          "N/A"
                        )
                      ) : null}
                    </p>
                  </Alert>
                </Col>
              </Row>
            ) : null}
            <>
              <p>
                <strong>Options for a {schedule.source.type} Schedule</strong>
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
                                  schedule.options[opt.key] === col.key
                                }
                                onClick={() => updateOption(opt.key, col.key)}
                              />
                            </td>
                            <td>
                              <strong>{col.key}</strong>
                            </td>
                            {col.description ? (
                              <td>{col.description}</td>
                            ) : null}

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
                        value={schedule.options[opt.key]}
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
                        value={schedule.options[opt.key]}
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
                  ) : null}
                </div>
              ))}
            </>
          </Col>
        </Row>

        <Button variant="primary" type="submit" disabled={loading}>
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
