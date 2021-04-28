import { SimpleAppOptions } from "@grouparoo/core";
import Marketo from "@grouparoo/node-marketo-rest";

// TODO: Warning: Promise.defer is deprecated and will be removed in a future version.
//       Use new Promise instead.

export async function connect(appOptions: SimpleAppOptions) {
  const { endpoint, identity, clientId, clientSecret } = appOptions;
  const client = new Marketo({ endpoint, identity, clientId, clientSecret });
  return client;
}
