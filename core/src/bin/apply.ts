import { GrouparooCLI } from "../modules/cli";
import { CLI } from "actionhero";
import { CLS } from "../modules/cls";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
  deleteLockedObjects,
} from "../modules/configLoaders";

export class Apply extends CLI {
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

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async run({ params }) {
    GrouparooCLI.logCLI(this.name);

    const configDir = getConfigDir();
    const configObjects = await loadConfigObjects(configDir);

    console.log(`Applying ${configObjects.length} objects...`);

    await CLS.wrap(async () => {
      const { errors, seenIds } = await processConfigObjects(
        configObjects,
        !params.local
      );

      if (errors.length > 0) throw errors;

      await deleteLockedObjects(seenIds);

      console.log(
        `✅ Config applied - ${configObjects.length} config objects up-to-date!`
      );
    }, true);

    return true;
  }
}
