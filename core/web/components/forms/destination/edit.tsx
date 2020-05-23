import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button, Badge } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";
import AppIcon from "./../../appIcon";
import StateBadge from "./../../stateBadge";
import { Typeahead } from "react-bootstrap-typeahead";

import { DestinationAPIData } from "../../../utils/apiData";

export default function ({
  errorHandler,
  successHandler,
  destinationHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [connectionOptions, setConnectionOptions] = useState([]);
  const [destination, setDestination] = useState<DestinationAPIData>({
    // @ts-ignore
    app: {},
    // @ts-ignore
    connection: { options: [] },
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const connectionOptionsResponse = await execApi(
      "get",
      `/destination/${guid}/connectionOptions`
    );
    if (connectionOptionsResponse?.options) {
      setConnectionOptions(connectionOptionsResponse.options);
    }

    const destinationResponse = await execApi("get", `/destination/${guid}`);
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
      `/destination/${guid}`,
      Object.assign({}, destination, { state: "ready" })
    );
    if (response?.destination) {
      successHandler.set({ message: "Destination updated" });
      setDestination(response.destination);
      destinationHandler.set();
      if (response.destination.state === "draft") {
        Router.push({
          pathname: `/destination/${guid}`,
          query: { tab: "mapping" },
        });
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
      const response = await execApi("delete", `/destination/${guid}`);
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

  const updateOption = async (optKey, optValue) => {
    const _destination = Object.assign({}, destination);
    _destination.options[optKey] = optValue;
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
                    <code>{opt.key}</code>
                  </Form.Label>
                  {(() => {
                    if (connectionOptions[opt.key]?.type === "typeahead") {
                      return (
                        <>
                          <Typeahead
                            id="typeahead"
                            labelKey="key"
                            onChange={(selected) => {
                              console.log(selected);
                              updateOption(opt.key, selected[0]?.key);
                            }}
                            options={connectionOptions[opt.key]?.options.map(
                              (k, idx) => {
                                return {
                                  key: k,
                                  descriptions:
                                    connectionOptions[k]?.descriptions[idx],
                                };
                              }
                            )}
                            placeholder={`Select ${opt.key}`}
                            renderMenuItemChildren={(opt, props, idx) => {
                              return [
                                <span key={`opt-${idx}-key`}>
                                  {opt.key}
                                  <br />
                                </span>,
                                <small
                                  key={`opt-${idx}-descriptions`}
                                  className="text-small"
                                >
                                  <em>
                                    Descriptions:{" "}
                                    {opt.descriptions
                                      ? opt.descriptions.join(", ")
                                      : "None"}
                                  </em>
                                </small>,
                              ];
                            }}
                            defaultSelected={
                              destination.options[opt.key]
                                ? [destination.options[opt.key]]
                                : undefined
                            }
                          />
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                        </>
                      );
                    } else if (connectionOptions[opt.key]?.type === "list") {
                      return (
                        <>
                          <Form.Control
                            as="select"
                            required={opt.required}
                            defaultValue={destination.options[opt.key] || ""}
                            onChange={(e) =>
                              updateOption(
                                e.target.id.replace("_opt~", ""),
                                e.target.value
                              )
                            }
                          >
                            <option value={""} disabled>
                              Choose an option
                            </option>
                            {connectionOptions[opt.key].options.map(
                              (o, idx) => (
                                <option key={`opt~${opt.key}-${o}`} value={o}>
                                  {o}{" "}
                                  {connectionOptions[opt.key]?.descriptions &&
                                  connectionOptions[opt.key]?.descriptions[idx]
                                    ? ` | ${
                                        connectionOptions[opt.key]
                                          ?.descriptions[idx]
                                      }`
                                    : null}
                                </option>
                              )
                            )}
                          </Form.Control>
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Form.Control
                            required={opt.required}
                            type="text"
                            defaultValue={destination.options[opt.key]}
                            onChange={(e) =>
                              updateOption(
                                e.target.id.replace("_opt~", ""),
                                e.target.value
                              )
                            }
                          />
                          <Form.Text className="text-muted">
                            {opt.description}
                          </Form.Text>
                        </>
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
