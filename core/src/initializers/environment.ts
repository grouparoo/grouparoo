import { Initializer, log, config } from "actionhero";

export class Environment extends Initializer {
  constructor() {
    super();
    this.name = "environment";
    this.loadPriority = 1;
  }

  async initialize() {
    const { env } = process;
    // Are we missing any important environment variables?
    const errors: string[] = [];
    if (!env.DATABASE_URL && !env.DB_HOST) {
      errors.push(`DATABASE_URL (or DATABASE_HOST etc) is not set`);
    }
    if (!env.REDIS_URL && !env.REDIS_HOST) {
      errors.push(`REDIS_URL (or REDIS_HOST etc) is not set`);
    }
    if (!env.PORT && env.WEB_SERVER) {
      errors.push(`PORT is not set and the web server is enabled`);
    }

    if (errors.length > 0) {
      throw new Error(
        `Grouparoo configuration error: ${errors.join(
          ", "
        )}.  Please ensure that all the required environment variables are set in your .env file or environment.  Learn more at https://www.grouparoo.com/docs/support/environment`
      );
    }

    // The file was already load by config/environment, but we log the message here once the logger is configured
    if (process.env.GROUPAROO_ENV_CONFIG_FILE) {
      log(
        `Modified your runtime environment with ${process.env.GROUPAROO_ENV_CONFIG_FILE}`,
        "notice"
      );
    }

    // Special considerations for SQLite
    if (config.sequelize.dialect === "sqlite") {
      if (
        env.NODE_ENV === "production" &&
        ["cli:run", "cli:start", "cli:apply"].includes(env.GROUPAROO_RUN_MODE)
      ) {
        throw new Error(
          "SQLite is intended for development purposes only. When running in production, please use a Postgres database as your DATABASE_URL."
        );
      }

      log(`Using SQLite database: ${config.sequelize.storage}`);

      if (
        config.tasks.maxTaskProcessors > 1 ||
        parseInt(process.env.WORKERS || "0") > 1
      ) {
        log(
          "Only one task worker should be used with a SQLite database",
          "warning"
        );
      }
    }
  }
}
