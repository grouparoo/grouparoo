import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";

export class Start extends CLI {
  name = "start";
  description =
    "Run the Grouparoo server.  Use GROUPAROO_LOG_LEVEL env to set log level.";

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run() {
    GrouparooCLI.logCLI(this.name, false);

    const { main } = await import("../grouparoo");
    await main();

    return false;
  }
}
