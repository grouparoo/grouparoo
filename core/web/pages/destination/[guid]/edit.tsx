import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Badge } from "react-bootstrap";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import AppIcon from "./../../../components/appIcon";
import StateBadge from "./../../../components/stateBadge";
import { Typeahead } from "react-bootstrap-typeahead";
import DestinationTabs from "./../../../components/tabs/destination";
import LoadingButton from "../../../components/loadingButton";

import { DestinationAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    destinationHandler,
    environmentVariableOptions,
    query,
    hydrationError,
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [destination, setDestination] = useState<DestinationAPIData>(
    props.destination
  );
  const [loading, setLoading] = useState(false);
  const [connectionOptions, setConnectionOptions] = useState(
    props.connectionOptions
  );
  const { guid } = query;

  if (hydrationError) errorHandler.set({ error: hydrationError });

  const onSubmit = async (event) => {
    event.preventDefault();
    delete destination["mapping"];
    delete destination["destinationGroupMemberships"];
    delete destination["groups"];

    setLoading(true);
    const response = await execApi(
      "put",
      `/destination/${guid}`,
      Object.assign({}, destination, { state: "ready" })
    );
    if (response?.destination) {
      setDestination(response.destination);
      destinationHandler.set(response.destination);
      if (
        response.destination.state === "ready" &&
        destination.state === "draft"
      ) {
        Router.push(
          `/destination/[guid]/data`,
          `/destination/${destination.guid}/data`
        );
      } else {
        successHandler.set({ message: "Destination updated" });
      }
    }
    setLoading(false);
  };

  async function refreshOptions() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/destination/${guid}/connectionOptions`,
      destination,
      null,
      null,
      false
    );
    if (response?.options) setConnectionOptions(response.options);
    setLoading(false);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi("delete", `/destination/${guid}`);
      if (response) {
        Router.push("/destinations");
      } else {
        setLoading(false);
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
    if (event.target.id !== "name") setTimeout(refreshOptions, 100);
  };

  const updateOption = async (optKey, optValue) => {
    const _destination = Object.assign({}, destination);
    _destination.options[optKey] = optValue;
    setDestination(_destination);
    setTimeout(refreshOptions, 100);
  };

  useEffect(() => {
    props.destinationHandler.subscribe("destination-edit", (_destination) => {
      setDestination(_destination);
    });

    return () => {
      props.destinationHandler.unsubscribe("destination-edit");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} />

      <h1>Edit Destination</h1>

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
                            placeholder={opt.placeholder || `Select ${opt.key}`}
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
                                  {opt.descriptions ? (
                                    <em>
                                      Descriptions:{" "}
                                      {opt.descriptions.join(", ")}
                                    </em>
                                  ) : null}
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
                              Select an option
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
                    } else if (connectionOptions[opt.key]?.type === "pending") {
                      return (
                        <>
                          <Form.Control
                            size="sm"
                            disabled
                            type="text"
                            value="pending another selection"
                          ></Form.Control>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Form.Control
                            required={opt.required}
                            type="text"
                            defaultValue={destination.options[opt.key]}
                            placeholder={opt.placeholder}
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

            {environmentVariableOptions.length > 0 ? (
              <Row>
                <Col>
                  <p>
                    Environment Variable Options for Destinations:{" "}
                    {environmentVariableOptions.sort().map((envOpt) => (
                      <Badge key={`envOpt-${envOpt}`} variant="info">
                        {envOpt}
                      </Badge>
                    ))}
                  </p>
                  <br />
                </Col>
              </Row>
            ) : null}

            <br />

            <LoadingButton variant="primary" type="submit" disabled={loading}>
              Update
            </LoadingButton>

            <br />
            <br />

            <LoadingButton
              variant="danger"
              size="sm"
              disabled={loading}
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </LoadingButton>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const { environmentVariableOptions } = await execApi(
    "get",
    "/destinations/connectionApps"
  );

  let options = {};
  let hydrationError: Error;

  try {
    const connectionOptionsResponse = await execApi(
      "get",
      `/destination/${guid}/connectionOptions`,
      { options: destination.options }
    );
    options = connectionOptionsResponse.options;
  } catch (error) {
    hydrationError = error.toString();
  }

  return {
    destination,
    connectionOptions: options,
    environmentVariableOptions,
    hydrationError,
  };
};
