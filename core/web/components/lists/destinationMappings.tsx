import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Form } from "react-bootstrap";
import Loader from "../loader";
import LoadingTable from "../loadingTable";

function Examples({ column, examples }) {
  return (
    <>
      <div id={`${column}-examples`}>
        <em>
          {examples.slice(0, 3).map((example, idx) => {
            return (
              <div key={`key-${column}-${idx}`}>
                {example} <br />
              </div>
            );
          })}
        </em>
      </div>
    </>
  );
}

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  destinationHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState({
    app: { guid: "" },
    mappings: {},
  });
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const { guid } = query;

  useEffect(() => {
    load();
    destinationHandler.subscribe("destination-mappings-list", load.bind(this));
    return () => {
      destinationHandler.unsubscribe(
        "destination-mappings-list",
        load.bind(this)
      );
    };
  }, []);

  async function load() {
    await loadDestination();
    await loadColumns();
    await loadProfilePropertyRules();
  }

  async function loadDestination() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`
    );
    setLoading(false);
    if (response?.destination) {
      setDestination(response.destination);
    }
  }

  async function loadColumns() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}/columns`
    );
    setLoading(false);
    if (response?.rows) {
      setRows(response.rows);
      setColumns(response.columns);
    }
  }

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
    }
  }

  async function update() {
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      destination
    );
    setLoading(false);
    if (response?.destination) {
      successHandler.set({ message: "Destination Updated" });
      setDestination(response.destination);
    }
  }

  if (loading || !destination.app || profilePropertyRules.length === 0) {
    return <Loader />;
  }

  if (!loading && columns.length === 0) {
    return <p>No Columns to map</p>;
  }

  const uniqueProfileProperties = [];
  profilePropertyRules.forEach((rule) => {
    if (rule.appGuid === destination.app.guid || rule.unique) {
      if (rule.unique) {
        uniqueProfileProperties.push(rule.key);
      }
    }
  });

  const exampleDataByKey = {};
  columns.forEach((column) => {
    exampleDataByKey[column] = [];
  });
  rows.forEach((row) => {
    columns.forEach((column) => {
      exampleDataByKey[column].push(String(row[column]));
    });
  });

  const updateMapping = async (column, event) => {
    destination.mappings[column] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (destination.mappings[column] === "_none") {
      delete destination.mappings[column];
    }
    await setDestination(destination);
    await update();
  };

  return (
    <>
      <p>
        Select a unique column from your source to map to Grouparoo's Profiles
      </p>
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Remote Column (App)</th>
            <th>Examples</th>
            <th>Profile Property (Grouparoo)</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column) => {
            let variant = "";
            if (destination.mappings[column]) {
              variant = "table-success";
              if (
                uniqueProfileProperties.indexOf(destination.mappings[column]) >=
                0
              ) {
                variant = "table-info";
              }
            }

            return (
              <tr className={variant} key={`property-${column}`}>
                <td>
                  <h6>{column}</h6>
                </td>
                <td>
                  <Examples
                    column={column}
                    examples={exampleDataByKey[column]}
                  />
                </td>
                <td>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      value={destination.mappings[column]}
                      onChange={(e) => updateMapping(column, e)}
                    >
                      <option value="_none">None</option>
                      {profilePropertyRules.map((rule) => (
                        <option key={`rule-${rule.guid}`}>{rule.key}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
}
