import { Initializer, api, env } from "actionhero";
import { plugin } from "../modules/plugin";

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "plugins";
    this.loadPriority = 999;
  }

  async initialize() {
    api.plugins = {
      plugins: [],
      settings: {},
    };

    // --- Add the core plugin --- //

    plugin.registerPlugin({
      name: "@grouparoo/core",
      apps: [
        {
          name: "manual",
          options: [],
          test: async () => {
            return true;
          },
        },
      ],
      connections: [
        {
          name: "manual",
          direction: "import",
          app: "manual",
          description: "manually update the properties of a profile",
          options: [],
        },
      ],
    });
  }
}
