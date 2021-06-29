import { SimpleAppOptions } from "@grouparoo/core";
import EloquaClient from "./client/client";

export async function connect(appOptions: SimpleAppOptions) {
  return new EloquaClient({
    siteName: appOptions["siteName"] as string,
    userName: appOptions["userName"] as string,
    password: appOptions["password"] as string,
  });
}
