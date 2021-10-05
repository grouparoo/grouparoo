import { SimpleAppOptions } from "@grouparoo/core";
import zendesk from "node-zendesk";

export async function connect(appOptions: SimpleAppOptions) {
  const { username, token, subdomain } = appOptions;
  const remoteUri = `https://${subdomain}.zendesk.com/api/v2`;

  const customHeaders = {
    "X-Zendesk-Marketplace-Name": "Grouparoo",
    "X-Zendesk-Marketplace-Organization-Id": 5084,
    "X-Zendesk-Marketplace-App-Id": 577390,
  };

  return new zendesk.createClient({
    username,
    token,
    remoteUri,
    customHeaders,
  });
}
