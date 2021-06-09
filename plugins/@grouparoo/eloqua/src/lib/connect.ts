import { SimpleAppOptions } from "@grouparoo/core";
import EloquaClient from "./client/client";

export async function connect(appOptions: SimpleAppOptions) {
  return new EloquaClient({
    siteName: appOptions["siteName"],
    userName: appOptions["userName"],
    password: appOptions["password"],
  });
}
