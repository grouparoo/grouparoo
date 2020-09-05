import { Client } from "pg";
import { log, execSync, sleep } from "./shared";
import { api } from "actionhero";
import parse from "csv-parse/lib/sync";
import fs from "fs";
import path from "path";

export default class Postgres {
  client: Client;
  config: any;
  constructor(schema) {
    this.config = Object.assign({}, api.sequelize.config, { schema });
    this.client = null;
  }

  log(level: number, ...rest) {
    log(level, "  ", ...rest);
  }

  async execSync(level, command) {
    execSync(level, command);
  }

  makeClient() {
    console.log("config", this.config);
    return new Client(this.config);
  }

  async disconnect() {
    if (this.client) {
      this.client.end();
      this.client = null;
    }
  }
  async connect() {
    if (this.client) {
      return this.client;
    }

    const client = this.makeClient();
    await client.connect();
    console.log(`making schema '${this.config.schema}'`);
    await client.query(`CREATE SCHEMA IF NOT EXISTS ${this.config.schema};`);

    this.client = client;
    return this.client;
  }

  async createDb() {
    const dbName = this.makeClient().connectionParameters.database;
    this.log(1, "create db:", dbName);
    const command = `createdb "${dbName}"`;
    await this.execSync(1, command);
    await sleep(2500);
  }

  async query(level, ...args) {
    this.log(level, ...args);
    const client = await this.connect();
    return await client.query(...args);
  }

  async dropTable(tableName) {
    const sqlTable = `${this.config.schema}.${tableName}`;
    this.query(1, `DROP TABLE IF EXISTS ${sqlTable}`);
  }
  async createCsvTable(
    tableName: string,
    userId: string,
    types: any,
    createdAt: boolean,
    updatedAt: boolean
  ) {
    await this.dropTable(tableName);

    const sqlTable = `${this.config.schema}.${tableName}`;
    // read from data file
    const filePath = path.resolve(
      path.join(__dirname, "..", "..", "data", `${tableName}.csv`)
    );
    const rows = parse(fs.readFileSync(filePath), { columns: true });
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

    this.log(1, `Adding ${sqlTable}`);
    const columnNames = typeKeys.join(", ");
    const variables = typeKeys.map((key, index) => "$" + (index + 1));
    const insertQuery = `INSERT INTO ${sqlTable} (${columnNames}) VALUES (${variables})`;
    for (const row of rows) {
      // 100 people in last 3 months, spaced out
      const numberOfUsers = 1000;
      const secondsBack = 60 * 60 * 24 * 30 * 3;
      const secondsEach = secondsBack / 1000; // for each user
      const ageNumber = numberOfUsers - parseInt(row[userId]);
      let creationAgo = secondsEach * ageNumber * 1000;
      if (tableName !== "users") {
        creationAgo = Math.random() * creationAgo;
      }
      const now = new Date().getTime();
      const creationMilli = now - creationAgo;
      if (createdAt) {
        row.created_at = new Date(creationMilli);
      }
      if (updatedAt) {
        // sometime after that
        const updatedAgo = creationAgo * Math.random();
        const updatedMilli = now - updatedAgo;
        row.updated_at = new Date(updatedMilli);
      }

      const values: Array<any> = typeKeys.map((key) =>
        getValue(row, key, types)
      );
      await this.query(2, insertQuery, values);
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
