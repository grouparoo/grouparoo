import { CLI } from "actionhero";
import { teams } from "../../../teams";
import { users, purchases } from "../../../sample_data";
import { groups } from "../../../groups";
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
    await teams();
    await users();
    await purchases();
    await groups();
    return true;
  }
}
