import Postgres from "../connections/postgres";
import Mongo from "../connections/mongo";
import BigQuery from "../connections/bigquery";
import Snowflake from "../connections/snowflake";
import MySQL from "../connections/mysql";
import Connection from "./connection";

class Config {
  db: any;
  dbName: string;
  sources: string[];
  destinations: string[];
  others: string[];
  constructor() {
    this.db = null;
    this.sources = [];
    this.destinations = [];
    this.others = [];
    this.dbName = null;
  }

  setDb(name: string) {
    if (this.dbName && this.dbName !== name) {
      throw new Error(
        `There should only be one source database. ${this.dbName} is already set. Cannot use ${name}.`
      );
    }

    switch (name) {
      case "postgres":
        this.db = new Postgres();
        break;
      case "mongo":
        this.db = new Mongo();
        break;
      case "bigquery":
        this.db = new BigQuery();
        break;
      case "snowflake":
        this.db = new Snowflake();
        break;
      case "mysql":
        this.db = new MySQL();
        break;
      default:
        throw new Error(`Unknown db type: ${name}`);
    }

    this.dbName = name;
  }

  addSource(name) {
    if (!this.sources.includes(name)) this.sources.push(name);
  }
  addDestination(name) {
    if (!this.destinations.includes(name)) this.destinations.push(name);
  }
  addOther(name) {
    if (!this.others.includes(name)) this.others.push(name);
  }

  add(type: string) {
    switch (type) {
      case "reset":
      case "setup":
        this.addOther(type);
        break;
      case "mongo":
      case "bigquery":
      case "snowflake":
      case "postgres":
      case "mysql":
        this.setDb(type);
        break;
      case "b2c":
      case "purchases":
      case "users":
        this.addSource("users");
        break;
      case "b2b":
      case "accounts":
        this.addSource("accounts");
        break;
      case "mailchimp":
      case "salesforce":
        this.addDestination(type);
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  data() {
    const hasData = this.sources.length > 0 || this.destinations.length > 0;
    if (this.others.includes("reset")) {
      if (!hasData && this.others.length === 1) {
        return {
          db: null,
          resetOnly: true,
          sources: [],
          destinations: [],
        };
      }
      // otherwise resetting anyway
    }

    if (this.others.includes("setup")) {
      if (!hasData) {
        return {
          db: null,
          resetOnly: false,
          sources: [],
          destinations: [],
        };
      }
      // otherwise setting up anyway
    }

    let db = this.db;
    if (!db) {
      db = new Postgres();
    }
    if (this.sources.length === 0) {
      this.addSource("users");
    }

    return {
      db,
      resetOnly: false,
      sources: this.sources,
      destinations: this.destinations,
    };
  }
}

export function getConfig(types: string[]): {
  db: Connection;
  resetOnly: boolean;
  sources: string[];
  destinations: string[];
} {
  const config = new Config();
  for (const type of types) {
    config.add(type);
  }
  return config.data();
}
