import { CLI } from "actionhero";
import { init } from "../../../util/shared";
import { loadSetupFiles } from "../../../configFiles";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo setup";
    this.description = "Start from empty bootstrap";
  }

  async run() {
    await init({ reset: true });
    await loadSetupFiles();
    return true;
  }
}
