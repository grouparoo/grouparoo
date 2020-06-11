import { Initializer, api } from "actionhero";
import { GrouparooPlugin } from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { App } from "../models/App";

declare module "actionhero" {
  export interface Api {
    plugins: {
      plugins: Array<GrouparooPlugin>;
      persistentConnections: {
        [guid: string]: any;
      };
    };
  }
}

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "plugins";
    this.loadPriority = 999;
    this.stopPriority = 1;
  }

  async initialize() {
    api.plugins = {
      plugins: [],
      persistentConnections: {},
    };

    // --- Add the core plugin --- //

    plugin.registerPlugin({
      name: "@grouparoo/core/manual",
      icon: "/public/@grouparoo/manual/manual.png",
      apps: [
        {
          name: "manual",
          options: [],
          methods: {
            test: async () => {
              return true;
            },
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

  async stop() {
    for (const guid in api.plugins.persistentConnections) {
      const app = await App.findByGuid(guid);
      await app.disconnect();
    }
  }
}
