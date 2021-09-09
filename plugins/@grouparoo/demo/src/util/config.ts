import Postgres from "../connections/postgres";
import Mongo from "../connections/mongo";
import Snowflake from "../connections/snowflake";
import MySQL from "../connections/mysql";
import Connection from "./connection";

class Config {
  subDirs: { [type: string]: boolean };
  types: { [type: string]: boolean };
  db: any;
  dbName: string;
  dataset: string;
  constructor() {
    this.db = null;
    this.dataset = null;
    this.dbName = null;
    this.subDirs = {};
    this.types = {};
  }

  setDb(name: string, type: string) {
    if (this.dbName && this.dbName !== name) {
      throw new Error(
        `There should only be one source database. ${this.dbName} is already set. Cannot use ${type}.`
      );
    }

    switch (name) {
      case "postgres":
        this.db = new Postgres();
        break;
      case "mongo":
        this.db = new Mongo();
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

  setDataset(name, type) {
    if (this.dataset && this.dataset !== name) {
      throw new Error(
        `There should only be one category of data for b2b or b2c. ${this.dataset} is already set. Cannot use ${type}.`
      );
    }
    this.dataset = name;
  }

  addDir(subDir: string) {
    this.subDirs[subDir] = true;
  }

  add(type: string) {
    if (this.types[type]) {
      // already have it
      return;
    }
    this.types[type] = true;

    switch (type) {
      case "reset":
      case "setup":
        break;
      case "mongo":
      case "snowflake":
      case "postgres":
      case "mysql":
        this.setDb(type, type);
        break;
      case "b2c":
      case "purchases":
        this.setDataset("b2c", type);
        this.addDir("purchases");
        break;
      case "b2b":
      case "accounts":
        this.setDataset("b2b", type);
        this.addDir("accounts");
        break;
      case "mailchimp":
      case "salesforce":
        this.addDir(type);
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  data() {
    const types = Object.assign({}, this.types);
    if (types["reset"]) {
      if (Object.keys(types).length === 1) {
        return { db: null, dataset: null, subDirs: [] };
      }
      delete types["reset"];
      // otherwise resetting anyway
    }

    if (types["setup"]) {
      if (Object.keys(types).length === 1) {
        return { db: null, dataset: null, subDirs: ["setup"] };
      }
      // otherwise setting up anyway
    }

    let db = this.db;
    let dataset = this.dataset;
    const subDirs = Object.assign({}, this.subDirs);
    subDirs["setup"] = true;
    subDirs["identity"] = true;

    if (!db) {
      db = new Postgres();
    }
    if (!dataset) {
      subDirs["purchases"] = true;
      dataset = "b2c";
    }

    return {
      db,
      dataset,
      subDirs: Object.keys(subDirs),
    };
  }
}

export function getConfig(types: string[]): {
  db: Connection;
  subDirs: string[];
  dataset: string;
} {
  const config = new Config();
  for (const type of types) {
    config.add(type);
  }
  return config.data();
}
