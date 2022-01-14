const cli = require("@grouparoo/core/dist/modules/cli");
const { CLI, log, rebuildConfig } = require("actionhero");
const open = require("open");

class Config extends CLI {
  constructor() {
    super();
    this.name = "config";
    this.description = "Interactively configure Grouparoo";
    this.inputs = {};
    cli.GrouparooCLI.timestampOption(this);
  }

  preInitialize() {
    cli.GrouparooCLI.setGrouparooRunMode(this);
    cli.GrouparooCLI.setNextDevelopmentMode();
    // use temporary databases
    process.env.DATABASE_URL =
      process.env.CONFIG_DATABASE_URL || "sqlite://memory";
    process.env.REDIS_URL = "redis://mock";
    // turn off workers
    process.env.WORKERS = "0";
    // turn on web server
    process.env.WEB_SERVER = "true";
    if (!process.env.PORT) process.env.PORT = "3000";
  }

  preRun = async () => rebuildConfig();

  async run() {
    cli.GrouparooCLI.logCLI(this.name, false);
    const { main } = require("@grouparoo/core/dist/grouparoo");
    await main(); // run the server
    try {
      log("Opening Grouparoo Config in web browser", "info");
      await open(`http://localhost:${process.env.PORT}`);
    } catch (err) {
      log(err.message, "error");
    }
    return false;
  }
}

exports.Config = Config;
