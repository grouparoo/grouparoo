import { Initializer, api, log } from "actionhero";
import { GrouparooPlugin } from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { App } from "../models/App";
import { getPluginManifest } from "../utils/pluginDetails";
import { ConfigTemplate } from "../classes/configTemplate";

import {
  CalculatedGroupTemplate,
  ManualGroupTemplate,
} from "../templates/group";
import { ApiKeyTemplate } from "../templates/apiKey";
import { TeamTemplate } from "../templates/team";
import { TeamMemberTemplate } from "../templates/teamMember";
import { SettingTemplate } from "../templates/setting";
import {
  ManualAppTemplate,
  ManualSourceTemplate,
  ManualPropertyTemplate,
} from "../templates/manual";

declare module "actionhero" {
  export interface Api {
    plugins: {
      plugins: Array<GrouparooPlugin>;
      validate: (plugin: GrouparooPlugin) => boolean;
      register: (plugin: GrouparooPlugin, validate: boolean) => void;
      announcePlugins: () => void;
      templates: () => Array<ConfigTemplate>;
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
    this.startPriority = 1;
    this.stopPriority = 999;
  }

  async initialize() {
    api.plugins = {
      plugins: [],
      persistentConnections: {},
      validate: this.validatePlugin,
      register: this.registerPlugin,
      announcePlugins: this.announcePlugins,
      templates: this.templates,
    };

    this.checkPluginEnvironmentVariables();

    // --- Add the core plugins --- //

    plugin.registerPlugin({
      name: "@grouparoo/core",
      icon: "/public/@grouparoo/logo.png",
      templates: [
        SettingTemplate,
        CalculatedGroupTemplate,
        ManualGroupTemplate,
        ApiKeyTemplate,
        TeamTemplate,
        TeamMemberTemplate,
      ],
    });

    plugin.registerPlugin({
      name: "@grouparoo/core/manual",
      icon: "/public/@grouparoo/manual/manual.png",
      templates: [
        ManualAppTemplate,
        ManualSourceTemplate,
        ManualPropertyTemplate,
      ],
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
          propertyOptions: [],
          methods: {
            sourceOptions: async () => {
              return {};
            },
          },
        },
      ],
    });
  }

  async start() {
    api.plugins.announcePlugins();
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
          !connection.methods.profiles &&
          !connection.methods.profileProperty &&
          !connection.methods.profileProperties
        ) {
          errors.push(
            `import connections must provide a way to import profiles`
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
  }

  announcePlugins() {
    log(`active plugins: ${api.plugins.plugins.map((p) => p.name).join(", ")}`);
  }

  templates() {
    return api.plugins.plugins
      .filter((p) => p.templates?.length > 0)
      .map((p) => p.templates)
      .flat()
      .map((T) => (typeof T === "function" ? new T() : T))
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
  }

  /*
   * ensure that the ENV variables for the plugins are set
   */
  checkPluginEnvironmentVariables() {
    const pluginManifest = getPluginManifest();

    pluginManifest.plugins.forEach((plugin) => {
      if (plugin?.grouparoo?.env?.api) {
        plugin.grouparoo.env.api.forEach((e) => {
          if (!process.env[e]) {
            log(
              `Plugin ${plugin.name} requires environment variable ${e} to be set`,
              "warning"
            );
          }
        });
      }
      if (plugin?.grouparoo?.env?.web) {
        plugin.grouparoo.env.web.forEach((e) => {
          if (!process.env[e]) {
            log(
              `plugin ${plugin.name} requires environment variable ${e} to be set`,
              "warning"
            );
          }
        });
      }
    });
  }
}
