import { api, Initializer } from "actionhero";
import path from "path";
import { getParentPath } from "../utils/pluginDetails";
import { loadConfigDirectory } from "../modules/configLoaders";

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
  }

  async initialize() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };

    const configDir =
      process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
    await loadConfigDirectory(configDir);

    // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    api.codeConfig.allowLockedModelChanges = false;
  }
}
