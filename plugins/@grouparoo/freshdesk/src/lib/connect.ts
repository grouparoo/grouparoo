import { ConnectPluginAppMethod } from "@grouparoo/core";
import { FreshdeskClient } from "./client";

export const connect: ConnectPluginAppMethod<FreshdeskClient> = async ({
  appOptions,
}) =>
  new FreshdeskClient(
    appOptions.domainName?.toString(),
    appOptions.apiKey?.toString()
  );
