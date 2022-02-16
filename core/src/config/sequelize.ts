import fs from "fs";
import { URL } from "url";
import { join, isAbsolute } from "path";
import { getParentPath, getPluginManifest } from "../modules/pluginDetails";
import { log } from "actionhero";
import cls from "cls-hooked";
import Sequelize from "sequelize";

const namespace = "sequelize";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

// Opt Into CLS
// Learn more @ https://sequelize.org/master/manual/transactions.html and https://github.com/Jeff-Lewis/cls-hooked
// @ts-ignore
Sequelize.useCLS(cls.createNamespace("grouparoo-cls"));

// we want BIGINTs to be returned as JS integer types
require("pg").defaults.parseInt8 = true;

export const DEFAULT = {
  [namespace]: (config: Record<string, any>) => {
    const env = process.env.NODE_ENV ?? "development";
    let storage: string; //only for sqlite
    let dialect = process.env.DB_DIALECT;
    let host = process.env.DB_HOST;
    let port = process.env.DB_PORT;
    let database = process.env.DB_DATABASE;
    let username = process.env.DB_USER;
    let password = process.env.DB_PASS || undefined;
    let schema = process.env.DB_SCHEMA || undefined;
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
      if (parsed.pathname) {
        database = parsed.pathname.substring(1);
        if (database.includes("/")) {
          const dbAndSchema = database.split("/");
          if (dbAndSchema[0].trim() !== "") database = dbAndSchema[0];
          if (dbAndSchema[1].trim() !== "") schema = dbAndSchema[1];
        }
      }
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

      if (env === "test" && !parsed.hostname && !parsed.pathname) {
        storage = join(getParentPath(), `${database}.sqlite`);
      }

      if (storage === "memory") storage = ":memory:";

      // without a starting "/" we assume relative locations are against project root
      if (storage !== ":memory:" && !isAbsolute(storage)) {
        storage = join(getParentPath(), storage);
      }
    }

    /** Query Logging */
    function logging(message: string, time: number) {
      if (typeof message !== "string") return;
      log(message, "debug", { time });
    }

    /** Migration */
    function shouldAutoMigrate() {
      const runMode = process.env.GROUPAROO_RUN_MODE;
      const workers = parseInt(process.env.WORKERS || "0");

      if (["cli:apply"].includes(runMode)) {
        // doing it in the same transaction elsewhere
        return false;
      }
      if (["test", "development"].includes(env)) {
        // working locally, make sure to migrate
        return true;
      }
      if (["cli:config"].includes(runMode)) {
        // always migrate because don't have other workers
        return true;
      }
      if (workers > 0) {
        // in production, background servers do the migration
        return true;
      }
      return false;
    }

    /** Load plugin migrations */
    const { plugins } = getPluginManifest();
    const pluginMigrations: string[] = [];
    for (const plugin of plugins) {
      const path = join(plugin.path, "dist", "migrations");
      if (fs.existsSync(path)) {
        pluginMigrations.push(path);
      }
    }

    return {
      _toExpand: false,
      logging,
      benchmark: true,
      autoMigrate: shouldAutoMigrate(),
      dialect: dialect,
      port: parseInt(port),
      database: database,
      host: host,
      username: username,
      password: password,
      schema: schema,
      searchPath: schema,
      models: [join(__dirname, "..", "models")],
      migrations: [join(__dirname, "..", "migrations"), ...pluginMigrations],
      migrationLogLevel: storage === ":memory:" ? "debug" : "info",
      storage, // only used for sqlite
      dialectOptions: { ssl, prependSearchPath: schema !== undefined },
      transactionType: "DEFERRED",
      pool: {
        max:
          dialect === "sqlite"
            ? 1
            : Math.max(
                parseInt(process.env.SEQUELIZE_POOL_SIZE || "0"),
                parseInt(process.env.WORKERS || "0") + 1,
                1
              ),
        min: 1,
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
        backoffBase: dialect === "sqlite" ? 1000 : 100,
        backoffExponent: dialect === "sqlite" ? 1.5 : 1.1,
        max: 5,
        timeout: undefined as number,
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
