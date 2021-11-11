import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { Plugins } from "../modules/plugins";
import { api } from "actionhero";
import path from "path";
import fs from "fs";
import { APIData } from "../modules/apiData";

const restartSleepTime = 100;

export class PluginsInstalledList extends OptionallyAuthenticatedAction {
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

export class PluginsAvailableList extends OptionallyAuthenticatedAction {
  constructor() {
    super();
    this.name = "plugins:available:list";
    this.description =
      "I will return a list of the available grouparoo plugins";
    this.permission = { topic: "system", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction() {
    let availablePlugins = await Plugins.availableGrouparooPlugins();
    const installedPlugins = await Plugins.installedPluginVersions();
    const installedPluginNames = installedPlugins.map((plugin) => plugin.name);
    const availablePluginsWithInstallStatus: Array<
      Plugins.GrouparooManifestPackage & {
        installed?: boolean;
      }
    > = availablePlugins.map((plugin) => {
      return {
        ...plugin,
        installed: installedPluginNames.includes(plugin.packageName),
      };
    });
    return { plugins: availablePluginsWithInstallStatus };
  }
}

export class PluginInstall extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "plugin:install";
    this.description = "I install a Grouparoo plugin";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      plugin: { required: true },
      restart: {
        required: false,
        default: false,
        formatter: APIData.ensureBoolean,
      },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({
    params,
  }: {
    params: { plugin: string; restart: boolean };
  }): Promise<{ success: boolean; checkIn?: number }> {
    const response = await Plugins.install(params.plugin);

    if (!response.success) return { success: false };
    // Return if did not ask to restart
    if (!params.restart) return { success: response.success };
    // Otherwise, return, then restart the server.
    setTimeout(() => safelyRestart(), restartSleepTime);
    return { success: response.success, checkIn: restartSleepTime * 4 };
  }
}

export class PluginUninstall extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "plugin:uninstall";
    this.description = "I uninstall a Grouparoo plugin";
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      plugin: { required: true },
      restart: {
        required: false,
        default: false,
        formatter: APIData.ensureBoolean,
      },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({
    params,
  }: {
    params: { plugin: string; restart: boolean };
  }) {
    const response = await Plugins.uninstall(params.plugin);

    if (!response.success) return { success: false };
    // Return if did not ask to restart
    if (!params.restart) return { success: response.success };
    // Otherwise, return, then restart the server.
    setTimeout(() => safelyRestart(), restartSleepTime);
    return { success: response.success, checkIn: restartSleepTime * 4 };
  }
}

async function safelyRestart() {
  try {
    clearPluginConfigCache();
    await api.process.restart();
  } catch (error) {
    console.log("");
    console.log("*** There was a problem restarting Grouparoo ***");
    console.log(error.message ?? error);
    console.log("");
    console.log("Please restart the application");
    process.exit(1);
  }
}

function clearPluginConfigCache() {
  const files = ["plugins.js"];

  files.forEach((file) => {
    const fullPath = path.join(__dirname, "..", "config", file);
    if (fs.existsSync(fullPath)) {
      delete require.cache[require.resolve(fullPath)];
    }
  });
}
