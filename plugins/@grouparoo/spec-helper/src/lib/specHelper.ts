import { loadPath } from "./loadPath";

// At import we need to change the working directory to core
// Don't use the main export path as that will require Actionhero's config
// We can rely on npm to find the right version of the package for us

const {
  getCoreRootPath,
} = require(`@grouparoo/core/${loadPath}/modules/pluginDetails`);
const corePath: string = getCoreRootPath();
process.chdir(corePath);
process.env.ACTIONHERO_CONFIG = `${corePath}/${loadPath}/config`;
process.env.GROUPAROO_SPEC_HELPER = "true";

if (
  corePath.includes("node_modules") &&
  (!process.env.JEST_WORKER_ID || process.env.JEST_WORKER_ID === "1")
) {
  process.stdout.write(
    `--- using @grouparoo/core from ${corePath} ---\r\n\r\n`
  );
}

// normal pathway
import fs from "fs-extra";
import path from "path";
import nock from "nock";
import prettier from "prettier";

import LogFactory from "./factories/log";
import GroupFactory from "./factories/group";
import ModelFactory from "./factories/model";
import ImportFactory from "./factories/import";
import TeamFactory from "./factories/team";
import TeamMemberFactory from "./factories/teamMember";
import NotificationFactory from "./factories/notification";
import RecordFactory from "./factories/record";
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
  AggregationMethod,
} from "@grouparoo/core";

