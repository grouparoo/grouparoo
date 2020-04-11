import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Badge, Table } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";
import AppIcon from "./../../appIcon";
import StateBadge from "./../../stateBadge";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  destinationHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [connectionOptions, setConnectionOptions] = useState([]);
  const [preview, setPreview] = useState([]);
  const [destination, setDestination] = useState({
    guid: "",
    name: "",
    type: "",
    state: "",
    appGuid: "",
    options: {},
    app: { name: "", guid: "", icon: "" },
    connection: { name: "", description: "", options: [] },
    destinationGroups: [],
    previewAvailable: false,
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

    const destinationResponse = await execApi(
      "get",
      `/api/${apiVersion}/destination/${guid}`
    );
    if (destinationResponse?.destination) {
      setDestination(destinationResponse.destination);
    }

    await loadPreview(destinationResponse.destination.previewAvailable);
  }

  async function loadPreview(previewAvailable = destination.previewAvailable) {
    if (!previewAvailable) {
      return;
    }

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
    const state = destination.previewAvailable ? undefined : "ready";

    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      Object.assign({}, destination, { state })
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination updated" });
      setDestination(response.destination);
      destinationHandler.set();
      if (response.destination.state === "draft") {
        Router.push(`/destination/${guid}?tab=mapping`);
      }
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

      <Row>
        <Col md={1}>
          <br />
          <AppIcon src={destination.app.icon} fluid size={100} />
        </Col>
        <Col>
          <StateBadge state={destination.state} />

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

            <p>
              <strong>App</strong>:{" "}
              <Link href="/app/[guid]" as={`/app/${destination.app.guid}`}>
                <a>{destination.app.name}</a>
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
      </Row>
    </>
  );
}
