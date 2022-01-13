import { ConnectPluginAppMethod, SimpleAppOptions } from "@grouparoo/core";
import { log } from "actionhero";
import { Pool, types } from "pg";
import { TypeId } from "pg-types";
import format from "pg-format";
import parseDate from "postgres-date";

type PoolClient = Parameters<Parameters<InstanceType<typeof Pool>["on"]>[1]>[0];
export interface PostgresPoolClient extends PoolClient {
  setTypeParser: (
    type: TypeId,
    method: (text: string) => string | Date
  ) => void;
  end: () => Promise<void>;
}

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const formattedOptions: SimpleAppOptions & {
    ssl?: { rejectUnauthorized?: boolean } | boolean;
  } = { ...appOptions };

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
      // @ts-ignore I think this is wrong, but don't want to mess with it
      formattedOptions["ssl"][opt.replace("ssl_", "")] = formattedOptions[opt];
      delete formattedOptions[opt];
    }
  });

  const pool = new Pool(formattedOptions);

  pool.on("connect", async (client: PostgresPoolClient) => {
    client.setTypeParser(types.builtins.DATE, formatAsText); // Date
    client.setTypeParser(types.builtins.TIMESTAMP, formatInUtcDefault); // Timestamp without zone
    client.setTypeParser(types.builtins.TIMESTAMPTZ, formatInUtcDefault); // Timestamp without zone

    if (appOptions.schema) {
      await client.query(format(`SET search_path TO %L;`, appOptions.schema));
    }
  });

  // Unfortunately there's no event listener for queries so we have to intercept the call.
  // https://github.com/brianc/node-postgres/issues/2580
  const shim: typeof pool.query = pool.query.bind(pool);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pool as any).query = (
    query: Parameters<typeof pool.query>[0],
    data?: Parameters<typeof pool.query>[1],
    callback?: Parameters<typeof pool.query>[2]
  ) => {
    log(`[ postgres ] ${query}`, "debug", data);
    return shim(query, data, callback);
  };

  return pool;
};

export function formatAsText(text: string) {
  return text;
}

export function formatInUtcDefault(text: string) {
  if (!text) {
    return null;
  }
  const zone = timeZoneOffset(text);

  let date: Date;
  const parsed = parseDate(text);
  date = parsed instanceof Date ? parsed : new Date(parsed);

  if (!zone) {
    const dateInUTC = parseDate(text + "+00");
    if (dateInUTC instanceof Date) date = dateInUTC;
  }

  return date;
}

// from parseDate library
const TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/;
function timeZoneOffset(isoDate: string) {
  if (isoDate.endsWith("+00")) return true;
  const zone = TIME_ZONE.exec(isoDate.split(" ")[1]);
  if (!zone) {
    return false;
  }
  return true;
}
