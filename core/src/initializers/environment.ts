import { Initializer, log } from "actionhero";

export class Environment extends Initializer {
  constructor() {
    super();
    this.name = "environment";
    this.loadPriority = 1;
  }

  async initialize() {
    if (process.env.GROUPAROO_ENV_CONFIG_FILE) {
      log(
        `Modified your runtime environment with ${process.env.GROUPAROO_ENV_CONFIG_FILE}`,
        "notice"
      );
    }
  }
}
