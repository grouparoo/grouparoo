import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";
import { CLS } from "../modules/cls";
import {
  loadConfigObjects,
  processConfigObjects,
  deleteLockedObjects,
} from "../modules/configLoaders";
import { getConfigDir } from "../utils/pluginDetails";
import pluralize from "pluralize";

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

    const configDir = getConfigDir();
    const configObjects = await loadConfigObjects(configDir);

    GrouparooCLI.logger.log(
      `Applying ${configObjects.length} ${pluralize(
        "object",
        configObjects.length
      )}...`
    );

    await CLS.wrap(
      async () => {
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
