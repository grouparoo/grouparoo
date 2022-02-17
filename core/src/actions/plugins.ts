import path from "path";
import fs from "fs";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { listPlugins, install, uninstall } from "../modules/plugins";
import { api, ParamsFrom } from "actionhero";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";

const restartSleepTime = 100;

export class PluginsList extends OptionallyAuthenticatedAction {
  name = "plugins:list";
  description =
    "I will return a list of the installed and available grouparoo plugins";
  permission: ActionPermission = { topic: "system", mode: "read" };
  inputs = {
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
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<PluginsList> }) {
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
  name = "plugin:install";
  description = "I install a Grouparoo plugin";
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    plugin: { required: true },
    restart: {
      required: false,
      default: false,
      formatter: APIData.ensureBoolean,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PluginInstall>;
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
  name = "plugin:uninstall";
  description = "I uninstall a Grouparoo plugin";
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    plugin: { required: true },
    restart: {
      required: false,
      default: false,
      formatter: APIData.ensureBoolean,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<PluginUninstall>;
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
