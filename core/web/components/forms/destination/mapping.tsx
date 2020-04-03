import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Badge, Table, Form, Button } from "react-bootstrap";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [preview, setPreview] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const [
    profilePropertyRuleExamples,
    setProfilePropertyRuleExamples,
  ] = useState({});
  const [destination, setDestination] = useState({
    guid: "",
    type: "",
    previewAvailable: false,
    mapping: {},
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const destinationResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`
    );
    if (destinationResponse?.destination) {
      setDestination(destinationResponse.destination);
    }

    if (destinationResponse.destination.previewAvailable === false) {
      return;
    }

    const previewResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}/preview`
    );
    if (previewResponse?.preview) {
      setPreview(previewResponse.preview);
    }

    const prrResponse = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      { unique: false }
    );
    if (prrResponse?.profilePropertyRules) {
      setProfilePropertyRules(prrResponse.profilePropertyRules);
      setProfilePropertyRuleExamples(prrResponse.examples);
    }
  }

  async function update() {
    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      { guid: destination.guid, mapping: destination.mapping, state: "ready" }
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination Updated" });
      setDestination(response.destination);
    }
  }

  const updateMapping = async (column, event) => {
    destination.mapping[column] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (destination.mapping[column] === "_none") {
      delete destination.mapping[column];
    }
    await setDestination(destination);
    await update();
  };

  // not every row returned is guaranteed to have the same columns
  const previewColumns = preview
    .map((row) => Object.keys(row))
    .flat()
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  if (!destination.previewAvailable) {
    return (
      <>
        <p>Mapping not available for a {destination.type} source</p>
      </>
    );
  }

  if (previewColumns.length === 0) {
    return (
      <>
        <p>Set the options first!</p>
      </>
    );
  }

  const pprExamplesByKey = [];
  for (const guid in profilePropertyRuleExamples) {
    const rule = profilePropertyRules.filter((ppr) => ppr.guid === guid)[0];
    pprExamplesByKey[rule.key] = profilePropertyRuleExamples[guid];
  }

  return (
    <>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Sending?</th>
            <th>Remote Column</th>
            <th>Grouparoo Profile Property Rule</th>
          </tr>
        </thead>
        <tbody>
          {previewColumns.map((col) => (
            <tr key={`destination-${col}`}>
              <td>{destination.mapping[col] ? "✅" : null}</td>
              <td>
                <h5>{col}</h5>
                {preview
                  .map((p) => p[col])
                  .slice(0, 3)
                  .join(", ")}
              </td>
              <td>
                <Form.Group>
                  <Form.Control
                    as="select"
                    value={destination.mapping[col]}
                    onChange={(e) => updateMapping(col, e)}
                  >
                    <option value="_none">None</option>
                    {profilePropertyRules.map((rule) => (
                      <option key={`${col}-rule-${rule.guid}`} value={rule.key}>
                        {rule.key}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                {pprExamplesByKey[destination.mapping[col]]
                  ? pprExamplesByKey[destination.mapping[col]]
                      .slice(0, 3)
                      .join(", ")
                  : null}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
