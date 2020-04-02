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
          </Col>
        </Row>

        <Button type="submit" onClick={(e) => updateMapping(e)}>
          Save Mapping
        </Button>
      </Form>
    </>
  );
}
