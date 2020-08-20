import { SimpleAppOptions } from "@grouparoo/core";
import zendesk from "node-zendesk";

export async function connect(appOptions: SimpleAppOptions) {
  const { username, token, subdomain } = appOptions;
  const remoteUri = `https://${subdomain}.zendesk.com/api/v2`;

  const client = new zendesk.createClient({ username, token, remoteUri });
  return client;
}
