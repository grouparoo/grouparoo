import { Initializer, api, log, utils } from "actionhero";
import { GrouparooPlugin } from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { App } from "../models/App";
import { getPluginManifest } from "../modules/pluginDetails";
import { ConfigTemplate } from "../classes/configTemplate";
import { GroupTemplate } from "../templates/group";
import { ApiKeyTemplate } from "../templates/apiKey";
import { ModelTemplate } from "../templates/model";
import { TeamTemplate } from "../templates/team";
import { TeamMemberTemplate } from "../templates/teamMember";
import { SettingTemplate } from "../templates/setting";
import { CLS } from "../modules/cls";
import { getGrouparooRunMode } from "../modules/runMode";

declare module "actionhero" {
  export interface Api {
    plugins: {
      plugins: GrouparooPlugin[];
      validate: (plugin: GrouparooPlugin) => boolean;
      register: (plugin: GrouparooPlugin, validate: boolean) => void;
      announcePlugins: () => void;
      templates: () => ConfigTemplate[];
      persistentConnections: {
        [id: string]: any;
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
    this.stopPriority = 900;
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
        ModelTemplate,
        GroupTemplate,
        ApiKeyTemplate,
        TeamTemplate,
        TeamMemberTemplate,
      ],
    });

    // --- Add the UI pLugin --- //

    const pluginManifest = getPluginManifest();
    const uiPlugins = pluginManifest.plugins
      .filter((p) => p.name.match(/^@grouparoo\/ui-/))
      .sort((p) => (p.name.match("config") ? 1 : -1));

    if (uiPlugins) {
      const relevantUiPlugin =
        uiPlugins[
          getGrouparooRunMode() === "cli:config" ? uiPlugins.length - 1 : 0
        ];
      if (relevantUiPlugin) {
        this.registerPlugin({
          name: relevantUiPlugin.name,
          icon: "/public/@grouparoo/logo.png",
        });
        process.env.GROUPAROO_UI_EDITION = relevantUiPlugin.name.replace(
          "@grouparoo/ui-",
          ""
        );
      }
    }
  }

  async start() {
    api.plugins.announcePlugins();
  }

  async stop() {
    await CLS.wrap(async () => {
      for (const id in api.plugins.persistentConnections) {
        const app = await App.findById(id).catch(() => null);
        await app?.disconnect();
      }
      await utils.sleep(100);
    });
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
        if (!connection.apps || connection.apps.length < 1) {
          errors.push(
            `connection.apps is required for a Grouparoo Plugin Connection (${connection.name})`
          );
        }
        if (!connection.description) {
          errors.push(
            `connection.description is required for a Grouparoo Plugin Connection (${connection.name})`
          );
        }
        if (!connection.direction) {
          errors.push(
            `connection.direction is required for a Grouparoo Plugin Connection (${connection.name})`
          );
        }
        if (!connection.options) {
          errors.push(
            `connection.options is required for a Grouparoo Plugin Connection (${connection.name})`
          );
        }
        if (!["import", "export"].includes(connection.direction)) {
          errors.push(
            `connection.direction must be either import or export for a Grouparoo Plugin Connection (${connection.name})`
          );
        }
        if (
          connection.direction === "import" &&
          !connection.methods.records &&
          !connection.methods.recordProperty &&
          !connection.methods.recordProperties
        ) {
          errors.push(
            `import connections must provide a way to import records (${connection.name})`
          );
        }
        if (
          connection.direction === "import" &&
          connection.methods.records &&
          connection.supportIncrementalSchedule === undefined
        ) {
          errors.push(
            `import connections that support schedules must declare supportIncrementalSchedule`
          );
        }
        if (
          connection.direction === "export" &&
          !connection.methods.exportRecord &&
          !connection.methods.exportRecords
        ) {
          errors.push(
            `export connections must provide either connection.methods.exportRecord or connection.methods.exportRecords (${connection.name})`
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
