import { SimpleAppOptions } from "@grouparoo/core";
import Marketo from "node-marketo-rest";

export async function connect(appOptions: SimpleAppOptions) {
  const { endpoint, identity, clientId, clientSecret } = appOptions;
  const client = new Marketo({ endpoint, identity, clientId, clientSecret });
  return client;
}
