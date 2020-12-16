import path from "path";
import { getParentPath } from "../utils/pluginDetails";
import { loadConfigDirectory } from "../modules/configLoaders";

import { CLI, api } from "actionhero";

export class Configure extends CLI {
  constructor() {
    super();
    this.name = "configure";
    this.description = "Apply your code config to the cluster";
  }

  async run() {
    const configDir =
      process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");

    api.plugins.announcePlugins();

    await loadConfigDirectory(configDir);

    return true;
  }
}
