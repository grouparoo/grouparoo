import { Client } from "pg";
import { SimpleAppOptions } from "@grouparoo/core";

export async function connect(options: SimpleAppOptions) {
  const client = new Client(options);
  await client.connect();
  return client;
}
