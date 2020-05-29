import path from "path";
import { getPluginManifest } from "../utils/pluginDetails";
import InjectedPlugins from "./pluginInjection";

// let npm handle the path detection for us!
const localNodeModulesPath = path.join(
  path.dirname(require.resolve("react/package.json")),
  ".."
);

const pluginManifest = getPluginManifest();
const parentPlugins = {};
pluginManifest.plugins.map((p) => {
  parentPlugins[p.name] = { path: p.path };
});

// ensure that the ENV variables for the plugins are set
pluginManifest.plugins.forEach((plugin) => {
  if (plugin?.grouparoo?.env?.api) {
    plugin.grouparoo.env.api.forEach((e) => {
      if (!process.env[e]) {
        console.error(
          `\r\n!!! plugin ${plugin.name} requires environment variable ${e} to be set !!!\r\n`
        );
      }
    });
  }
  if (plugin?.grouparoo?.env?.web) {
    plugin.grouparoo.env.web.forEach((e) => {
      if (!process.env[e]) {
        console.error(
          `\r\n!!! plugin ${plugin.name} requires environment variable ${e} to be set !!!\r\n`
        );
      }
    });
  }
});

export const DEFAULT = {
  plugins: () => {
    return Object.assign(
      {
        "ah-sequelize-plugin": {
          path: path.join(localNodeModulesPath, "ah-sequelize-plugin"),
        },
        "ah-next-plugin": {
          path: path.join(localNodeModulesPath, "ah-next-plugin"),
        },
      },
      parentPlugins,
      InjectedPlugins
    );
  },
};
