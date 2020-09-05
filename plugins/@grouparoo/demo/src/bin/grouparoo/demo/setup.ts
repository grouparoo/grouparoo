import { CLI } from "actionhero";
import { teams } from "../../../teams";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo setup";
    this.description = "Start from empty bootstrap";
  }

  async run() {
    await teams();
    return true;
  }
}
