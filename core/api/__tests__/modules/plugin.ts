import { helper } from "./../utils/specHelper";
import { plugin } from "./../../src/modules/plugin";
import { Setting } from "./../../src/models/Setting";
import { Run } from "./../../src/models/Run";
import { Import } from "./../../src/models/Import";
import { specHelper } from "actionhero";
import { ProfilePropertyRule } from "../../src/models/ProfilePropertyRule";
let actionhero;

describe("modules/plugin", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
  });

  describe("registerPlugin", () => {
    test("plugins without problems can be registered", () => {
      plugin.registerPlugin({
        name: "@grouparoo/sample-plugin",
        icon: "/path/to/icon.png",
        apps: [
          {
            name: "sample-plugin-app",
            options: [],
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
            name: "sample-plugin-import",
            direction: "import",
            description: "import or update profiles from an uploaded file",
            app: "sample-plugin-app",
            options: [],
            profilePropertyRuleOptions: [],
            scheduleOptions: [],
            methods: {
              sourceOptions: async ({ sourceOptions }) => {
                const response = {
                  table: { type: "list", options: ["users"] },
                };
                return response;
              },
              sourcePreview: async () => {
                return [];
              },
              uniqueProfilePropertyRuleBootstrapOptions: async () => {
                return {};
              },
              sourceFilters: async () => {
                return [];
              },
              profiles: async () => {
                return {
                  importsCount: 0,
                  highWaterMark: { col: 0 },
                  sourceOffset: 0,
                };
              },
              profileProperty: async ({ profilePropertyRule, profile }) => {
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

    test("destination plugins need either exportProfile or exportProfiles methods", () => {
      expect(() =>
        plugin.registerPlugin({
          name: "@grouparoo/sample-plugin/export",
          icon: "/path/to/icon.png",
          connections: [
            {
              name: "sample-plugin-export",
              direction: "export",
              description: "export stuff",
              app: "sample-plugin-app",
              options: [],
              profilePropertyRuleOptions: [],
              scheduleOptions: [],
              methods: {},
            },
          ],
        })
      ).toThrow(
        /export connections must provide either connection.methods.exportProfile or connection.methods.exportProfiles/
      );
    });
  });

  describe("settings", () => {
    beforeAll(async () => {
      await Setting.destroy({
        where: {
          pluginName: "test-plugin",
        },
      });
    });

    afterAll(async () => {
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
        "100",
        "I am a test setting"
      );

      let value = await plugin.readSetting("test-plugin", "sample-setting");
      expect(value.value).toBe("100");
      expect(value.description).toBe("I am a test setting");
      await plugin.updateSetting("test-plugin", "sample-setting", 200);
      value = await plugin.readSetting("test-plugin", "sample-setting");
      expect(value.value).toBe("200");
    });
  });

  describe("mustache template strings", () => {
    describe("replaceTemplateRunVariables", () => {
      test("it replaces string variables when there is a previous run", async () => {
        const run = await helper.factories.run();
        const schedule = await helper.factories.schedule();

        const previousRun = await Run.create({
          state: "complete",
          creatorGuid: run.creatorGuid,
          creatorType: "schedule",
          createdAt: new Date(1575336176904),
          importsCreated: 1,
        });

        const initialString =
          "select * from \"users\" where updatedAt >= '{{previousRun.createdAt.sql}}'; # The Previous Run Guid is: {{previousRun.guid}}";
        const replacedString = await plugin.replaceTemplateRunVariables(
          initialString,
          run
        );

        expect(replacedString).toContain("where updatedAt >= '2019-12-03 ");
        expect(replacedString).toContain(
          `# The Previous Run Guid is: ${previousRun.guid}`
        );
      });

      test("it replaces string variables with UTC 0 and a null guid when there is no previous run", async () => {
        const run = await helper.factories.run();
        const schedule = await helper.factories.schedule();

        const initialString =
          "select * from \"users\" where updatedAt >= '{{previousRun.createdAt.sql}}'; # The Previous Run Guid is: {{previousRun.guid}}";
        const replacedString = await plugin.replaceTemplateRunVariables(
          initialString,
          run
        );

        expect(replacedString).toContain(
          "where updatedAt >= '1970-01-01 00:00:00'"
        );
        expect(replacedString).toContain(`# The Previous Run Guid is: `);
      });

      test("it throws an error if a template variable is missing", async () => {
        const run = await helper.factories.run();
        await expect(
          plugin.replaceTemplateRunVariables(`hello {{world}}`, run)
        ).rejects.toThrow('missing mustache key "world"');
      });
    });

    describe("replaceTemplateProfileVariables", () => {
      it("will replace parts of the string with profile information", async () => {
        const profile = await helper.factories.profile({
          createdAt: new Date(0),
        });
        await profile.addOrUpdateProperties({
          userId: [5],
          email: ["luigi@example.com"],
        });

        const initialString =
          "select first_name from users where id = {{userId}} and email = '{{email}}' # Profile Created at {{createdAt.sql}}";

        const replacedString = await plugin.replaceTemplateProfileVariables(
          initialString,
          profile
        );

        expect(replacedString).toContain("where id = 5");
        expect(replacedString).toContain("and email = 'luigi@example.com'");
        expect(replacedString).toContain(
          "Profile Created at 1970-01-01 00:00:00"
        );
      });

      test("it throws an error if a template variable is missing", async () => {
        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({ userId: null });
        await expect(
          plugin.replaceTemplateProfileVariables(
            `select email where id = {{userId}}`,
            profile
          )
        ).rejects.toThrow('missing mustache key "userId"');
      });
    });

    describe("replaceTemplateProfilePropertyKeysWithProfilePropertyGuid and replaceTemplateProfilePropertyGuidsWithProfilePropertyKeys", () => {
      test("they work to convert each other", async () => {
        const rule = await ProfilePropertyRule.findOne({
          where: { key: "userId" },
        });
        const initialString = "select * from users where id = {{ userId }}";
        const replacedWithGuid = await plugin.replaceTemplateProfilePropertyKeysWithProfilePropertyGuid(
          initialString
        );
        expect(replacedWithGuid).toEqual(
          `select * from users where id = {{ ${rule.guid} }}`
        );

        expect(
          await plugin.replaceTemplateProfilePropertyGuidsWithProfilePropertyKeys(
            replacedWithGuid
          )
        ).toEqual(initialString);
      });
    });

    describe("createImport", () => {
      test("it will create the import and task to store only the properties that are present in the schedule's mapping", async () => {
        const schedule = await helper.factories.schedule(null, {});
        const run = await helper.factories.run(schedule);
        const row = { first__name: "Peach", last__name: "Toadstool" };
        const mapping = { first__name: "firstName" };

        await plugin.createImport(mapping, run, row);

        const _import = await Import.findOne({
          where: {
            creatorType: "run",
            creatorGuid: run.guid,
          },
        });

        expect(_import.guid).toBeTruthy();
        expect(_import.data).toEqual({ firstName: ["Peach"] });
        expect(_import.rawData).toEqual({
          first__name: "Peach",
          last__name: "Toadstool",
        });

        const tasks = await specHelper.findEnqueuedTasks(
          "import:associateProfile"
        );

        expect(tasks.length).toBe(1);
        expect(tasks[0].args[0].importGuid).toBe(_import.guid);
      });
    });
  });
});
