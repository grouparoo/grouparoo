import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import {
  Row,
  Col,
  Form,
  Button,
  Badge,
  Table,
  ListGroup,
} from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";
import AppIcon from "./../../appIcon";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [connectionOptions, setConnectionOptions] = useState([]);
  const [preview, setPreview] = useState([]);
  const [groups, setGroups] = useState([]);
  const [destination, setDestination] = useState({
    guid: "",
    name: "",
    type: "",
    appGuid: "",
    trackAllGroups: false,
    options: {},
    app: { name: "", guid: "", icon: "" },
    connection: { name: "", description: "", options: [] },
    destinationGroups: [],
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const connectionOptionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}/connectionOptions`
    );
    if (connectionOptionsResponse?.options) {
      setConnectionOptions(connectionOptionsResponse.options);
    }

    const groupsResponse = await execApi("get", `/api/${apiVersion}/groups`);
    if (groupsResponse?.groups) {
      setGroups(groupsResponse.groups);
    }

    const destinationResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`
    );
    if (destinationResponse?.destination) {
      setDestination(destinationResponse.destination);
    }

    await loadPreview();
  }

  async function loadPreview() {
    const response = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}/preview`,
      {
        options:
          Object.keys(destination.options).length > 0
            ? destination.options
            : null,
      },
      null,
      null,
      false
    );
    if (response?.preview) {
      setPreview(response.preview);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      destination
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination updated" });
      setDestination(response.destination);
    }
  };

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
    const optKey = event.target.id.replace("_opt~", "");
    _destination.options[optKey] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setDestination(_destination);
    loadPreview();
  };

  // not every row returned is guaranteed to have the same columns
  const previewColumns = preview
    .map((row) => Object.keys(row))
    .flat()
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

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

  const destinationGroupGuids = destination.destinationGroups.map(
    (dsg) => dsg.guid
  );

  return (
    <>
      <h2>Edit Destination</h2>
      <p>
        <span className="text-muted">{destination.guid}</span>
      </p>

      <Row>
        <Col md={1}>
          <br />
          <AppIcon src={destination.app.icon} fluid size={100} />
        </Col>
        <Col>
          <Form id="form" onSubmit={onSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Destination Name"
                defaultValue={destination.name}
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

            <p>
              <strong>App</strong>:{" "}
              <Link href="/app/[guid]" as={`/app/${destination.app.guid}`}>
                <a>
                  {destination.app.name} ({destination.app.guid})
                </a>
              </Link>
              <br />
              <strong>Connection</strong>: {destination.connection.name}:{" "}
              {destination.connection.description}
            </p>

            <hr />
            <strong>Options for a {destination.type} destination</strong>
            <br />
            <br />

            {Object.keys(destination.connection.options).length === 0 ? (
              <p>No options for this type of destination</p>
            ) : null}

            {destination.connection.options.map((opt) => {
              return (
                <Form.Group
                  key={`group-${opt.key}`}
                  controlId={`_opt~${opt.key}`}
                >
                  <Form.Label>
                    {opt.required ? (
                      <>
                        <Badge variant="info">required</Badge>&nbsp;
                      </>
                    ) : null}
                    <code>{opt.key}</code>: <small>{opt.description}</small>
                  </Form.Label>
                  {(() => {
                    if (connectionOptions[opt.key]?.type === "list") {
                      return (
                        <Form.Control
                          as="select"
                          required={opt.required}
                          defaultValue={destination.options[opt.key] || ""}
                          onChange={(e) => updateOption(e)}
                        >
                          <option value={""} disabled>
                            Choose an option
                          </option>
                          {connectionOptions[opt.key].options.map((o, idx) => (
                            <option key={`opt~${opt.key}-${o}`} value={o}>
                              {o}{" "}
                              {connectionOptions[opt.key]?.descriptions &&
                              connectionOptions[opt.key]?.descriptions[idx]
                                ? ` | ${
                                    connectionOptions[opt.key]?.descriptions[
                                      idx
                                    ]
                                  }`
                                : null}
                            </option>
                          ))}
                        </Form.Control>
                      );
                    } else {
                      return (
                        <Form.Control
                          required={opt.required}
                          type="text"
                          defaultValue={destination.options[opt.key]}
                          onChange={(e) => updateOption(e)}
                        />
                      );
                    }
                  })()}
                </Form.Group>
              );
            })}

            <br />
            <br />
            <h3>Data Preview</h3>

            {previewColumns.length === 0 ? <p>No preview</p> : null}

            <div style={{ overflow: "auto" }}>
              <Table striped size="sm">
                <thead>
                  <tr>
                    {previewColumns.map((col) => (
                      <th key={`head-${col}`}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {preview.map((row, i) => (
                    <tr key={`row-${i}`}>
                      {previewColumns.map((col, j) => (
                        <td key={`table-${i}-${j}`}>{row[col]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <br />
            <br />

            <Button variant="primary" type="submit">
              Update
            </Button>
            <hr />
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                handleDelete();
              }}
            >
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
