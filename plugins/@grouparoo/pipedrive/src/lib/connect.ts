import { SimpleAppOptions } from "@grouparoo/core";
import { PipedriveClient } from "./client";

export async function connect(appId: string, appOptions: SimpleAppOptions) {
  return new PipedriveClient(appOptions.apiToken?.toString(), {
    appId,
    appOptions,
  });
}
