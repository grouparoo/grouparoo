import { GrouparooCLI } from "../modules/cli";
import { CLI, api, log } from "actionhero";
import { ConfigurationObject } from "../classes/codeConfig";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
} from "../modules/configLoaders";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "validate";
    this.description = "Validate your code config";
    this.inputs = {
      local: {
        default: false,
        description: "Disable external validation",
        letter: "l",
        flag: true,
      },
    };

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async run({ params }) {
    GrouparooCLI.logCLI(this.name);

    const configDir = getConfigDir();
    let configObjects: ConfigurationObject[];

    // Can we read the config directory?  Is the JSON/JS valid?
    try {
      configObjects = await loadConfigObjects(configDir);
    } catch (error) {
      return GrouparooCLI.fatalError(
        `Error loading config from ${configDir}: \r\n\r\n${error.stack}`
      );
    }

    log(`Validating ${configObjects.length} objects...`);

    try {
      await api.sequelize.transaction(async () => {
        const { errors } = await processConfigObjects(
          configObjects,
          !params.local,
          true
        );
        if (errors.length > 0) {
          GrouparooCLI.fatalError(
            `Validation failed - ${errors.length} validation error${
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
