import { AxiosError } from "axios";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { useMemo } from "react";
import { Client, generateClient } from "../client/client";
import Layout from "../components/layouts/Main";
import PageTransition from "../components/PageTransition";
import StatusSubscription from "../components/StatusSubscription";
import { ApiContext } from "../contexts/api";
import { GrouparooModelContext } from "../contexts/grouparooModel";
import { WebAppContext } from "../contexts/webApp";
import { Actions, Models } from "../utils/apiData";
import { renderNestedContextProviders } from "../utils/contextHelper";

import "../components/Icons";
import "../eventHandlers";

export interface GrouparooNextAppProps {
  model?: Models.GrouparooModelType;
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
  const { Component, pageProps, err, hydrationError, model } = props;

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

  // The serialized object passed from the server is not an instance of the Client class
  const client = props.client instanceof Client ? props.client : new Client();
  return renderNestedContextProviders(
    [
      [WebAppContext.Provider, pageContext],
      [ApiContext.Provider, { client }],
      [GrouparooModelContext.Provider, { model }],
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
  const { modelId } = appContext.ctx.query;
  const client = generateClient(appContext);

  let currentTeamMember: Partial<Actions.SessionView["teamMember"]> = {
    firstName: "",
    id: null,
  };

  try {
    let model: Models.GrouparooModelType | null = null;

    const [navigationResponse, modelResponse] = await Promise.all([
      client.request<Actions.NavigationList>("get", `/navigation`),
      modelId
        ? client.request<Actions.ModelView>("get", `/model/${modelId}`)
        : Promise.resolve(),
    ]);

    if (navigationResponse.teamMember) {
      currentTeamMember = navigationResponse.teamMember;
    }

    if (modelResponse) {
      model = modelResponse.model;
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
      model,
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
