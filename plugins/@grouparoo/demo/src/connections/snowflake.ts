import { log } from "actionhero";
import Connection from "../util/connection";
import { getEnvValue } from "../util/env";
import { TYPES } from "../util/data";
import path from "path";
import fs from "fs";

function findConfig(): { [key: string]: string } {
  const keys = [
    "account",
    "username",
    "password",
    "warehouse",
    "database",
    "schema",
  ];

  const options: any = {};
  for (const key of keys) {
    options[key] = getEnvValue("snowflake", `SNOWFLAKE_${key.toUpperCase()}`);
  }

  if (options.schema) {
    options.schema = "PUBLIC";
  }
  log(`Snowflake config: ${JSON.stringify(options)}`, "debug");
  return options;
}

export default class Snowflake extends Connection {
  config = { ...findConfig() };
  lines: string[] = [];
  data: Record<string, { [key: string]: string | number | Date }[]> = {};

  name() {
    return "snowflake";
  }
  seedOnly() {
    return true;
  }

  getAppOptions() {
    return this.config;
  }

  async sessionStart() {
    this.lines = [];
    this.data = {};
  }

  async sessionEnd() {
    if (!this.isWriting()) {
      return;
    }

    const out = [...this.lines];
    for (const tableName in this.data) {
      out.push(this.fillTable(tableName, this.data[tableName]));
    }
    const fileKey = this.name();
    const filePath = path.resolve(
      path.join(__dirname, "..", "..", "data", "sql", `${fileKey}.sql`)
    );
    fs.writeFileSync(filePath, out.join("\n"));
  }

  fillTable(
    tableName: string,
    rows: { [key: string]: string | number | Date }[]
  ) {
    const sqlTable = `"${this.config.database}"."${
      this.config.schema
    }"."${tableName.toUpperCase()}"`;

    const typeData = TYPES[tableName];
    const keys = Object.keys(typeData);
    const values = [];
    for (const row of rows) {
      const rowVals = keys.map((key) => row[key]);
      const encoded = JSON.stringify(rowVals)
        .slice(1, -1)
        .replace(/'/g, "\\'")
        .replace(/"/g, "'");
      values.push("(" + encoded + ")");
    }

    return `INSERT INTO ${sqlTable} (${keys.join(", ")}) VALUES \n${values.join(
      ",\n"
    )};`;
  }

  async createTable(tableName: string, typeColumn: string, keys: string[]) {
    const sqlTable = `"${this.config.database}"."${
      this.config.schema
    }"."${tableName.toUpperCase()}"`;

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

    const createQuery = `CREATE OR REPLACE TABLE ${sqlTable} (${columnTypes.join(
      ", "
    )});`;

    this.lines.push(createQuery);
  }

  async insertRow(
    tableName: string,
    _: string[],
    row: { [key: string]: string | number | Date }
  ) {
    this.data[tableName] = this.data[tableName] || [];
    this.data[tableName].push(row);
  }
}
