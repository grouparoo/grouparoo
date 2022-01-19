import { helper } from "@grouparoo/spec-helper";
import { plugin, Setting, Run, Import, Property } from "../../src";
import { specHelper } from "actionhero";
import { SourceOptionsMethodResponse } from "../..";
import { api } from "actionhero";

describe("modules/plugin", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  describe("registerPlugin", () => {
    test("plugins without problems can be registered", () => {
      plugin.registerPlugin({
        name: "@grouparoo/sample-plugin",
        icon: "/path/to/icon.png",
        apps: [
          {
            name: "sample-plugin-app",
            displayName: "sample-plugin-app",
            options: [],
            methods: {
              test: async () => {
                return { success: true, message: "OK" };
              },
              appOptions: async () => {
                return { fileId: { type: "list", options: ["a", "b"] } };
              },
            },
          },
        ],
        connections: [
          {
            name: "sample-plugin-import",
            displayName: "sample-plugin-import",
            direction: "import",
            supportIncrementalSchedule: true,
            description: "import or update records from an uploaded file",
            apps: ["sample-plugin-app"],
            options: [],
            methods: {
              sourceOptions: async ({ sourceOptions }) => {
                const response: SourceOptionsMethodResponse = {
                  table: { type: "list", options: ["users"] },
                };
                return response;
              },
              sourcePreview: async () => {
                return [];
              },
              propertyOptions: async () => [],
              scheduleOptions: async () => [],
              uniquePropertyBootstrapOptions: async () => {
                return {};
              },
              sourceFilters: async () => {
                return [];
              },
              records: async () => {
                return {
                  importsCount: 0,
                  highWaterMark: { col: 0 },
                  sourceOffset: 0,
                };
              },
              recordProperty: async ({ property, record }) => {
                return ["value"];
              },
            },
          },
        ],
      });
    });

    test("duplicate plugin names throw errors", () => {
      expect(() =>
        plugin.registerPlugin({
          name: "@grouparoo/sample-plugin",
          icon: "/path/to/icon.png",
        })
      ).toThrowError(
        /a plugin named @grouparoo\/sample-plugin is already registered/
      );
    });

    test("destination plugins need either exportRecord or exportRecords methods", () => {
      expect(() =>
        plugin.registerPlugin({
          name: "@grouparoo/sample-plugin/export",
          icon: "/path/to/icon.png",
          connections: [
            {
              name: "sample-plugin-export",
              displayName: "sample-plugin-export",
              direction: "export",
              description: "export stuff",
              apps: ["sample-plugin-app"],
              options: [],
              methods: {},
            },
          ],
        })
      ).toThrow(
        /export connections must provide either connection.methods.exportRecord or connection.methods.exportRecords/
      );
    });
  });

  describe("settings", () => {
    beforeEach(async () => {
      await Setting.destroy({
        where: {
          pluginName: "test-plugin",
        },
      });
    });

    afterEach(async () => {
      await Setting.destroy({
        where: {
          pluginName: "test-plugin",
        },
      });
    });

    test("settings can be saved, written, and read", async () => {
      await plugin.registerSetting(
        "test-plugin",
        "sample-setting",
        "title",
        "100",
        "I am a test setting",
        "string"
      );

      let value = await plugin.readSetting("test-plugin", "sample-setting");
      expect(value.title).toBe("title");
      expect(value.value).toBe("100");
      expect(value.description).toBe("I am a test setting");
      await plugin.updateSetting("test-plugin", "sample-setting", 200);
      value = await plugin.readSetting("test-plugin", "sample-setting");
      expect(value.value).toBe("200");
    });

    test("stale settings can be deleted", async () => {
      // Get current list of plugin keys.
      const getAllSettingsKeys = async () => {
        let settings = await Setting.findAll();
        return settings.map(({ key }) => key);
      };

      // Stale setting is not in the db.
      const settingsKeys = await getAllSettingsKeys();
      expect(settingsKeys).not.toContain("sample-setting");

      // Add stale setting.
      await plugin.registerSetting(
        "test-plugin",
        "sample-setting",
        "title",
        "100",
        "I am a test setting",
        "string"
      );

      // Stale setting is in the db.
      let updatedKeys = await getAllSettingsKeys();
      expect(updatedKeys).toContain("sample-setting");
    });
  });

  describe("mustache template strings", () => {
    describe("replaceTemplateRunVariables", () => {
      test("it replaces string variables when there is a previous run", async () => {
        const run = await helper.factories.run();
        const schedule = await helper.factories.schedule();

        const previousRun = await Run.create({
          state: "complete",
          creatorId: run.creatorId,
          creatorType: "schedule",
          createdAt: new Date(1575336176904),
          importsCreated: 1,
        });

        const initialString =
          "select * from \"users\" where updatedAt >= '{{{previousRun.createdAt.sql}}}'; # The Previous Run Id is: {{{previousRun.id}}}";
        const replacedString = await plugin.replaceTemplateRunVariables(
          initialString,
          run
        );

        expect(replacedString).toContain("where updatedAt >= '2019-12-03 ");
        expect(replacedString).toContain(
          `# The Previous Run Id is: ${previousRun.id}`
        );
      });

      test("it replaces string variables with UTC 0 and a null id when there is no previous run", async () => {
        const run = await helper.factories.run();
        const schedule = await helper.factories.schedule();

        const initialString =
          "select * from \"users\" where updatedAt >= '{{{previousRun.createdAt.sql}}}'; # The Previous Run Id is: {{{previousRun.id}}}";
        const replacedString = await plugin.replaceTemplateRunVariables(
          initialString,
          run
        );

        expect(replacedString).toContain(
          "where updatedAt >= '1970-01-01 00:00:00'"
        );
        expect(replacedString).toContain(`# The Previous Run Id is: `);
      });

      test("it throws an error if a template variable is missing", async () => {
        const run = await helper.factories.run();
        await expect(
          plugin.replaceTemplateRunVariables(`hello {{{world}}}`, run)
        ).rejects.toThrow('missing mustache key "world"');
      });
    });

    describe("replaceTemplateRecordVariables", () => {
      it("will replace parts of the string with record information", async () => {
        const record = await helper.factories.record({
          createdAt: new Date(0),
        });
        await record.addOrUpdateProperties({
          userId: [5],
          email: ["luigi@example.com"],
        });

        const initialString =
          "select first_name from users where id = {{{userId}}} and email = '{{{email}}}' # GrouparooRecord Created at {{{createdAt.sql}}}";

        const replacedString = await plugin.replaceTemplateRecordVariables(
          initialString,
          record
        );

        expect(replacedString).toContain("where id = 5");
        expect(replacedString).toContain("and email = 'luigi@example.com'");
        expect(replacedString).toContain(
          "GrouparooRecord Created at 1970-01-01 00:00:00"
        );
      });

      test("it throws an error if a template variable is missing", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({ userId: null });
        await expect(
          plugin.replaceTemplateRecordVariables(
            `select email where id = {{{userId}}}`,
            record
          )
        ).rejects.toThrow('missing mustache key "userId"');
      });
    });

    describe("replaceTemplateRecordPropertyKeysWithRecordPropertyId and replaceTemplateRecordPropertyIdsWithRecordPropertyKeys", () => {
      test("they work to convert each other", async () => {
        const property = await Property.findOne({
          where: { key: "userId" },
        });
        const source = await property.$get("source");
        const initialString = "select * from users where id = {{{ userId }}}";
        const replacedWithId =
          await plugin.replaceTemplateRecordPropertyKeysWithRecordPropertyId(
            initialString,
            source.modelId
          );
        expect(replacedWithId).toEqual(
          `select * from users where id = {{{ ${property.id} }}}`
        );

        expect(
          await plugin.replaceTemplateRecordPropertyIdsWithRecordPropertyKeys(
            replacedWithId,
            source.modelId
          )
        ).toEqual(initialString);
      });

      test("only properties from the same model can be used in mustache replacement", async () => {
        const otherModel = await helper.factories.model({ name: "otherModel" });
        const otherApp = await helper.factories.app();
        const otherSource = await helper.factories.source(otherApp, {
          modelId: otherModel.id,
        });
        await otherSource.setOptions({ table: "foo" });
        const otherProperty = await otherSource.bootstrapUniqueProperty({
          key: "otherUserId",
          type: "integer",
          mappedColumn: "otherId",
        });
        await otherSource.setMapping({ otherUserId: "otherUserId" });
        await otherSource.update({ state: "ready" });

        const property = await Property.findOne({
          where: { key: "userId" },
        });
        const source = await property.$get("source");
        const initialString = `select * from users where id = {{{ ${otherProperty.key} }}}`;

        await expect(
          plugin.replaceTemplateRecordPropertyKeysWithRecordPropertyId(
            initialString,
            source.modelId
          )
        ).rejects.toThrow('missing mustache key "otherUserId"');

        // cleanup
        await otherSource.setMapping({});
        await otherProperty.destroy();
        await otherSource.destroy();
        await otherApp.destroy();
        await otherModel.destroy();
      });
    });

    describe("createImport", () => {
      test("it will create the import and task to store only the properties that are present in the schedule's mapping", async () => {
        await api.resque.queue.connection.redis.flushdb();
        const schedule = await helper.factories.schedule(null, {});
        const run = await helper.factories.run(schedule);
        const row = { first__name: "Peach", last__name: "Toadstool" };
        const mapping = { first__name: "firstName" };

        await plugin.createImport(mapping, run, row);

        const _import = await Import.findOne({
          where: {
            creatorType: "run",
            creatorId: run.id,
          },
        });

        expect(_import.id).toBeTruthy();
        expect(_import.data).toEqual({ firstName: ["Peach"] });
        expect(_import.rawData).toEqual({
          first__name: "Peach",
          last__name: "Toadstool",
        });

        const tasks = await specHelper.findEnqueuedTasks(
          "import:associateRecord"
        );

        expect(tasks.length).toBe(1);
        expect(tasks[0].args[0].importId).toBe(_import.id);
      });
    });

    describe("createImports", () => {
      test("it will create the imports and task to store only the properties that are present in the schedule's mapping", async () => {
        await api.resque.queue.connection.redis.flushdb();
        const schedule = await helper.factories.schedule(null, {});
        const run = await helper.factories.run(schedule);
        const row1 = { first__name: "Peach", last__name: "Toadstool" };
        const row2 = { first__name: "Mario", last__name: "Mario" };
        const mapping = { first__name: "firstName" };

        await plugin.createImports(mapping, run, [row1, row2]);

        const _imports = await Import.findAll({
          where: {
            creatorType: "run",
            creatorId: run.id,
          },
        });

        expect(_imports.length).toBe(2);
        const peachImport = _imports.find(
          (i) => i.data.firstName[0] === "Peach"
        );
        const marioImport = _imports.find(
          (i) => i.data.firstName[0] === "Mario"
        );
        expect(peachImport).toBeTruthy();
        expect(marioImport).toBeTruthy();
        expect(peachImport.data).toEqual({
          firstName: ["Peach"],
        });
        expect(peachImport.rawData).toEqual({
          first__name: "Peach",
          last__name: "Toadstool",
        });
        expect(marioImport.data).toEqual({
          firstName: ["Mario"],
        });
        expect(marioImport.rawData).toEqual({
          first__name: "Mario",
          last__name: "Mario",
        });

        const tasks = await specHelper.findEnqueuedTasks(
          "import:associateRecord"
        );

        expect(tasks.length).toBe(2);
        expect(tasks.map((t) => t.args[0].importId).sort()).toEqual(
          [marioImport.id, peachImport.id].sort()
        );
      });
    });
  });
});
