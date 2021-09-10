import { log } from "actionhero";
import Connection from "../util/connection";
import { getEnvValue } from "../util/env";
import { TYPES } from "../util/data";
import path from "path";
import fs from "fs";

function findConfig(): { [key: string]: string } {
  const keys = ["project_id", "dataset", "client_email", "private_key"];

  const options: any = {};
  for (const key of keys) {
    options[key] = getEnvValue(
      "bigquery",
      `GOOGLE_SERVICE_${key.toUpperCase()}`
    );
  }

  log(`BigQuery config: ${JSON.stringify(options)}`, "debug");
  return options;
}

export default class BigQuery extends Connection {
  config: { [key: string]: string };
  lines: string[];
  data: { [tableName: string]: { [key: string]: string | number | Date }[] };
  constructor() {
    super();
    this.config = Object.assign({}, findConfig());
    this.lines = [];
    this.data = {};
  }

  name() {
    return "bigquery";
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

    let out = [].concat(this.lines);
    for (const tableName in this.data) {
      out = out.concat(this.fillTable(tableName, this.data[tableName]));
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
  ): string[] {
    const sqlTable = `\`${this.config.dataset}\`.\`${tableName}\``;

    const out = [];
    const maxRows = 250; // it doesn't like too many at a time.

    const typeData = TYPES[tableName];
    const keys = Object.keys(typeData);

    let values = [];
    for (const row of rows) {
      const rowVals = keys.map((key) => row[key]);
      const encoded = JSON.stringify(rowVals)
        .slice(1, -1)
        .replace(/'/g, "\\'")
        .replace(/"/g, "'");
      values.push("(" + encoded + ")");

      if (values.length > maxRows) {
        out.push(
          `INSERT INTO ${sqlTable} (${keys.join(", ")}) VALUES \n${values.join(
            ",\n"
          )};`
        );
        values = [];
      }
    }

    if (values.length > 0) {
      out.push(
        `INSERT INTO ${sqlTable} (${keys.join(", ")}) VALUES \n${values.join(
          ",\n"
        )};`
      );
      values = [];
    }

    return out;
  }

  async createTable(tableName: string, typeColumn: string, keys: string[]) {
    const sqlTable = `\`${this.config.dataset}\`.\`${tableName}\``;

    const typeData = TYPES[tableName];
    if (!typeData) {
      throw new Error(`Unknown tableName: ${tableName}`);
    }
    const columnTypes = [];
    for (const key of keys) {
      let type = typeData[key];
      type = type.replace(/VARCHAR\(\d*\)/, "STRING");
      type = type.replace("PRIMARY KEY", "");
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
    keys: string[],
    row: { [key: string]: string | number | Date }
  ) {
    this.data[tableName] = this.data[tableName] || [];
    this.data[tableName].push(row);
  }
}
