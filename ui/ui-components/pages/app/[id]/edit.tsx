import { useApi } from "../../../contexts/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, Fragment, useCallback, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col, Form, Badge, Alert } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { appHandler, successHandler } from "../../../eventHandlers";
import PageHeader from "../../../components/PageHeader";
import StateBadge from "../../../components/badges/StateBadge";
import SourceBadge from "../../../components/badges/SourceBadge";
import DestinationBadge from "../../../components/badges/DestinationBadge";
import AppTabs from "../../../components/tabs/App";
import Loader from "../../../components/Loader";
import LoadingButton from "../../../components/LoadingButton";
import LockedBadge from "../../../components/badges/LockedBadge";
import { Actions, Models } from "../../../utils/apiData";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import { NextPageContext } from "next";
import { generateClient } from "../../../client/client";

export default function Page(
  props: Awaited<ReturnType<typeof Page.getInitialProps>>
) {
  const { environmentVariableOptions, options, pluginOptions } = props;
  const router = useRouter();
  const { client } = useApi();
  const [app, setApp] = useState<Models.AppType>(props.app);
  const { register, handleSubmit, setValue, getValues, reset, watch, control } =
    useForm<Models.AppType>({
      defaultValues: props.app,
    });
  const appName = watch("name");
  const [loading, setLoading] = useState(false);
  const [loadingOAuth, setLoadingOAuth] = useState(false);
  const [oAuthPopup, setOAuthPopup] = useState<Window>(null);
  const [testLoading, setTestLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    error: string;
    message: string;
  }>({ success: null, error: null, message: null });
  const [ranTest, setRanTest] = useState(false);
  const { id } = router.query;

  const loadOAuthRequest = useCallback(
    async (requestId: string) => {
      if (requestId) {
        const response: Actions.OAuthClientView = await client.request(
          "get",
          `/oauth/client/request/${requestId}/view`
        );

        if (response.oAuthRequest) {
          setValue(
            `options.${response.oAuthRequest.appOption}`,
            response.oAuthRequest.token
          );
          successHandler.set({
            message: `Loaded app options from ${response.oAuthRequest.provider}`,
          });
        }
      }
    },
    [client, setValue]
  );

  useEffect(() => {
    if (!oAuthPopup) return;

    const onMessage = (event: MessageEvent) => {
      if (event.source === oAuthPopup) {
        loadOAuthRequest(event.data.requestId);
      }
    };

    globalThis.addEventListener("message", onMessage, false);

    const interval = setInterval(() => {
      if (oAuthPopup.closed) {
        setLoadingOAuth(false);
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      globalThis.removeEventListener("message", onMessage);
    };
  }, [loadOAuthRequest, oAuthPopup]);

  async function edit(appData: Models.AppType) {
    const state = app.state === "ready" ? undefined : "ready";
    setLoading(true);
    const response: Actions.AppEdit = await client.request(
      "put",
      `/app/${id}`,
      {
        ...appData,
        state,
      }
    );
    if (response?.app) {
      if (response.app.state === "ready" && app.state === "draft") {
        router.push("/apps");
      } else {
        setLoading(false);
        successHandler.set({ message: "App Updated" });
        setApp(response.app);
        reset(response.app);
        appHandler.set(response.app);
      }
    } else {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.AppDestroy = await client.request(
        "delete",
        `/app/${id}`
      );
      if (response?.success) {
        successHandler.set({ message: "App Deleted" });
        router.push("/apps");
      } else {
        setLoading(false);
      }
    }
  }

  async function test() {
    setTestLoading(true);
    setRanTest(false);
    setTestResult({ success: null, message: null, error: null });
    const { options } = getValues();
    const response: Actions.AppTest = await client.request(
      "put",
      `/app/${id}/test`,
      {
        options,
      }
    );
    if (response?.test) {
      setRanTest(true);
      setTestResult(response.test);
    }
    setTestLoading(false);
  }

  const startOAuthLogin = async (optionKey: string) => {
    const providerName = app.pluginName.replace("@grouparoo/", "");
    setLoadingOAuth(true);

    const response: Actions.OAuthClientStart = await client.request(
      "post",
      `/oauth/${providerName}/client/start`,
      { type: "app", appId: id, appOption: optionKey }
    );
    if (response.location) {
      const windowFeatures =
        "toolbar=no, menubar=no, width=600, height=850, top=100, left=100";
      const oAuthPopupWindow = window.open(
        response.location,
        "grouparoo-oauth-popup",
        windowFeatures
      );
      setOAuthPopup(oAuthPopupWindow);
    } else {
      setLoadingOAuth(false);
    }
  };

  return (
    <>
      <Head>
        <title>Grouparoo: {appName || `Draft`}</title>
      </Head>

      <AppTabs app={app} name={appName} />

      <PageHeader
        icon={app.icon}
        title={appName}
        badges={[
          <SourceBadge object={app} />,
          <DestinationBadge object={app} />,
          <LockedBadge object={app} />,
          <StateBadge state={app.state} />,
        ]}
      />

      <Row>
        <Col>
          <Form id="form" onSubmit={handleSubmit(edit)} autoComplete="off">
            <fieldset disabled={Boolean(app.locked)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  disabled={loading}
                  {...register("name")}
                />
                <Form.Control.Feedback type="invalid">
                  Name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" value={app.type} disabled>
                  <option>{app.type}</option>
                </Form.Control>
              </Form.Group>
              <div data-screenshotid="appOptions">
                {pluginOptions.length > 0 ? (
                  <>
                    <div className="mb-3">
                      <hr />
                      <p className="mb-3">
                        <strong>
                          Options for a <code>{app.pluginApp.displayName}</code>{" "}
                          app
                        </strong>
                      </p>

                      {environmentVariableOptions.length > 0 && (
                        <p className="mb-0">
                          Available environment variables for apps:{" "}
                          {environmentVariableOptions.sort().map((envOpt) => (
                            <Fragment key={`envOpt-${envOpt}`}>
                              <Badge variant="info">{envOpt}</Badge>{" "}
                            </Fragment>
                          ))}
                        </p>
                      )}
                      {grouparooUiEdition() === "config" && (
                        <p className="mb-0">
                          <a
                            target="_blank"
                            href="https://www.grouparoo.com/docs/support/secrets"
                            rel="noreferrer"
                          >
                            See the docs
                          </a>{" "}
                          for more information on using environment variables
                          for secret option values.
                        </p>
                      )}
                    </div>

                    {pluginOptions.map((opt) => {
                      return (
                        <Form.Group key={`opt-${opt.key}`} controlId={opt.key}>
                          <Form.Label>
                            {opt.required ? (
                              <>
                                <Badge variant="info">required</Badge>&nbsp;
                              </>
                            ) : null}
                            <code>{opt.displayName || opt.key}</code>
                          </Form.Label>
                          {(() => {
                            if (options[opt.key]?.type === "typeahead") {
                              return (
                                <>
                                  <Controller
                                    control={control}
                                    name={`options.${opt.key}`}
                                    render={({ field: { onChange } }) => {
                                      return (
                                        <Typeahead
                                          id="typeahead"
                                          labelKey="key"
                                          disabled={loading}
                                          onChange={(selected) => {
                                            onChange(selected[0]?.key);
                                          }}
                                          options={options[
                                            opt.key
                                          ]?.options.map((k, idx) => {
                                            return {
                                              key: k,
                                              descriptions:
                                                options[k]?.descriptions[idx],
                                            };
                                          })}
                                          placeholder={
                                            opt.placeholder ||
                                            `Select ${opt.key}`
                                          }
                                          renderMenuItemChildren={(
                                            opt,
                                            props,
                                            idx
                                          ) => {
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
                                                    ? opt.descriptions.join(
                                                        ", "
                                                      )
                                                    : "None"}
                                                </em>
                                              </small>,
                                            ];
                                          }}
                                          defaultSelected={
                                            app.options[opt.key]
                                              ? [app.options[opt.key]]
                                              : undefined
                                          }
                                        />
                                      );
                                    }}
                                  />

                                  <Form.Text className="text-muted">
                                    {opt.description}
                                  </Form.Text>
                                </>
                              );
                            } else if (options[opt.key]?.type === "list") {
                              return (
                                <>
                                  <Form.Control
                                    as="select"
                                    required={opt.required}
                                    disabled={loading}
                                    name={`options.${opt.key}`}
                                    {...register(`options.${opt.key}`)}
                                  >
                                    <option value={""} disabled>
                                      Select an option
                                    </option>
                                    {options[opt.key].options.map((o, idx) => (
                                      <option
                                        key={`opt~${opt.key}-${o}`}
                                        value={o}
                                      >
                                        {o}{" "}
                                        {options[opt.key]?.descriptions &&
                                        options[opt.key]?.descriptions[idx]
                                          ? ` | ${
                                              options[opt.key]?.descriptions[
                                                idx
                                              ]
                                            }`
                                          : null}
                                      </option>
                                    ))}
                                  </Form.Control>
                                  <Form.Text className="text-muted">
                                    {opt.description}
                                  </Form.Text>
                                </>
                              );
                            } else if (options[opt.key]?.type === "pending") {
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
                            } else if (
                              options[opt.key]?.type === "oauth-token"
                            ) {
                              return (
                                <>
                                  <br />
                                  <LoadingButton
                                    size="sm"
                                    disabled={
                                      Boolean(app.locked) || loadingOAuth
                                    }
                                    loading={loadingOAuth}
                                    variant="outline-primary"
                                    onClick={() => startOAuthLogin(opt.key)}
                                  >
                                    Sign in with OAuth
                                  </LoadingButton>

                                  <Form.Control
                                    className="mt-2"
                                    required={opt.required}
                                    type="password"
                                    placeholder={opt.placeholder}
                                    name={`options.${opt.key}`}
                                    {...register(`options.${opt.key}`)}
                                  />
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
                                    type={
                                      options[opt.key]?.type === "password"
                                        ? "password"
                                        : "text" // textarea not supported here
                                    }
                                    disabled={loading}
                                    placeholder={opt.placeholder}
                                    name={`options.${opt.key}`}
                                    {...register(`options.${opt.key}`)}
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
                  </>
                ) : null}
              </div>
            </fieldset>

            <Row>
              <Col md={3}>
                <LoadingButton
                  variant="outline-info"
                  size="sm"
                  onClick={test}
                  loading={testLoading}
                >
                  Test Connection
                </LoadingButton>
                <br />
                <br />
              </Col>

              <Col>
                {testResult.success !== null &&
                testResult.success !== false &&
                testResult.success !== undefined &&
                !testResult.error ? (
                  <Alert variant="success">
                    <strong>Test Passed</strong> {testResult.message}
                  </Alert>
                ) : ranTest ? (
                  <Alert variant="warning">
                    <strong>Test Failed</strong>{" "}
                    {testResult.error || testResult.message}
                  </Alert>
                ) : null}
                {loading ? <Loader /> : null}
              </Col>
            </Row>
            <fieldset disabled={Boolean(app.locked)}>
              <LoadingButton variant="primary" type="submit" loading={loading}>
                Update
              </LoadingButton>

              <br />
              <br />

              <LoadingButton
                variant="danger"
                size="sm"
                onClick={handleDelete}
                loading={loading}
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const client = generateClient(ctx);
  const { app } = await client.request<Actions.AppView>("get", `/app/${id}`);
  const {
    options,
    pluginOptions,
    environmentVariableOptions,
  }: Actions.AppOptions = await client.request("get", `/app/${id}/options`);
  return {
    app,
    options,
    pluginOptions,
    environmentVariableOptions,
  };
};
