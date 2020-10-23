import path from "path";
import { getPluginManifest } from "../utils/pluginDetails";
import InjectedPlugins from "./pluginInjection";

function getPluginPath(pluginName: string) {
  return path.join(
    path.dirname(require.resolve(`${pluginName}/package.json`)),
    "..",
    pluginName
  );
}

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
    const plugins = Object.assign(
      {
        "ah-sequelize-plugin": {
          path: getPluginPath("ah-sequelize-plugin"),
        },
        "ah-next-plugin": {
          path: getPluginPath("ah-next-plugin"),
        },
      },
      parentPlugins,
      InjectedPlugins
    );

    return plugins;
  },
};
