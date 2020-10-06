import { useApi } from "../../../hooks/useApi";
import SourceTabs from "../../../components/tabs/source";
import Head from "next/head";
import { useState } from "react";
import Moment from "react-moment";
import { Alert, Row, Col, Form, Badge, Table } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { useRouter } from "next/router";
import Link from "next/link";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/stateBadge";

import { ScheduleAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, source, run, pluginOptions } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState<ScheduleAPIData>(props.schedule);
  const [recurringFrequencyMinutes, setRecurringFrequencyMinutes] = useState(
    schedule.recurringFrequency / (60 * 1000)
  );

  async function edit(event) {
    event.preventDefault();

    const _schedule = Object.assign({}, schedule, { state: "ready" });
    if (schedule.state === "ready") {
      delete _schedule.options; // they are immutable and cannot be changed once set; server will return an error
    }
    if (recurringFrequencyMinutes) {
      _schedule.recurringFrequency = recurringFrequencyMinutes * (60 * 1000);
    }

    setLoading(true);
    const response = await execApi(
      "put",
      `/schedule/${schedule.guid}`,
      _schedule
    );
    setLoading(false);
    if (response?.schedule) {
      setRecurringFrequencyMinutes(
        response.schedule.recurringFrequency / (60 * 1000)
      );
      setSchedule(response.schedule);
      if (response.schedule.state === "ready" && schedule.state === "draft") {
        router.push(
          "/source/[guid]/overview",
          `/source/${schedule.source.guid}/overview`
        );
      } else {
        successHandler.set({ message: "Schedule Updated" });
      }
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi("delete", `/schedule/${schedule.guid}`);
      if (response) {
        router.push(`/source/${source.guid}/overview`);
      }
    }
  }

  const update = async (event) => {
    const _schedule = Object.assign({}, schedule);
    _schedule[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setSchedule(_schedule);
  };

  function updateOption(key, value) {
    const _schedule = Object.assign({}, schedule);
    _schedule.options[key] = value;
    setSchedule(_schedule);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <Form id="form" onSubmit={edit} noValidate>
        <Row>
          <Col md={1}>
            <br />
            <AppIcon src={schedule?.source?.app?.icon} fluid size={100} />
          </Col>
          <Col>
            <h2>
              Schedule for source{" "}
              <Badge variant="info">{schedule.source.name}</Badge>
            </h2>
            <StateBadge state={schedule.state} />
            <br />
            <br />
            <Form.Group controlId="recurring">
              <Form.Check
                type="checkbox"
                label="Recurring"
                disabled={loading}
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
                      disabled={loading}
                      value={recurringFrequencyMinutes.toString()}
                      onChange={(e) =>
                        setRecurringFrequencyMinutes(parseInt(e.target.value))
                      }
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
                          <Link
                            href="/run/[guid]/edit"
                            as={`/run/${run.guid}/edit`}
                          >
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
                      new Date(run.updatedAt).getTime() +
                        schedule.recurringFrequency >
                        new Date().getTime() &&
                      recurringFrequencyMinutes > 0 ? (
                        <>
                          in{" "}
                          <Moment
                            add={{
                              minutes: recurringFrequencyMinutes,
                            }}
                            toNow
                            ago
                          >
                            {run.updatedAt}
                          </Moment>
                        </>
                      ) : null}

                      {(run?.updatedAt &&
                        new Date(run.updatedAt).getTime() +
                          schedule.recurringFrequency <=
                          new Date().getTime() &&
                        recurringFrequencyMinutes) ||
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
              <hr />
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
                    <Table striped bordered size="sm">
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
                                disabled={schedule.state !== "draft"}
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
                        disabled={schedule.state !== "draft"}
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
                        disabled={loading}
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

            <hr />

            <LoadingButton variant="primary" type="submit" disabled={loading}>
              Update
            </LoadingButton>

            <br />
            <br />

            <LoadingButton
              variant="danger"
              disabled={loading}
              size="sm"
              onClick={handleDelete}
            >
              Delete
            </LoadingButton>
          </Col>
        </Row>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${guid}`);
  const { schedule, pluginOptions } = await execApi(
    "get",
    `/schedule/${source.schedule.guid}`
  );
  const { runs } = await execApi("get", `/runs`, {
    guid: source.schedule.guid,
    limit: 1,
  });

  return { source, schedule, pluginOptions, run: runs ? runs[0] : null };
};
