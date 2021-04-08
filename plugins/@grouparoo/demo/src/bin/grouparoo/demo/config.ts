import { CLI } from "actionhero";
import { writeConfigFiles } from "../../../util/configFiles";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-config";
    this.description = "Writes config to current app";
    this.inputs = {};
  }

  async run() {
    await writeConfigFiles();
    return true;
  }
}
