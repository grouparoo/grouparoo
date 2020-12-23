import { SimpleAppOptions } from "@grouparoo/core";
import { Client } from "intercom-client";

export async function connect(appOptions: SimpleAppOptions) {
  const { token } = appOptions;

  const client = new Client({ token });
  client.useRequestOpts({
    headers: {
      "Intercom-Version": 2.3,
    },
  });
  return client;
}
