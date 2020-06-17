import { useApi } from "../../../hooks/useApi";
import SourceTabs from "../../../components/tabs/source";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Row, Col, Form, Button, Badge, Table } from "react-bootstrap";
import Router from "next/router";
import AppIcon from "./../../../components/appIcon";
import StateBadge from "./../../../components/stateBadge";
import { Typeahead } from "react-bootstrap-typeahead";
import { SourceAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, sourceHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [preview, setPreview] = useState([]);
  const [source, setSource] = useState<SourceAPIData>(props.source);
  const [connectionOptions, setConnectionOptions] = useState(
    props.connectionOptions
  );
  const { guid } = query;

  useEffect(() => {
    loadPreview(source.previewAvailable);
  }, []);

  async function loadPreview(
    previewAvailable: boolean = source.previewAvailable
  ) {
    if (!previewAvailable) {
      return;
    }

    const response = await execApi(
      "get",
      `/source/${guid}/preview`,
      {
        options: Object.keys(source.options).length > 0 ? source.options : null,
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
    const state = source.connection.skipSourceMapping
      ? "ready"
      : source.previewAvailable
      ? undefined
      : "ready";

    const response = await execApi(
      "put",
      `/source/${guid}`,
      Object.assign({}, source, { state })
    );
    if (response?.source) {
      setSource(response.source);
      sourceHandler.set(response.source);
      if (response.source.state !== "ready") {
        Router.push(`/source/${guid}/mapping`);
      } else if (
        response.source.state === "ready" &&
        source.state === "draft"
      ) {
        Router.push(`/source/${guid}/overview`);
      } else {
        successHandler.set({ message: "Source updated" });
      }
    }
  };

  async function refreshOptions() {
    const response = await execApi(
      "get",
      `/source/${guid}/connectionOptions`,
      source,
      null,
      null,
      false
    );
    if (response?.options) setConnectionOptions(response.options);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi("delete", `/source/${guid}`);
      if (response) {
        successHandler.set({ message: "source deleted" });
        Router.push("/sources");
      }
    }
  }

  const update = async (event) => {
    const _source = Object.assign({}, source);
    _source[event.target.id] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setSource(_source);
  };

  const updateOption = async (optKey, optValue) => {
    const _source = Object.assign({}, source);
    _source.options[optKey] = optValue;
    setSource(_source);
    loadPreview();
  };

  // not every row returned is guaranteed to have the same columns
  const previewColumns = preview
    .map((row) => Object.keys(row))
    .flat()
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return (
    <>
      <Head>
        <title>Grouparoo: {source.name}</title>
      </Head>

      <SourceTabs source={source} />

      <h2>Edit this {source.app.name} Source</h2>

      <Row>
        <Col md={1}>
          <br />
          <AppIcon src={source.app.icon} fluid size={100} />
        </Col>
        <Col>
          <StateBadge state={source.state} />
          <br />
          <br />
          <Form id="form" onSubmit={onSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Source Name"
                defaultValue={source.name}
                onChange={(e) => update(e)}
              />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <hr />
            <p>Options for a {source.type} source:</p>

            {Object.keys(source.connection.options).length === 0 ? (
              <p>No options for this type of source</p>
            ) : null}

            {source.connection.options.map((opt) => {
              return (
                <Form.Group
                  key={`group-${opt.key}`}
                  controlId={`_opt~${opt.key}`}
                >
                  <Form.Label>
                    <strong>{opt.key}</strong>{" "}
                    {opt.required ? (
                      <>
                        <Badge variant="info">required</Badge>&nbsp;
                      </>
                    ) : null}
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
                              source.options[opt.key]
                                ? [source.options[opt.key]]
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
                            defaultValue={source.options[opt.key] || ""}
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
                            defaultValue={source.options[opt.key]}
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

                  {/* list-type options */}
                </Form.Group>
              );
            })}

            <hr />

            <h3>Example Data</h3>

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
                        <td key={`table-${i}-${j}`}>
                          {row[col] ? (
                            typeof row[col] === "object" ? (
                              <code>{JSON.stringify(row[col])}</code>
                            ) : (
                              row[col]
                            )
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <br />

            <Button variant="primary" type="submit">
              Update
            </Button>
            <br />
            <br />
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

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${guid}`);
  const { options: connectionOptions } = await execApi(
    "get",
    `/source/${guid}/connectionOptions`,
    { options: source.options }
  );

  return { source, connectionOptions };
};
