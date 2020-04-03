import { specHelper } from "actionhero";
import { helper } from "./../utils/specHelper";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { Log } from "./../../src/models/Log";
import { App } from "./../../src/models/App";
import { Source } from "./../../src/models/Source";
import { Option } from "./../../src/models/Option";
import { plugin } from "./../../src/modules/plugin";

let actionhero;
let api;

describe("models/profilePropertyRule", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("creating a profile property rule for non-manual apps with options enqueued an internalRun", async () => {
    const rulesCount = await ProfilePropertyRule.count();
    const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
    expect(foundTasks.length).toBe(rulesCount - 1); // the bootstrapped rule does not get a run
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

  test("creating a profile property rule for a manual app did enqueue an internalRun", async () => {
    await api.resque.queue.connection.redis.flushdb();

    const app = await helper.factories.app();
    await app.update({ type: "manual" });
    const source = await helper.factories.source(app);
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const profilePropertyRule = await ProfilePropertyRule.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });

    const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
    expect(foundTasks.length).toBe(1);

    await profilePropertyRule.destroy();
    await specHelper.deleteEnqueuedTasks(
      "run:internalRun",
      foundTasks[0].args[0]
    );
  });

  test("updating a profile property rule with new options enqueued an internalRun and update groups relying on it", async () => {
    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });

    const group = await helper.factories.group();
    expect(group.state).toBe("draft");
    await group.update({ type: "calculated" });
    await group.setRules([
      {
        key: rule.key,
        op: "eq",
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

    await group.reload();
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

  test("if there is no change to options, the internalRun will not be enqueued", async () => {
    await api.resque.queue.connection.redis.flushdb();
    const rule = await ProfilePropertyRule.findOne({ where: { key: "email" } });
    const existingOptions = await rule.getOptions();
    expect(existingOptions).toEqual({ column: "id" });

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

    const group = await helper.factories.group({ type: "calculated" });
    await group.setRules([{ key: "thing", match: "%", op: "iLike" }]);

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
            test: async () => {
              return true;
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
              profileProperty: async (
                App,
                appOptions,
                source,
                sourceOptions,
                sourceMapping,
                profilePropertyRule,
                profilePropertyRuleOptions,
                profile
              ) => {
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
                return { response: q };
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app",
        type: "test-template-app",
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
      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      // not ready yet
      await rule.update({ state: "ready" });

      // initial test
      expect(queryCounter).toBe(1);
      await rule.setOptions({ column: "id" });

      // +1 checking the options
      // +1 from the afterSave hook updating the rule
      expect(queryCounter).toBe(3);
      await expect(rule.setOptions({ column: "throw" })).rejects.toThrow(
        /throw/
      );

      // no change
      expect(queryCounter).toBe(4);
      await rule.destroy();
    });

    test("the profile property rule can be tested against the existing options or potential new options", async () => {
      const profile = await helper.factories.profile();
      const rule = await ProfilePropertyRule.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await rule.update({ state: "ready" });

      await profile.addOrUpdateProperties({ test: true });

      // against saved query
      const response = await rule.test();
      expect(response.response).toMatch("+ {}");

      // against new query
      const responseAgain = await rule.test({ column: "abc" });
      expect(responseAgain.response).toMatch('+ {"column":"abc"}');

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
