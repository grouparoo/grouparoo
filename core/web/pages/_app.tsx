import App from "next/app";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";

import "../scss/grouparoo.scss";
import Injection from "../components/componentInjection";
import Layout from "../components/layouts/main";

import { ErrorHandler } from "../utils/errorHandler";
import { SuccessHandler } from "../utils/successHandler";
import { UploadHandler } from "../utils/uploadHandler";
import { SessionHandler } from "../utils/sessionHandler";
import { TeamHandler } from "../utils/teamHandler";
import { TeamMemberHandler } from "../utils/teamMembersHandler";
import { AppHandler } from "../utils/appHandler";
import { GroupHandler } from "../utils/groupHandler";
import { RunsHandler } from "../utils/runsHandler";
import { SourceHandler } from "../utils/sourceHandler";
import { DestinationHandler } from "../utils/destinationHandler";
import { ProfileHandler } from "../utils/profileHandler";
import { ScheduleHandler } from "../utils/scheduleHandler";
import { FileHandler } from "../utils/fileHandler";
import { ProfilePropertyRulesHandler } from "../utils/profilePropertyRulesHandler";

const successHandler = new SuccessHandler();
const errorHandler = new ErrorHandler();
const uploadHandler = new UploadHandler();
const sessionHandler = new SessionHandler();
const teamHandler = new TeamHandler();
const teamMemberHandler = new TeamMemberHandler();
const appHandler = new AppHandler();
const groupHandler = new GroupHandler();
const runsHandler = new RunsHandler();
const sourceHandler = new SourceHandler();
const destinationHandler = new DestinationHandler();
const profileHandler = new ProfileHandler();
const scheduleHandler = new ScheduleHandler();
const fileHandler = new FileHandler();
const profilePropertyRulesHandler = new ProfilePropertyRulesHandler();

// we use require here because this is just a contained setup file that doesn't need to return any components or UI elements
require("../components/icons");

export default function GrouparooWebApp(props) {
  const { Component } = props;
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

  const combinedProps = Object.assign({}, props.pageProps || {}, {
    currentTeamMember: props.currentTeamMember,
    navigation: props.navigation,
    navigationMode: props.navigationMode,
    previousPath,
    successHandler,
    errorHandler,
    uploadHandler,
    sessionHandler,
    teamHandler,
    teamMemberHandler,
    appHandler,
    groupHandler,
    runsHandler,
    sourceHandler,
    destinationHandler,
    profileHandler,
    scheduleHandler,
    fileHandler,
    profilePropertyRulesHandler,
    query,
    pathname,
  });

  return (
    <Injection {...combinedProps}>
      <Layout display={routerReady} {...combinedProps}>
        <Component {...combinedProps} />
      </Layout>
    </Injection>
  );
}

GrouparooWebApp.getInitialProps = async (appContext) => {
  const { execApi } = useApi(appContext.ctx);
  const { navigationMode, navigation } = await execApi("get", `/navigation`);
  let currentTeamMember = {
    firstName: "",
    guid: null,
  };
  if (navigationMode === "authenticated") {
    currentTeamMember = (await execApi("get", `/session`)).teamMember;
  }

  // render page-specific getInitialProps
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, currentTeamMember, navigationMode, navigation };
};
