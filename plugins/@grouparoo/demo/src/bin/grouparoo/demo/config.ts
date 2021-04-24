import { CLI } from "actionhero";
import { writeConfigFiles } from "../../../util/configFiles";
import Postgres from "../../../postgres/connection";
import Mongo from "../../../mongo/connection";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-config [type]";
    this.description = "Writes given postgres config to current app";
    this.inputs = {};
  }

  async run({ params }) {
    let type = params._arguments[0];
    if (!type) {
      type = "purchases";
    }
    console.log(`Using type: ${type}`);
    const { db, subDirs } = getConfig(type);

    const skip = ["setup"]; // don't need teams
    const filtered = subDirs.filter((item) => !skip.includes(item));
    await writeConfigFiles(db, filtered);
    return true;
  }
}

export function getConfig(type): { db: any; subDirs: string[] } {
  const subDirs: string[] = [];
  let db = null;
  if (type === "reset") {
    return { db, subDirs };
  }
  subDirs.push("setup");

  if (type === "setup") {
    return { db, subDirs };
  }
  subDirs.push("shared");
  subDirs.push("identity");

  switch (type) {
    case "purchases":
      // defaults below
      break;
    case "events":
      subDirs.push("events");
      break;
    case "mongo":
      db = new Mongo();
      subDirs.push("mongo");
      break;
    default:
      throw new Error(`Unknown type: ${type}`);
  }

  if (!hasSource(subDirs)) {
    db = new Postgres();
    subDirs.push("purchases");
  }

  return { db, subDirs };
}

function hasSource(subDirs: string[]) {
  const sources = ["purchases", "mongo"];
  for (const source of sources) {
    if (subDirs.includes(source)) {
      return true;
    }
  }
  return false;
}
