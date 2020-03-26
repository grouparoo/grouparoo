import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import Link from "next/link";
import { Row, Col, Form, Button, ListGroup, Badge } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "../../appIcon";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  query,
  destinationHandler,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [apps, setApps] = useState([]);
  const [connections, setConnections] = useState([]);
  const [groups, setGroups] = useState([]);
  const [destination, setDestination] = useState({
    guid: "",
    name: "",
    trackAllGroups: false,
    destinationGroups: [],
    app: {
      guid: "",
      type: "",
      icon: "",
    },
    options: {},
  });

  const { guid } = query;

  useEffect(() => {
    load();

    destinationHandler.subscribe("destination-edit", load.bind(this));

    return () => {
      destinationHandler.unsubscribe("destination-edit", load.bind(this));
    };
  }, []);

  async function load() {
    setLoading(true);

    const destinationResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`
    );
    if (destinationResponse?.destination) {
      setDestination(destinationResponse.destination);
    }

    const optionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/destinationOptions`
    );
    if (optionsResponse?.connections) {
      setConnections(optionsResponse.connections);
    }

    const appsResponse = await execApi("get", `/api/${apiVersion}/apps`);
    if (appsResponse?.apps) {
      setApps(appsResponse.apps);
    }

    const groupsResponse = await execApi("get", `/api/${apiVersion}/groups`);
    if (groupsResponse?.groups) {
      setGroups(groupsResponse.groups);
    }

    setLoading(false);
  }

  async function edit(event) {
    event.preventDefault();
    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      destination
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination Updated" });
      setDestination(response.destination);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/destination/${guid}`
      );
      if (response) {
        Router.push("/destinations");
      }
    }
  }

  async function toggleDestinationGroup(group, add) {
    const path = `/api/${apiVersion}/destination/${guid}/${
      add ? "track" : "unTrack"
    }`;
    const response = await execApi("post", path, { groupGuid: group.guid });
    if (response) {
      successHandler.set({ message: "Group Updated" });
      await load();
    }
  }

  const update = async (event) => {
    const _destination = Object.assign({}, destination);
    _destination[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setDestination(_destination);
  };

  const updateOption = async (event) => {
    const _destination = Object.assign({}, destination);
    _destination.options[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setDestination(_destination);
  };

  let chosenConnection;
  connections.forEach((conn) => {
    if (
      conn.app.indexOf(destination.app.type) >= 0 &&
      conn.direction === "export"
    ) {
      chosenConnection = conn;
    }
  });

  const destinationGroupGuids = destination.destinationGroups.map(
    (dsg) => dsg.guid
  );

  return (
    <>
      <p>
        <span className="text-muted">{destination.guid}</span>
      </p>
      <Row>
        <Col md={1}>
          <br />
          <AppIcon src={destination?.app.icon} fluid size={100} />
        </Col>
        <Col>
          <Form id="form" onSubmit={edit} noValidate>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={destination.name}
                onChange={(e) => update(e)}
              />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="trackAllGroups">
              <Form.Check
                checked={destination.trackAllGroups}
                type="checkbox"
                label="Track All Groups?"
                onChange={(e) => update(e)}
              />
            </Form.Group>

            <Form.Group controlId="appGuid">
              <Form.Label>Connected App</Form.Label>
              <Form.Control
                disabled
                as="select"
                value={destination.app.guid}
                onChange={(e) => update(e)}
              >
                {apps.map((app) => (
                  <option key={`app-${app.guid}`} value={app.guid}>
                    {app.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {chosenConnection && chosenConnection.options.length > 0 ? (
              <>
                <hr />
                <strong>
                  Options for a {chosenConnection.name} connection
                </strong>
                <br />
                <br />
                <p>
                  You can use mustache variables in your query. You have access
                  to "now" and "destination". Timestamps are expanded into
                  "hour", "day", and "sql" i.e.{" "}
                  <code>
                    select * from "users" where updatedAt >= '&#123;&#123;
                    now.sql &#125;&#125;'
                  </code>
                </p>
                <br />

                {chosenConnection.options.map((opt) => {
                  return (
                    <Form.Group key={`opt-${opt.key}`} controlId={opt.key}>
                      <Form.Label>
                        {opt.required ? (
                          <>
                            <Badge variant="info">required</Badge>&nbsp;
                          </>
                        ) : null}
                        <code>{opt.key}</code>: <small>{opt.description}</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required={opt.required}
                        placeholder="..."
                        value={destination.options[opt.key] || ""}
                        onChange={(e) => updateOption(e)}
                      />
                    </Form.Group>
                  );
                })}
              </>
            ) : null}

            <Button variant="primary" type="submit">
              Update
            </Button>
            <hr />
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Form>
        </Col>
        {!destination.trackAllGroups ? (
          <Col md={5}>
            <h4>Groups</h4>

            <ListGroup>
              {groups.map((group) => {
                const tracked = destinationGroupGuids.indexOf(group.guid) >= 0;

                return (
                  <ListGroup.Item
                    key={group.guid}
                    variant={tracked ? "success" : "info"}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Button
                              size="sm"
                              variant={tracked ? "warning" : "info"}
                              onClick={() => {
                                toggleDestinationGroup(group, !tracked);
                              }}
                            >
                              {!tracked ? "track" : "stop tracking"}
                            </Button>
                          </td>
                          <td>&nbsp;</td>
                          <td>
                            <Link
                              href="/group/[guid]"
                              as={`/group/${group.guid}`}
                            >
                              <a>{group.name}</a>
                            </Link>
                            <br />
                            <small>{group.profilesCount} members</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        ) : null}
      </Row>
    </>
  );
}
