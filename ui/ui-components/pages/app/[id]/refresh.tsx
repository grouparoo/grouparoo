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
import { Actions, Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { AppHandler } from "../../../utils/appHandler";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import { AppRefreshQuery } from "@grouparoo/core";

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
    useState<Models.AppRefreshQueryType>(props.app.appRefreshQuery);
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

  console.log(app);
  // async function create(event) {
  //   event.preventDefault();
  //   setLoading(true);

  //   const appRefreshQuery = { appId: app.id };

  //   const response: Actions.AppRefreshQueryCreate = await execApi(
  //     "post",
  //     `/appRefreshQuery/`,
  //     appRefreshQuery
  //   );

  //   if (response?.appRefreshQuery) {
  //     //i think this is where we already are though...
  //     router.push(
  //       "/app/[id]/appRefreshQuery",
  //       `/app/${response.appRefreshQuery.appId}/appRefreshQuery`
  //     );
  //   }
  // }

  // async function edit(event) {
  //   event.preventDefault();
  //   setLoading(true);
  //   const response: Actions.AppRefreshQueryEdit = await execApi(
  //     "put",
  //     `/appRefreshQuery/${appRefreshQuery.id}`,
  //     appRefreshQuery
  //   );

  //   //do what after updated?
  // }

  // async function handleDelete() {
  //   if (window.confirm("are you sure?")) {
  //     setLoading(true);
  //     const response: Actions.AppRefreshQueryDestroy = await execApi(
  //       "delete",
  //       `/appRefreshQuery/${appRefreshQuery.id}`
  //     );
  //     if (response?.success) {
  //       successHandler.set({ message: "App Refresh Query Deleted" });
  //       router.push(`/app/${id}`);
  //     } else {
  //       setLoading(false);
  //     }
  //   }
  // }

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
          This app has no App Refresh Query.
          <Button className="mx-auto">Add One</Button>
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
        <Container>
          <Row>
            <Col className="col-md-9 border">
              <Row>QUERY STUFF HERE</Row>
              <Row>SCHEDULES STUFF HERE</Row>
              <Row>
                <Button>Test Query</Button>
              </Row>
              <Row>
                <Button>Update</Button>
              </Row>
              <Row>
                <Button variant="danger">Delete</Button>
              </Row>
            </Col>

            <Col className="col-md-3 border">
              {/* <AppRefreshQueryStats
                app={props.app.app}
                appRefreshQuery={props.appRefreshQuery}
              /> */}
            </Col>
          </Row>
        </Container>
        {/* {editing == true ? (
          <Row>
            <Col>
              <Form id="form" onSubmit={edit} autoComplete="off">
                <fieldset disabled={appRefreshQuery.locked !== null}></fieldset>
              </Form>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <Button></Button>
            </Col>
          </Row>
        )} */}
      </>
    );
  }
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const app = await execApi("get", `/app/${id}`);

  // console.log(app);
  return { app };
};
