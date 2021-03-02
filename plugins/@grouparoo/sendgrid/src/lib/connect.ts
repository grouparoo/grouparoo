import { SimpleAppOptions } from "@grouparoo/core";
import { SendgridClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new SendgridClient(appOptions.apiKey?.toString());
}
