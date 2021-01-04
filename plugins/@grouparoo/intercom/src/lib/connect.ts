import { SimpleAppOptions } from "@grouparoo/core";
import { Client } from "intercom-client";
import DataAttribute from "./client/data-attribute";
import Contact from "./client/contact";
import Tag from "./client/tag";

export async function connect(appOptions: SimpleAppOptions) {
  const { token } = appOptions;

  const client = new Client({ token });
  client.useRequestOpts({
    headers: {
      "Intercom-Version": 2.3,
    },
  });

  client.dataAttributes = new DataAttribute(client);
  client.contacts = new Contact(client);
  client.tags = new Tag(client);
  return client;
}
