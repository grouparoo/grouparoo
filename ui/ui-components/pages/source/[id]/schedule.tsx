import { useApi } from "../../../hooks/useApi";
import SourceTabs from "../../../components/tabs/source";
import Head from "next/head";
import { useState } from "react";
import Moment from "react-moment";
import { Alert, Row, Col, Form, Badge, Button, Table } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { useRouter } from "next/router";
import Link from "next/link";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
import DatePicker from "../../../components/datePicker";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { filtersAreEqual } from "../../../utils/filtersAreEqual";
import { makeLocal } from "../../../utils/makeLocal";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    source,
    run,
    pluginOptions,
    filterOptions,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    source: Models.SourceType;
    run: Models.RunType;
    pluginOptions: Actions.ScheduleView["pluginOptions"];
    filterOptions: Actions.ScheduleFilterOptions["options"];
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState<Models.ScheduleType>(props.schedule);
  const [localFilters, setLocalFilters] = useState<
    Actions.ScheduleView["schedule"]["filters"]
  >(makeLocal(props.schedule.filters));
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
    const response: Actions.ScheduleEdit = await execApi(
      "put",
      `/schedule/${schedule.id}`,
      Object.assign({}, _schedule, { filters: localFilters, state: "ready" })
    );
    if (response?.schedule) {
      setRecurringFrequencyMinutes(
        response.schedule.recurringFrequency / (60 * 1000)
      );
      setSchedule(response.schedule);
      if (response.schedule.state === "ready" && schedule.state === "draft") {
        router.push("/source/[id]/overview", `/source/${source.id}/overview`);
      } else {
        setLoading(false);
        successHandler.set({ message: "Schedule Updated" });
      }
    } else {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const { success }: Actions.ScheduleDestroy = await execApi(
        "delete",
        `/schedule/${schedule.id}`
      );
      if (success) {
        router.push(`/source/${source.id}/overview`);
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

  let rowChanges = false;

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>
      <SourceTabs source={source} />
      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Schedule`}
        badges={[
          <LockedBadge object={source} />,
          <>
            Source: <StateBadge state={source.state} />
          </>,
          <>
            Schedule: <StateBadge state={schedule.state} />
          </>,
        ]}
      />

      <Form id="form" onSubmit={edit} autoComplete="off">
        <fieldset disabled={schedule.locked !== null}>
          <Row>
            <Col>
              <Form.Group controlId="confirmProfiles">
                <Form.Check
                  type="checkbox"
                  label="Confirm that profiles exist when running schedule?"
                  disabled={loading}
                  checked={schedule.confirmProfiles}
                  onChange={(e) => update(e)}
                />
              </Form.Group>
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
                  {process.env.GROUPAROO_UI_EDITION !== "config" && (
                    <Col>
                      <Alert variant="success">
                        <strong>Most Recent Run</strong>
                        {run ? (
                          <>
                            <br /> State: {run.state}
                            <br />
                            {run.createdAt ? (
                              <>
                                Started {formatTimestamp(run.createdAt)}
                                <ul>
                                  <li>Imports Created: {run.importsCreated}</li>
                                  <li>
                                    Profiles Created: {run.profilesCreated}
                                  </li>
                                  <li>
                                    Profiles Imported: {run.profilesImported}
                                  </li>
                                </ul>
                              </>
                            ) : (
                              <span>never run</span>
                            )}
                            {run.completedAt ? (
                              <p>
                                Completed {formatTimestamp(run.completedAt)}
                              </p>
                            ) : null}
                            <p>
                              <Link
                                href="/run/[id]/edit"
                                as={`/run/${run.id}/edit`}
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
                  )}
                  {process.env.GROUPAROO_UI_EDITION !== "config" && (
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
                              <strong>Soon</strong>
                            ) : (
                              "N/A"
                            )
                          ) : null}
                        </p>
                      </Alert>
                    </Col>
                  )}
                </Row>
              ) : null}
              <>
                <hr />
                <p>
                  <strong>Options for a {source.type} Schedule</strong>
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
                      <>
                        <Form.Control
                          as="select"
                          required={opt.required}
                          defaultValue={
                            schedule.options[opt.key]?.toString() || ""
                          }
                          disabled={schedule.state !== "draft"}
                          onChange={(e) => {
                            updateOption(opt.key, e.target.value);
                          }}
                        >
                          <option value={""} disabled>
                            Select an option
                          </option>
                          {opt?.options?.map((col) => (
                            <option
                              key={`opt~${opt.key}-${col.key}`}
                              value={col.key}
                            >
                              {col.key}{" "}
                              {col.description ? ` | ${col.description} ` : ""}
                            </option>
                          ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                          {opt.description}
                        </Form.Text>
                      </>
                    ) : null}

                    {/* textarea options */}
                    {opt.type === "text" ? (
                      <Form.Group controlId="key">
                        <Form.Control
                          required
                          type="text"
                          disabled={schedule.state !== "draft"}
                          value={schedule.options[opt.key]?.toString()}
                          onChange={(e) =>
                            updateOption(opt.key, e.target.value)
                          }
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
                          value={schedule.options[opt.key]?.toString()}
                          disabled={schedule.state !== "draft"}
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

                {filterOptions.length > 0 ? (
                  <>
                    <hr />
                    <strong>Filters</strong>
                    <p>
                      Are there any criteria where you’d want to filter out rows
                      from being included in this Schedule?
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
                            !filtersAreEqual(
                              schedule.filters[idx],
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
                                  <Badge
                                    variant={rowChanged ? "warning" : "light"}
                                  >
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                {localFilter.key === "occurredAt" ? (
                                  <DatePicker
                                    selected={
                                      localFilter.match &&
                                      localFilter.match !== "null"
                                        ? new Date(
                                            parseInt(
                                              localFilter.match.toString()
                                            )
                                          )
                                        : new Date()
                                    }
                                    onChange={(d: Date) => {
                                      const _localFilter = [...localFilters];
                                      localFilter.match = d
                                        .getTime()
                                        .toString();
                                      _localFilter[idx] = localFilter;
                                      setLocalFilters(_localFilter);
                                    }}
                                  />
                                ) : (
                                  <Form.Group
                                    controlId={`${localFilter.key}-match-${idx}`}
                                  >
                                    <Form.Control
                                      required
                                      type="text"
                                      disabled={loading}
                                      value={localFilter.match.toString()}
                                      onChange={(e: any) => {
                                        const _localFilter = [...localFilters];
                                        localFilter.match = e.target.value;
                                        _localFilter[idx] = localFilter;
                                        setLocalFilters(_localFilter);
                                      }}
                                    />
                                  </Form.Group>
                                )}
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
                    {localFilters.length < schedule.filters.length ||
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
        </fieldset>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${id}`);
  const { schedule, pluginOptions } = await execApi(
    "get",
    `/schedule/${source.schedule.id}`
  );
  const { options: filterOptions } = await execApi(
    "get",
    `/schedule/${source.schedule.id}/filterOptions`
  );
  const { runs } = await execApi("get", `/runs`, {
    id: source.schedule.id,
    limit: 1,
  });

  return {
    source,
    schedule,
    pluginOptions,
    filterOptions,
    run: runs ? runs[0] : null,
  };
};
