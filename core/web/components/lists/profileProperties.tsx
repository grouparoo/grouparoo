import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Moment from "react-moment";
import { Button, Form } from "react-bootstrap";
import LoadingTable from "../loadingTable";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  profileHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState({});
  const [apps, setApps] = useState([]);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const { guid } = query;

  useEffect(() => {
    load();

    profileHandler.subscribe("profileProperties-list", load.bind(this));

    return () => {
      profileHandler.unsubscribe("profileProperties-list", load.bind(this));
    };
  }, []);

  async function load() {
    await loadProfile();
    await loadProfilePropertyRules();
    await loadApps();
  }

  async function loadProfile() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/profile/${guid}`);
    setLoading(false);
    if (response?.profile?.properties) {
      setProperties(response.profile.properties);
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

  async function loadApps() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/apps`);
    setLoading(false);
    if (response?.apps) {
      setApps(response.apps);
    }
  }

  async function handleUpdate(key) {
    const hash = {};
    hash[key] = properties[key].value;
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/profile/${guid}`,
      { properties: hash }
    );
    setLoading(false);
    if (response?.profile?.properties) {
      successHandler.set({ message: `property ${key} updated` });
      setProperties(response.profile.properties);
      profileHandler.set();
    }
  }

  const keys = Object.keys(properties);
  keys.sort();

  const updateExistingProperty = async (event) => {
    const _properties = Object.assign({}, properties);
    _properties[event.target.id].value = event.target.value;
    setProperties(_properties);
  };

  const manualProperties = [];
  const manualAppGuids = apps
    .filter((app) => app.type === "manual")
    .map((app) => app.guid);

  profilePropertyRules.forEach((rule) => {
    if (manualAppGuids.indexOf(rule.appGuid) >= 0) {
      manualProperties.push(rule.key);
    }
  });

  return (
    <>
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key) => {
            return (
              <tr key={`property-${key}`}>
                <td>
                  <span style={{ fontWeight: "bold" }}>{key}</span>
                  <br />
                  <em>{properties[key].type}</em>
                </td>
                <td>
                  {manualProperties.indexOf(key) >= 0 ? (
                    <Form>
                      <Form.Group controlId={key}>
                        <Form.Control
                          required
                          type="text"
                          value={
                            properties[key].value === null
                              ? ""
                              : properties[key].value
                          }
                          onChange={(e) => updateExistingProperty(e)}
                        />
                      </Form.Group>

                      <Button
                        size="sm"
                        type="submit"
                        variant="info"
                        onClick={() => {
                          handleUpdate(key);
                        }}
                      >
                        Update
                      </Button>
                    </Form>
                  ) : (
                    <span>
                      <strong>{renderProperty(properties[key].value)}</strong>
                    </span>
                  )}
                </td>
                <td>
                  <Moment fromNow>{properties[key].createdAt}</Moment>
                </td>
                <td>
                  <Moment fromNow>{properties[key].updatedAt}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
}

function renderProperty(value) {
  if (value === true || value === false) {
    return <input type="checkbox" value={value} checked={value} readOnly />;
  } else {
    return value;
  }
}
