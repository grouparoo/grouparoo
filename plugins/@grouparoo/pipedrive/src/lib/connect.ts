import { SimpleAppOptions } from "@grouparoo/core";
import { PipedriveClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new PipedriveClient(appOptions.apiToken?.toString());
}
