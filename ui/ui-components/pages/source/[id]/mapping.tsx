import { useApi } from "../../../hooks/useApi";
import SourceTabs from "../../../components/tabs/source";
import Head from "next/head";
import { useState } from "react";
import { Row, Col, Table, Form, Button } from "react-bootstrap";
import { createSchedule } from "../../../components/schedule/add";
import LoadingButton from "../../../components/loadingButton";
import PageHeader from "../../../components/pageHeader";
import StateBadge from "../../../components/badges/stateBadge";
import LockedBadge from "../../../components/badges/lockedBadge";
import { useRouter } from "next/router";
import { Actions } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, types, scheduleCount, hydrationError } =
    props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [newMappingKey, setNewMappingKey] = useState(
    Object.keys(props.source.mapping)[0]
      ? Object.keys(props.source.mapping)[0]
      : ""
  );
  const [newMappingValue, setNewMappingValue] = useState(
    Object.values(props.source.mapping)[0]
      ? Object.values(props.source.mapping)[0]
      : ""
  );
  const [properties, setProperties] = useState(props.properties);
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
      return errorHandler.set({ error: "select profile identification" });
    }

    // if (confirm("are you sure?")) {
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
        { includeExamples: true, unique: true, state: "ready" }
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
    // }
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
          sourceId: response.source.id,
          setLoading: () => {},
        });
      } else if (source.state !== response.source.state) {
        // we just went 'ready'
        router.push(`/source/[id]/overview`, `/source/${source.id}/overview`);
      } else {
        setSource(response.source);
        successHandler.set({ message: "Source updated" });
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  // not every row returned is guaranteed to have the same columns
  const previewColumns = preview
    .map((row) => Object.keys(row))
    .flat()
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  const Header = function () {
    return (
      <PageHeader
        icon={source.app.icon}
        title={`${source.name} - Profile Identification`}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
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

      <Form>
        <fieldset disabled={source.locked !== null}>
          <Row>
            <Col>
              <p>What column identifies the user?</p>
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
                            name="remoteProfileIdColumn"
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
                  disabled={loading}
                  onClick={(e) => updateMapping(e)}
                >
                  Save Mapping
                </LoadingButton>
              )}
            </Col>

            <Col>
              {properties.length > 0 ? (
                <>
                  <p>Choose the Unique Grouparoo Profile Property:</p>
                  <fieldset>
                    <Table bordered striped size="sm">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Property</th>
                          <th>Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map((rule) => (
                          <tr key={`prr-${rule.id}`}>
                            <td>
                              <Form.Check
                                inline
                                required
                                type="radio"
                                id={rule.id}
                                name="remoteProfileRuleId"
                                disabled={loading}
                                defaultChecked={
                                  Object.values(source.mapping)[0] === rule.key
                                }
                                onClick={() => setNewMappingValue(rule.key)}
                              />
                            </td>
                            <td>
                              <strong>{rule.key}</strong>
                            </td>
                            <td>
                              {propertyExamples[rule.id]
                                ? propertyExamples[rule.id]
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

              {newMappingValue === "" ? (
                <>
                  <hr />
                  <p>
                    <strong>Create a new Unique Property</strong>
                  </p>
                  <p>
                    This profile property should be unique, meaning only one
                    profile in your entire customer base will have this value.
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
                    disabled={loading}
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
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${id}`);

  const { properties, examples: propertyExamples } = await execApi(
    "get",
    `/properties`,
    { includeExamples: true, state: "ready", unique: true }
  );
  const { types } = await execApi("get", `/propertyOptions`);
  const { total: scheduleCount } = await execApi("get", `/schedules`);

  let preview;
  let hydrationError: Error;

  try {
    if (source.previewAvailable) {
      const previewResponse = await execApi("get", `/source/${id}/preview`);
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
