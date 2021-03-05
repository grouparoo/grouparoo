import { URL } from "url";
import { join, isAbsolute } from "path";
import { getParentPath, getCoreRootPath } from "../utils/pluginDetails";

// import {CLS} from '../modules/cls'
import cls from "cls-hooked";
import Sequelize from "sequelize";

// Opt Into CLS
// Learn more @ https://sequelize.org/master/manual/transactions.html and https://github.com/Jeff-Lewis/cls-hooked
const namespace = cls.createNamespace("grouparoo-cls");
// @ts-ignore
Sequelize.useCLS(namespace);

// we want BIGINTs to be returned as JS integer types
require("pg").defaults.parseInt8 = true;

const databaseBaseName = "grouparoo";

export const DEFAULT = {
  sequelize: (config) => {
    let dialect = process.env.DB_DIALECT || "postgres";
    let storage: string; //only for sqlite
    let host = process.env.DB_HOST || "127.0.0.1";
    let port = process.env.DB_PORT || "5432";
    let database =
      process.env.DB_DATABASE ||
      `${databaseBaseName}_${config.process.env}${
        process.env.JEST_WORKER_ID ? "_" + process.env.JEST_WORKER_ID : ""
      }`;
    let username =
      process.env.DB_USER || process.env.CI ? "postgres" : undefined;
    let password = process.env.DB_PASS || undefined;
    let ssl: boolean | { [key: string]: any } = false;

    // if your environment provides database information via a single JDBC-style URL
    // like mysql://username:password@hostname:port/default_schema
    let parsed: { [key: string]: any } = {};
    const connectionURL =
      process.env.DATABASE_URL || process.env.MYSQL_URL || process.env.PG_URL;
    if (connectionURL) parsed = new URL(connectionURL);

    if (parsed.protocol) dialect = parsed.protocol.slice(0, -1).toLowerCase();
    if (dialect === "postgresql") dialect = "postgres";
    if (dialect === "psql") dialect = "postgres";

    /** POSTGRES */
    if (dialect === "postgres") {
      if (parsed.username) username = parsed.username;
      if (parsed.password) password = parsed.password;
      if (parsed.hostname) host = parsed.hostname;
      if (parsed.port) port = parsed.port;
      if (parsed.pathname) database = parsed.pathname.substring(1);

      const search_ssl = parsed.searchParams?.get("ssl");
      const search_sslmode = parsed.searchParams?.get("sslmode");
      if (search_ssl) ssl = search_ssl === "true";
      if (search_sslmode) {
        ssl = search_sslmode === "true" || search_sslmode === "required";
      }

      if (process.env.DATABASE_SSL?.toLowerCase() === "true") {
        ssl = true;
      }
      if (process.env.DATABASE_SSL_SELF_SIGNED?.toLowerCase() === "true") {
        ssl = { rejectUnauthorized: false };
      }
    }

    /** SQLITE */
    if (dialect === "sqlite") {
      storage = ":memory:";
      if (parsed.hostname || parsed.pathname) {
        storage = `${parsed.hostname}${parsed.pathname}`;
      }

      if (
        process.env.NODE_ENV === "test" &&
        !parsed.hostname &&
        !parsed.pathname
      ) {
        storage = join(getParentPath(), `${database}.sqlite`);
      }

      // without a starting "/" we assume relative locations are against project root
      if (storage !== ":memory:" && !isAbsolute(storage)) {
        storage = join(getParentPath(), storage);
      }
    }

    return {
      autoMigrate: true,
      logging: false,
      dialect: dialect,
      port: parseInt(port),
      database: database,
      host: host,
      username: username,
      password: password,
      models: [join(__dirname, "..", "models")],
      migrations: [join(__dirname, "..", "migrations")],
      storage, // only used for sqlite
      dialectOptions: { ssl },
      transactionType: dialect === "sqlite" ? "EXCLUSIVE" : "DEFERRED",
      pool:
        dialect === "sqlite"
          ? undefined
          : {
              max: Math.max(
                parseInt(process.env.SEQUELIZE_POOL_SIZE || "0"),
                parseInt(process.env.WORKERS || "0") + 1,
                1
              ),
              min: 0,
              acquire: 30000,
              idle: 10000,
              evict: 1000,
            },
      retry: {
        match: [
          Sequelize.ConnectionError,
          Sequelize.DatabaseError,
          Sequelize.TimeoutError,
          Sequelize.ConnectionTimedOutError,
        ],
        backoffBase: 1000,
        backoffExponent: 2,
        max: 5,
      },
    };
  },
};

// for the sequelize CLI tool
module.exports.development = DEFAULT.sequelize({
  env: "development",
  process: {
    env: "development",
  },
});

module.exports.staging = DEFAULT.sequelize({
  env: "staging",
  process: {
    env: "staging",
  },
});

module.exports.production = DEFAULT.sequelize({
  env: "production",
  process: {
    env: "production",
  },
});
