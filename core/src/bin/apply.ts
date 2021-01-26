import { GrouparooCLI } from "../modules/cli";
import { CLI, log } from "actionhero";
import { CLS } from "../modules/cls";
import { sortConfigurationObject } from "../classes/codeConfig";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
} from "../modules/configLoaders";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "apply";
    this.description = "Apply changes from code config";
    this.inputs = {
      local: {
        default: false,
        description: "Disable external validation",
        letter: "l",
        flag: true,
      },
    };

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run({ params }) {
    GrouparooCLI.logCLI(this.name);

    const configDir = getConfigDir();
    const loadResponse = await loadConfigObjects(configDir);
    const configObjects = sortConfigurationObject(loadResponse.configObjects);

    log(`applying ${configObjects.length} objects...`);

    await CLS.wrap(async () => {
      const { errors } = await processConfigObjects(
        configObjects,
        !params.local
      );

      if (errors.length > 0) throw errors;

      log(
        `✅ Config applied - ${configObjects.length} config objects up-to-date!`
      );
    }, true);

    return true;
  }
}
