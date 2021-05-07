import { Client } from "pg";
import { log } from "../util/shared";
import { api, config } from "actionhero";
import Connection from "../util/connection";

export const SCHEMA_NAME = "demo";

const TYPES = {
  users: {
    id: "INT NOT NULL PRIMARY KEY",
    account_id: "INT",
    first_name: "VARCHAR(191) NOT NULL",
    last_name: "VARCHAR(191) NOT NULL",
    email: "VARCHAR(191) NOT NULL",
    gender: "VARCHAR(191)",
    ip_address: "VARCHAR(191)",
    avatar: "VARCHAR(191)",
    language: "VARCHAR(191)",
    deactivated: "BOOLEAN",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },
  purchases: {
    id: "INT NOT NULL PRIMARY KEY",
    user_id: "INT NOT NULL",
    item: "VARCHAR(191) NOT NULL",
    category: "VARCHAR(191) NOT NULL",
    price: "DECIMAL",
    state: "VARCHAR(191)",
    created_at: "TIMESTAMP NOT NULL",
  },
};

function findConfig() {
  const connectionURL = process.env.DEMO_DATABASE_URL;
  if (!connectionURL) {
    // return the default
    if (config.sequelize.dialect !== "postgres") {
      throw new Error("Set DEMO_DATABASE_URL to a Postgres database.");
    }
    return api.sequelize.config;
  }

  let dialect = null;
  const clientConfig = {
    user: null,
    password: null,
    host: null,
    database: null,
    port: null,
    ssl: false,
    // statement_timeout: number,
    // query_timeout: number,
    // connectionTimeoutMillis: number,
  };
  const parsed = new URL(connectionURL);
  if (parsed.protocol) dialect = parsed.protocol.slice(0, -1);
  if (parsed.username) clientConfig.user = parsed.username;
  if (parsed.password) clientConfig.password = parsed.password;
  if (parsed.hostname) clientConfig.host = parsed.hostname;
  if (parsed.port) clientConfig.port = parsed.port;
  if (parsed.pathname) clientConfig.database = parsed.pathname.substring(1);

  const search_ssl = parsed.searchParams.get("ssl");
  const search_sslmode = parsed.searchParams.get("sslmode");
  if (search_ssl) clientConfig.ssl = search_ssl === "true";
  if (search_sslmode) {
    clientConfig.ssl =
      search_sslmode === "true" || search_sslmode === "required";
  }
  if (dialect === "postgresql") dialect = "postgres";

  if (dialect !== "postgres") {
    throw new Error("Set DEMO_DATABASE_URL to a Postgres database.");
  }
  return clientConfig;
}

export default class Postgres extends Connection {
  client: Client;
  config: { [key: string]: any };
  constructor(schema = SCHEMA_NAME) {
    super();
    this.config = Object.assign({}, findConfig(), { schema });
    this.client = null;
  }

  defaultConfigDir() {
    return "purchases";
  }

  getAppOptions() {
    const { host, port, database, schema, user, password } = this.config;
    const appOptions = { host, port, database, schema, user, password };
    for (const key in appOptions) {
      appOptions[key] = (appOptions[key] || "").toString();
    }
    return appOptions;
  }

  async disconnect() {
    if (this.client) {
      await this.client.end();
      this.client = null;
    }
  }
  async connect() {
    if (this.client) {
      return this.client;
    }

    const client = new Client(this.config);
    await client.connect();
    await client.query(`CREATE SCHEMA IF NOT EXISTS ${this.config.schema};`);

    this.client = client;
    return this.client;
  }

  async createTable(tableName: string, userId: string, keys: string[]) {
    const sqlTable = `${this.config.schema}."${tableName}"`;

    const typeData = TYPES[tableName];
    if (!typeData) {
      throw new Error(`Unknown tableName: ${tableName}`);
    }
    const columnTypes = [];
    for (const key of keys) {
      const type = typeData[key];
      if (!type) {
        throw new Error(`Unknown column for ${tableName}: ${key}`);
      }
      columnTypes.push(`${key} ${type}`);
    }

    await this.query(1, `DROP TABLE IF EXISTS ${sqlTable}`);

    const createQuery = `CREATE TABLE ${sqlTable} (${columnTypes.join(", ")})`;
    await this.query(1, createQuery);

    if (userId !== "id") {
      const indexQuery = `CREATE INDEX "${tableName}_userId" ON ${sqlTable} ("${userId}");`;
      await this.query(1, indexQuery);
    }
  }

  async insertRow(
    tableName: string,
    keys: string[],
    row: { [key: string]: string | number | Date }
  ) {
    const sqlTable = `${this.config.schema}."${tableName}"`;
    const columnNames = keys.join(", ");
    const variables = keys.map((key, index) => "$" + (index + 1));
    const insertQuery = `INSERT INTO ${sqlTable} (${columnNames}) VALUES (${variables})`;

    const values: Array<any> = keys.map((key) => getValue(row, key));
    await this.query(2, insertQuery, values);
  }

  async query(level, sql, params = null) {
    log(level, sql, params);
    const client = await this.connect();
    if (params) {
      return client.query(sql, params);
    }
    return client.query(sql);
  }
}

function getValue(row, key) {
  const value = row[key];
  if (!value) {
    return null;
  }
  if (value.length === 0) {
    return null;
  }
  return value;
}
