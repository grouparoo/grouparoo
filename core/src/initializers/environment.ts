import { Initializer, log, config } from "actionhero";

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

    if (config.sequelize.dialect === "sqlite") {
      log(`using SQLite database: ${config.sequelize.storage}`);

      if (config.tasks.maxTaskProcessors > 1) {
        log(
          "Only one task worker can be used with a SQLite database",
          "warning"
        );
      }
    }
  }
}
