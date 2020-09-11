import App from "next/app";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
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
  const { Component, pageProps, err } = props;
  const [routerReady, setRouterReady] = useState(false);
  const [previousPath, setPreviousPath] = useState("");
  const router = useRouter();
  const { query, pathname } = router;

  // Are we a dynamic page like /page/[guid] and the router hasn't been populated yet?
  // See https://github.com/zeit/next.js/issues/8259
  useEffect(() => {
    setRouterReady(true);
    if (previousPath === "")
      setPreviousPath(
        window?.document?.referrer.replace(window?.location?.origin, "")
      );

    Router.events.on("routeChangeStart", (newRoute) => {
      if (window?.location?.pathname !== newRoute)
        setPreviousPath(window?.location?.pathname);
    });

    return () => {
      Router.events.off("routeChangeStart", setPreviousPath);
    };
  }, [pathname, query]);

  const combinedProps = Object.assign({}, pageProps || {}, {
    currentTeamMember: props.currentTeamMember,
    navigation: props.navigation,
    navigationMode: props.navigationMode,
    clusterName: props.clusterName,
    previousPath,
    successHandler,
    errorHandler,
    query,
    pathname,
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
      <Layout display={routerReady} {...combinedProps}>
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
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    currentTeamMember,
    navigationMode,
    navigation,
    clusterName,
  };
};
