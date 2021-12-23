import { GrouparooCLI } from "../modules/cli";
import { CLI, api, ParamsFrom } from "actionhero";
import { AnyConfigurationObject } from "../classes/codeConfig";
import {
  loadConfigObjects,
  processConfigObjects,
} from "../modules/configLoaders";
import { getConfigDir } from "../modules/pluginDetails";
import pluralize from "pluralize";
import { SettingOps } from "../modules/ops/setting";

export class Validate extends CLI {
  name = "validate";
  description = "Validate your code config";
  inputs = {
    local: {
      description:
        "Disable external validation. You can optionally pass object IDs to only disable external validation for those specific config objects and their dependents.",
      letter: "l",
      variadic: true,
      placeholder: "object ids",
    },
  };

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({ params }: { params: ParamsFrom<Validate> }) {
    GrouparooCLI.logCLI(this.name);

    await SettingOps.prepare();

    const configDir = await getConfigDir(true);
    let configObjects: AnyConfigurationObject[];

    // Can we read the config directory?  Is the JSON/JS valid?
    try {
      const loadResponse = await loadConfigObjects(configDir);
      if (loadResponse.errors.length > 0) {
        throw new Error(loadResponse.errors.join("; "));
      }
      configObjects = loadResponse.configObjects;
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

    const canExternallyValidate = params.local.toString() !== "true";
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
          return GrouparooCLI.logger.fatal(
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
        return GrouparooCLI.logger.fatal(
          `Validation failed - ${error.message}`
        );
      }
    }

    return true;
  }
}
