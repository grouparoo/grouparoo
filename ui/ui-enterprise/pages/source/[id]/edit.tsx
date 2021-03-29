import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import SourceTabs from "@grouparoo/ui-components/components/tabs/source";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Row, Col, Form, Badge, Alert } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useRouter } from "next/router";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import LoadingButton from "@grouparoo/ui-components/components/loadingButton";
import Loader from "@grouparoo/ui-components/components/loader";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    sourceHandler,
    environmentVariableOptions,
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [source, setSource] = useState<Models.SourceType>(props.source);
  const [connectionOptions, setConnectionOptions] = useState<
    Actions.sourceConnectionOptions["options"]
  >({});
  const { id } = router.query;

  useEffect(() => {
    loadPreview(source.previewAvailable);
    loadOptions();
  }, []);

  async function loadPreview(
    previewAvailable: boolean = source.previewAvailable
  ) {
    if (!previewAvailable) {
      return;
    }

    setPreviewLoading(true);
    const response: Actions.SourcePreview = await execApi(
      "get",
      `/source/${id}/preview`,
      {
        options: Object.keys(source.options).length > 0 ? source.options : null,
      },
      null,
      null,
      false
    );
    setPreviewLoading(false);
    if (response?.preview) {
      setPreview(response.preview);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const state = source.connection.skipSourceMapping
      ? "ready"
      : source.previewAvailable
      ? undefined
      : "ready";

    const response: Actions.SourceEdit = await execApi(
      "put",
      `/source/${id}`,
      Object.assign({}, source, { state })
    );
    if (response?.source) {
      setSource(response.source);
      sourceHandler.set(response.source);
      if (response.source.state !== "ready") {
        router.push(`/source/[id]/mapping`, `/source/${id}/mapping`);
      } else if (
        response.source.state === "ready" &&
        source.state === "draft"
      ) {
        router.push(`/source/${id}/overview`);
      } else {
        setLoading(false);
        successHandler.set({ message: "Source updated" });
      }
    } else {
      setLoading(false);
    }
  };

  async function loadOptions() {
    setLoadingOptions(true);
    const response: Actions.sourceConnectionOptions = await execApi(
      "get",
      `/source/${id}/connectionOptions`,
      { options: source.options },
      null,
      null,
      false
    );
    if (response?.options) setConnectionOptions(response.options);
    setLoadingOptions(false);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.SourceDestroy = await execApi(
        "delete",
        `/source/${id}`
      );
      if (success) {
        successHandler.set({ message: "source deleted" });
        router.push("/sources");
      } else {
        setLoading(false);
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

      <PageHeader
        icon={source.app.icon}
        title={source.name}
        badges={[
          <LockedBadge object={source} />,
          <StateBadge state={source.state} />,
        ]}
      />

      <Row>
        <Col>
          <Form id="form" onSubmit={onSubmit} autoComplete="off">
            <fieldset disabled={source.locked !== null}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  disabled={loading}
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

              {loadingOptions ? (
                <Alert variant="warning">
                  <Loader size="sm" /> Loading options from {source.app.type}
                </Alert>
              ) : null}

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
                      <code>{opt.displayName || opt.key}</code>{" "}
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
                              disabled={loading || loadingOptions}
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
                              placeholder={
                                opt.placeholder || `Select ${opt.key}`
                              }
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
                              disabled={loading || loadingOptions}
                              defaultValue={
                                source.options[opt.key]?.toString() || ""
                              }
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
                                    connectionOptions[opt.key]?.descriptions[
                                      idx
                                    ]
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
                      } else if (
                        connectionOptions[opt.key]?.type === "pending"
                      ) {
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
                              type={
                                connectionOptions[opt.key]?.type === "password"
                                  ? "password"
                                  : "text"
                              }
                              disabled={loading || loadingOptions}
                              defaultValue={source.options[opt.key]?.toString()}
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

                    {/* list-type options */}
                  </Form.Group>
                );
              })}

              {environmentVariableOptions.length > 0 ? (
                <Row>
                  <Col>
                    <p>
                      Environment Variable Options for Sources:{" "}
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

              <hr />

              <h3>Example Data</h3>

              {previewColumns.length === 0 && !loading ? (
                <p>No preview</p>
              ) : null}
              {previewColumns.length === 0 && loading ? <Loader /> : null}

              <div style={{ overflow: "auto" }}>
                <LoadingTable loading={previewLoading} size="sm">
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
                </LoadingTable>
              </div>

              <br />

              <LoadingButton variant="primary" type="submit" disabled={loading}>
                Update
              </LoadingButton>
              <br />
              <br />
              <LoadingButton
                disabled={loading}
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </LoadingButton>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { source } = await execApi("get", `/source/${id}`);
  const { environmentVariableOptions } = await execApi(
    "get",
    `/sources/connectionApps`
  );

  return {
    source,
    environmentVariableOptions,
  };
};
