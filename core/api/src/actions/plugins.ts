import { Action, log } from "actionhero";
import PluginDetails from "./../utils/pluginDetails";
import pacote from "pacote";

const pluginManifest = PluginDetails.getPluginManifest();
const coreVersion = PluginDetails.getCoreVersion();

interface Plugin {
  name: string;
  version: string;
  license: string;
  url: string;
}

export class PluginsList extends Action {
  constructor() {
    super();
    this.name = "plugins:list";
    this.description =
      "I will return information about the active plugins on this server";
    this.outputExample = {};
  }

  async getLatestNPMVersion(plugin: Plugin, tag = "latest") {
    // there's a lot more that is returned, like dependencies, dist, shas, etc.. but we don't need it
    const manifest: { name: string; version: string } = await pacote.manifest(
      `${plugin.name}@${tag}`
    );
    return manifest;
  }

  async run() {
    const plugins: Array<Plugin> = [
      {
        name: "@grouparoo/core",
        version: coreVersion,
        license: "MPL-2.0",
        url: "https://www.grouparoo.com",
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
          const manifest = await this.getLatestNPMVersion(plugin);
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

    return { plugins: pluginResponse };
  }
}
