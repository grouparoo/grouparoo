import { Action } from "actionhero";
import { pluginVersions } from "../modules/pluginVersions";

export class PluginsList extends Action {
  constructor() {
    super();
    this.name = "plugins:list";
    this.description =
      "I will return information about the active plugins on this server";
    this.outputExample = {};
  }

  async run() {
    return { plugins: await pluginVersions() };
  }
}
