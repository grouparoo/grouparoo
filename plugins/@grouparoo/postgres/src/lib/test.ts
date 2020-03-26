import { connect } from "./connect";
import { App, SimpleAppOptions } from "@grouparoo/core";

export async function test(app: App, options: SimpleAppOptions) {
  const client = await connect(options);
  const response = await client.query("SELECT $1::text as message", [
    "grouparoo",
  ]);
  await client.end();
  const isValid = response.rows[0].message === "grouparoo";
  return isValid;
}
