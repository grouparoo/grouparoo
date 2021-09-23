import { GrouparooCLI } from "../modules/cli";
import { CLI, config, log, api } from "actionhero";
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
import { ModelOps } from "../modules/ops/model";

export class Apply extends CLI {
  constructor() {
    super();
    this.name = "apply";
    this.description = "Apply changes from code config";
    this.inputs = {
      local: {
        description:
          "Disable external validation. You can optionally pass object IDs to only disable external validation for those specific config objects and their dependents.",
        letter: "l",
        variadic: true,
        placeholder: "object ids",
      },
    };

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({ params }) {
    GrouparooCLI.logCLI(this.name);

    const configDir = await getConfigDir(true);
    const configObjects = await loadConfigObjects(configDir);

    await CLS.wrap(
      async () => {
        await Migrations.migrate(
          config.sequelize,
          api.sequelize,
          log,
          config.sequelize.migrationLogLevel
        );

        await SettingOps.prepare();
        await ModelOps.prepare();

        GrouparooCLI.logger.log(
          `Applying ${configObjects.length} ${pluralize(
            "object",
            configObjects.length
          )}...`
        );

        // start the config apply process
        const canExternallyValidate = params.local !== true;
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

    return true;
  }
}
