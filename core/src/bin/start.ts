import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";

export class Start extends CLI {
  constructor() {
    super();
    this.name = "start";
    this.description =
      "Run the Grouparoo server.  Use GROUPAROO_LOG_LEVEL env to set log level.";

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async run() {
    GrouparooCLI.logCLI(this.name, false);

    const { main } = await import("../grouparoo");
    await main();

    return false;
  }
}
