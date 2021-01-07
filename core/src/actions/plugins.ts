import { CLSAction } from "../classes/actions/clsAction";
import { pluginVersions } from "../modules/pluginVersions";

export class PluginsList extends CLSAction {
  constructor() {
    super();
    this.name = "plugins:list";
    this.description =
      "I will return information about the active plugins on this server";
    this.outputExample = {};
  }

  async runWithinTransaction() {
    const plugins = await pluginVersions();
    return { plugins };
  }
}
