import { env } from "actionhero";
import { getPluginManifest } from "../utils/pluginDetails";

// learn more about the next.js app options here https://nextjs.org/docs/advanced-features/custom-server

export const DEFAULT = {
  next: () => {
    let nextRootPath: string;
    const pluginManifest = getPluginManifest();
    const uiPlugin = pluginManifest.plugins.find(
      (p) => p.name === "@grouparoo/ui"
    );
    if (uiPlugin) nextRootPath = uiPlugin.path;

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
