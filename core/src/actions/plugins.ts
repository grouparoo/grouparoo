import { CLSAction } from "../classes/actions/clsAction";
import { Plugins } from "../modules/plugins";

export class PluginsInstalledList extends CLSAction {
  constructor() {
    super();
    this.name = "plugins:installed:list";
    this.description =
      "I will return information about the active plugins on this server";
    this.permission = { topic: "system", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction() {
    const plugins = await Plugins.installedPluginVersions();
    return { plugins };
  }
}

export class PluginsAvailableList extends CLSAction {
  constructor() {
    super();
    this.name = "plugins:available:list";
    this.description =
      "I will return a list of the available grouparoo plugins";
    this.permission = { topic: "system", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction() {
    const plugins = await Plugins.availableGrouparooPlugins();
    return { plugins };
  }
}
