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

export class PluginInstall extends CLSAction {
  constructor() {
    super();
    this.name = "plugin:install";
    this.description = "I install a Grouparoo plugin";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      plugin: { required: true },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({ params }) {
    const response = await Plugins.install(params.plugin);
    return { success: response };
  }
}

export class PluginUninstall extends CLSAction {
  constructor() {
    super();
    this.name = "plugin:uninstall";
    this.description = "I uninstall a Grouparoo plugin";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      plugin: { required: true },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({ params }) {
    const response = await Plugins.uninstall(params.plugin);
    return { success: response };
  }
}
