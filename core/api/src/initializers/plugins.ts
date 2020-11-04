import { Initializer, api, log } from "actionhero";
import { GrouparooPlugin } from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { App } from "../models/App";

declare module "actionhero" {
  export interface Api {
    plugins: {
      plugins: Array<GrouparooPlugin>;
      validate: (plugin: GrouparooPlugin) => boolean;
      register: (plugin: GrouparooPlugin, validate: boolean) => void;
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
    this.stopPriority = 999;
  }

  async initialize() {
    api.plugins = {
      plugins: [],
      persistentConnections: {},
      validate: this.validatePlugin,
      register: this.registerPlugin,
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
              return { success: true };
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
          profilePropertyRuleOptions: [],
          methods: {
            sourceOptions: async () => {
              return {};
            },
          },
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

  validatePlugin(plugin: GrouparooPlugin) {
    let errors: string[] = [];

    if (!plugin.name) {
      errors.push(`name is required for a Grouparoo Plugin`);
    }
    if (api.plugins.plugins.map((p) => p.name).includes(plugin.name)) {
      errors.push(`a plugin named ${plugin.name} is already registered`);
    }

    if (plugin.apps) {
      plugin?.apps.forEach((app) => {
        if (!app.name) {
          errors.push(`app.name is required for a Grouparoo Plugin App`);
        }
        if (
          api.plugins.plugins
            .map((p) => p.apps?.map((app) => app.name))
            .flat()
            .includes(plugin.name)
        ) {
          errors.push(`a plugin app named ${app.name} is already registered`);
        }
        if (!app.options) {
          errors.push(`app.options is required for a Grouparoo Plugin App`);
        }
        if (!app.methods.test) {
          errors.push(
            `app.methods.test is required for a Grouparoo Plugin App`
          );
        }
        if (
          (app.methods.connect && !app.methods.disconnect) ||
          (!app.methods.connect && app.methods.disconnect)
        ) {
          errors.push(
            `both app.methods.connect and app.methods.disconnect are required for a Grouparoo Plugin App`
          );
        }
      });
    }

    if (plugin.connections) {
      plugin.connections.forEach((connection) => {
        if (!connection.name) {
          errors.push(
            `connection.name is required for a Grouparoo Plugin Connection`
          );
        }
        if (
          api.plugins.plugins
            .map((p) => p.connections?.map((conn) => conn.name))
            .flat()
            .includes(connection.name)
        ) {
          errors.push(
            `a plugin connection named ${connection.name} is already registered`
          );
        }
        if (!connection.app) {
          errors.push(
            `connection.app is required for a Grouparoo Plugin Connection`
          );
        }
        if (!connection.description) {
          errors.push(
            `connection.description is required for a Grouparoo Plugin Connection`
          );
        }
        if (!connection.direction) {
          errors.push(
            `connection.direction is required for a Grouparoo Plugin Connection`
          );
        }
        if (!connection.options) {
          errors.push(
            `connection.options is required for a Grouparoo Plugin Connection`
          );
        }
        if (!["import", "export"].includes(connection.direction)) {
          errors.push(
            `connection.direction must be either import or export for a Grouparoo Plugin Connection`
          );
        }
        if (
          connection.direction === "import" &&
          connection.app !== "manual" &&
          !connection.methods.profileProperty &&
          !connection.methods.profileProperties
        ) {
          errors.push(
            `import connections must provide either connection.methods.profileProperty or connection.methods.profileProperties`
          );
        }
        if (
          connection.direction === "export" &&
          !connection.methods.exportProfile &&
          !connection.methods.exportProfiles
        ) {
          errors.push(
            `export connections must provide either connection.methods.exportProfile or connection.methods.exportProfiles`
          );
        }
      });
    }

    if (errors.length > 0) {
      throw new Error(
        `Plugin validation failure for ${
          plugin.name ? `"${plugin.name}"` : "plugin"
        }: ${errors.join(", ")}`
      );
    }

    return true;
  }

  registerPlugin(plugin: GrouparooPlugin, validate = true) {
    if (validate) api.plugins.validate(plugin);
    api.plugins.plugins.push(plugin);
    log(`registered grouparoo plugin: ${plugin.name}`);
  }
}
