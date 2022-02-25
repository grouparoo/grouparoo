/* eslint-disable react/no-unescaped-entities */
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo, useCallback, ChangeEvent } from "react";
import { Row, Col, Form, Badge, Alert, Card } from "react-bootstrap";
import {
  Control,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import SourceTabs from "../../../../../components/tabs/Source";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import {
  errorHandler,
  sourceHandler,
  successHandler,
} from "../../../../../eventHandlers";
import { Models, Actions } from "../../../../../utils/apiData";
import LoadingTable from "../../../../../components/LoadingTable";
import LoadingButton from "../../../../../components/LoadingButton";
import Loader from "../../../../../components/Loader";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import FormMappingSelector from "../../../../../components/source/FormMappingSelector";
import { createSchedule } from "../../../../../components/schedule/Add";
import ManagedCard from "../../../../../components/lib/ManagedCard";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";
import PrimaryKeyBadge from "../../../../../components/badges/PrimaryKeyBadge";
import { useApi } from "../../../../../contexts/api";
import { generateClient } from "../../../../../client/client";
import { withServerErrorHandler } from "../../../../../utils/withServerErrorHandler";
import {
  ConnectionOptionsOption,
  SourceOptionsMethodResponse,
  SourcePreviewMethodResponseRow,
} from "@grouparoo/core/src/classes/plugin";
import { FormTypeahead } from "../../../../../components/Typeahead";
export interface FormData {
  mapping?: {
    sourceColumn: string;
    propertyKey: string;
  };
  source: Pick<Models.SourceType, "name" | "options">;
}

interface Props {
  environmentVariableOptions: Actions.AppOptions["environmentVariableOptions"];
  properties: Models.PropertyType[];
  propertyExamples: Record<string, string[]>;
  scheduleCount: number;
  source: Models.SourceType;
  totalSources: number;
  preview: SourcePreviewMethodResponseRow[];
}

interface FormFieldProps {
  control: Control<FormData, object>;
  opt: ConnectionOptionsOption;
  connectionOptions: SourceOptionsMethodResponse;
  loading: boolean;
  loadingOptions: boolean;
  source: Pick<Models.SourceType, "name" | "options">;
  updateOption: (optKey: string, optValue: string) => void;
  register: UseFormRegister<FormData>;
}

const FormFieldGenerator = ({
  control,
  opt,
  connectionOptions,
  loading,
  loadingOptions,
  source,
  updateOption,
  register,
}: FormFieldProps) => {
  const optionType = connectionOptions[opt.key]?.type ?? opt.type;
  if (optionType === "typeahead") {
    return (
      <>
        <FormTypeahead<FormData>
          control={control}
          name={`source.options.${opt.key}`}
          option={connectionOptions[opt.key]}
          disabled={loading || loadingOptions}
          placeholder={opt.placeholder || `Select ${opt.key}`}
          defaultSelected={
            source.options[opt.key] ? [source.options[opt.key]] : undefined
          }
          onChange={(selected) => {
            updateOption(opt.key, selected[0]?.key);
          }}
        />
        <Form.Text className="text-muted">{opt.description}</Form.Text>
      </>
    );
  } else if (optionType === "list") {
    return (
      <>
        <Form.Control
          as="select"
          required={opt.required}
          disabled={loading || loadingOptions}
          defaultValue={source.options[opt.key]?.toString() || ""}
          name={`source.options.${opt.key}`}
          {...register(`source.options.${opt.key}`, {
            onChange: (e) =>
              updateOption(e.target.id.replace("_opt~", ""), e.target.value),
          })}
        >
          <option value={""} disabled>
            Select an option
          </option>
          {connectionOptions[opt.key].options.map((o, idx) => (
            <option key={`opt~${opt.key}-${o}`} value={o}>
              {o}{" "}
              {connectionOptions[opt.key]?.descriptions &&
              connectionOptions[opt.key]?.descriptions[idx]
                ? ` | ${connectionOptions[opt.key]?.descriptions[idx]}`
                : null}
            </option>
          ))}
        </Form.Control>
        <Form.Text className="text-muted">{opt.description}</Form.Text>
      </>
    );
  } else if (optionType === "pending") {
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
  } else if (optionType === "textarea") {
    return (
      <>
        <Form.Control
          required={opt.required}
          as="textarea"
          disabled={loading || loadingOptions}
          rows={5}
          value={source.options[opt.key]?.toString()}
          placeholder={opt.placeholder}
          style={{
            fontFamily:
              'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            color: "#e83e8c",
          }}
          name={`source.options.${opt.key}`}
          {...register(`source.options.${opt.key}`, {
            onChange: (e) =>
              updateOption(e.target.id.replace("_opt~", ""), e.target.value),
          })}
        />
        <Form.Text className="text-muted">{opt.description}</Form.Text>
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
          name={`source.options.${opt.key}`}
          {...register(`source.options.${opt.key}`, {
            shouldUnregister: true,
            onChange: (e) =>
              updateOption(e.target.id.replace("_opt~", ""), e.target.value),
          })}
        />
        <Form.Text className="text-muted">{opt.description}</Form.Text>
      </>
    );
  }
};

const Page: NextPage<Props> = ({
  environmentVariableOptions,
  scheduleCount,
  totalSources,
  ...props
}) => {
  const router = useRouter();
  const { client } = useApi();
  const [preview, setPreview] = useState(props.preview ?? []);
  const [loading, setLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [properties, setProperties] = useState(props.properties);
  const [propertyExamples, setPropertyExamples] = useState<
    Record<string, string[]>
  >(props.propertyExamples);
  const [source, setSource] = useState(props.source);
  const [connectionOptions, setConnectionOptions] = useState<
    Actions.SourceConnectionOptions["options"]
  >({});
  const { sourceId } = router.query;

  // not every row returned is guaranteed to have the same columns
  const previewColumns = useMemo(() => {
    return preview
      .map((row) => Object.keys(row))
      .reduce((acc, keys) => {
        keys.forEach((key) => {
          if (!acc.includes(key)) acc.push(key);
        });

        return acc;
      }, [] as string[])
      .sort();
  }, [preview]);

  const mappingColumn = useMemo(
    () => Object.keys(source.mapping)[0],
    [source.mapping]
  );
  const mappingPropertyKey = useMemo(
    () => Object.values(source.mapping)[0],
    [source.mapping]
  );

  const isPrimarySource = useMemo(
    () =>
      totalSources === 1 ||
      properties.filter(
        ({ isPrimaryKey, sourceId }) => isPrimaryKey && sourceId === source.id
      ).length > 0,
    [properties, source.id, totalSources]
  );

  const resetFormData = useCallback<(source: Models.SourceType) => FormData>(
    (source: Models.SourceType) => ({
      source: {
        name: source.name,
        options: source.options,
      },
      mapping: {
        propertyKey: mappingPropertyKey,
        sourceColumn: mappingColumn,
      },
    }),
    [mappingColumn, mappingPropertyKey]
  );

  const { handleSubmit, register, reset, watch, control } = useForm<FormData>({
    defaultValues: resetFormData(source),
  });

  const loadPreview = useCallback(
    async (previewAvailable = source.previewAvailable) => {
      if (!previewAvailable) {
        return;
      }

      setPreviewLoading(true);
      const response = await client.request<Actions.SourcePreview>(
        "get",
        `/source/${sourceId}/preview`,
        {
          options:
            Object.keys(source.options).length > 0 ? source.options : null,
        },
        { useCache: false }
      );
      setPreviewLoading(false);
      if (response?.preview) {
        setPreview(response.preview);
        reset(resetFormData(source));
      }
    },
    [client, resetFormData, reset, source, sourceId]
  );

  const sourceBadges = useMemo(() => {
    const badges = [
      <LockedBadge object={source} key={source.id} />,
      <StateBadge state={source.state} key={source.state} />,
      <ModelBadge
        modelName={source.modelName}
        modelId={source.modelId}
        key={source.modelId}
      />,
    ];
    if (isPrimarySource) {
      badges.unshift(<PrimaryKeyBadge isSource />);
    }
    return badges;
  }, [source, isPrimarySource]);

  const loadOptions = useCallback(async () => {
    setLoadingOptions(true);
    const response: Actions.SourceConnectionOptions = await client.request(
      "get",
      `/source/${sourceId}/connectionOptions`,
      { options: source.options },
      { useCache: false }
    );
    if (response?.options) {
      setConnectionOptions(response.options);
    }
    setLoadingOptions(false);
  }, [client, source.options, sourceId]);

  useEffect(() => {
    loadPreview();
  }, [loadPreview]);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async (data, event) => {
      event.preventDefault();
      setLoading(true);

      const isBootstrappingUniqueProperty =
        source.previewAvailable &&
        !source.connection.skipSourceMapping &&
        !data.mapping?.propertyKey;
      let bootstrapSuccess = false;
      let mapping: Record<string, string>;

      // Unique Property is being created and need to bootstrap?
      if (isBootstrappingUniqueProperty) {
        const bootstrapResponse: Actions.SourceBootstrapUniqueProperty =
          await client.request(
            "post",
            `/source/${source.id}/bootstrapUniqueProperty`,
            {
              mappedColumn: data.mapping.sourceColumn,
              sourceOptions: source.options,
            }
          );

        if (bootstrapResponse?.property) {
          bootstrapSuccess = true;
          mapping = {
            [data.mapping.sourceColumn]: bootstrapResponse.property.key,
          };
        } else if (!Object.keys(bootstrapResponse).length) {
          errorHandler.set({
            message: "Unable to map to property.",
          });
          setLoading(false);
          return;
        }
      }

      if (!mapping) {
        mapping = data.mapping?.propertyKey
          ? {
              [data.mapping.sourceColumn]: data.mapping.propertyKey,
            }
          : source.mapping;
      }

      const state =
        source.connection.skipSourceMapping ||
        data.mapping?.propertyKey ||
        bootstrapSuccess
          ? "ready"
          : source.previewAvailable
          ? undefined
          : "ready";

      const response = await client.request<Actions.SourceEdit>(
        "put",
        `/source/${sourceId}`,
        { ...source, state, mapping }
      );

      if (response?.source) {
        sourceHandler.set(response.source);

        // we made the first source, and now should attempt to make sample properties
        if (
          grouparooUiEdition() === "config" &&
          isBootstrappingUniqueProperty &&
          response.source.state === "ready"
        ) {
          await client.request<Actions.SourceGenerateSampleRecords>(
            "post",
            `/source/${sourceId}/generateSampleRecords`,
            { id: sourceId }
          );
        }

        successHandler.set({ message: "Source saved" });
        // this source can have a schedule, and we have no schedules yet
        if (scheduleCount === 0 && response.source.scheduleAvailable) {
          const createdScheduleAndRedirected = await createSchedule({
            router,
            client,
            source: response.source,
            setLoading: () => {},
          });
          if (createdScheduleAndRedirected) {
            return;
          }
        } else if (
          response.source.state === "ready" &&
          source.state === "draft"
        ) {
          router.push(
            "/model/[modelId]/source/[sourceId]/overview",
            `/model/${response.source.modelId}/source/${sourceId}/overview`
          );
        }
      }

      const { properties, examples } =
        await client.request<Actions.PropertiesList>("get", `/properties`, {
          includeExamples: true,
          state: "ready",
          modelId: source?.modelId,
        });

      if (properties) {
        setProperties(properties);
        setPropertyExamples(examples);
      }
      if (response?.source) {
        setSource(response.source);
      }
      setLoading(false);
    },
    [client, router, scheduleCount, source, sourceId]
  );

  const handleDelete = useCallback(async () => {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.SourceDestroy = await client.request(
        "delete",
        `/source/${sourceId}`
      );
      if (success) {
        successHandler.set({ message: "source deleted" });
        router.push(
          "/model/[modelId]/overview",
          `/model/${source.modelId}/overview`
        );
      } else {
        setLoading(false);
      }
    }
  }, [client, router, source.modelId, sourceId]);

  const update = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSource((src) => {
        src[event.target.id] = event.target.value;
        return src;
      });
    },
    [setSource]
  );

  const updateOption = useCallback(
    (optKey: string, optValue: string) => {
      setSource((src) => {
        src.options[optKey] = optValue;
        src.mapping = {};
        return src;
      });
      loadPreview();
    },
    [loadPreview]
  );

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <PageHeader
        icon={source.app.icon}
        title={watch("source.name")}
        badges={sourceBadges}
      />

      <Row>
        <Col className="mb-4">
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
                  name="source.name"
                  {...register("source.name", {
                    onChange: update,
                  })}
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

                    <FormFieldGenerator
                      connectionOptions={connectionOptions}
                      control={control}
                      loading={loading}
                      loadingOptions={loadingOptions}
                      opt={opt}
                      register={register}
                      source={source}
                      updateOption={updateOption}
                    />

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

              {source.previewAvailable && (
                <>
                  <hr />
                  <h3>{isPrimarySource ? "Primary Key Mapping" : "Mapping"}</h3>
                  {isPrimarySource ? (
                    <p>
                      Select a column that uniquely identifies each record in
                      this Source. The Property mapped to this column will be
                      assigned as the Model's Primary Key.
                    </p>
                  ) : (
                    <p>
                      Select a column that relates each record in this Source
                      back to the Model's Primary Source. You can map the column
                      to any Property in another Source in the Model.
                    </p>
                  )}

                  <FormMappingSelector
                    columnName={mappingColumn}
                    propertyKey={mappingPropertyKey}
                    preview={preview}
                    properties={properties}
                    propertyExamples={propertyExamples}
                    register={register}
                    watch={watch}
                    source={source}
                    mappingDisabled={
                      isPrimarySource && source.state !== "ready"
                    }
                  />
                </>
              )}

              <hr />

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
        {source.previewAvailable && (
          <Col xl="7">
            <ManagedCard title="Example Data">
              <Card.Body>
                {previewColumns.length === 0 && !loading ? (
                  <>No preview</>
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
              </Card.Body>
            </ManagedCard>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> =
  withServerErrorHandler(async (ctx) => {
    const { sourceId, modelId } = ctx.query;
    const client = generateClient(ctx);
    const { source } = await client.request<Actions.SourceView>(
      "get",
      `/source/${sourceId}`
    );
    ensureMatchingModel("Source", source.modelId, modelId.toString());

    const { total: totalSources } = await client.request("get", `/sources`, {
      modelId,
      limit: 1,
    });

    const { environmentVariableOptions } = await client.request(
      "get",
      `/sources/connectionApps`
    );

    const { properties, examples: propertyExamples } =
      await client.request<Actions.PropertiesList>("get", `/properties`, {
        includeExamples: true,
        state: "ready",
        modelId: source?.modelId,
      });

    const { total: scheduleCount } =
      await client.request<Actions.SchedulesList>("get", `/schedules`, {
        modelId: source?.modelId,
      });

    let preview: Actions.SourcePreview["preview"] = null;
    if (source.previewAvailable) {
      ({ preview } = await client.request<Actions.SourcePreview>(
        "get",
        `/source/${sourceId}/preview`,
        {
          options:
            Object.keys(source.options).length > 0 ? source.options : null,
        },
        { useCache: false }
      ));
    }

    return {
      props: {
        environmentVariableOptions,
        properties,
        propertyExamples,
        source,
        scheduleCount,
        totalSources,
        preview,
      },
    };
  });
