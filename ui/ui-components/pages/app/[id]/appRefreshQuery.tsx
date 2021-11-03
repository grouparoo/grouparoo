import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Form, Badge, Alert } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useRouter } from "next/router";
import PageHeader from "../../../components/pageHeader";
import AppTabs from "../../../components/tabs/app";
import Loader from "../../../components/loader";
import LoadingButton from "../../../components/loadingButton";
import LockedBadge from "../../../components/badges/lockedBadge";
import SourceBadge from "../../../components/badges/sourceBadge";
import StateBadge from "../../../components/badges/stateBadge";
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
  //   const [appRefreshQuery, setAppRefreshQuery] = useState<Models.AppRefreshQueryType>(props.app)
  const [loading, setLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    error: string;
    message: string;
  }>({ success: null, error: null, message: null });
  const [ranTest, setRanTest] = useState(false);
  const { id } = router.query;

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
          <Form id="form" onSubmit={edit} autoComplete="off">
            <fieldset disabled={AppRefreshQuery.locked !== null}></fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const app = await execApi("get", `/app/${id}`);
  const appRefreshQuery = await execApi("get", `/app/${id}/refreshQuery`);
};
