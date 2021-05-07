import Postgres from "../connections/postgres";
import Mongo from "../connections/mongo";

class Config {
  subDirs: { [type: string]: boolean };
  types: { [type: string]: boolean };
  db: any;
  dbType: string;
  dataset: string;
  constructor() {
    this.db = null;
    this.dataset = null;
    this.dbType = null;
    this.subDirs = {};
    this.types = {};
  }

  setDb(type: string) {
    if (this.db) {
      throw new Error(
        `There should only be one source database. ${this.dbType} is already set. Cannot use ${type}.`
      );
    }

    this.dbType = type;

    switch (type) {
      case "purchases":
        this.db = new Postgres();
        this.addDir("purchases");
        break;
      case "mongo":
        this.db = new Mongo();
        this.addDir("mongo");
        break;
      default:
        throw new Error(`Unknown db type: ${type}`);
    }
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
        this.setDb("mongo");
        break;
      case "purchases":
        this.setDb("purchases");
        this.setDataset("b2b", "purchases");
        break;
      case "events":
        this.setDb("purchases");
        this.setDataset("b2b", "purchases");
        this.addDir("events");
        break;
      case "mailchimp":
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
      subDirs["purchases"] = true;
      dataset = "b2c";
    }
    if (!dataset) {
      dataset = "b2c";
    }

    return {
      db,
      dataset,
      subDirs: Object.keys(subDirs),
    };
  }
}

export function getConfig(
  types: string[]
): { db: any; subDirs: string[]; dataset: string } {
  const config = new Config();
  for (const type of types) {
    config.add(type);
  }
  return config.data();
}
