import { connect } from "./connect";
import { App, SimpleAppOptions } from "@grouparoo/core";

export async function test(app: App, options: SimpleAppOptions) {
  const client = await connect(options);
  const rows = await client.asyncQuery("SELECT 'grouparoo' as message");
  await client.asyncEnd();
  const isValid = rows[0].message === "grouparoo";
  return isValid;
}
