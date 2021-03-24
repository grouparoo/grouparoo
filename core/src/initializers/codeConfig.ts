import { api } from "actionhero";
import { getConfigDir, loadConfigDirectory } from "../modules/configLoaders";
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
    this.startPriority = 1;
  }

  async initializeWithinTransaction() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };
  }

  async startWithinTransaction() {
    const configDir = getConfigDir();
    const { errors } = await loadConfigDirectory(configDir);
    if (errors.length > 0) throw new Error("code config error");

    // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    api.codeConfig.allowLockedModelChanges = false;
  }

  async stopWithinTransaction() {}
}
