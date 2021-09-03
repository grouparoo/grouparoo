import mysql from "mysql";
import { log } from "actionhero";
import Connection from "../util/connection";
import { promisify } from "util";

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

  accounts: {
    id: "INT NOT NULL PRIMARY KEY",
    name: "VARCHAR(191) NOT NULL",
    domain: "VARCHAR(191) NOT NULL",
    plan_id: "INT",
    created_at: "TIMESTAMP NOT NULL",
    updated_at: "TIMESTAMP NOT NULL",
  },

  plans: {
    id: "INT NOT NULL PRIMARY KEY",
    name: "VARCHAR(191) NOT NULL",
    seats: "INT NOT NULL",
    monthly_rate: "INT NOT NULL",
  },

  payments: {
    id: "INT NOT NULL PRIMARY KEY",
    account_id: "INT NOT NULL",
    amount: "DECIMAL",
    state: "VARCHAR(191)",
    created_at: "TIMESTAMP NOT NULL",
  },
};

function findConfig(): any {
  let connectionURL = process.env.DEMO_MYSQL_URL;
  if (!connectionURL) {
    // return the default
    connectionURL = "mysql://root:@127.0.0.1:3306/grouparoo_demo";
    log(`Using default local MySQL database: ${connectionURL}`);
    log(`Set your own via DEMO_MYSQL_URL env variable`);
  }

  let dialect = null;
  const clientConfig = {
    user: null,
    password: null,
    host: null,
    database: null,
    port: null,
  };
  const parsed = new URL(connectionURL);
  if (parsed.protocol) dialect = parsed.protocol.slice(0, -1);
  if (parsed.username) clientConfig.user = parsed.username;
  if (parsed.password) clientConfig.password = parsed.password;
  if (parsed.hostname) clientConfig.host = parsed.hostname;
  if (parsed.port) clientConfig.port = parsed.port;
  if (parsed.pathname) clientConfig.database = parsed.pathname.substring(1);

  log(`MySQL config: ${JSON.stringify(clientConfig)}`, "debug");
  if (dialect !== "mysql") {
    throw new Error("Set DEMO_MYSQL_URL to a MySQL database.");
  }

  return clientConfig;
}

export default class MySQL extends Connection {
  client: any;
  config: { [key: string]: any };
  constructor() {
    super();
    this.config = Object.assign({}, findConfig());
    this.client = null;
  }

  name() {
    return "mysql";
  }

  getAppOptions() {
    const { host, port, database, user, password } = this.config;
    const appOptions = { host, port, database, user, password };
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
    const conn = mysql.createConnection(this.config);
    const connect = promisify(conn.connect).bind(conn);
    const query = promisify(conn.query).bind(conn);
    const end = promisify(conn.end).bind(conn);

    const client = { connect, query, end };

    await client.connect();

    this.client = client;
    return this.client;
  }

  async createTable(tableName: string, typeColumn: string, keys: string[]) {
    const sqlTable = `\`${tableName}\``;

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

    if (typeColumn !== "id") {
      const indexQuery = `CREATE INDEX \`${tableName}_${typeColumn}\` ON ${sqlTable} (${typeColumn});`;
      await this.query(1, indexQuery);
    }
  }

  async insertRow(
    tableName: string,
    keys: string[],
    row: { [key: string]: string | number | Date }
  ) {
    const sqlTable = `\`${tableName}\``;
    const columnNames = keys.join(", ");
    const variables = keys.map((key, index) => "?");
    const insertQuery = `INSERT INTO ${sqlTable} (${columnNames}) VALUES (${variables})`;

    const values: Array<any> = keys.map((key) => getValue(row, key));
    await this.query(2, insertQuery, values);
  }

  async query(level, sql, params = null) {
    log("query", "debug", { level, sql, params });
    const client = await this.connect();
    if (params) {
      return client.query(sql, params);
    }
    return client.query(sql);
  }
}

function getValue(row, key) {
  const value = row[key];
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (!value) {
    return null;
  }
  if (value.length === 0) {
    return null;
  }
  return value;
}
