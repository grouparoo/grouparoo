import { SimpleAppOptions } from "@grouparoo/core";
import pipedrive from "pipedrive";
import { EnhancedPersonsController } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  pipedrive.Configuration.apiToken = appOptions.apiToken;

  pipedrive.EnhancedPersonsController = new EnhancedPersonsController(
    pipedrive
  );

  return pipedrive;
}
