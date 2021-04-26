import Postgres from "../postgres/connection";
import Mongo from "../mongo/connection";

class Config {
  subDirs: { [type: string]: boolean };
  types: { [type: string]: boolean };
  db: any;
  dbType: string;
  constructor() {
    this.db = null;
    this.dbType = null;
    this.subDirs = {};
    this.types = {};
  }

  // reset() {
  //   return {
  //     db: null,
  //     subDirs: [],
  //   };
  // }

  // setup() {
  //   return {
  //     db: null,
  //     subDirs: ["setup"],
  //   };
  // }

  setDb(type: string) {
    if (this.db) {
      throw new Error(
        `There should only be one source database. ${this.dbType} is already set. Cannot also use ${type}.`
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
        break;
      case "setup":
        break;
      case "purchases":
        this.setDb("purchases");
        break;
      case "events":
        this.setDb("purchases");
        this.addDir("events");
        break;
      case "mongo":
        this.setDb("mongo");
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  data() {
    const types = Object.assign({}, this.types);
    if (types["reset"]) {
      if (Object.keys(types).length === 1) {
        return { db: null, subDirs: [] };
      }
      delete types["reset"];
      // otherwise resetting anyway
    }

    if (types["setup"]) {
      if (Object.keys(types).length === 1) {
        return { db: null, subDirs: ["setup"] };
      }
      // otherwise setting up anyway
    }

    let db = this.db;
    const subDirs = Object.assign({}, this.subDirs);
    subDirs["setup"] = true;
    subDirs["identity"] = true;

    if (!db) {
      db = new Postgres();
      subDirs["purchases"] = true;
    }

    return {
      db,
      subDirs: Object.keys(subDirs),
    };
  }
}

export function getConfig(types: string[]): { db: any; subDirs: string[] } {
  const config = new Config();
  for (const type of types) {
    config.add(type);
  }
  return config.data();
}