const {
  // modules
  plugin,

  // models
  App,
  AppRefreshQuery,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Option,
  OAuthRequest,
  Filter,
  Import,
  Export,
  ExportProcessor,
  Group,
  GroupMember,
  GroupRule,
  Log,
  GrouparooModel,
  Notification,
  Permission,
  GrouparooRecord,
  RecordProperty,
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
  AppRefreshQuery,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Option,
  OAuthRequest,
  Filter,
  Import,
  Group,
  GroupMember,
  GroupRule,
  Export,
  ExportProcessor,
  Log,
  GrouparooModel,
  Notification,
  Permission,
  GrouparooRecord,
  RecordProperty,
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
    model: ModelFactory,
    app: AppFactory,
    destination: DestinationFactory,
    export: ExportFactory,
    exportProcessor: ExportProcessorFactory,
    group: GroupFactory,
    import: ImportFactory,
    log: LogFactory,
    notification: NotificationFactory,
    record: RecordFactory,
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

  export async function waitUntil(newNock, guard) {
    let attempts = 0;
    while (!(await guard()) && attempts < 10) {
      attempts++;
      if (newNock) {
        await this.sleep(shortTime * 3);
      }
    }
  }

  export async function truncate() {
    for (const model of models) {
      await model.truncate();
    }

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
   * I am used by clients who want to start and stop their server for record snapshot testing.
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

  export function recordResponseData(record, key) {
    const data = {
      userId: new Date().getTime(),
      adminUserId: new Date().getTime(),
      isVIP: true,
      email: `${record.id}@example.com`,
      firstName: "Mario",
      lastName: "Mario",
      ltv: 100.0,
      lastLoginAt: new Date(),
    };

    return data[key] || "...mario";
  }

  export function enableTestPlugin() {
    // create a test plugin to use only in when NODE_ENV=test
    plugin.registerPlugin({
      name: "@grouparoo/test-plugin",
      icon: "/path/to/icon.png",
      apps: [
        {
          name: "test-plugin-app",
          displayName: "test-plugin-app",
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
              key: "oAuthToken",
              type: "oauth-token",
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
            appQuery: async () => {
              return [new Date().getTime()];
            },
            connect: async () => true,
            disconnect: async () => true,
          },
        },
      ],
      connections: [
        {
          name: "test-plugin-import",
          displayName: "test-plugin-import",
          direction: "import",
          description: "import or update records from a table",
          apps: ["test-plugin-app"],
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
          ],
          groupAggregations: [AggregationMethod.Exact],
          methods: {
            sourceOptions: async ({ sourceOptions }) => {
              const response: SourceOptionsMethodResponse = {
                table: { type: "list", options: ["users"] },
              };
              if (sourceOptions.options)
                response["receivedOptions"] = {
                  type: "text",
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
              {
                key: "aggregationMethod",
                required: false,
                description: "how things are combined",
                type: "list",
                options: async () => {
                  return [
                    { key: AggregationMethod.Exact, default: true },
                    { key: AggregationMethod.Count },
                    { key: AggregationMethod.Min },
                    { key: AggregationMethod.Max },
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
                  ops: ["gt", "lt"],
                  canHaveRelativeMatch: false,
                },
              ];
            },
            records: async () => {
              return {
                importsCount: 0,
                highWaterMark: { col: 0 },
                sourceOffset: 0,
              };
            },
            recordProperty: async ({ property, record }) => {
              return recordResponseData(record, property.key);
            },
            recordProperties: async ({ properties, records }) => {
              const response = {};
              for (const record of records) {
                response[record.id] = {};
                for (const property of properties) {
                  response[record.id][property.id] = [
                    recordResponseData(record, property.key),
                  ];
                }
              }

              return response;
            },
          },
        },
        {
          name: "test-plugin-export",
          displayName: "test-plugin-export",
          direction: "export",
          description: "export records to nowhere",
          apps: ["test-plugin-app"],
          syncModes: ["sync", "enrich", "additive"],
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
            { key: "_failRemoteValidation", required: false },
          ],
          methods: {
            exportRecord: async () => {
              return { success: true };
            },
            destinationOptions: async ({ destinationOptions }) => {
              const response: DestinationOptionsMethodResponse = {
                table: { type: "list", options: ["users_out"] },
              };
              if (destinationOptions.options)
                response["receivedOptions"] = {
                  type: "text",
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
          displayName: "test-plugin-export-batch",
          direction: "export",
          description: "export records to nowhere",
          apps: ["test-plugin-app"],
          syncModes: ["sync", "enrich", "additive"],
          defaultSyncMode: "additive",
          options: [
            { key: "table", required: true },
            { key: "where", required: false },
          ],
          methods: {
            exportRecords: async () => {
              return { success: true };
            },
            destinationOptions: async ({ destinationOptions }) => {
              const response: DestinationOptionsMethodResponse = {
                table: { type: "list", options: ["users_out"] },
              };
              if (destinationOptions.options)
                response["receivedOptions"] = {
                  type: "text",
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
    const connection = api.plugins.plugins.filter(
      (p) => p.name === "@grouparoo/test-plugin"
    )[0].connections[0];

    delete connection.methods.recordProperty;
    delete connection.methods.recordProperties;
  }

  /**
   * Find or Create a record given the key of a unique property key and value ({email: 'person@example.com'}) and optional options.
   * Returns bot the record itself and a snapshot.
   * Calls GrouparooRecord.findOrCreateByUniqueRecordProperties() under the hood, as well as GrouparooRecord.sync()
   */
  export async function getRecord(
    args: { [key: string]: string | number },
    opts: { saveExports?: boolean } = { saveExports: false }
  ) {
    const arrayedArgs = {};
    let foundPrimaryKeyProperty = false;
    const primaryKeyProperties = await Property.findAll({
      where: { isPrimaryKey: true },
    });

    const primaryKeyPropertyKeys = primaryKeyProperties.map((p) => p.key);

    for (const k in args) {
      if (primaryKeyPropertyKeys.includes(k)) foundPrimaryKeyProperty = true;
      arrayedArgs[k] = [args[k]];
    }

    if (!foundPrimaryKeyProperty) {
      throw new Error(
        `The arguments provided must contain key/value pairs for one of the following: ${primaryKeyPropertyKeys.join(
          ", "
        )}`
      );
    }

    const { record } =
      await GrouparooRecord.findOrCreateByUniqueRecordProperties(
        arrayedArgs,
        true // always allow this method to create new records
      );
    const snapshot = await record.snapshot(opts.saveExports);
    await record.reload();

    return { record, snapshot };
  }

  export function useNock(testFilePath, updater: any = {}) {
    const pieces = testFilePath.split("/__tests__/");
    if (pieces.length !== 2) {
      throw new Error("invalid __tests__ path for nock: " + testFilePath);
    }

    const extname = path.extname(pieces[1]);
    const filename = path.basename(pieces[1], extname);
    const dirname = path.resolve(
      path.join(pieces[0], "__tests__", "fixtures", path.dirname(pieces[1]))
    );

    const nockFile = path.join(dirname, filename + ".js");
    if (!fs.existsSync(dirname)) {
      fs.mkdirpSync(dirname);
    }

    const newNock: boolean = !!process.env.NOCK;
    if (newNock) {
      recordNock(nockFile, updater);
    } else {
      require(nockFile);
    }
    afterAll(() => {
      if (newNock) {
        try {
          const contents = fs.readFileSync(nockFile).toString();
          const formatted = prettier.format(contents, { parser: "babel" });
          fs.writeFileSync(nockFile, formatted);
        } catch (err) {
          console.log(`Nock formatting error`, err);
        }
      }
    });
    return { newNock };
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
      enable_reqheaders_recording: updater?.recordRequestHeaders || false,
    });
  }

  export async function changeTimestamps(
    instances: any[], // could be any Model
    setCreated: boolean = false,
    timestamp: "NOW()" | string | Date = "1900-01-01 12:13:14"
  ) {
    const { api } = await import("actionhero");
    const tableName = instances[0].constructor["tableName"];
    const sqlDate =
      typeof timestamp === "string"
        ? timestamp.endsWith("()")
          ? timestamp
          : `'${timestamp}'`
        : "'" + timestamp.toISOString().slice(0, 19).replace("T", " ") + "'";

    return api.sequelize.query(
      `UPDATE "${tableName}" SET "updatedAt"=${sqlDate} ${
        setCreated ? `, "createdAt"=${sqlDate} ` : ` `
      }WHERE id IN (${instances.map((i) => `'${i.id}'`)})`,
      { logging: true }
    );
  }
}
