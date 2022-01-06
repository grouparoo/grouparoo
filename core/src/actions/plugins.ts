import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { listPlugins, install, uninstall } from "../modules/plugins";
import { api } from "actionhero";
import path from "path";
import fs from "fs";
import { APIData } from "../modules/apiData";

const restartSleepTime = 100;

export class PluginsList extends OptionallyAuthenticatedAction {
  constructor() {
    super();
    this.name = "plugins:list";
    this.description =
      "I will return a list of the installed and available grouparoo plugins";
    this.permission = { topic: "system", mode: "read" };
    this.inputs = {
      includeInstalled: {
        required: false,
        formatter: APIData.ensureBoolean,
      },
      includeAvailable: {
        required: false,
        formatter: APIData.ensureBoolean,
      },
      includeVersions: {
        required: false,
        formatter: APIData.ensureBoolean,
      },
    };
    this.outputExample = {};
  }

  async runWithinTransaction({
    params,
  }: {
    params: {
      includeInstalled: boolean;
      includeAvailable: boolean;
      includeVersions: boolean;
    };
  }) {
    return {
      plugins: await listPlugins(
        params.includeInstalled,
        params.includeAvailable,
        params.includeVersions
      ),
    };
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
    const response = await install(params.plugin);

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
    const response = await uninstall(params.plugin);

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
