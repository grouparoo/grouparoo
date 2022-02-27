import "isomorphic-fetch";
import { Action, config, ParamsFrom } from "actionhero";
import { oAuthProvider, oAuthIdentity } from "../modules/oAuth";
import { CLSAction } from "../classes/actions/clsAction";
import { plugin } from "../modules/plugin";
import { OAuthRequest } from "../models/OAuthRequest";

export type TelemetryError = {
  message: string;
  sql: string;
};

export class OAuthListProviders extends Action {
  name = "oAuth:listProviders";
  description = "list the available oAuth Providers";
  inputs = {
    type: { required: false },
  } as const;
  outputExample = {};

  async run({ params }: { params: ParamsFrom<OAuthListProviders> }) {
    let fullUrl = `${config.oAuth.host}/api/v1/oauth/providers`;
    if (params.type) fullUrl += `?type=${params.type}`;

    const response: { error?: TelemetryError; providers: oAuthProvider[] } =
      await fetch(fullUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((r) => r.json());

    throwTelemetryError(response);

    return response;
  }
}

export class OAuthClientStart extends CLSAction {
  name = "oAuth:client:start";
  description =
    "start the oauth flow and redirect the user to the oauth provider";
  outputExample = {};
  inputs = {
    id: { required: false },
    provider: { required: true },
    type: { required: true },
    appId: { required: false },
    appOption: { required: false },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<OAuthClientStart>;
  }) {
    const oauthRequest = await OAuthRequest.create({
      id: params.id,
      type: params.type,
      provider: params.provider,
      appId: params.appId,
      appOption: params.appOption,
    });

    const callbackUrl = `${process.env.WEB_URL}/oauth/callback`;
    const { value: customerId } = await plugin.readSetting(
      "telemetry",
      "customer-id"
    );
    const fullUrl = `${config.oAuth.host}/api/v1/oauth/${params.provider}/client/start`;
    const response: {
      error?: TelemetryError;
      location: string;
    } = await fetch(fullUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: params.type,
        requestId: oauthRequest.id,
        customerId,
        callbackUrl,
      }),
    }).then((r) => r.json());
    throwTelemetryError(response);
    return {
      location: response.location,
      error: response.error,
    };
  }
}

export class OAuthClientEdit extends CLSAction {
  name = "oAuth:client:edit";
  description = "edit an oAuth request given the requestId and token pair";
  inputs = {
    requestId: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<OAuthClientEdit>;
  }) {
    const oAuthRequest = await OAuthRequest.findById(params.requestId);
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
    const fullUrl = `${config.oAuth.host}/api/v1/oauth/client/request/${params.requestId}/view?requestId=${oAuthRequest.id}&customerId=${customerId}`;
    const response: {
      error?: TelemetryError;
      oAuthRequest: { identities?: oAuthIdentity[]; token?: string };
    } = await fetch(fullUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
    throwTelemetryError(response);

    // on a page reload, we don't want to erase any data we already have
    if (response.oAuthRequest.token) {
      await oAuthRequest.update({ token: response.oAuthRequest.token });
    }
    if (response.oAuthRequest.identities.length > 0) {
      await oAuthRequest.update({
        identities: response.oAuthRequest.identities,
      });
    }

    return { oAuthRequest: await oAuthRequest.apiData() };
  }
}

export class OAuthClientView extends CLSAction {
  name = "oAuth:client:view";
  description = "view and oAuth request";
  inputs = {
    requestId: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<OAuthClientView>;
  }) {
    const oAuthRequest = await OAuthRequest.findById(params.requestId);
    return { oAuthRequest: await oAuthRequest.apiData() };
  }
}

function throwTelemetryError(
  response: Record<string, any> & { error?: TelemetryError }
) {
  if (response.error?.message) {
    throw new Error(`[ telemetry ] ${response.error.message}`);
  }
}
