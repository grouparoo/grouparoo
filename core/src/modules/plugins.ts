import { config, api } from "actionhero";
import path from "path";
import pacote from "pacote";
import { log } from "actionhero";
import semver from "semver";
import { spawnPromise } from "./spawnPromise";
import {
  getParentPath,
  getCoreVersion,
  getPluginManifest,
} from "../modules/pluginDetails";
import "isomorphic-fetch";
import { PluginApp } from "../classes/plugin";

export namespace Plugins {
  export interface PluginWithVersion {
    name: string;
    description: string;
    icon: string;
    currentVersion: string;
    latestVersion: string;
    upToDate: boolean;
    license: string;
    url: string;
    installed: boolean;
    source: boolean;
    destination: boolean;
    apps: PluginApp[];
  }

  export type GrouparooManifestPackage = {
    name: string;
    description: string;
    imageUrl: string;
    packageName: string;
    source: boolean;
    destination: boolean;
    npmUrl?: string;
    docsUrl?: string;
  };

  export async function listPlugins(
    includeInstalled = true,
    includeAvailable = true,
    includeVersions = true
  ) {
    const plugins: PluginWithVersion[] = [];
    const pluginManifest = getPluginManifest();
    const coreVersion = getCoreVersion();
    const installedPlugins = includeInstalled
      ? [
          {
            name: "@grouparoo/core",
            version: coreVersion,
            license: "MPL-2.0",
            url: "https://github.com/grouparoo/grouparoo",
          },
        ].concat(pluginManifest.plugins)
      : [];
    const availableGrouparooPlugins = includeAvailable
      ? await getAvailableGrouparooPlugins()
      : [];

    await Promise.all(
      installedPlugins.map(async (plugin) => {
        const latestVersion = includeVersions
          ? await getLatestNPMVersion(plugin.name)
          : "unknown";
        const loadedPlugin = api.plugins.plugins.find(
          (p) => p.name === plugin.name
        );

        plugins.push({
          name: plugin.name,
          description: plugin.name,
          icon: loadedPlugin?.icon,
          currentVersion: plugin.version,
          latestVersion,
          upToDate:
            latestVersion === "unknown"
              ? true
              : semver.compare(plugin.version, latestVersion) >= 0,
          url: plugin.url,
          license: plugin.license,
          installed: true,
          source: loadedPlugin?.connections?.find(
            (c) => c.direction === "import"
          )
            ? true
            : false,
          destination: loadedPlugin?.connections?.find(
            (c) => c.direction === "export"
          )
            ? true
            : false,
          apps: loadedPlugin?.apps,
        });
      })
    );

    await Promise.all(
      availableGrouparooPlugins.map(async (plugin) => {
        if (!plugins.find((p) => p.name === plugin.packageName)) {
          const latestVersion = includeVersions
            ? await getLatestNPMVersion(plugin.name)
            : "unknown";
          plugins.push({
            name: plugin.packageName,
            description: plugin.description,
            icon: plugin.imageUrl,
            currentVersion: undefined,
            latestVersion,
            upToDate: false,
            url: plugin.npmUrl,
            license: undefined,
            installed: false,
            source: plugin.source,
            destination: plugin.destination,
            apps: [],
          });
        }
      })
    );

    return plugins;
  }

  export async function getAvailableGrouparooPlugins() {
    const pluginManifestUrl = config.pluginManifestUrl;
    try {
      const pluginManifest: GrouparooManifestPackage[] = await fetch(
        pluginManifestUrl
      ).then((r) => r.json());
      return pluginManifest;
    } catch (error) {
      log(error.toString(), "info");
      return [];
    }
  }

  export async function install(pluginName: string) {
    return spawnPromise(getCli(), ["install", pluginName]);
  }

  export async function uninstall(pluginName: string) {
    return spawnPromise(getCli(), ["uninstall", pluginName]);
  }

  async function getLatestNPMVersion(pluginName: string, tag = "latest") {
    let latestVersion = "unknown";

    try {
      const manifest = await pacote.manifest(`${pluginName}@${tag}`);
      latestVersion = manifest.version;
    } catch (error) {
      log(error.toString(), "info");
    }

    return latestVersion;
  }

  function getCli() {
    return path.join(getParentPath(), "node_modules", ".bin", "grouparoo");
  }
}
