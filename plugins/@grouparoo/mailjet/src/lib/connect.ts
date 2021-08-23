import { SimpleAppOptions } from "@grouparoo/core";
import { MailjetClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new MailjetClient(
    appOptions.apiKey as string,
    appOptions.apiSecret as string
  );
}
