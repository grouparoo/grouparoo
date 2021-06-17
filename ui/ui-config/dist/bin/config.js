const cli = require("@grouparoo/core/dist/modules/cli");
const actionhero = require("actionhero");
const { log } = require("actionhero");
const open = require("open");

class Apply extends actionhero.CLI {
  constructor() {
    super();
    this.preInitialize = () => {
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
    };
    this.name = "config";
    this.description = "Interactively configure Grouparoo";
    this.inputs = {};
    cli.GrouparooCLI.timestampOption(this);
  }

  async run({ params }) {
    cli.GrouparooCLI.logCLI(this.name, false);
    const { main } = require("@grouparoo/core/dist/grouparoo");
    await main(); // run the server
    try {
      log("Opening Grouparoo Config in web browser", "info");
      open(`http://localhost:${process.env.PORT}`);
    } catch (err) {
      log(err.message, "error");
    }
    return false;
  }
}

exports.Apply = Apply;
