import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "../scss/grouparoo.scss";
import Injection from "../components/componentInjection";
import Layout from "../components/layouts/main";

import { ErrorHandler } from "../utils/errorHandler";
import { SuccessHandler } from "../utils/successHandler";
import { SessionHandler } from "../utils/sessionHandler";
import { TeamHandler } from "../utils/teamHandler";
import { TeamMemberHandler } from "../utils/teamMembersHandler";
import { SourceHandler } from "../utils/sourceHandler";
import { DestinationHandler } from "../utils/destinationHandler";
import { ProfileHandler } from "../utils/profileHandler";
import { ScheduleHandler } from "../utils/scheduleHandler";
import { FileHandler } from "../utils/fileHandler";
import { ProfilePropertyRulesHandler } from "../utils/profilePropertyRulesHandler";

const apiVersion = process.env.API_VERSION;
const successHandler = new SuccessHandler();
const errorHandler = new ErrorHandler();
const sessionHandler = new SessionHandler();
const teamHandler = new TeamHandler();
const teamMemberHandler = new TeamMemberHandler();
const sourceHandler = new SourceHandler();
const destinationHandler = new DestinationHandler();
const profileHandler = new ProfileHandler();
const scheduleHandler = new ScheduleHandler();
const fileHandler = new FileHandler();
const profilePropertyRulesHandler = new ProfilePropertyRulesHandler();

// we use require here because this is just a contained setup file that doesn't need to return any components or UI elements
require("../components/icons");

export default function GrouparooWeb({ Component }) {
  const [routerReady, setRouterReady] = useState(false);
  const router = useRouter();
  const { query, pathname } = router;

  // Are we a dynamic page like /page/[guid] and the router hasn't been populated yet?
  // See https://github.com/zeit/next.js/issues/8259
  useEffect(() => {
    setRouterReady(true);
  }, [pathname, query]);

  const props = {
    apiVersion,
    successHandler,
    errorHandler,
    sessionHandler,
    teamHandler,
    teamMemberHandler,
    sourceHandler,
    destinationHandler,
    profileHandler,
    scheduleHandler,
    fileHandler,
    profilePropertyRulesHandler,
    query,
  };

  return (
    <Injection {...props}>
      <Layout display={routerReady} {...props}>
        <Component {...props} />
      </Layout>
    </Injection>
  );
}
