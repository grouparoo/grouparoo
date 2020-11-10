import { URL } from "url";
import { join } from "path";

// we want BIGINTs to be returned as JS integer types
require("pg").defaults.parseInt8 = true;

const databaseBaseName = "grouparoo";

export const DEFAULT = {
  sequelize: (config) => {
    let dialect = "postgres";
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
    const connectionURL =
      process.env.DATABASE_URL || process.env.MYSQL_URL || process.env.PG_URL;

    if (connectionURL) {
      const parsed = new URL(connectionURL);
      if (parsed.protocol) dialect = parsed.protocol.slice(0, -1);
      if (parsed.username) username = parsed.username;
      if (parsed.password) password = parsed.password;
      if (parsed.hostname) host = parsed.hostname;
      if (parsed.port) port = parsed.port;
      if (parsed.pathname) database = parsed.pathname.substring(1);

      const search_ssl = parsed.searchParams.get("ssl");
      const search_sslmode = parsed.searchParams.get("sslmode");
      if (search_ssl) ssl = search_ssl === "true";
      if (search_sslmode) {
        ssl = search_sslmode === "true" || search_sslmode === "required";
      }
    }

    if (dialect === "postgresql") dialect = "postgres";
    if (dialect === "psql") dialect = "postgres";

    if (process.env.DATABASE_SSL?.toLowerCase() === "true") {
      ssl = true;
    }
    if (process.env.DATABASE_SSL_SELF_SIGNED?.toLowerCase() === "true") {
      ssl = { rejectUnauthorized: false };
    }

    // sqlite overrides
    if (dialect === "sqlite") {
      if (!host) host = ":memory:";
    }

    // console.log(`grouparoo using ${dialect} database @ ${host}`);

    return {
      autoMigrate: true,
      logging: (...msg) => console.log(msg),
      dialect: dialect,
      port: parseInt(port),
      database: database,
      host: host,
      username: username,
      password: password,
      models: [join(__dirname, "..", "models")],
      migrations: [join(__dirname, "..", "migrations")],
      storage: host, // only used for sqlite
      pool: {
        max: process.env.SEQUELIZE_POOL_SIZE
          ? parseInt(process.env.SEQUELIZE_POOL_SIZE)
          : 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      dialectOptions: { ssl },
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
