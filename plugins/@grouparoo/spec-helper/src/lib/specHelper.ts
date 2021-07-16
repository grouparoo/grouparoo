import { loadPath } from "./loadPath";

// At import we need to change the working directory to core
// Don't use the main export path as that will require Actionhero's config
// We can rely on npm to find the right version of the package for us

const {
  getCoreRootPath,
} = require(`@grouparoo/core/${loadPath}/utils/pluginDetails`);
const corePath: string = getCoreRootPath();
process.chdir(corePath);
process.env.ACTIONHERO_CONFIG = `${corePath}/${loadPath}/config`;

if (
  corePath.includes("node_modules") &&
  (!process.env.JEST_WORKER_ID || process.env.JEST_WORKER_ID === "1")
) {
  process.stdout.write(
    `--- using @grouparoo/core from ${corePath} ---\r\n\r\n`
  );
}

// normal pathway
import fs from "fs";
import path from "path";
import nock from "nock";

import LogFactory from "./factories/log";
import GroupFactory from "./factories/group";
import ImportFactory from "./factories/import";
import TeamFactory from "./factories/team";
import TeamMemberFactory from "./factories/teamMember";
import NotificationFactory from "./factories/notification";
import ProfileFactory from "./factories/profile";
import PropertyFactory from "./factories/property";
import PropertiesFactory from "./factories/properties";
import AppFactory from "./factories/app";
import SourceFactory from "./factories/source";
import ScheduleFactory from "./factories/schedule";
import DestinationFactory from "./factories/destination";
import ExportFactory from "./factories/export";
import ExportProcessorFactory from "./factories/exportProcessor";
import RunFactory from "./factories/run";
import ApiKeyFactory from "./factories/apiKey";

