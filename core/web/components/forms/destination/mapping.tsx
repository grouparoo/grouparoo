import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Table, Form } from "react-bootstrap";
import Router from "next/router";

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
    state: "",
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

    if (destinationResponse.destination.previewAvailable) {
      const previewResponse = await execApi(
        "get",
        `/api/${apiVersion}/destination/${guid}/preview`
      );
      if (previewResponse?.preview) {
        setPreview(previewResponse.preview);
      }
    }

    const prrResponse = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      { unique: false, state: "ready" }
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
      if (
        response.destination.state === "ready" &&
        destination.state === "draft"
      ) {
        Router.push(`/destinations`);
      }
    }
  }

  const updateMapping = async (column, event) => {
    destination.mapping[column] = event.target.value;
    if (destination.mapping[column] === "_none") {
      delete destination.mapping[column];
    }
    await setDestination(destination);
    await update();
  };

  const updateReflexiveMapping = async (column, event) => {
    destination.mapping[column] = event.target.checked ? column : "_none";
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

  if (destination.previewAvailable && previewColumns.length === 0) {
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

  // if there is no mapping, return a checklist of profile property rules, and we will map them 1-to-1
  if (!destination.previewAvailable) {
    return (
      <>
        <Table bordered striped variant="light">
          <thead>
            <tr>
              <th>Sending?</th>
              <th>Grouparoo Profile Property Rule</th>
            </tr>
          </thead>
          <tbody>
            {profilePropertyRules.map((rule) => (
              <tr key={`rule-${rule.key}`}>
                {/* <td>{destination.mapping[rule.key] ? "✅" : null}</td> */}
                <td>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      name="read"
                      label=""
                      checked={destination.mapping[rule.key] === rule.key}
                      onChange={(e) => updateReflexiveMapping(rule.key, e)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <h5>{rule.key}</h5>
                  {pprExamplesByKey[rule.key]
                    ? pprExamplesByKey[rule.key].slice(0, 3).join(", ")
                    : null}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }

  // if there is a preview to map against, show a dropdown list for each remote column
  return (
    <>
      <Table bordered striped variant="light">
        <thead>
          <tr>
            <th>Sending?</th>
            <th>Grouparoo Profile Property Rule</th>
            <th>Remote Column</th>
          </tr>
        </thead>
        <tbody>
          {previewColumns.map((col) => (
            <tr key={`destination-${col}`}>
              <td>{destination.mapping[col] ? "✅" : null}</td>
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
              <td>
                <h5>{col}</h5>
                {preview
                  .map((p) => p[col])
                  .slice(0, 3)
                  .join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
