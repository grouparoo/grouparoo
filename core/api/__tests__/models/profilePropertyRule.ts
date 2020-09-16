import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { Log } from "./../../src/models/Log";
import { App } from "./../../src/models/App";
import { Source } from "./../../src/models/Source";
import { Option } from "./../../src/models/Option";
import { plugin } from "./../../src/modules/plugin";
import { ProfilePropertyRuleFilter } from "../../src/models/ProfilePropertyRuleFilter";

let actionhero;

describe("models/profilePropertyRule", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("creating a profile property rule for non-manual apps with options enqueued an internalRun", async () => {
    const rulesCount = await ProfilePropertyRule.count();
    const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
    expect(foundTasks.length).toBe(rulesCount);
  });

  test("a profile property rule cannot be created if the source does not have all the required options set", async () => {
    const app = await helper.factories.app();
    await app.update({ type: "manual" });
    const source = await helper.factories.source(app);
    const sourceOptions = await source.getOptions();
    await expect(source.validateOptions(sourceOptions)).rejects.toThrow(
      /table is required/
    );

    await expect(
      ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "thing",
        type: "string",
        unique: false,
      })
    ).rejects.toThrow(/table is required/);
  });

  test("a profile property rule cannot be created if the source is not ready", async () => {
    const app = await helper.factories.app();
    await app.update({ type: "manual" });
    const source = await helper.factories.source(app);
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });

    await expect(
      ProfilePropertyRule.create({
        sourceGuid: source.guid,
        key: "thing",
        type: "string",
        unique: false,
      })
    ).rejects.toThrow(/source is not ready/);
    await source.destroy();
  });

  describe("keys and types", () => {
    let source: Source;

    beforeAll(async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "some table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    afterAll(async () => {
      await source.destroy();
    });

    test("a new rule will have a '' key", async () => {
      const rule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
      });

      expect(rule.key).toBe("");

      await rule.destroy();
    });

    test("draft rule can share the same key, but not with ready rule", async () => {
      const ruleOne = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
      });
      const ruleTwo = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
      });

      expect(ruleOne.key).toBe("");
      expect(ruleTwo.key).toBe("");

      await ruleOne.update({ key: "key" });
      await ruleOne.setOptions({ column: "abc123" });
      await ruleOne.update({ state: "ready" });

      await expect(ruleTwo.update({ key: "key" })).rejects.toThrow(
        /key "key" is already in use/
      );

      await ruleOne.destroy();
      await ruleTwo.destroy();
    });

    test("types must be of a known type", async () => {
      const rule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
      });

      await expect(rule.update({ type: "something" })).rejects.toThrow(
        /something is not an allowed type/
      );

      await rule.destroy();
    });

    test("keys cannot be from the reserved list of keys", async () => {
      const reservedKeys = ["guid", "createdAt", "updatedAt"];
      for (const i in reservedKeys) {
        const key = reservedKeys[i];
        await expect(
          ProfilePropertyRule.create({
            sourceGuid: source.guid,
            key,
          })
        ).rejects.toThrow(/is a reserved key and cannot be used/);
      }
    });

    test("a profile property rule can be isArray", async () => {
      const rule = await ProfilePropertyRule.create({
        sourceGuid: source.guid,
        isArray: true,
      });

      await rule.destroy();
    });

    test("a profile property rule cannot be isArray and unique", async () => {
      await expect(
        ProfilePropertyRule.create({
          sourceGuid: source.guid,
          isArray: true,
          unique: true,
        })
      ).rejects.toThrow(/unique profile properties cannot be arrays/);
    });

    test("only one profile property rule can be identifying", async () => {
      // the bootstrapped rule is already identifying

      await expect(
        ProfilePropertyRule.create({
          sourceGuid: source.guid,
          identifying: true,
        })
      ).rejects.toThrow(/only one profile property rule can be identifying/);
    });
  });

  test("updating a profile property rule with new options enqueued an internalRun and update groups relying on it", async () => {
    await api.resque.queue.connection.redis.flushdb();
    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });

    const group = await helper.factories.group();
    expect(group.state).toBe("ready");
    await group.update({ type: "calculated" });
    await group.setRules([
      {
        key: rule.key,
        operation: { op: "eq" },
        match: "abc",
      },
    ]);

    let foundGroupRunTasks = await specHelper.findEnqueuedTasks("group:run");
    expect(foundGroupRunTasks.length).toBe(1); // the group's rules changed

    await rule.setOptions({ column: "id" });

    const foundInternalRunTasks = await specHelper.findEnqueuedTasks(
      "run:internalRun"
    );
    expect(foundInternalRunTasks.length).toBe(1);

    expect(group.state).toBe("initializing");
    foundGroupRunTasks = await specHelper.findEnqueuedTasks("group:run");
    expect(foundGroupRunTasks.length).toBe(2); // + the one from the profile property change
  });

  test("options can be set and retrieved", async () => {
    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });
    await rule.setOptions({ column: "id" });
    const options = await rule.getOptions();
    expect(options).toEqual({ column: "id" });
  });

  test("providing invalid options will result in an error", async () => {
    const rule = await ProfilePropertyRule.findOne({
      where: { key: "email" },
    });
    await expect(rule.setOptions({ notThing: "abc" })).rejects.toThrow(
      /column is required for a profilePropertyRule of type test-plugin-import/
    );

    await expect(
      rule.setOptions({ column: "userId", otherThing: "false" })
    ).rejects.toThrow(
      /otherThing is not an option for a test-plugin-import profilePropertyRule/
    );
  });

  test("options will have mustache keys converted to mustache guids", async () => {
    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });
    await rule.setOptions({
      column: "{{   email}}@example.com",
    });
    let options = await rule.getOptions();
    expect(options).toEqual({ column: "{{ email }}@example.com" }); //appears normal (but formatted) to the user

    const rawOption = await Option.findOne({ where: { ownerGuid: rule.guid } });
    expect(rawOption.value).toBe(`{{ ${rule.guid} }}@example.com`);
  });

  test("an array profile property rule cannot be used as an option", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const cartsRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "carts",
      type: "string",
      isArray: true,
    });
    await cartsRule.setOptions({ column: "carts" });
    await cartsRule.update({ state: "ready" });

    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });
    await expect(
      rule.setOptions({
        column: "{{carts}}@example.com",
      })
    ).rejects.toThrow('missing mustache key "carts"');

    await cartsRule.destroy();
    await source.destroy();
  });

  test("a profile property rule cannot be created in the ready state with missing required options", async () => {
    const source = await helper.factories.source();
    const rule = ProfilePropertyRule.build({
      sourceGuid: source.guid,
      name: "no opts",
      type: "test-plugin-import",
      state: "ready",
    });

    await expect(rule.save()).rejects.toThrow(
      /table is required for a source of type test-plugin-import/
    );
    await source.destroy();
  });

  test("if there is no change to options, the internalRun will not be enqueued", async () => {
    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });
    await rule.setOptions({ column: "id" });
    await api.resque.queue.connection.redis.flushdb();

    await rule.setOptions({ column: "id" });

    const foundInternalRunTasks = await specHelper.findEnqueuedTasks(
      "run:internalRun"
    );
    expect(foundInternalRunTasks.length).toBe(0);
  });

  test("creating a profile property rule creates a log entry", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const rule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });
    const log = await Log.findOne({
      where: { topic: "profilePropertyRule", verb: "create" },
      order: [["createdAt", "desc"]],
    });
    expect(log.message).toBe(`profilePropertyRule "${rule.key}" created`);
    await rule.destroy();
    await source.destroy();
  });

  test("a profile property rule cannot be deleted if a calculated group is using it", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const rule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });
    await rule.setOptions({ column: "thing" });
    await rule.update({ state: "ready" });

    const group = await helper.factories.group({ type: "calculated" });
    await group.setRules([
      { key: "thing", match: "%", operation: { op: "iLike" } },
    ]);

    await expect(rule.destroy()).rejects.toThrow(
      /cannot delete profile property rule "thing", group .* is based on it/
    );

    await group.destroy();
    await rule.destroy(); // doesn't throw
    await source.destroy();
  });

  test("deleting a profile property rule deleted the options", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const rule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });

    await rule.setOptions({ column: "abc" });

    await rule.destroy(); // doesn't throw
    await source.destroy();

    const optionsCount = await Option.count({
      where: { ownerGuid: rule.guid },
    });
    expect(optionsCount).toBe(0);
  });

  describe("cache", () => {
    test("cached data can be returned", async () => {
      const rules = await ProfilePropertyRule.cached();
      const keys = Object.keys(rules);
      expect(keys).toEqual([
        "email",
        "firstName",
        "isVIP",
        "lastLoginAt",
        "lastName",
        "ltv",
        "purchaseAmounts",
        "purchases",
        "userId",
      ]);
    });

    test("the cache can be cleared and reloaded", async () => {
      await ProfilePropertyRule.clearCache();
      const rules = await ProfilePropertyRule.cached();
      const keys = Object.keys(rules);
      expect(keys).toEqual([
        "email",
        "firstName",
        "isVIP",
        "lastLoginAt",
        "lastName",
        "ltv",
        "purchaseAmounts",
        "purchases",
        "userId",
      ]);
    });
  });

  describe("with plugin", () => {
    let app: App;
    let source: Source;
    let queryCounter = 0;
    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
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
            name: "import-from-test-app",
            description: "a test app",
            app: "test-template-app",
            direction: "import",
            options: [],
            profilePropertyRuleOptions: [
              {
                key: "column",
                required: true,
                description: "the column to choose",
                type: "list",
                options: async () => {
                  return [
                    {
                      key: "id",
                      examples: [1, 2, 3],
                    },
                  ];
                },
              },
            ],
            methods: {
              sourceFilters: async () => {
                return [
                  {
                    key: "id",
                    ops: ["greater than", "less than"],
                    canHaveRelativeMatch: false,
                  },
                ];
              },
              profileProperty: async ({
                profilePropertyRule,
                profilePropertyRuleOptions,
                profile,
              }) => {
                const s = `the time is {{now.sql}} + ${JSON.stringify(
                  profilePropertyRuleOptions
                )}`;
                const q = await profilePropertyRule.parameterizedQueryFromProfile(
                  s,
                  profile
                );

                if (
                  profilePropertyRuleOptions.column &&
                  profilePropertyRuleOptions.column.match(/throw/)
                ) {
                  throw new Error(`throw`);
                }
                queryCounter++;
                return [q];
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app",
        type: "test-template-app",
        state: "ready",
      });

      source = await Source.create({
        name: "test source",
        type: "import-from-test-app",
        appGuid: app.guid,
      });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const firstNameRule = await ProfilePropertyRule.findOne({
        where: { key: "firstName" },
      });

      firstNameRule.sourceGuid = source.guid;
      await firstNameRule.save();

      const lastNameRule = await ProfilePropertyRule.findOne({
        where: { key: "lastName" },
      });
      lastNameRule.sourceGuid = source.guid;
      await lastNameRule.save();
    });

    beforeEach(() => {
      queryCounter = 0;
    });

    describe("filters", () => {
      test("it can get the filter options from the plugin", async () => {
        const rule = await ProfilePropertyRule.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        const filterOptions = await rule.pluginFilterOptions();
        expect(filterOptions).toEqual([
          {
            key: "id",
            ops: ["greater than", "less than"],
            canHaveRelativeMatch: false,
          },
        ]);

        await rule.destroy();
      });

      test("filters that match the options can be set", async () => {
        const rule = await ProfilePropertyRule.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        await rule.setFilters([
          { op: "greater than", match: 1, key: "id" },
          { op: "less than", match: 99, key: "id" },
        ]);

        const filters = await rule.getFilters();
        expect(filters).toEqual([
          {
            op: "greater than",
            match: "1",
            key: "id",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
          {
            op: "less than",
            match: "99",
            key: "id",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ]);

        await rule.destroy();
      });

      test("deleting a rule also deleted the filters", async () => {
        const count = await ProfilePropertyRuleFilter.count();
        expect(count).toBe(0);
      });

      test("filters that do not match the options cannot be set", async () => {
        const rule = await ProfilePropertyRule.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        await expect(
          rule.setFilters([{ op: "greater than", match: 1, key: "other-key" }])
        ).rejects.toThrow("other-key is not filterable");

        await expect(
          rule.setFilters([{ op: "max it out", match: 1, key: "id" }])
        ).rejects.toThrow('"max it out" cannot be applied to id');

        await rule.destroy();
      });
    });

    test("profile property rules can retrieve their options from the source", async () => {
      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      const pluginOptions = await rule.pluginOptions();
      expect(pluginOptions).toEqual([
        {
          description: "the column to choose",
          key: "column",
          options: [{ examples: [1, 2, 3], key: "id" }],
          required: true,
          type: "list",
        },
      ]);

      await rule.destroy();
    });

    test("creating or editing a profile property rule options will test the query against a profile", async () => {
      expect(queryCounter).toBe(0);

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await rule.setOptions({ column: "test" });
      await rule.update({ state: "ready" });

      // not ready yet
      await rule.update({ state: "ready" });

      // initial test
      expect(queryCounter).toBeGreaterThanOrEqual(2);
      await rule.setOptions({ column: "id" });

      // +2 checking the options
      // +2 from the afterSave hook updating the rule
      // +n for the mustache builder
      expect(queryCounter).toBeGreaterThan(2);
      await expect(rule.setOptions({ column: "throw" })).rejects.toThrow(
        /throw/
      );

      // no change
      expect(queryCounter).toBeGreaterThan(2);
      await rule.destroy();
      await profile.destroy();
    });

    test("options cannot be saved if they fail testing import against a profile", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      await expect(rule.setOptions({ column: "throw" })).rejects.toThrow(
        /throw/
      );

      expect(await rule.getOptions()).toEqual({});
      await rule.destroy();
      await profile.destroy();
    });

    test("the profile property rule can be tested against the existing options or potential new options", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await rule.setOptions({ column: "~" });
      await rule.update({ state: "ready" });

      await profile.addOrUpdateProperties({ test: [true] });

      // against saved query
      const response = await rule.test();
      expect(response[0]).toMatch(`+ {"column":"~"}`);

      // against new query
      const responseAgain = await rule.test({ column: "abc" });
      expect(responseAgain[0]).toMatch('+ {"column":"abc"}');

      await profile.destroy();
      await rule.destroy();
    });

    test("apiData will include the options", async () => {
      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await rule.setOptions({ column: "id" });

      const apiData = await rule.apiData();
      expect(apiData.options).toEqual({ column: "id" });
      await rule.destroy();
    });

    test("apiData will include the source", async () => {
      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      const apiData = await rule.apiData();
      expect(apiData.source.guid).toEqual(source.guid);
      await rule.destroy();
    });
  });
});
