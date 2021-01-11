import { GrouparooCLI } from "../modules/cli";
import { CLI, log } from "actionhero";

export class Destroy extends CLI {
  constructor() {
    super();
    this.name = "destroy";
    this.description =
      "Remove imported Profiles, Groups, Imports, and Exports from your cluster.  Properties, Groups and other configuration will remain.";

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run() {
    GrouparooCLI.logCLI(this.name, false);
    await GrouparooCLI.destroyProfiles();
    await GrouparooCLI.resetHighWatermarks();
    log(`✅ Success!`);

    return true;
  }
}
