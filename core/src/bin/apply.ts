import { GrouparooCLI } from "../modules/cli";
import { CLI, config, log, api, ParamsFrom } from "actionhero";
import { CLS } from "../modules/cls";
import {
  loadConfigObjects,
  processConfigObjects,
  deleteLockedObjects,
} from "../modules/configLoaders";
import { getConfigDir } from "../modules/pluginDetails";
import pluralize from "pluralize";
import { Migrations } from "ah-sequelize-plugin/dist/modules/migrations";
import { SettingOps } from "../modules/ops/setting";

export class Apply extends CLI {
  name = "apply";
  description = "Apply changes from code config";
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

  async run({ params }: { params: Partial<ParamsFrom<Apply>> }) {
    GrouparooCLI.logCLI(this.name);

    const configDir = await getConfigDir(true);
    const { configObjects, errors } = await loadConfigObjects(configDir);
    if (errors.length > 0) throw new Error(errors.join("; "));

    const response = await CLS.wrap(
      async () => {
        await Migrations.migrate(
          config.sequelize,
          api.sequelize,
          log,
          config.sequelize.migrationLogLevel
        );

        await SettingOps.prepare();

        GrouparooCLI.logger.log(
          `Applying ${configObjects.length} ${pluralize(
            "object",
            configObjects.length
          )}...`
        );

        // start the config apply process
        const canExternallyValidate = params?.local?.toString() !== "true";
        const locallyValidateIds =
          Array.isArray(params.local) && (new Set(params.local) as Set<string>);

        const { errors, seenIds } = await processConfigObjects(
          configObjects,
          canExternallyValidate,
          locallyValidateIds
        );

        if (errors.length > 0) throw errors;

        await deleteLockedObjects(seenIds);

        GrouparooCLI.logger.log("");
        GrouparooCLI.logger.log(
          `✅ Config applied - ${configObjects.length} config ${pluralize(
            "object",
            configObjects.length
          )} up-to-date!`
        );
      },
      { catchError: true }
    );

    if (response instanceof Error) {
      log(response.message ?? String(response), "error");
    }

    return true;
  }
}
