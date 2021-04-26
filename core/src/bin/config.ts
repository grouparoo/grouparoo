import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";

export class Apply extends CLI {
  constructor() {
    super();
    this.name = "config";
    this.description = "Interactively configure Grouparoo";
    this.inputs = {};

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);

    // use temporary databases
    process.env.DATABASE_URL = "sqlite://memory";
    process.env.REDIS_URL = "redis://mock";

    // turn off workers
    process.env.WORKERS = "0";

    // turn on web server
    process.env.WEB_SERVER = "true";
    if (!process.env.PORT) process.env.PORT = "3000";
  };

  async run({ params }) {
    GrouparooCLI.logCLI(this.name, false);

    await import("../grouparoo"); // run the server
    return false;
  }
}
