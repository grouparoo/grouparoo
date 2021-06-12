import { env } from "actionhero";
import { getPluginManifest } from "../utils/pluginDetails";
import InjectedPlugins from "./pluginInjection";

// learn more about the next.js app options here https://nextjs.org/docs/advanced-features/custom-server

export const DEFAULT = {
  next: () => {
    const nextRootPath = getNextRootPath();

    return {
      enabled:
        process.env.NEXT_DISABLED === "true" || !nextRootPath ? false : true,
      dev: process.env.NEXT_DEVELOPMENT_MODE
        ? process.env.NEXT_DEVELOPMENT_MODE === "false"
          ? false
          : true
        : env === "development",
      quiet: false,
      path: nextRootPath,
    };
  },
};

function getNextRootPath() {
  let nextRootPath: string;

  const pluginManifest = getPluginManifest();
  const uiPlugin =
    process.env.GROUPAROO_RUN_MODE === "cli:config" &&
    pluginManifest.plugins.find((p) => p.name === "@grouparoo/ui-config")
      ? pluginManifest.plugins.find((p) => p.name === "@grouparoo/ui-config")
      : pluginManifest.plugins.find(
          (p) =>
            p.name === "@grouparoo/ui-community" ||
            p.name === "@grouparoo/ui-enterprise"
        );
  if (uiPlugin) nextRootPath = uiPlugin.path;

  if (!nextRootPath && Object.keys(InjectedPlugins).length > 0) {
    const injectedUiPlugin = Object.keys(InjectedPlugins).find((k) =>
      k.match("@grouparoo/ui")
    );
    if (injectedUiPlugin) {
      nextRootPath = InjectedPlugins[injectedUiPlugin].path;
    }
  }

  return nextRootPath;
}
