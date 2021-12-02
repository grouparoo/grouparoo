import { api } from "actionhero";
import { loadConfigDirectory } from "../modules/configLoaders";
import { getConfigDir } from "../modules/pluginDetails";
import { CLSInitializer } from "../classes/initializers/clsInitializer";

declare module "actionhero" {
  export interface Api {
    codeConfig: {
      allowLockedModelChanges: boolean;
    };
  }
}

export class CodeConfig extends CLSInitializer {
  constructor() {
    super();
    this.name = "codeConfig";
    this.loadPriority = 10000;
    this.startPriority = 10;
  }

  async initializeWithinTransaction() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };
  }

  async startWithinTransaction() {
    const configDir = await getConfigDir(
      process.env.GROUPAROO_RUN_MODE === "cli:config"
    );

    const { errors } = await loadConfigDirectory(configDir);

    if (errors.length > 0) {
      throw new Error("code config error: " + errors.join("; "));
    }

    api.codeConfig.allowLockedModelChanges = false; // after this point in the Actionhero boot lifecycle, locked models cannot be changed
  }

  async stopWithinTransaction() {}
}
