import { Pool, types } from "pg";
import parseDate from "postgres-date";
import format from "pg-format";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const formattedOptions: any = Object.assign({}, appOptions);

  // ensure that the "ssl" option by itself, if present, is a boolean
  if (formattedOptions["ssl"]) {
    formattedOptions["ssl"] =
      formattedOptions["ssl"].toString().toLowerCase() === "true";
  }

  // convert SSL options to an object
  if (formattedOptions["ssl"]) {
    // for Grouparoo's use-case, we always want to trust self-signed SSL certs
    formattedOptions["ssl"] = { rejectUnauthorized: false };
  }

  // handle SSL options
  const sslOptions = ["ssl_cert", "ssl_key", "ssl_ca"];
  sslOptions.forEach((opt) => {
    if (formattedOptions[opt] !== null && formattedOptions[opt] !== undefined) {
      if (!formattedOptions["ssl"]) formattedOptions["ssl"] = {};
      formattedOptions["ssl"][opt.replace("ssl_", "")] = formattedOptions[opt];
      delete formattedOptions[opt];
    }
  });

  const pool = new Pool(formattedOptions);

  pool.on("connect", async (client) => {
    // @ts-ignore these are not on the types but exist on the object
    client.setTypeParser(types.builtins.DATE, formatAsText); // Date
    // @ts-ignore
    client.setTypeParser(types.builtins.TIMESTAMP, formatInUtcDefault); // Timestamp without zone
    // @ts-ignore
    client.setTypeParser(types.builtins.TIMESTAMPTZ, formatInUtcDefault); // Timestamp without zone

    if (appOptions.schema) {
      await client.query(format(`SET search_path TO %L;`, appOptions.schema));
    }
  });

  return pool;
};

function formatAsText(text) {
  return text;
}
function formatInUtcDefault(text) {
  if (!text) {
    return text;
  }
  const zone = timeZoneOffset(text);
  if (!zone) {
    return parseDate(text + " +00");
  }
  return parseDate(text);
}

// from parseDate library
var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/;
function timeZoneOffset(isoDate) {
  if (isoDate.endsWith("+00")) {
    return true;
  }
  var zone: any = TIME_ZONE.exec(isoDate.split(" ")[1]);
  if (!zone) {
    return false;
  }
  return true;
}
