import { SimpleAppOptions } from "@grouparoo/core";
import Mailchimp from "mailchimp-api-v3";

export async function connect(appOptions: SimpleAppOptions) {
  if (appOptions.apiKey) {
    return new Mailchimp(appOptions.apiKey?.toString());
  } else if (appOptions.oAuthToken) {
    const [authToken, dc] = appOptions.oAuthToken.toString().split("::");

    //@ts-ignore Mailchimp client typings have not been updated for OAuth support (with dc param)
    return new Mailchimp(authToken, dc);
  }
}
