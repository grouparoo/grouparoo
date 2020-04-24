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
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    delete destination["mapping"];
    delete destination["destinationGroupMemberships"];
    delete destination["groups"];

    const response = await execApi(
      "put",
      `/api/${apiVersion}/destination/${guid}`,
      Object.assign({}, destination, { state: "ready" })
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination updated" });
      setDestination(response.destination);
      destinationHandler.set();
      if (response.destination.state === "draft") {
        Router.push("/destination/[guid]", `/destination/${guid}?tab=mapping`);
      }
      if (
        response.destination.state === "ready" &&
        destination.state === "draft"
      ) {
        Router.push({
          pathname: `/destination/${destination.guid}`,
          query: { tab: "data" },
        });
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
  };

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
