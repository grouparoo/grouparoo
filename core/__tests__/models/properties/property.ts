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

    test("a new property will have a '' key", async () => {
      const property = await Property.create({
        sourceGuid: source.guid,
        type: "string",
      });

      expect(property.key).toBe("");

      await property.destroy();
    });

    test("draft property can share the same key, but not with ready rule", async () => {
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
      const property = await Property.create({
        sourceGuid: source.guid,
        type: "string",
      });

      await expect(property.update({ type: "something" })).rejects.toThrow(
        /something is not an allowed type/
      );

      await property.destroy();
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
      const property = await Property.create({
        sourceGuid: source.guid,
        type: "string",
        isArray: true,
      });

      await property.destroy();
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
      const property = await Property.create({
        sourceGuid: source.guid,
        key: "name",
        type: "string",
      });
      await property.setOptions({ column: "name" });
      await property.update({ state: "ready" });

      const profileA = await helper.factories.profile();
      const profileB = await helper.factories.profile();
      const profileC = await helper.factories.profile();
      await profileA.addOrUpdateProperties({ name: ["mario"] });
      await profileB.addOrUpdateProperties({ name: ["toad"] });
      await profileC.addOrUpdateProperties({ name: ["toad"] });

      await expect(property.update({ unique: true })).rejects.toThrow(
        /cannot make this property unique as there are 2 records with the value 'toad'/
      );

      await profileC.addOrUpdateProperties({ name: ["peach"] });

      await property.update({ unique: true }); // does not throw

      await profileA.destroy();
      await profileB.destroy();
      await profileC.destroy();
      await property.destroy();
    });

    test("only one property can be identifying", async () => {
      // the bootstrapped property is already identifying

      await expect(
        Property.create({
          type: "string",
          sourceGuid: source.guid,
          identifying: true,
        })
      ).rejects.toThrow(/only one property can be identifying/);
    });

    test("the identifying property can be changed", async () => {
      const property = await Property.create({
        key: "New Rule",
        type: "string",
        sourceGuid: source.guid,
      });
      expect(property.identifying).toBe(false);

      await property.makeIdentifying();
      expect(property.identifying).toBe(true);
      await property.destroy();
    });
  });

  test("updating a property with new options enqueued an internalRun and update groups relying on it", async () => {
    await api.resque.queue.connection.redis.flushdb();
    const property = await Property.findOne({ where: { key: "email" } });

    const group = await helper.factories.group();
    expect(group.state).toBe("ready");
    await group.update({ type: "calculated" });
    await group.setRules([
      {
        key: property.key,
        operation: { op: "eq" },
        match: "abc",
      },
    ]);

    let foundGroupRunTasks = await specHelper.findEnqueuedTasks("group:run");
    expect(foundGroupRunTasks.length).toBe(1); // the group's rules changed

    await property.setOptions({ column: "id" });

    const foundInternalRunTasks = await specHelper.findEnqueuedTasks(
      "run:internalRun"
    );
    expect(foundInternalRunTasks.length).toBe(1);

    expect(group.state).toBe("updating");
    foundGroupRunTasks = await specHelper.findEnqueuedTasks("group:run");
    expect(foundGroupRunTasks.length).toBe(2); // + the one from the profile property change
  });

  test("options can be set and retrieved", async () => {
    const property = await Property.findOne({ where: { key: "email" } });
    await property.setOptions({ column: "id" });
    const options = await property.getOptions();
    expect(options).toEqual({ column: "id" });
  });

  test("providing invalid options will result in an error", async () => {
    const property = await Property.findOne({
      where: { key: "email" },
    });
    await expect(property.setOptions({ notThing: "abc" })).rejects.toThrow(
      /column is required for a property of type test-plugin-import/
    );

    await expect(
      property.setOptions({ column: "userId", otherThing: "false" })
    ).rejects.toThrow(
      /otherThing is not an option for a test-plugin-import property/
    );
  });

  test("options will have mustache keys converted to mustache guids", async () => {
    const property = await Property.findOne({ where: { key: "email" } });
    await property.setOptions({
      column: "{{   email}}@example.com",
    });
    let options = await property.getOptions();
    expect(options).toEqual({ column: "{{ email }}@example.com" }); //appears normal (but formatted) to the user

    const rawOption = await Option.findOne({
      where: { ownerGuid: property.guid },
    });
    expect(rawOption.value).toBe(`{{ ${property.guid} }}@example.com`);
  });

  test("an array property cannot be used as an option", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const cartsProperty = await Property.create({
      sourceGuid: source.guid,
      key: "carts",
      type: "string",
      isArray: true,
    });
    await cartsProperty.setOptions({ column: "carts" });
    await cartsProperty.update({ state: "ready" });

    const property = await Property.findOne({ where: { key: "email" } });
    await expect(
      property.setOptions({
        column: "{{carts}}@example.com",
      })
    ).rejects.toThrow('missing mustache key "carts"');

    await cartsProperty.destroy();
    await source.destroy();
  });

  test("a property cannot be created in the ready state with missing required options", async () => {
    const source = await helper.factories.source();
    const property = Property.build({
      sourceGuid: source.guid,
      name: "no opts",
      type: "string",
      state: "ready",
    });

    await expect(property.save()).rejects.toThrow(
      /table is required for a source of type test-plugin-import/
    );
    await source.destroy();
  });

  test("if there is no change to options, the internalRun will not be enqueued", async () => {
    const property = await Property.findOne({ where: { key: "email" } });
    await property.setOptions({ column: "id" });
    await api.resque.queue.connection.redis.flushdb();

    await property.setOptions({ column: "id" });

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

    const property = await Property.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });
    const log = await Log.findOne({
      where: { topic: "property", verb: "create" },
      order: [["createdAt", "desc"]],
    });
    expect(log.message).toBe(`property "${property.key}" created`);
    await property.destroy();
    await source.destroy();
  });

  test("a property cannot be deleted if a calculated group is using it", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const property = await Property.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });
    await property.setOptions({ column: "thing" });
    await property.update({ state: "ready" });

    const group = await helper.factories.group({ type: "calculated" });
    await group.setRules([
      { key: "thing", match: "%", operation: { op: "like" } },
    ]);

    await expect(property.destroy()).rejects.toThrow(
      /cannot delete property "thing", group .* is based on it/
    );

    await group.destroy();
    await property.destroy(); // doesn't throw
    await source.destroy();
  });

  test("deleting a property deleted the options", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const property = await Property.create({
      sourceGuid: source.guid,
      key: "thing",
      type: "string",
      unique: false,
    });

    await property.setOptions({ column: "abc" });

    await property.destroy(); // doesn't throw
    await source.destroy();

    const optionsCount = await Option.count({
      where: { ownerGuid: property.guid },
    });
    expect(optionsCount).toBe(0);
  });

  describe("directlyMapping", () => {
    let userIdProperty: Property;
    let emailProperty: Property;

    beforeAll(async () => {
      userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });
      emailProperty = await Property.findOne({
        where: { key: "email" },
      });
    });

    test("directlyMapping will be determined as on save", async () => {
      expect(userIdProperty.directlyMapped).toBe(true);
      expect(emailProperty.directlyMapped).toBe(false);
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

      const firstNameProperty = await Property.findOne({
        where: { key: "firstName" },
      });

      firstNameProperty.sourceGuid = source.guid;
      await firstNameProperty.save();

      const lastNameProperty = await Property.findOne({
        where: { key: "lastName" },
      });
      lastNameProperty.sourceGuid = source.guid;
      await lastNameProperty.save();
    });

    beforeEach(() => {
      queryCounter = 0;
    });

    describe("filters", () => {
      test("we can determine if rule's filters have been changed", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        await property.setFilters([
          { key: "id", match: "0", op: "greater than" },
        ]);
        const filters = await property.getFilters();

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

        await property.destroy();
      });

      test("it can get the filter options from the plugin", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        const filterOptions = await property.pluginFilterOptions();
        expect(filterOptions).toEqual([
          {
            key: "id",
            ops: ["greater than", "less than"],
            canHaveRelativeMatch: false,
          },
        ]);

        await property.destroy();
      });

      test("filters that match the options can be set", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        await property.setFilters([
          { op: "greater than", match: 1, key: "id" },
          { op: "less than", match: 99, key: "id" },
        ]);

        const filters = await property.getFilters();
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

        await property.destroy();
      });

      test("deleting a property also deleted the filters", async () => {
        const count = await PropertyFilter.count();
        expect(count).toBe(0);
      });

      test("filters that do not match the options cannot be set", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceGuid: source.guid,
        });

        await expect(
          property.setFilters([
            { op: "greater than", match: 1, key: "other-key" },
          ])
        ).rejects.toThrow("other-key is not filterable");

        await expect(
          property.setFilters([{ op: "max it out", match: 1, key: "id" }])
        ).rejects.toThrow('"max it out" cannot be applied to id');

        await property.destroy();
      });
    });

    test("properties can retrieve their options from the source", async () => {
      const property = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      const pluginOptions = await property.pluginOptions();
      expect(pluginOptions).toEqual([
        {
          description: "the column to choose",
          key: "column",
          options: [{ examples: [1, 2, 3], key: "id" }],
          required: true,
          type: "list",
        },
      ]);

      await property.destroy();
    });

    test("creating or editing a property options will test the query against a profile", async () => {
      expect(queryCounter).toBe(0);

      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const property = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await property.setOptions({ column: "test" });
      await property.update({ state: "ready" });

      // not ready yet
      await property.update({ state: "ready" });

      // initial test
      expect(queryCounter).toBeGreaterThanOrEqual(2);
      await property.setOptions({ column: "id" });

      // +2 checking the options
      // +2 from the afterSave hook updating the rule
      // +n for the mustache builder
      expect(queryCounter).toBeGreaterThan(2);
      await expect(property.setOptions({ column: "throw" })).rejects.toThrow(
        /throw/
      );

      // no change
      expect(queryCounter).toBeGreaterThan(2);
      await property.destroy();
      await profile.destroy();
    });

    test("options cannot be saved if they fail testing import against a profile", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const property = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      await expect(property.setOptions({ column: "throw" })).rejects.toThrow(
        /throw/
      );

      expect(await property.getOptions()).toEqual({});
      await property.destroy();
      await profile.destroy();
    });

    test("the property can be tested against the existing options or potential new options", async () => {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      const property = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await property.setOptions({ column: "~" });
      await property.update({ state: "ready" });

      await profile.addOrUpdateProperties({ test: [true] });

      // against saved query
      const response = await property.test();
      expect(response[0]).toMatch(`+ {"column":"~"}`);

      // against new query
      const responseAgain = await property.test({ column: "abc" });
      expect(responseAgain[0]).toMatch('+ {"column":"abc"}');

      await profile.destroy();
      await property.destroy();
    });

    test("apiData will include the options", async () => {
      const property = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });
      await property.setOptions({ column: "id" });

      const apiData = await property.apiData();
      expect(apiData.options).toEqual({ column: "id" });
      await property.destroy();
    });

    test("apiData will include the source", async () => {
      const property = await Property.create({
        key: "test",
        type: "string",
        sourceGuid: source.guid,
      });

      const apiData = await property.apiData();
      expect(apiData.sourceGuid).toEqual(source.guid);
      await property.destroy();
    });
  });
});
