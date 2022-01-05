import { SimpleAppOptions } from "@grouparoo/core";
import Mailchimp from "mailchimp-api-v3";

export async function connect(appOptions: SimpleAppOptions) {
  if (appOptions.apiKey) {
    return new Mailchimp(appOptions.apiKey?.toString());
  } else if (appOptions.accessToken) {
    return new Mailchimp(
      appOptions.accessToken?.toString(),
      //@ts-ignore
      appOptions.datacenter?.toString()
    );
  }
}
