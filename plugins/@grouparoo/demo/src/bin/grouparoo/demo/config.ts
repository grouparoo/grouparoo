import { CLI } from "actionhero";
import { configFiles } from "../../../configFiles";
import { init } from "../../../util/shared";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo eCommerce config";
    this.description = "Writes config to current app";
    this.inputs = {};
  }

  async run({ params }) {
    await init({ reset: true });
    await configFiles();
    return true;
  }
}
