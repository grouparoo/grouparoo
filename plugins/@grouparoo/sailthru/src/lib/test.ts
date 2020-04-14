import { App, SimpleAppOptions } from "@grouparoo/core";
import Sailthru from "./client";

export async function test(app: App, options: SimpleAppOptions) {
  try {
    const client = new Sailthru(options);
    await client.getLists();
    return true;
  } catch (err) {
    return false;
  }
}
