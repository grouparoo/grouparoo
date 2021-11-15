import { TYPES } from "../util/data";
import { log } from "actionhero";
import MySQL from "./mysql";

function findConfig(): any {
  let connectionURL = process.env.DEMO_CLICKHOUSE_URL;
  if (!connectionURL) {
    // return the default
    connectionURL = "clickhouse://default:@127.0.0.1:3306/grouparoo_demo";
    log(`Using default local Clickhouse database: ${connectionURL}`);
    log(`Set your own via DEMO_CLICKHOUSE_URL env variable`);
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

  log(`Clickhouse config: ${JSON.stringify(clientConfig)}`, "debug");
  if (dialect !== "mysql" && dialect !== "clickhouse") {
    throw new Error("Set DEMO_CLICKHOUSE_URL to a Clickhouse database.");
  }

  return clientConfig;
}

export default class ClickHouse extends MySQL {
  constructor() {
    super();
    this.config = Object.assign({}, findConfig());
    this.client = null;
  }

  name() {
    return "clickhouse";
  }

  async createTable(tableName: string, typeColumn: string, keys: string[]) {
    const sqlTable = tableName;

    const typeData = TYPES[tableName];
    if (!typeData) {
      throw new Error(`Unknown tableName: ${tableName}`);
    }

    const columnTypes: string[] = [];
    for (const key of keys) {
      const type = typeData[key];
      if (!type) {
        throw new Error(`Unknown column for ${tableName}: ${key}`);
      }
      columnTypes.push(`${key} ${type}`);
    }

    await this.query(1, `DROP TABLE IF EXISTS ${sqlTable}`);

    let primaryKeyIndex = -1;
    const createQuery = `
      CREATE TABLE ${sqlTable} (${columnTypes
      .map((columnType, index) => {
        let nextColumnType = columnType;
        if (columnType.includes("DECIMAL")) {
          // ClickHouse Decimal data type family must have exactly two arguments: precision and scale.
          // https://clickhouse.com/docs/en/sql-reference/data-types/decimal/
          nextColumnType = nextColumnType.replace("DECIMAL", "Decimal(10, 2)");
        }

        if (columnType.includes("TIMESTAMP")) {
          // TIMESTAMP alias to DateTime which does not support time precision
          // Use DateTime64 instead
          // https://clickhouse.com/docs/en/sql-reference/data-types/datetime64/
          nextColumnType = nextColumnType.replace("TIMESTAMP", "DateTime64");
        }

        if (columnType.includes("PRIMARY KEY")) {
          primaryKeyIndex = index;
          // PRIMARY KEY syntax is different for ClickHouse tables
          // https://clickhouse.com/docs/en/sql-reference/statements/create/table/#primary-key
          nextColumnType = nextColumnType.replace("PRIMARY KEY", "");
        }

        return nextColumnType.trim();
      })
      .join(", ")})
      ENGINE = MergeTree()
      ${primaryKeyIndex < 0 ? "" : `PRIMARY KEY (${keys[primaryKeyIndex]})`}
    `;

    await this.query(1, createQuery);

    // ClickHouse does not use indexes, instead indexing is defined in the engine:
    // https://clickhouse.com/docs/en/engines/table-engines/
  }

  async insertRow(
    tableName: string,
    keys: string[],
    row: Record<string, string | number | Date | boolean>
  ) {
    const compatibleRow = keys.reduce((acc, key) => {
      const value = row[key];

      // ClickHouse BOOLEAN is an Int8. The compatible values are 1 and 0
      // https://clickhouse.com/docs/en/sql-reference/data-types/boolean/
      acc[key] = value === true ? 1 : value === false ? 0 : value;

      return acc;
    }, {});

    super.insertRow(tableName, keys, compatibleRow);
  }
}
