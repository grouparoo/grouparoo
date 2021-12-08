import { Action, config } from "actionhero";
import "isomorphic-fetch";

export type oAuthProvider = {
  name: string;
  description: string;
  icon: string;
  authTypes: ("user" | "app")[];
};

export type oAuthIdentity = {
  email: string;
  name: string;
  description: string;
};

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
    const fullUrl = `${config.telemetry.host}/api/v1/oauth/providers`;
    console.log({ fullUrl });
    const response: { error?: TelemetryError; providers: oAuthProvider[] } =
      await fetch(fullUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((r) => r.json());

    if (response.error?.message) throw new Error(response.error.message);
    return { ...response };
  }
}
