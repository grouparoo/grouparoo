import { CLI } from "actionhero";
import { writeConfigFiles } from "../../../configFiles";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo config";
    this.description = "Writes config to current app";
    this.inputs = {};
  }

  async run() {
    await writeConfigFiles();
    return true;
  }
}
