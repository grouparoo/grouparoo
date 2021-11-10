import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import {
  Row,
  Col,
  Form,
  Badge,
  Alert,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { useRouter } from "next/router";
import PageHeader from "../../../components/pageHeader";
import AppTabs from "../../../components/tabs/app";
import Loader from "../../../components/loader";
import LoadingButton from "../../../components/loadingButton";
import LockedBadge from "../../../components/badges/lockedBadge";
import SourceBadge from "../../../components/badges/sourceBadge";
import StateBadge from "../../../components/badges/stateBadge";
import AppRefreshQueryStats from "../../../components/app/appRefreshQueryStats";
import { Actions, Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { AppHandler } from "../../../utils/appHandler";
import AppRefreshQueryScheduleList from "../../../components/app/appRefreshSchedulesList";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    appHandler,
    types,
    environmentVariableOptions,
    optionOptions,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    appHandler: AppHandler;
    types: Actions.AppOptions["types"];
    environmentVariableOptions: Actions.AppOptions["environmentVariableOptions"];
    optionOptions: Actions.AppOptionOptions["options"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [app, setApp] = useState<Models.AppType>(props.app);
  const [appRefreshQuery, setAppRefreshQuery] =
    useState<Models.AppRefreshQueryType>(props.appRefreshQuery);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    error: string;
    message: string;
  }>({ success: null, error: null, message: null });
  const [ranTest, setRanTest] = useState(false);
  const { id } = router.query;
  const { schedules, runs, sources } = props;
  const disabled =
    app.locked !== null || appRefreshQuery.locked !== null || loading;

  async function create(event) {
    event.preventDefault();
    setLoading(true);

    const appRefreshQuery = { appId: app.id };

    const response: Actions.AppRefreshQueryCreate = await execApi(
      "post",
      `/appRefreshQuery/`,
      appRefreshQuery
    );

    if (response?.appRefreshQuery) {
      setAppRefreshQuery(response.appRefreshQuery);

      router.push(
        "/app/[id]/refresh",
        `/app/${response.appRefreshQuery.appId}/refresh`
      );
    }
    setLoading(false);
  }

  async function update(event) {
    const _appRefreshQuery = Object.assign({}, appRefreshQuery);
    _appRefreshQuery[event.target.id] = event.target.value;
    setAppRefreshQuery(_appRefreshQuery);
  }

  async function edit(event) {
    event.preventDefault();
    if (appRefreshQuery.refreshQuery.length > 1) {
      appRefreshQuery.state = "ready";
    }
    setLoading(true);
    const response: Actions.AppRefreshQueryEdit = await execApi(
      "put",
      `/appRefreshQuery/${appRefreshQuery.id}`,
      appRefreshQuery
    );
    if (response?.appRefreshQuery) {
      setLoading(false);
      successHandler.set({ message: "App Refresh Query Updated" });
      setAppRefreshQuery(response.appRefreshQuery);
    } else {
      setLoading(false);
    }
  }

  async function test() {
    setTestLoading(true);
    setRanTest(false);
    setTestResult({ success: null, message: null, error: null });

    const response: Actions.AppRefreshQueryTest = await execApi(
      "put",
      `/appRefreshQuery/${appRefreshQuery.id}/test`,
      { refreshQuery: appRefreshQuery.refreshQuery }
    );
    if (response?.test) {
      setRanTest(true);
      setTestResult(response.test);
    }
    setTestLoading(false);
  }

  async function runQuery(e) {
    e.preventDefault();
    setLoading(true);
    console.log(`now i'm ${JSON.stringify(appRefreshQuery, null, 2)}`);
    await edit(e);
    try {
      const response: Actions.AppRefreshQueryQuery = await execApi(
        "post",
        `/appRefreshQuery/${appRefreshQuery.id}/query`
      );
      if (response?.valueUpdated == true) {
        successHandler.set({
          message: `Query returned ${response.appRefreshQuery.value}. Enqueueing Schedules.`,
        });
      } else {
        successHandler.set({
          message: `Query returned ${response.appRefreshQuery.value}. No schedules enqueued.`,
        });
      }
      setAppRefreshQuery(response.appRefreshQuery);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.AppRefreshQueryDestroy = await execApi(
        "delete",
        `/appRefreshQuery/${appRefreshQuery.id}`
      );
      if (response?.success) {
        successHandler.set({ message: "App Refresh Query Deleted" });
        router.push(`/app/${id}/edit`);
      } else {
        setLoading(false);
      }
    }
  }

  if (appRefreshQuery === null) {
    return (
      <>
        <Head>
          <title>Grouparoo: {`${app.name} Refresh Query`}</title>
        </Head>
        <AppTabs app={app} />
        <PageHeader
          icon={app.icon}
          title={app.name}
          badges={[
            <SourceBadge object={app} />,
            <LockedBadge object={app} />,
            <StateBadge state={app.state} />,
          ]}
        />
        <Container>
          <p>{app.name} has no App Refresh Query.</p>
          <Button onClick={create} className="mx-auto">
            Add an App Refresh Query
          </Button>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Grouparoo: {`${app.name} Refresh Query`}</title>
        </Head>
        <AppTabs app={app} />
        <PageHeader
          icon={app.icon}
          title={app.name}
          badges={[
            <SourceBadge object={app} />,
            <LockedBadge object={app} />,
            <StateBadge state={app.state} />,
          ]}
        />
        <hr />

        <Form
          className="col-12 mx-auto mt-4 pl-0"
          id="form"
          onSubmit={edit}
          autoComplete="off"
        >
          {" "}
          <Row>
            <Col className="col-md-8">
              <strong>Query</strong>
              <p>What query should we run to check for new data?</p>
              <Form.Group controlId="refreshQuery" className="col-9">
                <Form.Control
                  required
                  as="textarea"
                  disabled={appRefreshQuery.locked !== null}
                  rows={6}
                  value={appRefreshQuery.refreshQuery}
                  onChange={(e) => update(e)}
                  placeholder="select statement to check app for new data"
                  style={{
                    fontFamily:
                      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    color: "#e83e8c",
                  }}
                />
              </Form.Group>{" "}
            </Col>

            <Col className="col-md-4 ">
              <Row className="mx-auto">
                <AppRefreshQueryStats
                  app={app}
                  appRefreshQuery={appRefreshQuery}
                />
              </Row>
              <Row>
                <LoadingButton
                  className="m-3 mx-auto"
                  variant="success"
                  onClick={runQuery}
                  disabled={loading}
                >
                  Run Refresh Query
                </LoadingButton>
              </Row>
            </Col>
          </Row>
          <hr />
          {/* <Row className="mt-3"> */}
          <strong>Schedules:</strong>
          <p>
            The following schedules will be triggered by this App Refresh Query.
          </p>
          <AppRefreshQueryScheduleList
            app={app}
            schedules={schedules}
            runs={runs}
            sources={sources}
          />
          <Row className="ml-2">
            <Col className="ml-0 pl-0 ">
              <LoadingButton
                variant="outline-secondary"
                onClick={test}
                size="sm"
                disabled={testLoading}
              >
                Test Query
              </LoadingButton>
            </Col>
            <Col>
              {testResult.success !== null &&
              testResult.success !== false &&
              testResult.success !== undefined &&
              !testResult.error ? (
                <Alert variant="success">
                  <strong>Test Passed. </strong>Sample Value ={" "}
                  {testResult.message}
                </Alert>
              ) : ranTest ? (
                <Alert variant="warning">
                  <strong>Test Failed</strong> {testResult.error}
                </Alert>
              ) : null}
              {loading ? <Loader /> : null}
            </Col>
          </Row>
          <fieldset disabled={appRefreshQuery.locked !== null}>
            <Row className="ml-2 my-3">
              <LoadingButton
                variant="primary"
                type="submit"
                size="sm"
                disabled={loading}
              >
                Update
              </LoadingButton>
            </Row>
            <Row className="ml-2 my-3">
              <LoadingButton
                variant="danger"
                size="sm"
                onClick={handleDelete}
                disabled={loading}
              >
                Delete
              </LoadingButton>
            </Row>
          </fieldset>
        </Form>
      </>
    );
  }
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { app } = await execApi("get", `/app/${id}`);

  let foundAppRefreshQuery;

  if (app.appRefreshQuery !== null) {
    const { appRefreshQuery } = await execApi(
      "get",
      `/appRefreshQuery/${app.appRefreshQuery.id}`
    );
    foundAppRefreshQuery = appRefreshQuery;
  }

  const { sources } = await execApi("get", `/sources`);

  const schedules = sources
    .filter(
      (source) =>
        (source.appId = app.id && source.schedule?.refreshEnabled == true)
    )
    .map((source) => source.schedule);

  let scheduleRuns = [];
  for (const schedule of schedules) {
    const { runs } = await execApi("get", `/runs`, {
      creatorId: schedule.id,
      limit: 1,
    });
    scheduleRuns.push(runs[0]);
  }

  return {
    app,
    appRefreshQuery: foundAppRefreshQuery || null,
    sources,
    schedules,
    runs: scheduleRuns || null,
  };
};
