import { App, SimpleAppOptions } from "@grouparoo/core";
import { connect } from "./connect";

export async function test(app: App, options: SimpleAppOptions) {
  const client = await connect(options);
  const { lists } = await client.get("/lists");

  if (lists) {
    return true;
  }
}
