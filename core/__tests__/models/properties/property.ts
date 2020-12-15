import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Property } from "../../../src/models/Property";
import { Log } from "../../../src/models/Log";
import { App } from "../../../src/models/App";
import { Source } from "../../../src/models/Source";
import { Option } from "../../../src/models/Option";
import { plugin } from "../../../src/modules/plugin";
import { PropertyFilter } from "../../../src/models/PropertyFilter";
import { PropertyOps } from "../../../src/modules/ops/property";

let actionhero;

describe("models/property", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.properties();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("creating a property for non-manual apps with options enqueued an internalRun", async () => {
    const rulesCount = await Property.count();
    const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
    expect(foundTasks.length).toBe(rulesCount);
  });

  test("a property cannot be created if the source does not have all the required options set", async () => {
    const app = await helper.factories.app();
    await app.update({ type: "manual" });
    const source = await helper.factories.source(app);
    const sourceOptions = await source.getOptions();
    await expect(source.validateOptions(sourceOptions)).rejects.toThrow(
      /table is required/
    );

    await expect(
      Property.create({
        sourceGuid: source.guid,
        key: "thing",
        type: "string",
        unique: false,
      })
    ).rejects.toThrow(/table is required/);
  });

  test("a property cannot be created if the source is not ready", async () => {
    const app = await helper.factories.app();
    await app.update({ type: "manual" });
    const source = await helper.factories.source(app);
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });

    await expect(
      Property.create({
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
      const rule = await Property.create({
        sourceGuid: source.guid,
        type: "string",
      });

      expect(rule.key).toBe("");

      await rule.destroy();
    });

    test("draft rule can share the same key, but not with ready rule", async () => {
      const ruleOne = await Property.create({
        sourceGuid: source.guid,
        type: "string",
      });
      const ruleTwo = await Property.create({
        sourceGuid: source.guid,
        type: "string",
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
      const rule = await Property.create({
        sourceGuid: source.guid,
        type: "string",
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
          Property.create({
            sourceGuid: source.guid,
            type: "string",
            key,
          })
        ).rejects.toThrow(/is a reserved key and cannot be used/);
      }
    });

    test("a property can be isArray", async () => {
      const rule = await Property.create({
        sourceGuid: source.guid,
        type: "string",
        isArray: true,
      });

      await rule.destroy();
    });

    test("a property cannot be isArray and unique", async () => {
      await expect(
        Property.create({
          sourceGuid: source.guid,
          type: "string",
          isArray: true,
          unique: true,
        })
      ).rejects.toThrow(/unique profile properties cannot be arrays/);
    });

    test("a property cannot be made unique if there are non-unique values already", async () => {
      const rule = await Property.create({
        sourceGuid: source.guid,
        key: "name",
        type: "string",
      });
      await rule.setOptions({ column: "name" });
      await rule.update({ state: "ready" });

      const profileA = await helper.factories.profile();
      const profileB = await helper.factories.profile();
      const profileC = await helper.factories.profile();
      await profileA.addOrUpdateProperties({ name: ["mario"] });
      await profileB.addOrUpdateProperties({ name: ["toad"] });
      await profileC.addOrUpdateProperties({ name: ["toad"] });

      await expect(rule.update({ unique: true })).rejects.toThrow(
        /cannot make this property unique as there are 2 records with the value 'toad'/
      );

      await profileC.addOrUpdateProperties({ name: ["peach"] });

      await rule.update({ unique: true }); // does not throw

      await profileA.destroy();
      await profileB.destroy();
      await profileC.destroy();
      await rule.destroy();
    });

    test("only one property can be identifying", async () => {
      // the bootstrapped rule is already identifying

      await expect(
        Property.create({
          type: "string",
          sourceGuid: source.guid,
          identifying: true,
        })
      ).rejects.toThrow(/only one property can be identifying/);
    });

    test("the identifying rule can be changed", async () => {
      const rule = await Property.create({
        key: "New Rule",
        type: "string",
        sourceGuid: source.guid,
      });
      expect(rule.identifying).toBe(false);

      await rule.makeIdentifying();
      expect(rule.identifying).toBe(true);
      await rule.destroy();
    });
  });

  test("updating a property with new options enqueued an internalRun and update groups relying on it", async () => {
    await api.resque.queue.connection.redis.flushdb();
    const rule = await Property.findOne({ where: { key: "email" } });

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

    expect(group.state).toBe("updating");
    foundGroupRunTasks = await specHelper.findEnqueuedTasks("group:run");
    expect(foundGroupRunTasks.length).toBe(2); // + the one from the profile property change
  });

  test("options can be set and retrieved", async () => {
    const rule = await Property.findOne({ where: { key: "email" } });
    await rule.setOptions({ column: "id" });
    const options = await rule.getOptions();
    expect(options).toEqual({ column: "id" });
  });

  test("providing invalid options will result in an error", async () => {
    const rule = await Property.findOne({
      where: { key: "email" },
    });
    await expect(rule.setOptions({ notThing: "abc" })).rejects.toThrow(
      /column is required for a property of type test-plugin-import/
    );

    await expect(
      rule.setOptions({ column: "userId", otherThing: "false" })
    ).rejects.toThrow(
      /otherThing is not an option for a test-plugin-import property/
    );
  });

  test("options will have mustache keys converted to mustache guids", async () => {
    const rule = await Property.findOne({ where: { key: "email" } });
    await rule.setOptions({
      column: "{{   email}}@example.com",
    });
    let options = await rule.getOptions();
    expect(options).toEqual({ column: "{{ email }}@example.com" }); //appears normal (but formatted) to the user

    const rawOption = await Option.findOne({ where: { ownerGuid: rule.guid } });
    expect(rawOption.value).toBe(`{{ ${rule.guid} }}@example.com`);
  });

  test("an array property cannot be used as an option", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const cartsRule = await Property.create({
      sourceGuid: source.guid,
      key: "carts",
      type: "string",
      isArray: true,
    });
    await cartsRule.setOptions({ column: "carts" });
    await cartsRule.update({ state: "ready" });

    const rule = await Property.findOne({ where: { key: "email" } });
    await expect(
      rule.setOptions({
        column: "{{carts}}@example.com",
      })
    ).rejects.toThrow('missing mustache key "carts"');

    await cartsRule.destroy();
    await source.destroy();
  });

  test("a property cannot be created in the ready state with missing required options", async () => {
    const source = await helper.factories.source();
    const rule = Property.build({
      sourceGuid: source.guid,
      name: "no opts",
      type: "string",
      state: "ready",
    });

    await expect(rule.save()).rejects.toThrow(
      /table is required for a source of type test-plugin-import/
    );
    await source.destroy();
  });

  test("if there is no change to options, the internalRun will not be enqueued", async () => {
    const rule = await Property.findOne({ where: { key: "email" } });
    await rule.setOptions({ column: "id" });
    await api.resque.queue.connection.redis.flushdb();

    await rule.setOptions({ column: "id" });

    const foundInternalRunTasks = await specHelper.findEnqueuedTasks(
      "run:internalRun"
    );
    expect(foundInternalRunTasks.length).toBe(0);
  });

  test("creating a property creates a log entry", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const rule = await Property.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });
    const log = await Log.findOne({
      where: { topic: "property", verb: "create" },
      order: [["createdAt", "desc"]],
    });
    expect(log.message).toBe(`property "${rule.key}" created`);
    await rule.destroy();
    await source.destroy();
  });

  test("a property cannot be deleted if a calculated group is using it", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const rule = await Property.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });
    await rule.setOptions({ column: "thing" });
    await rule.update({ state: "ready" });

    const group = await helper.factories.group({ type: "calculated" });
    await group.setRules([
      { key: "thing", match: "%", operation: { op: "like" } },
    ]);

    await expect(rule.destroy()).rejects.toThrow(
      /cannot delete property "thing", group .* is based on it/
    );

    await group.destroy();
    await rule.destroy(); // doesn't throw
    await source.destroy();
  });

  test("deleting a property deleted the options", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const rule = await Property.create({
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

  describe("directlyMapping", () => {
    let userIdRule: Property;
    let emailRule: Property;

    beforeAll(async () => {
      userIdRule = await Property.findOne({
        where: { key: "userId" },
      });
      emailRule = await Property.findOne({
        where: { key: "email" },
      });
    });

    test("directlyMapping will be determined as on save", async () => {
      expect(userIdRule.directlyMapped).toBe(true);
      expect(emailRule.directlyMapped).toBe(false);
    });

    test("properties include if they are directly mapped", async () => {
      const rules = await Property.findAll();

      expect(rules.find((r) => r.key === "userId").directlyMapped).toBe(true);
      expect(rules.find((r) => r.key === "email").directlyMapped).toBe(false);
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
            propertyOptions: [
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
                property,
                propertyOptions,
                profile,
              }) => {
                const s = `the time is {{now.sql}} + ${JSON.stringify(
                  propertyOptions
                )}`;
                const q = await property.parameterizedQueryFromProfile(
                  s,
                  profile
                );

                if (
                  propertyOptions.column &&
                  propertyOptions.column.match(/throw/)
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

      const firstNameRule = await Property.findOne({
        where: { key: "firstName" },
      });

      firstNameRule.sourceGuid = source.guid;
      await firstNameRule.save();

      const lastNameRule = await Property.findOne({
        where: { key: "lastName" },
      });
      lastNameRule.sourceGuid = source.guid;
      await lastNameRule.save();
    });

    beforeEach(() => {
      queryCounter = 0;
    });

    describe("filters", () => {
      test("we can determine if rule's filters have been changed", async () => {
        const rule = await Property.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        await rule.setFilters([{ key: "id", match: "0", op: "greater than" }]);
        const filters = await rule.getFilters();

        expect(PropertyOps.filtersAreEqual(filters, [])).toBe(false);
        expect(
          PropertyOps.filtersAreEqual(filters, [
            { key: "id", match: "0", op: "greater than" },
          ])
        ).toBe(true);
        expect(
          PropertyOps.filtersAreEqual(filters, [
            { key: "id", match: "1", op: "greater than" },
          ])
        ).toBe(false);
        expect(
          PropertyOps.filtersAreEqual(filters, [
            { key: "id", match: "0", op: "less than" },
          ])
        ).toBe(false);

        await rule.destroy();
      });

      test("it can get the filter options from the plugin", async () => {
        const rule = await Property.create({
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
        const rule = await Property.create({
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
        const count = await PropertyFilter.count();
        expect(count).toBe(0);
      });

      test("filters that do not match the options cannot be set", async () => {
        const rule = await Property.create({
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

    test("properties can retrieve their options from the source", async () => {
      const rule = await Property.create({
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

    test("creating or editing a property options will test the query against a profile", async () => {
      expect(queryCounter).toBe(0);

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const rule = await Property.create({
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

      const rule = await Property.create({
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

    test("the property can be tested against the existing options or potential new options", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const rule = await Property.create({
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
      const rule = await Property.create({
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
      const rule = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      const apiData = await rule.apiData();
      expect(apiData.sourceGuid).toEqual(source.guid);
      await rule.destroy();
    });
  });
});
