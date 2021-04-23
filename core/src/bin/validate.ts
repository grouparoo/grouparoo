import { GrouparooCLI } from "../modules/cli";
import { CLI, api } from "actionhero";
import { ConfigurationObject } from "../classes/codeConfig";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
} from "../modules/configLoaders";
import pluralize from "pluralize";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "validate";
    this.description = "Validate your code config";
    this.inputs = {
      local: {
        description:
          "Disable external validation. You can optionally pass object IDs to only disable external validation for those specific config objects.",
        letter: "l",
        variadic: true,
        placeholder: "object ids",
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
      return GrouparooCLI.logger.fatal(
        `Error loading config from ${configDir}: \r\n\r\n${error.stack}`
      );
    }

    GrouparooCLI.logger.log(
      `Validating ${configObjects.length} ${pluralize(
        "object",
        configObjects.length
      )}...`
    );

    const canExternallyValidate = params.local !== true;
    const locallyValidateIds =
      Array.isArray(params.local) && (new Set(params.local) as Set<string>);

    try {
      await api.sequelize.transaction(async () => {
        const { errors } = await processConfigObjects(
          configObjects,
          canExternallyValidate,
          locallyValidateIds,
          true
        );
        if (errors.length > 0) {
          GrouparooCLI.logger.log("");
          GrouparooCLI.logger.fatal(
            `Validation failed - ${errors.length} validation ${pluralize(
              "errors",
              errors.length
            )}`
          );
        } else {
          GrouparooCLI.logger.log("");
          GrouparooCLI.logger.log(
            `✅ Validation succeeded - ${
              configObjects.length
            } config ${pluralize("object", configObjects.length)} OK!`
          );
        }

        throw new Error("validate-rollback");
      });
    } catch (error) {
      if (error.message !== "validate-rollback") {
        GrouparooCLI.logger.fatal(`Validation failed - ${error.message}`);
      }
    }

    return true;
  }
}
