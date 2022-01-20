import { AxiosError } from "axios";
import App from "next/app";
import type { AppContext, AppProps } from "next/app";
import { useMemo } from "react";
import Layout from "../components/layouts/Main";
import PageTransition from "../components/PageTransition";
import StatusSubscription from "../components/StatusSubscription";
import "../components/Icons";

import { WebAppContext } from "../contexts/webApp";

import "../eventHandlers";

import { Actions } from "../utils/apiData";
import { renderNestedContextProviders } from "../utils/contextHelper";
import { Client } from "../client/client";
import {
  ApiContext,
  getRequestContext,
  useApiInitialState,
} from "../contexts/api";

export interface GrouparooNextAppProps {
  clusterName: Actions.NavigationList["clusterName"];
  currentTeamMember: Partial<Actions.NavigationList["teamMember"]>;
  hydrationError?: string;
  navigation: Actions.NavigationList["navigation"];
  navigationMode: Actions.NavigationList["navigationMode"];
  client?: Client;
}

export default function GrouparooNextApp(
  props: AppProps & GrouparooNextAppProps & { err: any }
) {
  const { Component, pageProps, err, hydrationError, client } = props;

  const combinedProps = {
    ...pageProps,
    navigation: props.navigation,
    navigationMode: props.navigationMode,
    clusterName: props.clusterName,
    currentTeamMember: props.currentTeamMember,
  };

  const pageContext = useMemo<WebAppContext>(() => {
    return {
      navigation: props.navigation,
      navigationMode: props.navigationMode,
      clusterName: props.clusterName,
      currentTeamMember: props.currentTeamMember,
    };
  }, [props]);

  return renderNestedContextProviders(
    [
      [WebAppContext, pageContext],
      [ApiContext, useApiInitialState(client)],
    ],
    <>
      <PageTransition />

      <Layout hydrationError={hydrationError}>
        <Component {...combinedProps} err={err} />
      </Layout>

      {combinedProps.currentTeamMember?.id ? (
        <StatusSubscription {...combinedProps} />
      ) : null}
    </>
  );
}

GrouparooNextApp.getInitialProps = async (appContext: AppContext) => {
  const client = new Client(getRequestContext(appContext));

  let currentTeamMember: Partial<Actions.SessionView["teamMember"]> = {
    firstName: "",
    id: null,
  };

  try {
    const navigationResponse: Actions.NavigationList = await client.action(
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
      client,
    };
  } catch (_error) {
    const { formattedErrorMessage, formattedErrorObject } = renderError(_error);
    return {
      client,
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
