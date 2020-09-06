import { CLI } from "actionhero";
import { users, purchases } from "../../../sample_data";
import { init } from "../../../util/shared";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo eCommerce data";
    this.description =
      "Load eCommerce users and purchases into a source database.";
  }

  async run() {
    await init({ reset: true });
    await users({ source: true });
    // await purchases();
    return true;
  }
}
