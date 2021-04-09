import { CLI } from "actionhero";
import { init } from "../../../util/shared";
import { loadConfigFiles } from "../../../util/configFiles";
import { getConfig } from "./config";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-setup";
    this.description = "Start from empty bootstrap";
  }

  async run() {
    const { db, subDirs } = getConfig("setup");
    await init({ reset: true });
    await loadConfigFiles(db, subDirs);
    return true;
  }
}
