import "isomorphic-fetch";
import { Action, config } from "actionhero";
import { oAuthProvider, oAuthIdentity } from "../modules/oAuth";
import { CLSAction } from "../classes/actions/clsAction";
import { plugin } from "../modules/plugin";
import { OAuthRequest } from "../models/OAuthRequest";

export type TelemetryError = {
  message: string;
  sql: string;
};

export class OAuthListProviders extends Action {
  constructor() {
    super();
    this.name = "oAuth:listProviders";
    this.description = "list the available oAuth Providers";
    this.outputExample = {};
  }

  async run() {
    const fullUrl = `${config.oAuth.host}/api/v1/oauth/providers`;
    const response: { error?: TelemetryError; providers: oAuthProvider[] } =
      await fetch(fullUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((r) => r.json());
    throwTelemetryError(response);
    return { ...response };
  }
}

export class OAuthClientStart extends CLSAction {
  constructor() {
    super();
    this.name = "oAuth:client:start";
    this.description =
      "start the oauth flow and redirect the user to the oauth provider";
    this.outputExample = {};
    this.inputs = {
      id: { required: false },
      provider: { required: true },
      type: { required: true },
    };
  }

  async runWithinTransaction({
    params,
  }: {
    params: { id: string; provider: string; type: string };
  }) {
    const oauthRequest = await OAuthRequest.create({
      id: params.id,
      type: params.type,
      provider: params.provider,
    });

    const callbackUrl = `${process.env.WEB_URL}/oauth/callback`;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
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
  constructor() {
    super();
    this.name = "oAuth:client:edit";
    this.description =
      "edit an oAuth request given the requestId and token pair";
    this.inputs = {
      requestId: { required: true },
      token: { required: true },
    };
  }

  async runWithinTransaction({
    params,
  }: {
    params: { requestId: string; token: string };
  }) {
    const oAuthRequest = await OAuthRequest.findById(params.requestId);
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
    const fullUrl = `${config.oAuth.host}/api/v1/oauth/client/request/${params.requestId}/view?requestId=${oAuthRequest.id}&customerId=${customerId}`;
    const response: {
      error?: TelemetryError;
      oAuthRequest: { identities: oAuthIdentity[] };
    } = await fetch(fullUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((r) => r.json());
    throwTelemetryError(response);

    // on a page reload, we don't want to erase any data we already have
    if (params.token) await oAuthRequest.update({ token: params.token });
    if (response.oAuthRequest.identities.length > 0) {
      await oAuthRequest.update({
        identities: response.oAuthRequest.identities,
      });
    }

    return { oAuthRequest: await oAuthRequest.apiData() };
  }
}

export class OAuthClientView extends CLSAction {
  constructor() {
    super();
    this.name = "oAuth:client:view";
    this.description = "view and oAuth request";
    this.inputs = {
      requestId: { required: true },
    };
  }

  async runWithinTransaction({ params }: { params: { requestId: string } }) {
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
