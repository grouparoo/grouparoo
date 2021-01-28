import App from "next/app";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";

import "@grouparoo/ui-components/scss/grouparoo.scss";
import Injection from "@grouparoo/ui-components/components/componentInjection";
import Layout from "@grouparoo/ui-components/components/layouts/main";
import "@grouparoo/ui-components/components/icons";

import { AxiosError } from "axios";

import { Actions } from "@grouparoo/ui-components/utils/apiData";

import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";
import { AppHandler } from "@grouparoo/ui-components/utils/appHandler";
import { DestinationHandler } from "@grouparoo/ui-components/utils/destinationHandler";
import { FileHandler } from "@grouparoo/ui-components/utils/fileHandler";
import { GroupHandler } from "@grouparoo/ui-components/utils/groupHandler";
import { ProfileHandler } from "@grouparoo/ui-components/utils/profileHandler";
import { PropertiesHandler } from "@grouparoo/ui-components/utils/propertiesHandler";
import { RunsHandler } from "@grouparoo/ui-components/utils/runsHandler";
import { ScheduleHandler } from "@grouparoo/ui-components/utils/scheduleHandler";
import { SessionHandler } from "@grouparoo/ui-components/utils/sessionHandler";
import { SetupStepHandler } from "@grouparoo/ui-components/utils/setupStepsHandler";
import { SourceHandler } from "@grouparoo/ui-components/utils/sourceHandler";
import { TeamHandler } from "@grouparoo/ui-components/utils/teamHandler";
import { TeamMemberHandler } from "@grouparoo/ui-components/utils/teamMembersHandler";
import { UploadHandler } from "@grouparoo/ui-components/utils/uploadHandler";

const successHandler = new SuccessHandler();
const errorHandler = new ErrorHandler();
const appHandler = new AppHandler();
const destinationHandler = new DestinationHandler();
const fileHandler = new FileHandler();
const groupHandler = new GroupHandler();
const profileHandler = new ProfileHandler();
const propertiesHandler = new PropertiesHandler();
const runsHandler = new RunsHandler();
const scheduleHandler = new ScheduleHandler();
const sessionHandler = new SessionHandler();
const setupStepHandler = new SetupStepHandler();
const sourceHandler = new SourceHandler();
const teamHandler = new TeamHandler();
const teamMemberHandler = new TeamMemberHandler();
const uploadHandler = new UploadHandler();

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
    propertiesHandler,
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

  try {
    const {
      navigationMode,
      navigation,
      clusterName,
    }: Actions.NavigationList = await execApi("get", `/navigation`);
    let currentTeamMember: Partial<Actions.SessionView["teamMember"]> = {
      firstName: "",
      guid: null,
    };
    if (navigationMode && navigationMode === "authenticated") {
      currentTeamMember = (await execApi("get", `/session`)).teamMember;
    }

    // render page-specific getInitialProps
    let appProps = {};
    let hydrationError: string;
    try {
      appProps = await App.getInitialProps(appContext);
    } catch (_error) {
      hydrationError = JSON.stringify(
        _error,
        Object.getOwnPropertyNames(_error)
      );
    }

    return {
      ...appProps,
      currentTeamMember,
      navigationMode,
      navigation,
      clusterName,
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
    headers: error?.config?.headers,
  };
  console.error(formattedErrorMessage, formattedErrorObject);
  return { formattedErrorMessage, formattedErrorObject };
}
