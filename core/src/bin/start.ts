import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";

export class Start extends CLI {
  constructor() {
    super();
    this.name = "start";
    this.description =
      "Run the Grouparoo server.  Use GROUPAROO_LOG_LEVEL env to set log level.";

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run() {
    GrouparooCLI.logCLI(this, false);

    await import("../grouparoo"); // run the server
    return false;
  }
}
