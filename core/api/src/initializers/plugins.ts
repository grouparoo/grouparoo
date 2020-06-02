import { Initializer, api } from "actionhero";
import { GrouparooPlugin } from "../classes/plugin";
import { plugin } from "../modules/plugin";

declare module "actionhero" {
  interface Api {
    plugins: {
      plugins: Array<GrouparooPlugin>;
    };
  }
}

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "plugins";
    this.loadPriority = 999;
  }

  async initialize() {
    api.plugins = {
      plugins: [],
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
}
