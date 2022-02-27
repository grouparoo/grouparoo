import { api, config, log } from "actionhero";

export default class Database {
  dialect: string;
  config: { [key: string]: any };
  constructor() {
    this.config = Object.assign({}, api.sequelize.config);
    this.dialect = config.sequelize.dialect;
  }

  extractSql(object: string | [string, object]) {
    if (typeof object === "string") {
      return { sql: object, params: null };
    }
    return { sql: object[0], params: object[1] };
  }

  async query({ sqlite, postgres }) {
    let choice = null;
    switch (this.dialect) {
      case "postgres":
        choice = postgres;
        break;
      case "sqlite":
        choice = sqlite;
        break;
      default:
        throw new Error(`Unknown database dialect: ${this.dialect}`);
    }

    const { sql, params } = this.extractSql(choice);
    log("query", "debug", { sql, params });
    if (params) {
      return api.sequelize.query(sql, params);
    }
    return api.sequelize.query(sql);
  }

  async reset() {
    await this.truncate();
  }

  async truncate() {
    const skipTables = ["sequelizemeta"];
    const schema = this.config.schema || "public";
    const db = this.config.database;

    const results = await this.query({
      postgres: [
        `SELECT table_name AS name FROM INFORMATION_SCHEMA.TABLES WHERE table_catalog = :db AND table_schema = :schema`,
        { replacements: { db, schema } },
      ],
      sqlite:
        "SELECT name FROM  sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%'",
    });
    const tables = await results[0].map((t) => t.name);
    for (const table of tables) {
      if (skipTables.includes(table.toLowerCase())) {
        continue;
      }
      await this.query({
        postgres: `TRUNCATE TABLE ${schema}."${table}";`,
        sqlite: `DELETE FROM "${table}";`,
      });
    }
  }
}
