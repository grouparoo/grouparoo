import PluginDetails from "./../utils/pluginDetails";
import pacote from "pacote"; // "pacote" means "package" in Spanish!
import { log } from "actionhero";
import compareVersions from "compare-versions";

const pluginManifest = PluginDetails.getPluginManifest();
const coreVersion = PluginDetails.getCoreVersion();

export interface PluginWithVersions {
  name: string;
  currentVersion: string;
  latestVersion: string;
  upToDate: boolean;
  license: string;
  url: string;
}

interface PluginWithVersion {
  name: string;
  version: string;
  license: string;
  url: string;
}

export async function pluginVersions() {
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

async function getLatestNPMVersion(plugin: PluginWithVersion, tag = "latest") {
  // there's a lot more that is returned, like dependencies, dist, shas, etc.. but we don't need it
  const manifest: { name: string; version: string } = await pacote.manifest(
    `${plugin.name}@${tag}`
  );

  return manifest;
}
