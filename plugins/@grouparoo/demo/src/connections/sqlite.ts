import { Database } from "sqlite3";
import { log } from "actionhero";
import Connection from "../util/connection";
import { TYPES } from "../util/data";
import path from "path";
import fs from "fs";

function findConfig(): any {
  const cwd = process.env.INIT_CWD;
  if (!cwd) {
    throw new Error(`Unknown current working directory`);
  }
  const file = path.resolve(path.join(cwd, "grouparoo_demo_seed.sqlite"));
  const clientConfig = { file };
  return clientConfig;
}

export default class SQLite extends Connection {
  client: Client;
  config: { [key: string]: any };
  dbPath: string;
  constructor() {
    super();
    this.config = Object.assign({}, findConfig());
    this.dbPath = this.config.file;
    this.client = null;
  }

  name() {
    return "sqlite";
  }

  getAppOptions() {
    return this.config;
  }

  async sessionStart() {
    if (fs.existsSync(this.dbPath)) {
      fs.unlinkSync(this.dbPath);
    }
  }

  async disconnect() {
    if (this.client) {
      await this.client.asyncDisconnect();
      this.client = null;
    }
  }
  async connect() {
    if (this.client) {
      return this.client;
    }

    const client = new Client({ database: this.dbPath });
    await client.asyncConnect();
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

    const values: any[] = keys.map((key) => row[key]);
    await this.query(2, insertQuery, values);
  }

  async query(level, sql, params = null) {
    log("query", "debug", { level, sql, params });
    const client = await this.connect();
    if (params) {
      return client.asyncQueryParams(sql, params);
    }
    return client.asyncQuery(sql);
  }
}

class Client extends Database {
  database: string;
  connection: Database;

  constructor({ database }) {
    super(database);
    this.database = database;
    this.connection = undefined;
  }

  async asyncConnect(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.connection = new Database(this.database, (err: Error) => {
        if (err) {
          return reject(
            new Error(
              `Error connecting to SQLite database: ${this.database}\n${err}`
            )
          );
        }
        return resolve(
          `Successfully connected to SQLite database: ${this.database}`
        );
      });
    });
  }

  async asyncQueryParams(query: string, params: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.connection.all(query, params, (err: Error, res: any[]) => {
        if (err) {
          return reject(new Error(`${err.message}\nQuery: ${query}`));
        }
        return resolve(res);
      });
    });
  }

  async asyncQuery(query: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.connection.all(query, (err: Error, res: any[]) => {
        if (err) {
          return reject(new Error(`${err.message}\nQuery: ${query}`));
        }
        return resolve(res);
      });
    });
  }

  async asyncDisconnect(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.connection.close(() => {
        return resolve(
          `Connection to database SQLite closed: ${this.database}`
        );
      });
    });
  }
}
