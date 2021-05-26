import { config } from "actionhero";
import PluginDetails from "../utils/pluginDetails";
import pacote from "pacote";
import { log } from "actionhero";
import compareVersions from "compare-versions";
import { spawnPromise } from "./spawnPromise";
import "isomorphic-fetch";

export namespace Plugins {
  export interface PluginWithVersions {
    name: string;
    currentVersion: string;
    latestVersion: string;
    upToDate: boolean;
    license: string;
    url: string;
  }

  export interface PluginWithVersion {
    name: string;
    version: string;
    license: string;
    url: string;
  }

  export interface NPMPackage {
    name: string;
    scope: string;
    version: string;
    description: string;
    date: string;
    links: {
      npm: string;
      homepage: string;
      repository: string;
      bugs: string;
    };
  }

  export async function installedPluginVersions() {
    const pluginManifest = PluginDetails.getPluginManifest();
    const coreVersion = PluginDetails.getCoreVersion();

    const plugins: PluginWithVersion[] = [
      {
        name: "@grouparoo/core",
        version: coreVersion,
        license: "MPL-2.0",
        url: "https://github.com/grouparoo/grouparoo",
      },
    ].concat(pluginManifest.plugins);

    const pluginResponse: PluginWithVersions[] = await Promise.all(
      plugins.map(async (plugin) => {
        let latestVersion = "unknown";

        try {
          const manifest = await getLatestNPMVersion(plugin);
          latestVersion = manifest.version;
        } catch (error) {
          log(error.toString(), "info");
        }

        return {
          name: plugin.name,
          currentVersion: plugin.version,
          license: plugin.license,
          url: plugin.url,
          latestVersion,
          upToDate:
            latestVersion === "unknown"
              ? true
              : compareVersions(plugin.version, latestVersion) >= 0,
        };
      })
    );

    return pluginResponse;
  }

  export async function availableGrouparooPlugins() {
    const pluginManifestUrl = config.pluginManifestUrl;
    const pluginManifest = await fetch(pluginManifestUrl).then((r) => r.json());
    return pluginManifest;
  }

  export async function install(pluginName: string) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "install",
      pluginName,
    ]);
  }

  export async function uninstall(pluginName: string) {
    return spawnPromise("./node_modules/.bin/grouparoo", [
      "uninstall",
      pluginName,
    ]);
  }

  async function getLatestNPMVersion(
    plugin: PluginWithVersion,
    tag = "latest"
  ) {
    return pacote.manifest(`${plugin.name}@${tag}`);
  }
}
