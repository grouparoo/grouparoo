import path from "path";
import { getPluginManifest } from "../modules/pluginDetails";
import InjectedPlugins from "./pluginInjection";

const namespace = "plugins";
const pluginManifestNamespace = "pluginManifest";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
  export interface ActionheroConfigInterface {
    [pluginManifestNamespace]: ReturnType<
      typeof DEFAULT[typeof pluginManifestNamespace]
    >;
  }
}

function getPluginPath(pluginName: string) {
  return path.join(
    path.dirname(require.resolve(`${pluginName}/package.json`)),
    "..",
    pluginName
  );
}

const pluginManifest = getPluginManifest();
const parentPlugins: Record<string, { path: string }> = {};
pluginManifest.plugins.map((p) => {
  parentPlugins[p.name] = { path: p.path };
});
pluginManifest.missingPlugins.map((p) => {
  console.error(`*** Could not find plugin named ${p} ***`);
});

export const DEFAULT = {
  [namespace]: () => {
    const plugins = {
      "ah-sequelize-plugin": { path: getPluginPath("ah-sequelize-plugin") },
      ...parentPlugins,
      ...InjectedPlugins,
    };

    return plugins;
  },
  pluginManifest: () => {
    return {
      url:
        process.env.GROUPAROO_PLUGIN_MANIFEST_URL ||
        "https://www.grouparoo.com/plugins/v1/manifest.json",
    };
  },
};
