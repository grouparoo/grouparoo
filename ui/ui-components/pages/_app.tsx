import App from "next/app";
import Cookies from "universal-cookie";

import { UseApi } from "../hooks/useApi";

import Injection from "../components/componentInjection";
import Layout from "../components/layouts/main";
import PageTransition from "../components/pageTransition";
import StatusSubscription from "../components/statusSubscription";
import "../components/icons";

import { AxiosError } from "axios";

import { Actions } from "../utils/apiData";

import { ErrorHandler } from "../utils/errorHandler";
import { SuccessHandler } from "../utils/successHandler";
import { AppHandler } from "../utils/appHandler";
import { DestinationHandler } from "../utils/destinationHandler";
import { GroupHandler } from "../utils/groupHandler";
import { RecordHandler } from "../utils/recordHandler";
import { PropertiesHandler } from "../utils/propertiesHandler";
import { RunsHandler } from "../utils/runsHandler";
import { ScheduleHandler } from "../utils/scheduleHandler";
import { SessionHandler } from "../utils/sessionHandler";
import { SetupStepHandler } from "../utils/setupStepsHandler";
import { StatusHandler } from "../utils/statusHandler";
import { SourceHandler } from "../utils/sourceHandler";
import { TeamHandler } from "../utils/teamHandler";
import { TeamMemberHandler } from "../utils/teamMembersHandler";
import { UploadHandler } from "../utils/uploadHandler";
import { AppContext } from "next/app";
import router from "next/router";

const successHandler = new SuccessHandler();
const errorHandler = new ErrorHandler();
const appHandler = new AppHandler();
const destinationHandler = new DestinationHandler();
const groupHandler = new GroupHandler();
const recordHandler = new RecordHandler();
const propertiesHandler = new PropertiesHandler();
const runsHandler = new RunsHandler();
const scheduleHandler = new ScheduleHandler();
const sessionHandler = new SessionHandler();
const setupStepHandler = new SetupStepHandler();
const statusHandler = new StatusHandler();
const sourceHandler = new SourceHandler();
const teamHandler = new TeamHandler();
const teamMemberHandler = new TeamMemberHandler();
const uploadHandler = new UploadHandler();

export default function GrouparooWebApp(props) {
  const { Component, pageProps, err, hydrationError } = props;

  const onChangeModelId = async (newModelId: string) => {
    const cookies = new Cookies();
    cookies.set("grouparooModelId", newModelId, { path: "/" });

    if (router.pathname.match("/model/")) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          modelId: newModelId,
        },
      });
    } else {
      router.reload();
    }
  };

  const combinedProps = Object.assign({}, pageProps || {}, {
    navModel: props.navModel,
    navigation: props.navigation,
    navigationMode: props.navigationMode,
    clusterName: props.clusterName,
    onChangeModelId,
    currentTeamMember: props.currentTeamMember,
    successHandler,
    errorHandler,
    appHandler,
    destinationHandler,
    groupHandler,
    recordHandler,
    propertiesHandler,
    runsHandler,
    scheduleHandler,
    sessionHandler,
    setupStepHandler,
    statusHandler,
    sourceHandler,
    teamHandler,
    teamMemberHandler,
    uploadHandler,
  });

  return (
    <Injection {...combinedProps}>
      <PageTransition />

      <Layout hydrationError={hydrationError} {...combinedProps}>
        <Component {...combinedProps} err={err} />
      </Layout>

      {combinedProps.currentTeamMember?.id ? (
        <StatusSubscription {...combinedProps} />
      ) : null}
    </Injection>
  );
}

GrouparooWebApp.getInitialProps = async (appContext: AppContext) => {
  const { execApi } = UseApi(appContext.ctx);
  let currentTeamMember: Partial<Actions.SessionView["teamMember"]> = {
    firstName: "",
    id: null,
  };

  let modelId: string;
  if (appContext.ctx.pathname.match("/model/")) {
    modelId = appContext.ctx.query.modelId as string;
  } else {
    const cookies = new Cookies(appContext.ctx.req?.headers.cookie);
    modelId = cookies.get("grouparooModelId");
  }

  try {
    const navigationResponse: Actions.NavigationList = await execApi(
      "get",
      `/navigation`,
      { modelId }
    );

    if (navigationResponse.teamMember) {
      currentTeamMember = navigationResponse.teamMember;
    }

    console.log("NAV RES", navigationResponse);
    if (navigationResponse.navModel.value && appContext.ctx.res) {
      appContext.ctx.res.setHeader(
        "set-cookie",
        `grouparooModelId=${navigationResponse.navModel.value}; Path=/`
      );
    }

    // render page-specific getInitialProps
    let appProps = {};
    let hydrationError: string;
    try {
      appProps = await App.getInitialProps(appContext);
    } catch (_error) {
      try {
        const { formattedErrorMessage, formattedErrorObject } =
          renderError(_error);
        hydrationError = JSON.stringify({
          message: formattedErrorMessage,
          data: formattedErrorObject,
        });
      } catch {
        hydrationError = JSON.stringify(
          _error,
          Object.getOwnPropertyNames(_error)
        );
      }
    }

    return {
      ...appProps,
      currentTeamMember,
      navModel: navigationResponse.navModel,
      navigationMode: navigationResponse.navigationMode,
      navigation: navigationResponse.navigation,
      clusterName: navigationResponse.clusterName,
      hydrationError,
    };
  } catch (_error) {
    const { formattedErrorMessage, formattedErrorObject } = renderError(_error);
    return {
      hydrationError: JSON.stringify({
        message: formattedErrorMessage,
        data: formattedErrorObject,
      }),
    };
  }
};

function renderError(error: AxiosError) {
  const formattedErrorMessage = `Error reaching Grouparoo API: ${error.message}`;
  const formattedErrorObject = {
    url: error?.config?.url,
    method: error?.config?.method,
    data: error?.config?.data,
    headers: sanitizeHeaders(error?.config?.headers),
  };
  console.error(formattedErrorMessage, formattedErrorObject);
  return { formattedErrorMessage, formattedErrorObject };
}

function sanitizeHeaders(headers: { [k: string]: any } = {}) {
  if (!process.env.SERVER_TOKEN) return headers; // if the page is being initialized in the browser, the ENV won't be set

  const matcher = new RegExp(process.env.SERVER_TOKEN, "g");
  const replacement = "[REDACTED]";

  const cleanedHeaders: { [k: string]: any } = {};
  for (const k in headers) {
    let value: string = headers[k].toString();
    value = value.replace(matcher, replacement);
    cleanedHeaders[k] = value;
  }

  return cleanedHeaders;
}
