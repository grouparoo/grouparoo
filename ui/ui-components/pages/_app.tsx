import App from "next/app";
import { AxiosError } from "axios";
import type { AppContext } from "next/app";

import { UseApi } from "../hooks/useApi";

import Injection from "../components/ComponentInjection";
import Layout from "../components/layouts/Main";
import PageTransition from "../components/PageTransition";
import StatusSubscription from "../components/StatusSubscription";
import "../components/Icons";

import { Actions } from "../utils/apiData";
import * as eventHandlers from "../utils/eventHandlers";

export default function GrouparooWebApp(props) {
  const { Component, pageProps, err, hydrationError } = props;

  const combinedProps = Object.assign({}, pageProps || {}, {
    navigation: props.navigation,
    navigationMode: props.navigationMode,
    clusterName: props.clusterName,
    currentTeamMember: props.currentTeamMember,
    ...eventHandlers,
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

  try {
    const navigationResponse: Actions.NavigationList = await execApi(
      "get",
      `/navigation`
    );

    if (navigationResponse.teamMember) {
      currentTeamMember = navigationResponse.teamMember;
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
