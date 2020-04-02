import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [preview, setPreview] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const [newMappingKey, setNewMappingKey] = useState("");
  const [newMappingValue, setNewMappingValue] = useState("");
  const [types, setTypes] = useState([]);
  const [newProfilePropertyRule, setNewProfilePropertyRule] = useState({
    key: "",
    type: "",
  });
  const [
    profilePropertyRuleExamples,
    setProfilePropertyRuleExamples,
  ] = useState({});
  const [source, setSource] = useState({
    previewAvailable: false,
    type: "",
    mapping: {},
    state: "draft",
  });
  const { guid } = query;

  useEffect(() => {
    load();
    loadOptions();
  }, []);

  async function load() {
    const sourceResponse = await execApi(
      "get",
      `/api/${apiVersion}/source/${guid}`
    );
    if (sourceResponse?.source) {
      setSource(sourceResponse.source);
      if (Object.keys(sourceResponse.source.mapping).length > 0) {
        const key = Object.keys(sourceResponse.source.mapping)[0];
        setNewMappingKey(key || "");
        setNewMappingValue(sourceResponse.source.mapping[key] || "");
      }
    }

    if (sourceResponse.source.previewAvailable === false) {
      return;
    }

    const previewResponse = await execApi(
      "get",
      `/api/${apiVersion}/source/${guid}/preview`
    );
    if (previewResponse?.preview) {
      setPreview(previewResponse.preview);
    }

    const prrResponse = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      { unique: true }
    );
    if (prrResponse?.profilePropertyRules) {
      setProfilePropertyRules(prrResponse.profilePropertyRules);
      setProfilePropertyRuleExamples(prrResponse.examples);
    }
  }

  async function loadOptions() {
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRuleOptions`
    );
    if (response?.types) {
      setTypes(response.types);
    }
  }

  const bootstrapUniqueProfilePropertyRule = async () => {
    if (confirm("are you sure?")) {
      const response = await execApi(
        "post",
        `/api/${apiVersion}/source/${guid}/bootstrapUniqueProfilePropertyRule`,
        newProfilePropertyRule
      );
      if (response?.profilePropertyRule) {
        successHandler.set({ message: "Profile Property Rule created" });
        await load();
      }
    }
  };

  const updateMapping = async (event) => {
    event.preventDefault();

    source.mapping = {};
    source.mapping[newMappingKey] = newMappingValue;
    const response = await execApi(
      "put",
      `/api/${apiVersion}/source/${guid}`,
      Object.assign(source, { state: "ready" })
    );
    if (response?.source) {
      successHandler.set({ message: "Source updated" });
      setSource(response.source);
      if (source.state !== response.source.state) {
        Router.push(`/source/${guid}`);
      }
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
        <p>Mapping not available for a {source.type} source</p>
      </>
    );
  }

  if (previewColumns.length === 0) {
    return (
      <>
        <h2>Profile Identification</h2>
        <p>Set the options first!</p>
      </>
    );
  }

  return (
    <>
      <h2>Profile Identification</h2>

      <Form>
        <Row>
          <Col>
            <p>What column identifies the user?</p>
            <fieldset>
              <Table size="sm">
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
                          defaultChecked={
                            Object.keys(source.mapping)[0] === col
                          }
                          onClick={() => setNewMappingKey(col)}
                        />
                      </td>
                      <td>
                        <strong>{col}</strong>
                      </td>
                      <td>
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

            <Button type="submit" onClick={(e) => updateMapping(e)}>
              Save Mapping
            </Button>
          </Col>

          <Col>
            <p>Pick the Unique Grouparoo Profile Property:</p>
            <fieldset>
              <Table size="sm">
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

            <hr />
            <p>Or create a new Unique Profile Property Rule</p>
            <p>
              This profile property should be unique, meaning only one profile
              in your entire customer base will have this value. Normally this
              is an email or a user id.
            </p>

            <Form.Group controlId="key">
              <Form.Label>Key</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Profile Property Rule Key"
                defaultValue={newProfilePropertyRule.key}
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

            <Button
              size="sm"
              variant="warning"
              onClick={bootstrapUniqueProfilePropertyRule}
            >
              Create Profile Property Rule
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
