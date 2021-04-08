import { Client } from "pg";
import { log, execSync, userCreatedAt, numberOfUsers } from "../util/shared";
import { api, config } from "actionhero";
import parse from "csv-parse/lib/sync";
import fs from "fs";
import path from "path";

export const SCHEMA_NAME = "demo";

export function readCsvTable(tableName) {
  const filePath = path.resolve(
    path.join(__dirname, "..", "..", "data", `${tableName}.csv`)
  );
  const rows = parse(fs.readFileSync(filePath), { columns: true });
  return rows;
}

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

export default class Postgres {
  client: Client;
  config: { [key: string]: any };
  constructor(schema = SCHEMA_NAME) {
    this.config = Object.assign({}, findConfig(), { schema });
    this.client = null;
  }

  getConfig(): { [key: string]: any } {
    return this.config;
  }

  async execSync(level, command) {
    execSync(level, command);
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

  async query(level, sql, params = null) {
    log(level, sql, params);
    const client = await this.connect();
    if (params) {
      return client.query(sql, params);
    }
    return client.query(sql);
  }

  async createCsvTable(
    tableName: string,
    userId: string,
    types: any,
    createdAt: boolean,
    updatedAt: boolean,
    scale: number = 0
  ) {
    const sqlTable = `${this.config.schema}."${tableName}"`;
    await this.query(1, `DROP TABLE IF EXISTS ${sqlTable}`);

    if (scale < 1) {
      scale = 1;
    }
    log(1, `Adding ${tableName}`);
    // read from data file
    const rows = readCsvTable(tableName);
    const csvKeys = Object.keys(rows[0]);
    const typeKeys = Object.keys(types);
    const diff = differenceOf2Arrays(csvKeys, typeKeys);
    if (diff.length > 0) {
      throw `${tableName} csv and types do not match: ${diff.toString()}`;
    }

    if (createdAt) {
      typeKeys.push("created_at");
      types.created_at = "TIMESTAMP NOT NULL";
    }
    if (updatedAt) {
      typeKeys.push("updated_at");
      types.updated_at = "TIMESTAMP NOT NULL";
    }

    const columnTypes = typeKeys.map((key) => `${key} ${types[key]}`);
    const createQuery = `CREATE TABLE ${sqlTable} (${columnTypes.join(", ")})`;
    await this.query(1, createQuery);

    if (userId !== "id") {
      const indexQuery = `CREATE INDEX "${tableName}_userId" ON ${sqlTable} ("${userId}");`;
      await this.query(1, indexQuery);
    }

    const db = this;
    const fillTable = async function (page: number = 0) {
      log(2, `   Page ${page}`);
      const perPage = rows.length;
      const columnNames = typeKeys.join(", ");
      const variables = typeKeys.map((key, index) => "$" + (index + 1));
      const insertQuery = `INSERT INTO ${sqlTable} (${columnNames}) VALUES (${variables})`;
      for (const fileRow of rows) {
        const row = Object.assign({}, fileRow);
        row.id = parseInt(row.id);
        if (row.id <= 0) {
          throw new Error(`no id column on ${tableName}`);
        }
        row[userId] = parseInt(row[userId]);
        if (row[userId] <= 0) {
          throw new Error(`no ${userId} column on ${tableName}`);
        }

        const now = new Date().getTime();
        let generatedCreateAt = userCreatedAt(row[userId]);
        let creationAgo = now - generatedCreateAt.getTime();
        if (tableName !== "users") {
          creationAgo = Math.random() * creationAgo;
          const updatedMilli = now - creationAgo;
          generatedCreateAt = new Date(updatedMilli);
        }

        if (createdAt) {
          row.created_at = new Date(generatedCreateAt);
        }
        if (updatedAt) {
          // sometime after that
          const updatedAgo = creationAgo * Math.random();
          const updatedMilli = now - updatedAgo;
          row.updated_at = new Date(updatedMilli);
        }

        if (page > 1) {
          row.id = perPage * page + row.id;
          if (tableName !== "users") {
            row[userId] = numberOfUsers * page + row[userId];
          }
          if (row.email) {
            row.email = `${page}${row.email}`;
          }
        }

        const values: Array<any> = typeKeys.map((key) =>
          getValue(row, key, types)
        );
        console.log(values.join(", "));
        await db.query(2, insertQuery, values);
      }
    };

    for (let page = 1; page <= scale; page++) {
      await fillTable(page);
    }
  }
}

function getValue(row, key, types) {
  const value = row[key];
  if (!value) {
    return null;
  }
  if (value.length === 0) {
    return null;
  }
  return value;
}

function differenceOf2Arrays(array1, array2) {
  const temp = [];

  for (var i in array1) {
    if (!array2.includes(array1[i])) temp.push(array1[i]);
  }
  for (i in array2) {
    if (!array1.includes(array2[i])) temp.push(array2[i]);
  }
  return temp.sort((a, b) => a - b);
}
