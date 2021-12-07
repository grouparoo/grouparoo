import { UseApi } from "../../../../../hooks/useApi";
import SourceTabs from "../../../../../components/tabs/Source";
import Head from "next/head";
import { useMemo, useState } from "react";
import { Row, Col, Table, Form, Button, Badge } from "react-bootstrap";
import { createSchedule } from "../../../../../components/schedule/Add";
import LoadingButton from "../../../../../components/LoadingButton";
import PageHeader from "../../../../../components/PageHeader";
import StateBadge from "../../../../../components/badges/StateBadge";
import LockedBadge from "../../../../../components/badges/LockedBadge";
import { useRouter } from "next/router";
import { Actions, Models } from "../../../../../utils/apiData";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import { NextPageContext } from "next";

interface Props {
  errorHandler: ErrorHandler;
  successHandler: SuccessHandler;
  types: Actions.PropertiesOptions["types"];
  scheduleCount: number;
  hydrationError: Error;
  source: Models.SourceType;
  properties: Models.PropertyType[];
  preview: Actions.SourcePreview["preview"];
  propertyExamples: Actions.PropertiesList["examples"];
}

export default function Page(props: Props & NextPageContext) {
  const { errorHandler, successHandler, types, scheduleCount, hydrationError } =
    props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [newMappingKey, setNewMappingKey] = useState(
    () => (Object.keys(props.source.mapping)[0] as string) || ""
  );
  const [newMappingValue, setNewMappingValue] = useState(
    () => (Object.values(props.source.mapping)[0] as string) || ""
  );
  const hasPrimaryKeyProperty = useMemo(
    () =>
      props.properties.filter(({ isPrimaryKey }) => isPrimaryKey).length > 0,
    [props.properties]
  );
  const [properties, setProperties] = useState(() => {
    const isPrimaryKeyInSource =
      props.source &&
      props.properties.filter(
        (property) =>
          property.isPrimaryKey && property.sourceId === props.source.id
      ).length > 0;

    // Properties rules:
    // Include properties in own source if it has the primary key or the primary key has not been defined
    // Otherwise, show properties from other sources
    return props.properties.filter((property) =>
      isPrimaryKeyInSource || !hasPrimaryKeyProperty
        ? property.sourceId === props.source.id
        : property.sourceId !== props.source.id
    );
  });
  const [preview, setPreview] = useState(props.preview || []);
  const [propertyExamples, setPropertyExamples] = useState(
    props.propertyExamples
  );
  const [newProperty, setNewProperty] = useState({
    key: "",
    type: "",
  });
  const [source, setSource] = useState(props.source);
  if (hydrationError) errorHandler.set({ error: hydrationError });

  const bootstrapUniqueProperty = async () => {
    if (newMappingKey === "") {
      return errorHandler.set({ error: "select record identification" });
    }

    setLoading(true);
    const response: Actions.SourceBootstrapUniqueProperty = await execApi(
      "post",
      `/source/${source.id}/bootstrapUniqueProperty`,
      Object.assign(newProperty, { mappedColumn: newMappingKey })
    );
    if (response?.property) {
      successHandler.set({ message: "Property created" });

      const prrResponse: Actions.PropertiesList = await execApi(
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

      setNewMappingValue(response.property.key);
      document.getElementById(
        response.property.id
        // @ts-ignore
      ).checked = true;
    }
    setLoading(false);
  };

  const updateMapping = async (event) => {
    event.preventDefault();
    setLoading(true);

    source.mapping = {};
    source.mapping[newMappingKey] = newMappingValue;
    const response: Actions.SourceEdit = await execApi(
      "put",
      `/source/${source.id}`,
      Object.assign({}, source, { state: "ready" })
    );
    if (response?.source) {
      // this source can have a schedule, and we have no schedules yet
      if (scheduleCount === 0 && response.source.scheduleAvailable) {
        await createSchedule({
          router,
          execApi,
          source: response.source,
          setLoading: () => {},
        });
      } else if (source.state !== response.source.state) {
        // we just went 'ready'
        router.push(
          `/model/[modelId]/source/[sourceId]/overview`,
          `/model/${source.modelId}/source/${source.id}/overview`
        );
      } else {
        setSource(response.source);
        successHandler.set({ message: "Source updated" });
        setLoading(false);
      }

      if (response.source.mapping) {
        const mappingValues = Object.values(response.source.mapping);
        setProperties((properties) =>
          properties.map((property) => ({
            ...property,
            isPrimaryKey: mappingValues.includes(property.key),
          }))
        );
      }
    } else {
      setLoading(false);
    }
  };

  // not every row returned is guaranteed to have the same columns
  const previewColumns: string[] = [];

  preview
    .map((row) => Object.keys(row))
    .map((keys) => {
      keys.map((key) => {
        if (!previewColumns.includes(key)) previewColumns.push(key);
      });
    });

  const Header = function () {
    return (
      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Record Identification`}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
          <ModelBadge modelName={source.modelName} modelId={source.modelId} />,
        ]}
      />
    );
  };

  if (!source.previewAvailable) {
    return (
      <>
        <SourceTabs source={source} />
        <Header />
        <p>Mapping not available for a {source.type} source</p>
      </>
    );
  }

  if (previewColumns.length === 0) {
    return (
      <>
        <SourceTabs source={source} />
        <Header />
        <p>Set the options first!</p>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>
      <SourceTabs source={source} />
      <Header />
      <p>
        Sources in Grouparoo are referenced via a Mapping. A Mapping is like a
        foreign key between your sources and Grouparoo Properties. Whenever
        possible, choose to map though a unique Property.
      </p>
      <Form>
        <fieldset disabled={Boolean(source.locked)}>
          <Row>
            <Col>
              <p>
                <strong>What column identifies the user?</strong>
              </p>
              <fieldset>
                <Table bordered striped size="sm">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Column</th>
                      <th>Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewColumns.map((col) => (
                      <tr key={`source-${col}`}>
                        <td>
                          <Form.Check
                            inline
                            required
                            type="radio"
                            id={col}
                            name="remoteRecordIdColumn"
                            disabled={loading}
                            defaultChecked={
                              Object.keys(source.mapping)[0] === col
                            }
                            onClick={() => setNewMappingKey(col)}
                          />
                        </td>
                        <td>
                          <strong>{col}</strong>
                        </td>
                        <td
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            maxWidth: "400px",
                          }}
                        >
                          {preview
                            .map((p) => p[col])
                            .slice(0, 3)
                            .join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </fieldset>

              {/** We want to show a disabled button, not a loading button if the mapping key/value are not set */}
              {newMappingValue === "" || newMappingKey === "" ? (
                <Button disabled={true}>Save Mapping</Button>
              ) : (
                <LoadingButton
                  type="submit"
                  loading={loading}
                  onClick={(e) => updateMapping(e)}
                >
                  Save Mapping
                </LoadingButton>
              )}
            </Col>

            <Col>
              {properties.length > 0 ? (
                <>
                  <p>
                    <strong>Choose the Grouparoo Record Property:</strong>
                  </p>
                  <fieldset>
                    <Table bordered striped size="sm">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Property</th>
                          <th>Unique</th>
                          <th>Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties
                          .filter((p) => !p.isArray)
                          .sort((a, b) => {
                            if (a.unique && !b.unique) return -1;
                            if (b.unique && !a.unique) return 1;
                            if (a.key < b.key) return -1;
                            if (a.key > b.key) return 1;
                            return 0;
                          })
                          .map((property) => (
                            <tr key={`prr-${property.id}`}>
                              <td>
                                <Form.Check
                                  inline
                                  required
                                  type="radio"
                                  id={property.id}
                                  name="remoteRecordRuleId"
                                  disabled={loading}
                                  defaultChecked={
                                    Object.values(source.mapping)[0] ===
                                    property.key
                                  }
                                  onClick={() =>
                                    setNewMappingValue(property.key)
                                  }
                                />
                              </td>
                              <td>
                                <strong>
                                  {property.key}
                                  {property.isPrimaryKey && (
                                    <>
                                      {" "}
                                      <Badge variant="info">primary</Badge>
                                    </>
                                  )}
                                </strong>
                              </td>
                              <td>{property.unique ? "✅" : null}</td>
                              <td>
                                {propertyExamples[property.id]
                                  ? propertyExamples[property.id]
                                      .slice(0, 3)
                                      .join(", ")
                                  : null}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </fieldset>
                </>
              ) : null}

              {!hasPrimaryKeyProperty && newMappingValue === "" ? (
                <>
                  <hr />
                  <p>
                    <strong>
                      Create a new Unique Property for{" "}
                      <code>{source.modelName}</code> Records
                    </strong>
                  </p>
                  <p>
                    This record property should be unique, meaning only one
                    record in your entire customer base will have this value.
                    Normally this is an email or a user id.
                  </p>
                  <Form.Group controlId="key">
                    <Form.Label>Key</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Property Key"
                      defaultValue={newProperty.key}
                      disabled={loading}
                      onChange={(e) => {
                        setNewProperty(
                          Object.assign({}, newProperty, {
                            key: e.target.value,
                          })
                        );
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Key is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>

                    <Form.Control
                      as="select"
                      required
                      defaultValue={newProperty.type}
                      disabled={loading}
                      onChange={(e) => {
                        setNewProperty(
                          Object.assign({}, newProperty, {
                            //@ts-ignore
                            type: e.target.value,
                          })
                        );
                      }}
                    >
                      <option value={""} disabled>
                        Choose a type
                      </option>
                      {types.map((type) => (
                        <option key={`type-${type}`}>{type}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <LoadingButton
                    size="sm"
                    variant="outline-primary"
                    loading={loading}
                    onClick={bootstrapUniqueProperty}
                  >
                    Create Property
                  </LoadingButton>
                </>
              ) : null}
            </Col>
          </Row>
        </fieldset>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { sourceId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { source } = await execApi<{ source: Models.SourceType }>(
    "get",
    `/source/${sourceId}`
  );
  ensureMatchingModel("Source", source.modelId, modelId.toString());
  const { properties, examples: propertyExamples } = await execApi<{
    properties: Models.PropertyType[];
    examples: Actions.PropertiesList["examples"];
  }>("get", `/properties`, {
    includeExamples: true,
    state: "ready",
    modelId: source?.modelId,
  });
  const { types } = await execApi("get", `/propertyOptions`);

  const { total: scheduleCount } = await execApi("get", `/schedules`, {
    modelId: source?.modelId,
  });
  let preview;
  let hydrationError: Error;
  try {
    if (source.previewAvailable) {
      const previewResponse = await execApi(
        "get",
        `/source/${sourceId}/preview`
      );
      preview = previewResponse.preview;
    }
  } catch (error) {
    hydrationError = error.toString();
  }

  return {
    source,
    preview,
    properties,
    propertyExamples,
    types,
    scheduleCount,
    hydrationError,
  };
};
