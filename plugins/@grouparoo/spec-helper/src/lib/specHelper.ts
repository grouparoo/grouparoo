// At import we need to change the working directory to core/api
// Don't use the main export path as that will require Actionhero's config
// We can rely on npm to find the right version of the package for us
import { getCoreRootPath } from "@grouparoo/core/api/src/utils/pluginDetails";
const corePath = getCoreRootPath();
process.chdir(corePath);
process.env.ACTIONHERO_CONFIG = `${corePath}/src/config`;

if (!process.env.JEST_WORKER_ID || process.env.JEST_WORKER_ID === "1") {
  process.stdout.write(
    `--- using @grouparoo/core from ${corePath} ---\r\n\r\n`
  );
}

// normal pathway

import LogFactory from "./factories/log";
import GroupFactory from "./factories/group";
import ImportFactory from "./factories/import";
import EventFactory from "./factories/event";
import TeamFactory from "./factories/team";
import TeamMemberFactory from "./factories/teamMember";
import ProfileFactory from "./factories/profile";
import ProfilePropertyRuleFactory from "./factories/profilePropertyRule";
import ProfilePropertyRulesFactory from "./factories/profilePropertyRules";
import AppFactory from "./factories/app";
import SourceFactory from "./factories/source";
import ScheduleFactory from "./factories/schedule";
import DestinationFactory from "./factories/destination";
import ExportFactory from "./factories/export";
import RunFactory from "./factories/run";
import ApiKeyFactory from "./factories/apiKey";

import {
  // modules
  plugin,

  // types
  SourceOptionsMethodResponse,
  DestinationOptionsMethodResponse,
  // models
  App,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Option,
  Import,
  File,
  Export,
  Event,
  EventData,
  ExportImport,
  ExportRun,
  Group,
  GroupMember,
  GroupRule,
  Log,
  Permission,
  Profile,
  ProfileProperty,
  ProfilePropertyRule,
  ProfilePropertyRuleFilter,
  Run,
  Mapping,
  Team,
  TeamMember,
} from "@grouparoo/core/api/src"; // we explicitly require the src (typescript) files

import { Op } from "sequelize";
import fs from "fs";
import path from "path";
import nock from "nock";

const models = [
  App,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Option,
  Import,
  File,
  Group,
  GroupMember,
  GroupRule,
  Export,
  Event,
  EventData,
  ExportImport,
  ExportRun,
  Log,
  Permission,
  Profile,
  ProfileProperty,
  ProfilePropertyRule,
  ProfilePropertyRuleFilter,
  Run,
  Mapping,
  Team,
  TeamMember,
];

export namespace helper {
  export const factories = {
    log: LogFactory,
    group: GroupFactory,
    import: ImportFactory,
    event: EventFactory,
    apiKey: ApiKeyFactory,
    team: TeamFactory,
    teamMember: TeamMemberFactory,
    profile: ProfileFactory,
    profilePropertyRule: ProfilePropertyRuleFactory,
    profilePropertyRules: ProfilePropertyRulesFactory,
    app: AppFactory,
    source: SourceFactory,
    schedule: ScheduleFactory,
    destination: DestinationFactory,
    export: ExportFactory,
    run: RunFactory,
  };

  export async function sleep(time = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  export async function truncate() {
    await Promise.all(
      models.map(async (model) => {
        if (model === App) {
          return model.scope(null).destroy({
            where: {
              type: { [Op.ne]: "events" },
            },
          });
        } else {
          return model.destroy({ truncate: true, force: true });
        }
      })
    );

    const { cache, api } = await import("actionhero");
    await cache.destroy("profilePropertyRules:all");
    await api.resque.queue.connection.redis.flushdb();
  }

  export async function shutdown(server1, server2?) {
    const { api } = await import("actionhero");
    await api.resque.queue.connection.redis.flushdb();
    await Promise.all(
      [server1, server2].map(async (server) => {
        if (server) {
          if (typeof server.close === "function") {
            await server.close();
          }
          if (typeof server.stop === "function") {
            await server.stop();
          }
        }
      })
    );
  }

  export async function prepareForAPITest(options = { truncate: true }) {
    const { Process } = await import("actionhero");
    const actionhero = new Process();
    await actionhero.start();

    // prepare models that we are using from /src
    plugin.mountModels();
    // prepare models that we are using from /dist
    try {
      require("@grouparoo/core").plugin.mountModels();
    } catch (error) {}

    if (options.truncate) await this.truncate();

    enableTestPlugin();

    return { actionhero };
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
              key: "fileGuid",
              required: true,
            },
          ],
          methods: {
            test: async () => {
              return { success: true, message: "OK" };
            },
            appOptions: async () => {
              return { fileGuid: { type: "list", options: ["a", "b"] } };
            },
          },
        },
      ],
      connections: [
        {
          name: "test-plugin-import",
          direction: "import",
          description: "import or update profiles from an uploaded file",
          app: "test-plugin-app",
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
          ],
          profilePropertyRuleOptions: [
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
          scheduleOptions: [
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
          methods: {
            sourceOptions: async ({ sourceOptions }) => {
              const response: SourceOptionsMethodResponse = {
                table: { type: "list", options: ["users"] },
              };
              if (sourceOptions.options)
                response["receivedOptions"] = sourceOptions.options;
              return response;
            },
            sourcePreview: async () => {
              return [
                { id: 1, fname: "mario", lname: "mario" },
                { id: 2, fname: "luigi", lname: "mario" },
              ];
            },
            uniqueProfilePropertyRuleBootstrapOptions: async () => {
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
            profileProperty: async ({ profilePropertyRule, profile }) => {
              const data = {
                userId: new Date().getTime(),
                isVIP: true,
                email: `${profile.guid}@example.com`,
                firstName: "Mario",
                lastName: "Mario",
                ltv: 100.0,
                lastLoginAt: new Date(),
              };
              return data[profilePropertyRule.key] || "...mario";
            },
          },
        },
        {
          name: "test-plugin-export",
          direction: "export",
          description: "export profiles to nowhere",
          app: "test-plugin-app",
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
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
                response["receivedOptions"] = destinationOptions.options;
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
                  profilePropertyRule: {
                    singular: "var",
                    plural: "vars",
                  },
                },
                profilePropertyRules: {
                  required: [{ key: "primary-id", type: "integer" }],
                  known: [{ key: "secondary-id", type: "any" }],
                  allowOptionalFromProfilePropertyRules: true,
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
                response["receivedOptions"] = destinationOptions.options;
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
                  profilePropertyRule: {
                    singular: "var",
                    plural: "vars",
                  },
                },
                profilePropertyRules: {
                  required: [{ key: "primary-id", type: "integer" }],
                  known: [{ key: "secondary-id", type: "any" }],
                  allowOptionalFromProfilePropertyRules: true,
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

  export function recordNock(nockFile, updater: any) {
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
}
