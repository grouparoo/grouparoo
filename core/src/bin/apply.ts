import { GrouparooCLI } from "../modules/cli";
import { CLI, api, log } from "actionhero";
import { CLS } from "../modules/cls";
import { sortConfigurationObject } from "../classes/codeConfig";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
  logFatalError,
} from "../modules/configLoaders";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "apply";
    this.description = "Apply changes from code config";
    this.inputs = {
      "externally-validate": {
        required: false,
        description:
          "Should we validate the config by connecting to sources and destinations?",
      },
    };

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run({ params }) {
    GrouparooCLI.logCLI(this);

    const configDir = getConfigDir();
    const loadResponse = await loadConfigObjects(configDir);
    const configObjects = sortConfigurationObject(loadResponse.configObjects);

    log(`applying ${configObjects.length} objects...`);

    await CLS.wrap(async () =>
      processConfigObjects(configObjects, !!params.externallyValidate)
    );

    log(
      `✅ Config applied - ${configObjects.length} config objects up-to-date!`
    );

    return true;
  }
}
