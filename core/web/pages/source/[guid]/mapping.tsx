import { useApi } from "../../../hooks/useApi";
import SourceTabs from "../../../components/tabs/source";
import Head from "next/head";
import { useState } from "react";
import { Row, Col, Table, Form } from "react-bootstrap";
import { createSchedule } from "../../../components/schedule/add";
import LoadingButton from "../../../components/loadingButton";
import { useRouter } from "next/router";
import { Actions } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    types,
    scheduleCount,
    hydrationError,
  } = props;
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
  const [profilePropertyRules, setProfilePropertyRules] = useState(
    props.profilePropertyRules
  );
  const [preview, setPreview] = useState(props.preview || []);
  const [
    profilePropertyRuleExamples,
    setProfilePropertyRuleExamples,
  ] = useState(props.profilePropertyRuleExamples);
  const [newProfilePropertyRule, setNewProfilePropertyRule] = useState({
    key: "",
    type: "",
  });
  const [source, setSource] = useState(props.source);

  if (hydrationError) errorHandler.set({ error: hydrationError });

  const bootstrapUniqueProfilePropertyRule = async () => {
    if (newMappingKey === "") {
      return errorHandler.set({ error: "select profile identification" });
    }

    if (confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.SourceBootstrapUniqueProfilePropertyRule = await execApi(
        "post",
        `/source/${source.guid}/bootstrapUniqueProfilePropertyRule`,
        Object.assign(newProfilePropertyRule, { mappedColumn: newMappingKey })
      );
      if (response?.profilePropertyRule) {
        successHandler.set({ message: "Profile Property Rule created" });

        const prrResponse: Actions.ProfilePropertyRulesList = await execApi(
          "get",
          `/profilePropertyRules`,
          {
            unique: true,
            state: "ready",
          }
        );
        if (prrResponse?.profilePropertyRules) {
          setProfilePropertyRules(prrResponse.profilePropertyRules);
          setProfilePropertyRuleExamples(prrResponse.examples);
        }

        setNewMappingValue(response.profilePropertyRule.key);
        document.getElementById(
          response.profilePropertyRule.guid
          // @ts-ignore
        ).checked = true;
      }
      setLoading(false);
    }
  };

  const updateMapping = async (event) => {
    event.preventDefault();
    setLoading(true);

    source.mapping = {};
    source.mapping[newMappingKey] = newMappingValue;
    const response: Actions.SourceEdit = await execApi(
      "put",
      `/source/${source.guid}`,
      Object.assign({}, source, { state: "ready" })
    );
    if (response?.source) {
      // this source can have a schedule, and we have no schedules yet
      if (scheduleCount === 0 && response.source.scheduleAvailable) {
        await createSchedule({
          router,
          execApi,
          sourceGuid: response.source.guid,
          setLoading: () => {},
        });
      } else if (source.state !== response.source.state) {
        // we just went 'ready'
        router.push(
          `/source/[guid]/overview`,
          `/source/${source.guid}/overview`
        );
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

  if (!source.previewAvailable) {
    return (
      <>
        <h2>Profile Identification</h2>
        <SourceTabs source={source} />
        <p>Mapping not available for a {source.type} source</p>
      </>
    );
  }

  if (previewColumns.length === 0) {
    return (
      <>
        <h2>Profile Identification</h2>
        <SourceTabs source={source} />
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

      <h1>Profile Identification</h1>

      <Form>
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

            <LoadingButton
              type="submit"
              disabled={loading}
              onClick={(e) => updateMapping(e)}
            >
              Save Mapping
            </LoadingButton>
          </Col>

          <Col>
            {profilePropertyRules.length > 0 ? (
              <>
                <p>Choose the Unique Grouparoo Profile Property:</p>
                <fieldset>
                  <Table bordered striped size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Profile Property Rule</th>
                        <th>Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profilePropertyRules.map((rule) => (
                        <tr key={`prr-${rule.guid}`}>
                          <td>
                            <Form.Check
                              inline
                              required
                              type="radio"
                              id={rule.guid}
                              name="remoteProfileRuleGuid"
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
                            {profilePropertyRuleExamples[rule.guid]
                              ? profilePropertyRuleExamples[rule.guid]
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
                  <strong>Create a new Unique Profile Property Rule</strong>
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
                    placeholder="Profile Property Rule Key"
                    defaultValue={newProfilePropertyRule.key}
                    disabled={loading}
                    onChange={(e) => {
                      setNewProfilePropertyRule(
                        Object.assign({}, newProfilePropertyRule, {
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
                    defaultValue={newProfilePropertyRule.type}
                    disabled={loading}
                    onChange={(e) => {
                      setNewProfilePropertyRule(
                        Object.assign({}, newProfilePropertyRule, {
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
                  onClick={bootstrapUniqueProfilePropertyRule}
                >
                  Create Profile Property Rule
                </LoadingButton>
              </>
            ) : null}
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

  const {
    profilePropertyRules,
    examples: profilePropertyRuleExamples,
  } = await execApi("get", `/profilePropertyRules`, {
    state: "ready",
    unique: true,
  });
  const { types } = await execApi("get", `/profilePropertyRuleOptions`);
  const { total: scheduleCount } = await execApi("get", `/schedules`);

  let preview;
  let hydrationError: Error;

  try {
    if (source.previewAvailable) {
      const previewResponse = await execApi("get", `/source/${guid}/preview`);
      preview = previewResponse.preview;
    }
  } catch (error) {
    hydrationError = error.toString();
  }

  return {
    source,
    preview,
    profilePropertyRules,
    profilePropertyRuleExamples,
    types,
    scheduleCount,
    hydrationError,
  };
};
