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
  pluginManifestUrl:
    process.env.GROUPAROO_PLUGIN_MANIFEST_URL ||
    "https://www.grouparoo.com/plugins/v1/manifest.json",
};
