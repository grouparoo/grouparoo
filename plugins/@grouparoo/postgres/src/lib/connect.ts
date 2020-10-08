import { Client } from "pg";
import format from "pg-format";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const formattedOptions: any = Object.assign({}, appOptions);

  // handle SSL options
  const sslOptions = ["ssl_cert", "ssl_key", "ssl_ca"];
  sslOptions.forEach((opt) => {
    if (formattedOptions[opt] !== null && formattedOptions[opt] !== undefined) {
      if (
        !formattedOptions["ssl"] ||
        typeof formattedOptions["ssl"] === "boolean" ||
        typeof formattedOptions["ssl"] === "string"
      ) {
        formattedOptions["ssl"] = { rejectUnauthorized: false };
      }

      formattedOptions["ssl"][opt.replace("ssl_", "")] = formattedOptions[opt];
      delete formattedOptions[opt];
    }
  });

  const client = new Client(formattedOptions);
  await client.connect();

  if (appOptions.schema) {
    await client.query(format(`SET search_path TO %L;`, appOptions.schema));
  }

  return client;
};
