import { CLI } from "actionhero";

export class Start extends CLI {
  constructor() {
    super();
    this.name = "start";
    this.description = "Run the Grouparoo server";
  }

  async run() {
    await import("../grouparoo"); // run the server
    return false;
  }
}
