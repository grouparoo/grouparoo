import { CLI } from "actionhero";
import { writeConfigFiles } from "../../../util/configFiles";
import Connection from "../../../postgres/connection";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-config-purchases";
    this.description = "Writes postgres purchases config to current app";
    this.inputs = {};
  }

  async run() {
    const db = new Connection();
    await writeConfigFiles(db, ["purchases", "events", "shared"]);
    return true;
  }
}
