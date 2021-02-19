import { api, Initializer } from "actionhero";
import { getConfigDir, loadConfigDirectory } from "../modules/configLoaders";
import { CLS } from "../modules/cls";

declare module "actionhero" {
  export interface Api {
    codeConfig: {
      allowLockedModelChanges: boolean;
    };
  }
}

export class CodeConfig extends Initializer {
  constructor() {
    super();
    this.name = "codeConfig";
    this.loadPriority = 10000;
    this.startPriority = 1;
  }

  async initialize() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };
  }

  async start() {
    const configDir = getConfigDir();
    await CLS.wrap(async () => {
      const { errors } = await loadConfigDirectory(configDir);
      if (errors.length > 0) throw new Error("code config error");
    });

    // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    api.codeConfig.allowLockedModelChanges = false;
  }
}
