import { SimpleAppOptions } from "@grouparoo/core";
import Mailchimp from "mailchimp-api-v3";

export async function connect(appOptions: SimpleAppOptions) {
  const client = new Mailchimp(appOptions.apiKey?.toString());
  return client;
}
