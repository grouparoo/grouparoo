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
  sourceHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [connectionOptions, setConnectionOptions] = useState([]);
  const [preview, setPreview] = useState([]);
  const [source, setSource] = useState({
    guid: "",
    name: "",
    type: "",
    state: "",
    appGuid: "",
    options: {},
    app: { name: "", guid: "", icon: "" },
    connection: { name: "", description: "", options: [] },
    previewAvailable: false,
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const connectionOptionsResponse = await execApi(
      "get",
      `/api/${apiVersion}/source/${guid}/connectionOptions`
    );
    if (connectionOptionsResponse?.options) {
      setConnectionOptions(connectionOptionsResponse.options);
    }

    const sourceResponse = await execApi(
      "get",
      `/api/${apiVersion}/source/${guid}`
    );
    if (sourceResponse?.source) {
      setSource(sourceResponse.source);
    }

    await loadPreview(sourceResponse.source.previewAvailable);
  }

  async function loadPreview(
    previewAvailable: boolean = source.previewAvailable
  ) {
    if (!previewAvailable) {
      return;
    }

    const response = await execApi(
      "get",
      `/api/${apiVersion}/source/${guid}/preview`,
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
    const state = source.previewAvailable ? undefined : "ready";

    const response = await execApi(
      "put",
      `/api/${apiVersion}/source/${guid}`,
      Object.assign({}, source, { state })
    );
    if (response?.source) {
      successHandler.set({ message: "Source updated" });
      setSource(response.source);
      sourceHandler.set();
      if (response.source.state !== "ready") {
        Router.push("/source/[guid]", `/source/${guid}?tab=mapping`);
      }
      if (response.source.state === "ready" && source.state === "draft") {
        Router.push("/source/[guid]", `/source/${guid}`);
      }
    }
  };

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/source/${guid}`
      );
      if (response) {
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

  const updateOption = async (event) => {
    const _source = Object.assign({}, source);
    const optKey = event.target.id.replace("_opt~", "");
    _source.options[optKey] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
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
            <strong>
              Pick the database table that contains the data you’re looking for:
            </strong>
            <br />

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
                    {opt.required ? (
                      <>
                        <Badge variant="info">required</Badge>&nbsp;
                      </>
                    ) : null}
                  </Form.Label>

                  {(() => {
                    if (connectionOptions[opt.key]?.type === "list") {
                      return (
                        <Form.Control
                          as="select"
                          required={opt.required}
                          defaultValue={source.options[opt.key] || ""}
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
                          defaultValue={source.options[opt.key]}
                          onChange={(e) => updateOption(e)}
                        />
                      );
                    }
                  })()}
                </Form.Group>
              );
            })}
            <br />
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
