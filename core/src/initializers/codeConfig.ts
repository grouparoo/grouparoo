import { api } from "actionhero";
import { getConfigDir, loadConfigDirectory } from "../modules/configLoaders";
import { CLSInitializer } from "../classes/initializers/clsInitializer";

import { ConfigWriter } from "../modules/configWriter";

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

  // async start() {
  //   if (process.env.GROUPAROO_RUN_MODE === "cli:config") {
  //     await ConfigWriter.run();
  //   }
  //   process.exit(1);
  // }

  async startWithinTransaction() {
    const configDir = getConfigDir();
    const { errors } = await loadConfigDirectory(configDir);

    if (process.env.GROUPAROO_RUN_MODE === "cli:config") {
      // boot if there are problems with code config
      // don't prevent lockedModelChanges
    } else {
      if (errors.length > 0) throw new Error("code config error");
      api.codeConfig.allowLockedModelChanges = false; // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    }
  }

  async stopWithinTransaction() {}
}
