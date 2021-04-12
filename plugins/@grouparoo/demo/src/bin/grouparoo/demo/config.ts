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

    await writeConfigFiles(db, subDirs);
    return true;
  }
}

export function getConfig(type): { db: any; subDirs: string[] } {
  switch (type) {
    case "purchases":
      return {
        db: new Postgres(),
        subDirs: ["shared", "purchases", "identity"],
      };
    case "events":
      return {
        db: new Postgres(),
        subDirs: ["shared", "purchases", "identity", "events"],
      };
    case "mongo":
      return { db: new Mongo(), subDirs: ["shared", "mongo", "identity"] };
    case "setup":
      return { db: null, subDirs: ["setup"] };
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
