import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Form, Alert, Button, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import PageHeader from "../../../components/PageHeader";
import AppTabs from "../../../components/tabs/App";
import Loader from "../../../components/Loader";
import LoadingButton from "../../../components/LoadingButton";
import LockedBadge from "../../../components/badges/LockedBadge";
import SourceBadge from "../../../components/badges/SourceBadge";
import StateBadge from "../../../components/badges/StateBadge";
import AppRefreshQueryStats from "../../../components/app/AppRefreshQueryStats";
import { Actions, Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import AppRefreshQueryScheduleList from "../../../components/app/AppRefreshSchedulesList";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
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
  const disabled = app?.locked !== null || appRefreshQuery?.locked !== null;

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

      router.push(`/app/${response.appRefreshQuery.appId}/refresh`);
    }
    setLoading(false);
  }

  async function update(event) {
    event.preventDefault();
    setAppRefreshQuery({
      ...appRefreshQuery,
      [event.target.id]: event.target.value,
    });
  }

  async function editMode() {
    setEditing(true);
    setLoading(false);
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
    setEditing(false);
  }

  async function cancelEdit() {
    setAppRefreshQuery(props.appRefreshQuery);
    setEditing(false);
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
        <Row>
          <Col>
            <p>{app.name} has no App Refresh Query.</p>
            <Button
              onClick={create}
              disabled={app.locked !== null}
              className="mx-auto"
            >
              Add an App Refresh Query
            </Button>
          </Col>
        </Row>
      </>
    );
  } else {
    console.log(loading);
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
                  disabled={disabled || !editing}
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
                <Button
                  variant="primary"
                  size="sm"
                  className="my-2"
                  disabled={disabled}
                  hidden={editing}
                  onClick={editMode}
                >
                  Edit
                </Button>
                <Row>
                  <Col className="mx-0 px-0">
                    <Button
                      variant="success"
                      onClick={test}
                      size="sm"
                      className="my-2 ml-3"
                      disabled={testLoading}
                      hidden={!editing}
                    >
                      Test Query
                    </Button>
                  </Col>
                  <Col className="mx-0 px-0">
                    <Row className="justify-content-end w-100">
                      <Button
                        variant="primary"
                        type="submit"
                        size="sm"
                        className="my-2 ml-2"
                        // disabled={disabled}
                        hidden={!editing}
                      >
                        Update
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="my-2 ml-2"
                        // disabled={disabled}
                        hidden={!editing}
                        onClick={cancelEdit}
                      >
                        Cancel
                      </Button>
                    </Row>
                  </Col>
                </Row>{" "}
                {/* </fieldset> */}
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
                  hidden={editing}
                >
                  Run Refresh Query
                </LoadingButton>
              </Row>
            </Col>
          </Row>
          <hr />
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
          <fieldset disabled={appRefreshQuery.locked !== null}>
            <Row className="ml-2 my-3"></Row>
            <Row className="ml-2 my-3">
              <Button
                variant="danger"
                size="sm"
                onClick={handleDelete}
                disabled={disabled}
              >
                Delete
              </Button>
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

  let scheduleRuns = [];
  let schedules = [];

  if (sources) {
    schedules = sources
      .filter(
        (source) =>
          (source.appId = app.id && source.schedule?.refreshEnabled == true)
      )
      .map((source) => source.schedule);

    for (const schedule of schedules) {
      const { runs } = await execApi("get", `/runs`, {
        creatorId: schedule.id,
        limit: 1,
      });
      scheduleRuns.push(runs[0]);
    }
  }

  return {
    app,
    appRefreshQuery: foundAppRefreshQuery || null,
    sources: sources || null,
    schedules: schedules || null,
    runs: scheduleRuns || null,
  };
};
