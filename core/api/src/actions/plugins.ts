import { Action } from "actionhero";
import PluginDetails from "./../utils/pluginDetails";
const pluginManifest = PluginDetails.getPluginManifest();

export class PluginsList extends Action {
  constructor() {
    super();
    this.name = "plugins:list";
    this.description =
      "I will return information about the active plugins on this server";
    this.outputExample = {};
  }

  async run() {
    return {
      plugins: pluginManifest.plugins.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      }),
    };
  }
}
