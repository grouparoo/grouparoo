import { CLI } from "actionhero";
import { init } from "../../../util/shared";
import { loadConfigFiles } from "../../../util/configFiles";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "demo-setup";
    this.description = "Start from empty bootstrap";
  }

  async run() {
    await init({ reset: true });
    await loadConfigFiles("setup");
    return true;
  }
}
