import LogFactory from "../factories/log";
import GroupFactory from "../factories/group";
import ImportFactory from "../factories/import";
import TeamFactory from "../factories/team";
import TeamMemberFactory from "../factories/teamMember";
import ProfileFactory from "../factories/profile";
import ProfilePropertyRulesFactory from "../factories/profilePropertyRules";
import AppFactory from "../factories/app";
import SourceFactory from "../factories/source";
import ScheduleFactory from "../factories/schedule";
import DestinationFactory from "../factories/destination";
import ExportFactory from "../factories/export";
import RunFactory from "../factories/run";

import { App } from "../../src/models/App";
import { Source } from "../../src/models/Source";
import { Schedule } from "../../src/models/Schedule";
import { Destination } from "../../src/models/Destination";
import { DestinationGroup } from "../../src/models/DestinationGroup";
import { Option } from "../../src/models/Option";
import { Import } from "../../src/models/Import";
import { File } from "../../src/models/File";
import { Export } from "../../src/models/Export";
import { ExportImport } from "../../src/models/ExportImport";
import { Group } from "../../src/models/Group";
import { GroupMember } from "../../src/models/GroupMember";
import { GroupRule } from "../../src/models/GroupRule";
import { Log } from "../../src/models/Log";
import { Profile } from "../../src/models/Profile";
import { ProfileProperty } from "../../src/models/ProfileProperty";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";
import { ProfilePropertyRuleFilter } from "../../src/models/ProfilePropertyRuleFilter";
import { Run } from "../../src/models/Run";
import { Mapping } from "../../src/models/Mapping";
import { Team } from "../../src/models/Team";
import { TeamMember } from "../../src/models/TeamMember";

import { plugin } from "../../src/index";

const { api, cache, Process } = require("actionhero");

import fs from "fs";
import path from "path";
import nock from "nock";

export namespace helper {
  export const factories = {
    log: LogFactory,
    group: GroupFactory,
    import: ImportFactory,
    team: TeamFactory,
    teamMember: TeamMemberFactory,
    profile: ProfileFactory,
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
    const models = [
      App,
      Source,
      Schedule,
      Destination,
      DestinationGroup,
      Option,
      Import,
      File,
      Group,
      GroupMember,
      GroupRule,
      Export,
      ExportImport,
      Log,
      Profile,
      ProfileProperty,
      ProfilePropertyRule,
      ProfilePropertyRuleFilter,
      Run,
      Mapping,
      Team,
      TeamMember,
    ];

    await Promise.all(
      models.map(
        async (model) => await model.destroy({ truncate: true, force: true })
      )
    );

    await cache.destroy("profilePropertyRules:all");
    await api.resque.queue.connection.redis.flushdb();
  }

  export async function shutdown(server1, server2?) {
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

  export async function prepareForAPITest(
    options = {
      truncate: true,
    }
  ) {
    const actionhero = new Process();
    const api = await actionhero.start();

    if (options.truncate) {
      await this.truncate();
    }

    enableTestPlugin();

    return {
      actionhero,
      api,
    };
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
              return true;
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
            sourceOptions: async () => {
              return { table: { type: "list", options: ["users"] } };
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
              return { importsCount: 0, nextHighWaterMark: 0 };
            },
            profileProperty: async ({
              app,
              appOptions,
              source,
              sourceOptions,
              sourceMapping,
              profilePropertyRule,
              profilePropertyRuleOptions,
              profile,
            }) => {
              const data = {
                userId: new Date().getTime(),
                isVIP: true,
                email: `${profile.guid}@example.com`,
                firstName: "Mario",
                lastName: "Mario",
                ltv: 100.0,
                lastLoginAt: new Date(),
              };
              const response = {};
              response[profilePropertyRule.key] =
                data[profilePropertyRule.key] || "...mario";
              return response;
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
              return true;
            },
            destinationOptions: async () => {
              return { table: { type: "list", options: ["users_out"] } };
            },
            destinationPreview: async () => {
              return [
                { id: 1, fname: "mario", lname: "mario" },
                { id: 2, fname: "luigi", lname: "mario" },
              ];
            },
          },
        },
      ],
    });
  }

  export function disableTestPluginImport() {
    api.plugins.plugins.filter(
      (p) => p.name === "@grouparoo/test-plugin"
    )[0].connections[0].methods.profileProperty = async () => {
      return null;
    };
  }

  export function recordNock(nockFile, rewriteFunction = null) {
    nockFile = path.resolve(nockFile);
    if (fs.existsSync(nockFile)) {
      fs.unlinkSync(nockFile);
    }

    // write this as the first line.
    const prepend = "const nock = require('nock');\n";
    fs.appendFileSync(nockFile, prepend);

    const appendLogToFile = (toAdd) => {
      if (rewriteFunction) {
        toAdd = rewriteFunction(toAdd);
      }
      fs.appendFileSync(nockFile, toAdd);
    };

    const onlyCallOnce = (content) => {
      let methodIndex = -1;
      if (methodIndex < 0) methodIndex = content.indexOf(".get(");
      if (methodIndex < 0) methodIndex = content.indexOf(".post(");
      if (methodIndex < 0) methodIndex = content.indexOf(".delete(");
      if (methodIndex < 0) methodIndex = content.indexOf(".put(");
      if (methodIndex < 0) {
        throw `nock method not found: ${content}`;
      }
      const closeIndex = content.indexOf(")", methodIndex) + 1;
      // make sure each is only called once
      const updated =
        content.slice(0, closeIndex) + ".once()" + content.slice(closeIndex);
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
