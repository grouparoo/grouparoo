import { useApi } from "../../../../../contexts/api";
import SourceTabs from "../../../../../components/tabs/Source";
import Head from "next/head";
import { useState } from "react";
import Moment from "react-moment";
import { Alert, Row, Col, Form, Badge, Button, Table } from "react-bootstrap";
import LoadingButton from "../../../../../components/LoadingButton";
import { useRouter } from "next/router";
import Link from "next/link";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import DatePicker from "../../../../../components/DatePicker";
import { errorHandler, successHandler } from "../../../../../eventHandlers";
import { Models, Actions } from "../../../../../utils/apiData";
import { formatTimestamp } from "../../../../../utils/formatTimestamp";
import { filtersAreEqual } from "../../../../../utils/filtersAreEqual";
import { makeLocal } from "../../../../../utils/makeLocal";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";
import { generateClient } from "../../../../../client/client";

export default function Page(props) {
  const {
    source,
    model,
    run,
    pluginOptions,
    filterOptions,
    filterOptionDescriptions,
    totalProperties,
    totalSources,
  }: {
    source: Models.SourceType;
    model: Models.GrouparooModelType;
    run: Models.RunType;
    pluginOptions: Actions.ScheduleView["pluginOptions"];
    filterOptions: Actions.ScheduleFilterOptions["options"];
    filterOptionDescriptions: Actions.ScheduleFilterOptions["optionDescriptions"];
    totalProperties: number;
    totalSources: number;
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState<Models.ScheduleType>(props.schedule);
  const [localFilters, setLocalFilters] = useState<
    Models.ScheduleType["filters"]
  >(() => makeLocal(props.schedule.filters));
  const [recurringFrequencyMinutes, setRecurringFrequencyMinutes] = useState(
    () => schedule.recurringFrequency / (60 * 1000)
  );

  async function edit(event) {
    event.preventDefault();
    setLoading(true);

    const scheduleToSave: Models.ScheduleType = {
      ...schedule,
      state: "ready",
      filters: localFilters,
      recurringFrequency: schedule.recurring
        ? recurringFrequencyMinutes * (60 * 1000)
        : 0,
    };

    const response = await client.request<Actions.ScheduleEdit>(
      "put",
      `/schedule/${schedule.id}`,
      scheduleToSave
    );

    if (response?.schedule) {
      if (response.schedule.state === "ready" && schedule.state === "draft") {
        const nextPage =
          totalSources === 1 && totalProperties === 1
            ? "multipleProperties"
            : "overview";

        router.push(`/model/${source.modelId}/source/${source.id}/${nextPage}`);
      } else {
        setRecurringFrequencyMinutes(
          response.schedule.recurringFrequency / (60 * 1000)
        );
        setSchedule(response.schedule);
        setLoading(false);
        successHandler.set({ message: "Schedule Updated" });
      }
    } else {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const { success }: Actions.ScheduleDestroy = await client.request(
        "delete",
        `/schedule/${schedule.id}`
      );
      if (success) {
        router.push(
          "/model/[modelId]/source/[sourceId]/overview",
          `/model/${source.modelId}/source/${source.id}/overview`
        );
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
      <SourceTabs source={source} model={model} />
      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Schedule`}
        badges={[
          <LockedBadge object={source} />,
          <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
          <>
            Source: <StateBadge state={source.state} />
          </>,
          <>
            Schedule: <StateBadge state={schedule.state} />
          </>,
        ]}
      />

      <Form id="form" onSubmit={edit} autoComplete="off">
        <fieldset disabled={Boolean(schedule.locked)}>
          <Row>
            <Col>
              <Form.Group controlId="confirmRecords">
                <Form.Check
                  type="checkbox"
                  label="Confirm that records exist when running schedule?"
                  disabled={loading}
                  checked={schedule.confirmRecords}
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
              <Form.Group controlId="refreshEnabled">
                <Form.Check
                  type="checkbox"
                  label="Refresh Enabled?"
                  disabled={loading}
                  checked={schedule.refreshEnabled}
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
                  {grouparooUiEdition() !== "config" && (
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
                                  <li>Records Created: {run.recordsCreated}</li>
                                  <li>
                                    Records Imported: {run.recordsImported}
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
                              <Link href={`/run/${run.id}/edit`}>
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
                  {grouparooUiEdition() !== "config" && (
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
                  <strong>
                    Options for a <code>{source.connection.displayName}</code>{" "}
                    Schedule
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
                      <>
                        <Form.Control
                          as="select"
                          required={opt.required}
                          defaultValue={
                            schedule.options[opt.key]?.toString() || ""
                          }
                          disabled={loading}
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
                      </>
                    ) : null}

                    {/* textarea options */}
                    {opt.type === "text" ? (
                      <Form.Group controlId="key">
                        <Form.Control
                          required
                          type="text"
                          disabled={loading}
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
                          disabled={loading}
                          onChange={(e) =>
                            updateOption(opt.key, e.target["value"])
                          }
                          placeholder="select statement to look for new data"
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
                      Only include rows that meet the following criteria when
                      checking this Schedule:
                    </p>

                    <Table bordered size="sm">
                      <thead>
                        <tr>
                          <th />
                          <th>
                            <strong>Key</strong>
                          </th>
                          <th>
                            <strong>Operation</strong>
                          </th>
                          <th />
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
                              {/* key */}
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
                              {/* op */}
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
                                              value={op}
                                            >
                                              {filterOptionDescriptions[op]}
                                            </option>
                                          ))
                                      : null}
                                  </Form.Control>
                                </Form.Group>

                                {!localFilter.op
                                  .toLowerCase()
                                  .includes("exist") &&
                                  (localFilter.key === "occurredAt" ? (
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
                                        value={
                                          localFilter.match?.toString() || ""
                                        }
                                        onChange={(e: any) => {
                                          const _localFilter = [
                                            ...localFilters,
                                          ];
                                          localFilter.match = e.target.value;
                                          _localFilter[idx] = localFilter;
                                          setLocalFilters(_localFilter);
                                        }}
                                      />
                                    </Form.Group>
                                  ))}
                              </td>
                              {/* delete */}
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

              {schedule.state === "ready" ? (
                <Alert variant="info">
                  Note that changing the options or filters for a Schedule will
                  reset the high water mark and stop all running Runs. A new Run
                  will be enqueued.
                </Alert>
              ) : null}

              <LoadingButton variant="primary" type="submit" loading={loading}>
                Update
              </LoadingButton>
              <br />
              <br />
              <LoadingButton
                variant="danger"
                loading={loading}
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { sourceId, modelId } = ctx.query;
  const client = generateClient(ctx);
  const { source } = await client.request("get", `/source/${sourceId}`);
  let filterOptions = {};
  let filterOptionDescriptions = {};
  ensureMatchingModel("Source", source.modelId, modelId.toString());

  const { model } = await client.request<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );

  const { schedule, pluginOptions } = await client.request(
    "get",
    `/schedule/${source.schedule.id}`
  );
  const filterResponse = await client.request(
    "get",
    `/schedule/${source.schedule.id}/filterOptions`
  );
  filterOptions = filterResponse.options;
  filterOptionDescriptions = filterResponse.optionDescriptions;

  const { runs } = await client.request("get", `/runs`, {
    id: source.schedule.id,
    limit: 1,
  });

  const { total: totalSources } = await client.request<Actions.SourcesList>(
    "get",
    "/sources",
    { modelId, limit: 1 }
  );
  const { total: totalProperties } =
    await client.request<Actions.PropertiesList>("get", `/properties`, {
      sourceId,
      modelId,
      limit: 1,
    });

  return {
    source,
    model,
    schedule,
    pluginOptions,
    filterOptions,
    filterOptionDescriptions,
    run: runs ? runs[0] : null,
    totalSources,
    totalProperties,
  };
};
