import { GrouparooCLI } from "../modules/cli";
import { CLI, api, log } from "actionhero";
import {
  ConfigurationObject,
  sortConfigurationObject,
} from "../classes/codeConfig";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
  logFatalError,
} from "../modules/configLoaders";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "config-validate";
    this.description = "Validate your code config";
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
    let configObjects: ConfigurationObject[];

    // Can we read the config directory?  Is the JSON/JS valid?
    try {
      const loadResponse = await loadConfigObjects(configDir);
      configObjects = sortConfigurationObject(loadResponse.configObjects);
    } catch (error) {
      logFatalError(
        `error loading config from ${configDir}: \r\n\r\n${error.stack}`
      );
    }

    log(`validating ${configObjects.length} objects...`);

    try {
      await api.sequelize.transaction(async () => {
        const { errors } = await processConfigObjects(
          configObjects,
          !!params.externallyValidate,
          true
        );
        if (errors.length > 0) {
          logFatalError(
            `❌ Validation failed - ${errors.length} validation error${
              errors.length !== 1 ? "s" : ""
            }`
          );
        } else {
          log(
            `✅ Validation succeeded - ${configObjects.length} config objects OK!`
          );
        }

        throw new Error("validate-rollback");
      });
    } catch (error) {
      if (error.message !== "validate-rollback") throw error;
    }

    return true;
  }
}
