import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import { Row, Col, Form, Badge, Alert } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useForm } from "react-hook-form";
import { UseApi } from "../../../../../hooks/useApi";
import SourceTabs from "../../../../../components/tabs/Source";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import { Models, Actions } from "../../../../../utils/apiData";
import LoadingTable from "../../../../../components/LoadingTable";
import LoadingButton from "../../../../../components/LoadingButton";
import Loader from "../../../../../components/Loader";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import { SourceHandler } from "../../../../../utils/sourceHandler";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import FormMappingSelector from "../../../../../components/source/FormMappingSelector";
import { createSchedule } from "../../../../../components/schedule/Add";

export default function Page(props) {
  const {
    environmentVariableOptions,
    errorHandler,
    successHandler,
    sourceHandler,
    scheduleCount,
    types,
  }: {
    environmentVariableOptions: Actions.AppOptions["environmentVariableOptions"];
    errorHandler: ErrorHandler;
    properties: Models.PropertyType[];
    propertyExamples: Record<string, string[]>;
    successHandler: SuccessHandler;
    sourceHandler: SourceHandler;
    scheduleCount: number;
    types: string[];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [properties, setProperties] = useState<Models.PropertyType[]>(
    props.properties
  );
  const [propertyExamples, setPropertyExamples] = useState<
    Record<string, string[]>
  >(props.propertyExamples);
  const [source, setSource] = useState<Models.SourceType>(props.source);
  const [connectionOptions, setConnectionOptions] = useState<
    Actions.sourceConnectionOptions["options"]
  >({});
  const { sourceId } = router.query;
  const mappingColumn = useMemo(
    () => Object.keys(props.source.mapping)[0] as string,
    [source]
  );
  const mappingPropertyKey = useMemo(
    () => Object.values(props.source.mapping)[0] as string,
    [source]
  );
  const hasPrimaryKeyProperty = useMemo(
    () =>
      properties.filter(
        ({ isPrimaryKey, sourceId }) => isPrimaryKey && sourceId === source.id
      ).length > 0,
    [properties, source]
  );

  useEffect(() => {
    loadPreview(source.previewAvailable);
    loadOptions();
  }, []);

  async function loadPreview(
    previewAvailable: boolean = source.previewAvailable
  ) {
    if (!previewAvailable) {
      return;
    }

    setPreviewLoading(true);
    const response: Actions.SourcePreview = await execApi(
      "get",
      `/source/${sourceId}/preview`,
      {
        options: Object.keys(source.options).length > 0 ? source.options : null,
      },
      null,
      null,
      false
    );
    setPreviewLoading(false);
    if (response?.preview) {
      setPreview(response.preview);
    }
  }

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setLoading(true);

    const isBootstrappingUniqueProperty =
      data.bootstrap?.propertyKey && data.bootstrap?.propertyType;
    let bootstrapSuccess = false;

    // Unique Property is being created and need to bootstrap?
    if (isBootstrappingUniqueProperty) {
      const payload = {
        key: data.bootstrap.propertyKey,
        type: data.bootstrap.propertyType,
        mappedColumn: data.mapping.sourceColumn,
      };

      const bootstrapResponse: Actions.SourceBootstrapUniqueProperty =
        await execApi(
          "post",
          `/source/${source.id}/bootstrapUniqueProperty`,
          payload
        );

      if (bootstrapResponse?.property) {
        bootstrapSuccess = true;
        const prrResponse = await execApi<Actions.PropertiesList>(
          "get",
          `/properties`,
          {
            includeExamples: true,
            unique: true,
            state: "ready",
            modelId: source.modelId,
          }
        );

        if (prrResponse?.properties) {
          setProperties(prrResponse.properties);
          setPropertyExamples(prrResponse.examples);
        }
      } else if (!Object.keys(bootstrapResponse).length) {
        errorHandler.set({
          message: "Unable to create mapping.",
        });
        setLoading(false);
        return;
      }
    }

    const mapping = bootstrapSuccess
      ? {
          [data.mapping.sourceColumn]: data.bootstrap.propertyKey,
        }
      : data.mapping?.propertyKey
      ? {
          [data.mapping.sourceColumn]: data.mapping.propertyKey,
        }
      : source.mapping;

    const state =
      source.connection.skipSourceMapping ||
      data.mapping?.propertyKey ||
      bootstrapSuccess
        ? "ready"
        : source.previewAvailable
        ? undefined
        : "ready";

    const response = await execApi<Actions.SourceEdit>(
      "put",
      `/source/${sourceId}`,
      { ...source, state, mapping }
    );

    if (response?.source) {
      setSource(response.source);
      sourceHandler.set(response.source);

      // this source can have a schedule, and we have no schedules yet
      if (scheduleCount === 0 && response.source.scheduleAvailable) {
        await createSchedule({
          router,
          execApi,
          source: response.source,
          setLoading: () => {},
        });
        router.push(
          "/model/[modelId]/source/[sourceId]/schedule",
          `/model/${response.source.modelId}/source/${sourceId}/schedule`
        );
      } else if (
        response.source.state === "ready" &&
        source.state === "draft"
      ) {
        router.push(
          "/model/[modelId]/source/[sourceId]/overview",
          `/model/${response.source.modelId}/source/${sourceId}/overview`
        );
      } else {
        successHandler.set({ message: "Source updated" });
      }
    }

    setLoading(false);
  };

  async function loadOptions() {
    setLoadingOptions(true);
    const response: Actions.sourceConnectionOptions = await execApi(
      "get",
      `/source/${sourceId}/connectionOptions`,
      { options: source.options },
      null,
      null,
      false
    );
    if (response?.options) setConnectionOptions(response.options);
    setLoadingOptions(false);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.SourceDestroy = await execApi(
        "delete",
        `/source/${sourceId}`
      );
      if (success) {
        successHandler.set({ message: "source deleted" });
        router.push(
          "/model/[modelId]/sources",
          `/model/${source.modelId}/sources`
        );
      } else {
        setLoading(false);
      }
    }
  }

  const update = async (event) => {
    const _source = Object.assign({}, source);
    _source[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setSource(_source);
  };

  const updateOption = async (optKey, optValue) => {
    const _source = Object.assign({}, source);
    _source.options[optKey] = optValue;
    setSource(_source);
    loadPreview();
  };

  // not every row returned is guaranteed to have the same columns
  const previewColumns = preview
    .map((row) => Object.keys(row))
    .reduce((acc, val) => acc.concat(val), [])
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <PageHeader
        icon={source.app.icon}
        title={source.name}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
          <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
        ]}
      />

      <Row>
        <Col>
          <Form id="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <fieldset disabled={Boolean(source.locked)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  disabled={loading}
                  type="text"
                  placeholder="Source Name"
                  defaultValue={source.name}
                  onChange={(e) => update(e)}
                  name="source.name"
                  ref={register}
                />
                <Form.Control.Feedback type="invalid">
                  Name is required
                </Form.Control.Feedback>
              </Form.Group>

              <hr />
              <p>
                Options for a <code>{source.connection.displayName}</code>{" "}
                source:
              </p>

              {loadingOptions ? (
                <Alert variant="warning">
                  <Loader size="sm" /> Loading options from {source.app.type}
                </Alert>
              ) : null}

              {Object.keys(source.connection.options).length === 0 ? (
                <p>No options for this type of source</p>
              ) : null}

              {source.connection.options.map((opt) => {
                return (
                  <Form.Group
                    key={`group-${opt.key}`}
                    controlId={`_opt~${opt.key}`}
                  >
                    <Form.Label>
                      <code>{opt.displayName || opt.key}</code>{" "}
                      {opt.required ? (
                        <>
                          <Badge variant="info">required</Badge>&nbsp;
                        </>
                      ) : null}
                    </Form.Label>

                    {(() => {
                      if (connectionOptions[opt.key]?.type === "typeahead") {
                        return (
                          <>
                            <Typeahead
                              id="typeahead"
                              labelKey="key"
                              disabled={loading || loadingOptions}
                              onChange={(selected) => {
                                updateOption(opt.key, selected[0]?.key);
                              }}
                              options={connectionOptions[opt.key]?.options.map(
                                (k, idx) => {
                                  return {
                                    key: k,
                                    descriptions:
                                      connectionOptions[k]?.descriptions[idx],
                                  };
                                }
                              )}
                              placeholder={
                                opt.placeholder || `Select ${opt.key}`
                              }
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
                                    {opt.descriptions ? (
                                      <em>
                                        Descriptions:{" "}
                                        {opt.descriptions.join(", ")}
                                      </em>
                                    ) : null}
                                  </small>,
                                ];
                              }}
                              defaultSelected={
                                source.options[opt.key]
                                  ? [source.options[opt.key]]
                                  : undefined
                              }
                              name={`source.options.${opt.key}`}
                              ref={register}
                            />
                            <Form.Text className="text-muted">
                              {opt.description}
                            </Form.Text>
                          </>
                        );
                      } else if (connectionOptions[opt.key]?.type === "list") {
                        return (
                          <>
                            <Form.Control
                              as="select"
                              required={opt.required}
                              disabled={loading || loadingOptions}
                              defaultValue={
                                source.options[opt.key]?.toString() || ""
                              }
                              onChange={(e) =>
                                updateOption(
                                  e.target.id.replace("_opt~", ""),
                                  e.target.value
                                )
                              }
                              name={`source.options.${opt.key}`}
                              ref={register}
                            >
                              <option value={""} disabled>
                                Select an option
                              </option>
                              {connectionOptions[opt.key].options.map(
                                (o, idx) => (
                                  <option key={`opt~${opt.key}-${o}`} value={o}>
                                    {o}{" "}
                                    {connectionOptions[opt.key]?.descriptions &&
                                    connectionOptions[opt.key]?.descriptions[
                                      idx
                                    ]
                                      ? ` | ${
                                          connectionOptions[opt.key]
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
                      } else if (
                        connectionOptions[opt.key]?.type === "pending"
                      ) {
                        return (
                          <>
                            <Form.Control
                              size="sm"
                              disabled
                              type="text"
                              value="pending another selection"
                            ></Form.Control>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Form.Control
                              required={opt.required}
                              type={
                                connectionOptions[opt.key]?.type === "password"
                                  ? "password"
                                  : "text" // textarea not supported here
                              }
                              disabled={loading || loadingOptions}
                              defaultValue={source.options[opt.key]?.toString()}
                              placeholder={opt.placeholder}
                              onChange={(e) =>
                                updateOption(
                                  e.target.id.replace("_opt~", ""),
                                  e.target.value
                                )
                              }
                              name={`source.options.${opt.key}`}
                              ref={register}
                            />
                            <Form.Text className="text-muted">
                              {opt.description}
                            </Form.Text>
                          </>
                        );
                      }
                    })()}

                    {/* list-type options */}
                  </Form.Group>
                );
              })}

              {environmentVariableOptions.length > 0 ? (
                <Row>
                  <Col>
                    <p>
                      Environment Variable Options for Sources:{" "}
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

              <hr />

              {source.previewAvailable && (
                <>
                  <h3>{hasPrimaryKeyProperty ? "Primary Key" : "Mapping"}</h3>
                  <p>
                    Mapping sets the foreign key between your Source and
                    Grouparoo Properties. Whenever possible, map through a
                    unique Property.
                  </p>

                  <FormMappingSelector
                    columnName={mappingColumn}
                    propertyKey={mappingPropertyKey}
                    preview={preview}
                    properties={properties}
                    propertyExamples={propertyExamples}
                    register={register}
                    source={source}
                    types={types}
                  />
                  <hr />
                </>
              )}

              <h3>Example Data</h3>

              {previewColumns.length === 0 && !loading ? (
                <p>No preview</p>
              ) : null}
              {previewColumns.length === 0 && loading ? <Loader /> : null}

              <div style={{ overflow: "auto" }}>
                <LoadingTable loading={previewLoading} size="sm">
                  <thead>
                    <tr>
                      {previewColumns.map((col) => (
                        <th key={`head-${col}`}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {preview.map((row, i) => (
                      <tr key={`row-${i}`}>
                        {previewColumns.map((col, j) => (
                          <td key={`table-${i}-${j}`}>
                            {row[col] && typeof row[col] === "object" ? (
                              <code>{JSON.stringify(row[col])}</code>
                            ) : (
                              row[col]?.toString()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </LoadingTable>
              </div>

              <br />

              <LoadingButton variant="primary" type="submit" loading={loading}>
                Update
              </LoadingButton>
              <br />
              <br />
              <LoadingButton
                loading={loading}
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </LoadingButton>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { sourceId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { source } = await execApi("get", `/source/${sourceId}`);
  ensureMatchingModel("Source", source.modelId, modelId.toString());
  const { environmentVariableOptions } = await execApi(
    "get",
    `/sources/connectionApps`
  );

  const { properties, examples: propertyExamples } =
    await execApi<Actions.PropertiesList>("get", `/properties`, {
      includeExamples: true,
      state: "ready",
      modelId: source?.modelId,
    });

  const { types } = await execApi("get", `/propertyOptions`);

  const { total: scheduleCount } = await execApi<Actions.SchedulesList>(
    "get",
    `/schedules`,
    {
      modelId: source?.modelId,
    }
  );

  return {
    environmentVariableOptions,
    properties,
    propertyExamples,
    source,
    scheduleCount,
    types,
  };
};
