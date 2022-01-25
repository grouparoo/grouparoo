import { SimpleAppOptions } from "@grouparoo/core";
import { CloseioClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new CloseioClient(appOptions.apiKey?.toString());
}
