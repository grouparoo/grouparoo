import { SimpleAppOptions } from "@grouparoo/core";
import pipedrive from "pipedrive";

export async function connect(appOptions: SimpleAppOptions) {
  pipedrive.Configuration.apiToken = appOptions.apiToken;
  return pipedrive;
}
