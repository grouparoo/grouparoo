import { CLI } from "actionhero";
import { users, purchases } from "../../../sample_data";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo dataEcommerce";
    this.description =
      "Load eCommerce users and purchases into a source database.";
  }

  async run() {
    await users();
    await purchases();
    return true;
  }
}
