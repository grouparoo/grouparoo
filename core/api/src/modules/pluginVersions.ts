import PluginDetails from "./../utils/pluginDetails";
import pacote from "pacote";
import { log } from "actionhero";

const pluginManifest = PluginDetails.getPluginManifest();
const coreVersion = PluginDetails.getCoreVersion();

interface PluginWithVersion {
  name: string;
  version: string;
  license: string;
  url: string;
}

export async function pluginVersions() {
  const plugins: Array<PluginWithVersion> = [
    {
      name: "@grouparoo/core",
      version: coreVersion,
      license: "MPL-2.0",
      url: "https://github.com/grouparoo/grouparoo",
    },
  ].concat(pluginManifest.plugins);

  const pluginResponse: {
    name: string;
    version: string;
    license: string;
    url: string;
    latestVersion: string;
  }[] = await Promise.all(
    plugins.map(async (plugin) => {
      let latestVersion = "unknown";
      try {
        const manifest = await getLatestNPMVersion(plugin);
        latestVersion = manifest.version;
      } catch (error) {
        log(error, "error");
      }

      return {
        name: plugin.name,
        version: plugin.version,
        license: plugin.license,
        url: plugin.url,
        latestVersion,
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
