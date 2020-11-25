import { CLI } from "actionhero";
import { teams } from "../../../teams";
import { init } from "../../../util/shared";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo setup";
    this.description = "Start from empty bootstrap";
  }

  async run() {
    await init({ reset: true });
    await teams(); // TODO: use single teams.json config
    return true;
  }
}
