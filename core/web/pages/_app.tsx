import App from "next/app";
import { useApi } from "../hooks/useApi";

import "../scss/grouparoo.scss";
import Injection from "../components/componentInjection";
import Layout from "../components/layouts/main";

import { ErrorHandler } from "../utils/errorHandler";
import { SuccessHandler } from "../utils/successHandler";
import { AppHandler } from "../utils/appHandler";
import { DestinationHandler } from "../utils/destinationHandler";
import { FileHandler } from "../utils/fileHandler";
import { GroupHandler } from "../utils/groupHandler";
import { ProfileHandler } from "../utils/profileHandler";
import { ProfilePropertyRulesHandler } from "../utils/profilePropertyRulesHandler";
import { RunsHandler } from "../utils/runsHandler";
import { ScheduleHandler } from "../utils/scheduleHandler";
import { SessionHandler } from "../utils/sessionHandler";
import { SetupStepHandler } from "../utils/setupStepsHandler";
import { SourceHandler } from "../utils/sourceHandler";
import { TeamHandler } from "../utils/teamHandler";
import { TeamMemberHandler } from "../utils/teamMembersHandler";
import { UploadHandler } from "../utils/uploadHandler";

const successHandler = new SuccessHandler();
const errorHandler = new ErrorHandler();
const appHandler = new AppHandler();
const destinationHandler = new DestinationHandler();
const fileHandler = new FileHandler();
const groupHandler = new GroupHandler();
const profileHandler = new ProfileHandler();
const profilePropertyRulesHandler = new ProfilePropertyRulesHandler();
const runsHandler = new RunsHandler();
const scheduleHandler = new ScheduleHandler();
const sessionHandler = new SessionHandler();
const setupStepHandler = new SetupStepHandler();
const sourceHandler = new SourceHandler();
const teamHandler = new TeamHandler();
const teamMemberHandler = new TeamMemberHandler();
const uploadHandler = new UploadHandler();

// we use require here because this is just a contained setup file that doesn't need to return any components or UI elements
require("../components/icons");

export default function GrouparooWebApp(props) {
  const { Component, pageProps, err, hydrationError } = props;

  const combinedProps = Object.assign({}, pageProps || {}, {
    currentTeamMember: props.currentTeamMember,
    navigation: props.navigation,
    navigationMode: props.navigationMode,
    clusterName: props.clusterName,
    successHandler,
    errorHandler,
    appHandler,
    destinationHandler,
    fileHandler,
    groupHandler,
    profileHandler,
    profilePropertyRulesHandler,
    runsHandler,
    scheduleHandler,
    sessionHandler,
    setupStepHandler,
    sourceHandler,
    teamHandler,
    teamMemberHandler,
    uploadHandler,
  });

  return (
    <Injection {...combinedProps}>
      <Layout hydrationError={hydrationError} {...combinedProps}>
        <Component {...combinedProps} err={err} />
      </Layout>
    </Injection>
  );
}

GrouparooWebApp.getInitialProps = async (appContext) => {
  const { execApi } = useApi(appContext.ctx);
  const { navigationMode, navigation, clusterName } = await execApi(
    "get",
    `/navigation`
  );
  let currentTeamMember = {
    firstName: "",
    guid: null,
  };
  if (navigationMode === "authenticated") {
    currentTeamMember = (await execApi("get", `/session`)).teamMember;
  }

  // render page-specific getInitialProps
  let appProps = {};
  let hydrationError: string;
  try {
    appProps = await App.getInitialProps(appContext);
  } catch (_error) {
    hydrationError = JSON.stringify(_error, Object.getOwnPropertyNames(_error));
  }

  return {
    ...appProps,
    currentTeamMember,
    navigationMode,
    navigation,
    clusterName,
    hydrationError,
  };
};
