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
import { Typeahead } from "react-bootstrap-typeahead";
import { useRouter } from "next/router";
import PageHeader from "../../../components/pageHeader";
import AppTabs from "../../../components/tabs/app";
import Loader from "../../../components/loader";
import LoadingButton from "../../../components/loadingButton";
import LockedBadge from "../../../components/badges/lockedBadge";
import SourceBadge from "../../../components/badges/sourceBadge";
import StateBadge from "../../../components/badges/stateBadge";
import AppRefreshQueryStats from "../../../components/app/appRefreshQueryStats";
import AppRefreshScheduleList from "../../../components/app/appRefreshSchedulesList";
import { Actions, Models } from "../../../utils/apiData";
// import { AppRefreshQueryHandler } from "../../../utils/appRefreshQueryHandler"; ??
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { AppHandler } from "../../../utils/appHandler";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import { AppRefreshQuery } from "@grouparoo/core";
import AppRefreshQueryScheduleList from "../../../components/app/appRefreshSchedulesList";
import { updateURLParams } from "../../../hooks/URLParams";

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
  const { schedules, runs } = props;
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
    //should this state transition be done somewhere else?
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
      //do we need an appRefreshQuery handler?  What do those guys _do_?
    } else {
      setLoading(false);
    }
  }

  async function test() {
    setTestLoading(true);
    setRanTest(false);
    setTestResult({ success: null, message: null, error: null });

    //to do: this test only works after save, not before!
    const response: Actions.AppRefreshQueryTest = await execApi(
      "put",
      `/appRefreshQuery/${appRefreshQuery.id}/test`
    );
    if (response?.test) {
      setRanTest(true);
      setTestResult(response.test);
    }
    setTestLoading(false);
  }

  async function runQuery() {
    //also runs based off of the SAVED value not necessarily the current value on the screen... probably should change
    setLoading(true);
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
    setLoading(false);
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
          <title>hi</title>
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
        <Container>
          <Row>
            <Col className="col-md-8">
              <strong>Query</strong>

              <p>What query should we run to check for new data?</p>
              <Form
                className="col-12 mx-auto mt-4"
                id="form"
                onSubmit={edit}
                autoComplete="off"
              >
                <Form.Group controlId="refreshQuery">
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
                  <Form.Control.Feedback type="invalid">
                    Key is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="mt-3">
                  <AppRefreshQueryScheduleList
                    app={app}
                    schedules={schedules}
                    runs={runs}
                  />
                </Row>
                <Row className="ml-5">
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
                <fieldset
                // disabled={appRefreshQuery.locked !== null}
                >
                  <Row className="ml-5 my-3">
                    <LoadingButton
                      variant="primary"
                      type="submit"
                      size="sm"
                      disabled={loading}
                    >
                      Update
                    </LoadingButton>
                  </Row>
                  <Row className="ml-5 my-3">
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
            </Col>

            <Col className="col-md-4 mt-4">
              <Row className="mx-auto mt-4">
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
        </Container>
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
    schedules,
    runs: scheduleRuns || null,
  };
};