// types
import {
  SourceOptionsMethodResponse,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";

const {
  // modules
  plugin,

  // models
  App,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Option,
  Filter,
  Import,
  File,
  Export,
  ExportProcessor,
  Group,
  GroupMember,
  GroupRule,
  Log,
  Notification,
  Permission,
  Profile,
  ProfileProperty,
  Property,
  Run,
  Setting,
  Session,
  Mapping,
  Team,
  TeamMember,
} = require(`@grouparoo/core/${loadPath}`);

const models = [
  App,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Option,
  Filter,
  Import,
  File,
  Group,
  GroupMember,
  GroupRule,
  Export,
  ExportProcessor,
  Log,
  Notification,
  Permission,
  Profile,
  ProfileProperty,
  Property,
  Run,
  Session,
  Mapping,
  Team,
  TeamMember,
];

export namespace helper {
  export const setupTime = 60 * 1000; // 60 seconds
  export const hugeTime = 60 * 2 * 1000; // 120 seconds
  export const longTime = 60 * 1000; // 60 seconds
  export const mediumTime = 20 * 1000; // 20 seconds
  export const shortTime = 10 * 1000; // 10 seconds
  export const defaultTime = process.env.CI ? mediumTime : shortTime;

  export const factories = {
    apiKey: ApiKeyFactory,
    app: AppFactory,
    destination: DestinationFactory,
    export: ExportFactory,
    exportProcessor: ExportProcessorFactory,
    group: GroupFactory,
    import: ImportFactory,
    log: LogFactory,
    notification: NotificationFactory,
    profile: ProfileFactory,
    property: PropertyFactory,
    properties: PropertiesFactory,
    run: RunFactory,
    schedule: ScheduleFactory,
    source: SourceFactory,
    team: TeamFactory,
    teamMember: TeamMemberFactory,
  };

  export async function sleep(time = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  export async function truncate() {
    await Promise.all(
      models.map(async (model) => {
        // @ts-ignore
        return model.truncate();
      })
    );

    const { cache, api } = await import("actionhero");
    await cache.destroy("properties:all");
    await api.resque.queue.connection.redis.flushdb();
  }

  export async function resetSettings() {
    const settings = await Setting.findAll();
    for (const i in settings) {
      const setting = settings[i];
      await setting.update({ value: setting.defaultValue, locked: null });
    }
  }

  /**
   * I am used by clients who want to start and stop their server for profile snapshot testing.
   * As an Arrow function, 'll be in the Jest namespace when used
   */
  export const grouparooTestServer = (
    options: {
      truncate?: boolean;
      enableTestPlugin?: boolean;
      resetSettings?: boolean;
      disableTestPluginImport?: boolean;
    } = {
      truncate: false,
      enableTestPlugin: false,
      resetSettings: false,
      disableTestPluginImport: false,
    }
  ) => {
    let actionhero;

    beforeAll(async () => {
      const { Process } = await import("actionhero");
      actionhero = new Process();

      await actionhero.initialize();
      if (options.truncate) await helper.truncate();
      await actionhero.start();

      try {
        require("@grouparoo/core/dist").plugin.mountModels();
      } catch (error) {}

      try {
        require("@grouparoo/core/src").plugin.mountModels();
      } catch (error) {}

      if (options.resetSettings) await helper.resetSettings();
      if (options.enableTestPlugin) helper.enableTestPlugin();
      if (options.disableTestPluginImport) helper.disableTestPluginImport();
    }, helper.setupTime);

    afterAll(async () => {
      await actionhero.stop();
    }, helper.setupTime);

    return actionhero;
  };

  /**
   * To inject a plugin you are testing into core (as if it were enabled and installed in the package.json of a client app)
   */
  export function injectPlugin(name: string, path: string) {
    process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
      [name]: { path },
    });
    console.log(process.env.GROUPAROO_INJECTED_PLUGINS);
  }

  export function enableTestPlugin() {
    // create a test plugin to use only in when NODE_ENV=test
    plugin.registerPlugin({
      name: "@grouparoo/test-plugin",
      icon: "/path/to/icon.png",
      apps: [
        {
          name: "test-plugin-app",
          options: [
            {
              key: "fileId",
              required: true,
            },
            {
              key: "password",
              required: false,
            },
            {
              key: "_failRemoteValidation",
              required: false,
            },
          ],
          methods: {
            test: async ({ appOptions }) => {
              if (appOptions._failRemoteValidation) {
                throw new Error("Remote validation failed");
              }

              return { success: true, message: "OK" };
            },
            appOptions: async () => {
              return {
                fileId: { type: "list", options: ["a", "b"] },
                password: { type: "password" },
              };
            },
          },
        },
      ],
      connections: [
        {
          name: "test-plugin-import",
          direction: "import",
          description: "import or update profiles from a table",
          app: "test-plugin-app",
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
          ],
          groupAggregations: [],
          methods: {
            sourceOptions: async ({ sourceOptions }) => {
              const response: SourceOptionsMethodResponse = {
                table: { type: "list", options: ["users"] },
              };
              if (sourceOptions.options)
                response["receivedOptions"] = {
                  type: "string",
                  options: [sourceOptions.options],
                };
              return response;
            },
            sourcePreview: async () => {
              return [
                { id: 1, fname: "mario", lname: "mario" },
                { id: 2, fname: "luigi", lname: "mario" },
              ];
            },
            propertyOptions: async () => [
              {
                key: "column",
                required: true,
                description: "the column to choose",
                type: "list",
                options: async () => {
                  return [
                    { key: "id", examples: [1, 2, 3] },
                    { key: "fname", examples: ["mario", "luigi", "peach"] },
                    { key: "lname", examples: ["mario", "mario", "toadstool"] },
                  ];
                },
              },
            ],
            scheduleOptions: async () => [
              {
                key: "maxColumn",
                required: true,
                description: "the column to choose",
                type: "list",
                options: async () => {
                  return [
                    { key: "created_at", examples: [1, 2, 3] },
                    { key: "updated_at", examples: [1, 2, 3] },
                  ];
                },
              },
            ],
            uniquePropertyBootstrapOptions: async () => {
              return {
                column: "__default_column",
              };
            },
            sourceFilters: async () => {
              return [
                {
                  key: "id",
                  ops: ["greater than", "less than"],
                  canHaveRelativeMatch: false,
                },
              ];
            },
            profiles: async () => {
              return {
                importsCount: 0,
                highWaterMark: { col: 0 },
                sourceOffset: 0,
              };
            },
            profileProperty: async ({ property, profile }) => {
              const data = {
                userId: new Date().getTime(),
                isVIP: true,
                email: `${profile.id}@example.com`,
                firstName: "Mario",
                lastName: "Mario",
                ltv: 100.0,
                lastLoginAt: new Date(),
              };
              return data[property.key] || "...mario";
            },
          },
        },
        {
          name: "test-plugin-export",
          direction: "export",
          description: "export profiles to nowhere",
          app: "test-plugin-app",
          syncModes: ["sync", "enrich", "additive"],
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
            { key: "_failRemoteValidation", required: false },
          ],
          methods: {
            exportProfile: async () => {
              return { success: true };
            },
            destinationOptions: async ({ destinationOptions }) => {
              const response: DestinationOptionsMethodResponse = {
                table: { type: "list", options: ["users_out"] },
              };
              if (destinationOptions.options)
                response["receivedOptions"] = {
                  type: "string",
                  options: [destinationOptions.options],
                };
              return response;
            },
            exportArrayProperties: async () => [],
            destinationMappingOptions: async ({ destinationOptions }) => {
              if (destinationOptions._failRemoteValidation) {
                throw new Error("Remote validation failed");
              }

              return {
                labels: {
                  group: {
                    singular: "list",
                    plural: "lists",
                  },
                  property: {
                    singular: "var",
                    plural: "vars",
                  },
                },
                properties: {
                  required: [{ key: "primary-id", type: "integer" }],
                  known: [
                    { key: "secondary-id", type: "any" },
                    { key: "string-property", type: "string" },
                  ],
                  allowOptionalFromProperties: true,
                },
              };
            },
          },
        },
        {
          name: "test-plugin-export-batch",
          direction: "export",
          description: "export profiles to nowhere",
          app: "test-plugin-app",
          syncModes: ["sync", "enrich", "additive"],
          defaultSyncMode: "additive",
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
          ],
          methods: {
            exportProfiles: async () => {
              return { success: true };
            },
            destinationOptions: async ({ destinationOptions }) => {
              const response: DestinationOptionsMethodResponse = {
                table: { type: "list", options: ["users_out"] },
              };
              if (destinationOptions.options)
                response["receivedOptions"] = {
                  type: "string",
                  options: [destinationOptions.options],
                };
              return response;
            },
            exportArrayProperties: async () => [],
            destinationMappingOptions: async () => {
              return {
                labels: {
                  group: {
                    singular: "list",
                    plural: "lists",
                  },
                  property: {
                    singular: "var",
                    plural: "vars",
                  },
                },
                properties: {
                  required: [{ key: "primary-id", type: "integer" }],
                  known: [{ key: "secondary-id", type: "any" }],
                  allowOptionalFromProperties: true,
                },
              };
            },
          },
        },
      ],
    });
  }

  export function disableTestPluginImport() {
    const { api } = require("actionhero");
    api.plugins.plugins.filter(
      (p) => p.name === "@grouparoo/test-plugin"
    )[0].connections[0].methods.profileProperty = async () => {
      return null;
    };
  }

  /**
   * Find or Create a profile given the key of a unique property key and value ({email: 'person@example.com'}) and optional options.
   * Returns bot the profile itself and a snapshot.
   * Calls Profile.findOrCreateByUniqueProfileProperties() under the hood, as well as Profile.sync()
   */
  export async function getProfile(
    args: { [key: string]: string | number },
    opts: { saveExports?: boolean } = { saveExports: false }
  ) {
    const arrayedArgs = {};
    let foundDirectlyMapped = false;
    const directlyMappedProperties = await Property.findAll({
      where: { directlyMapped: true },
    });

    const directlyMappedPropertyKeys = directlyMappedProperties.map(
      (p) => p.key
    );

    for (const k in args) {
      if (directlyMappedPropertyKeys.includes(k)) foundDirectlyMapped = true;
      arrayedArgs[k] = [args[k]];
    }

    if (!foundDirectlyMapped) {
      throw new Error(
        `The arguments provided must contain key/value pairs for one of the following: ${directlyMappedPropertyKeys.join(
          ", "
        )}`
      );
    }

    const { profile } = await Profile.findOrCreateByUniqueProfileProperties(
      arrayedArgs
    );
    const snapshot = await profile.snapshot(opts.saveExports);
    await profile.reload();

    return { profile, snapshot };
  }

  export function recordNock(nockFile, updater: any = {}) {
    nockFile = path.resolve(nockFile);
    if (fs.existsSync(nockFile)) {
      fs.unlinkSync(nockFile);
    }

    // write this as the first line.
    const prepend = "const nock = require('nock');\n";
    fs.appendFileSync(nockFile, prepend);
    if (updater.prepend) {
      const toPrepend = updater.prepend();
      if (toPrepend) {
        fs.appendFileSync(nockFile, toPrepend + "\n");
      }
    }

    const appendLogToFile = (toAdd) => {
      if (updater.rewrite) {
        toAdd = updater.rewrite(toAdd);
      }
      fs.appendFileSync(nockFile, toAdd);
    };

    const onlyCallOnce = (content) => {
      let methodIndex = -1;
      const index = content.indexOf(".reply(");
      if (index < 0) {
        throw `nock replay not found: ${content}`;
      }
      // make sure each is only called once
      const updated =
        content.slice(0, index) + ".once()" + content.slice(index);
      return updated;
    };
    const addRecording = (content) => {
      content = onlyCallOnce(content);
      appendLogToFile(content);
    };

    nock.recorder.rec({
      logging: addRecording,
      use_separator: false,
    });
  }

  export async function changeTimestamps(
    instance: any, // could be any Model
    setCreated: boolean = false,
    timestamp = "1900-01-01 12:13:14"
  ) {
    const { api } = await import("actionhero");
    const tableName = instance.constructor["tableName"];
    return api.sequelize.query(
      `UPDATE ${tableName} SET "updatedAt" = '${timestamp}' ${
        setCreated ? `, "createdAt" = '${timestamp}' ` : ` `
      }WHERE id = '${instance.id}'`
    );
  }
}
