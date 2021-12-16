import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import {
  App,
  Filter,
  GrouparooModel,
  Log,
  Option,
  plugin,
  Property,
  Run,
  Source,
} from "../../../src";
import { FilterHelper } from "../../../src/modules/filterHelper";

describe("models/property", () => {
  let model: GrouparooModel;
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
  });

  test("creating a property with options enqueued an internalRun", async () => {
    const runningRuns = await Run.findAll({ where: { state: "running" } });
    expect(runningRuns.length).toBe(1);
  });

  test("a property cannot be created if the source does not have all the required options set", async () => {
    const app = await helper.factories.app();
    await app.update({ state: "ready" });
    const source = await helper.factories.source(app);
    const sourceOptions = await source.getOptions();
    await expect(source.validateOptions(sourceOptions)).rejects.toThrow(
      /table is required/
    );

    await expect(
      Property.create({
        sourceId: source.id,
        key: "thing",
        type: "string",
        unique: false,
      })
    ).rejects.toThrow(/table is required/);
  });

  test("a property cannot be created if the source is not ready", async () => {
    const app = await helper.factories.app();
    await app.update({ state: "ready" });
    const source = await helper.factories.source(app);
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });

    await expect(
      Property.create({
        sourceId: source.id,
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
        sourceId: source.id,
        type: "string",
      });

      expect(property.key).toBe("");

      await property.destroy();
    });

    test("draft property can share the same key, but not with ready rule", async () => {
      const ruleOne = await Property.create({
        sourceId: source.id,
        type: "string",
      });
      const ruleTwo = await Property.create({
        sourceId: source.id,
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

    test("deleted properties can share the same key, but not with ready rule", async () => {
      const ruleOne = await Property.create({
        sourceId: source.id,
        type: "string",
      });
      const ruleTwo = await Property.create({
        sourceId: source.id,
        type: "string",
      });
      const ruleThree = await Property.create({
        sourceId: source.id,
        type: "string",
      });

      expect(ruleOne.key).toBe("");
      expect(ruleTwo.key).toBe("");
      expect(ruleThree.key).toBe("");

      await ruleOne.setOptions({ column: "abc123" });
      await ruleTwo.setOptions({ column: "abc123" });
      await ruleThree.setOptions({ column: "abc123" });

      await ruleOne.update({ state: "ready", key: "asdf" });
      await ruleTwo.update({ state: "deleted", key: "asdf-deleted" });
      await ruleThree.update({ state: "deleted", key: "asdf-deleted" });

      await expect(ruleTwo.update({ key: "asdf" })).rejects.toThrow(
        /key "asdf" is already in use/
      );

      await ruleOne.update({ key: "asdf-deleted" });

      await ruleOne.destroy();
      await ruleTwo.destroy();
      await ruleThree.destroy();
    });

    test("types must be of a known type", async () => {
      const property = await Property.create({
        sourceId: source.id,
        type: "string",
      });

      await expect(property.update({ type: "something" })).rejects.toThrow(
        /something is not an allowed type/
      );

      await property.destroy();
    });

    test("keys cannot be from the reserved list of keys", async () => {
      const reservedKeys = ["grouparooId", "grouparooCreatedAt", "_meta"];
      for (const i in reservedKeys) {
        const key = reservedKeys[i];
        await expect(
          Property.create({
            sourceId: source.id,
            type: "string",
            key,
          })
        ).rejects.toThrow(/is a reserved key and cannot be used/);
      }
    });

    test("`id` is a valid property key", async () => {
      const property = await Property.create({
        sourceId: source.id,
        type: "string",
        key: "id",
      }); // does not throw
      await property.destroy();
    });

    test("a property can be isArray", async () => {
      const property = await Property.create({
        sourceId: source.id,
        type: "string",
        isArray: true,
      });

      await property.destroy();
    });

    test("a property cannot be isArray and unique", async () => {
      await expect(
        Property.create({
          sourceId: source.id,
          type: "string",
          isArray: true,
          unique: true,
        })
      ).rejects.toThrow(/unique record properties cannot be arrays/);
    });

    test("a property cannot be made unique if there are non-unique values already", async () => {
      const property = await Property.create({
        sourceId: source.id,
        key: "name",
        type: "string",
      });
      await property.setOptions({ column: "name" });
      await property.update({ state: "ready" });

      const recordA = await helper.factories.record();
      const recordB = await helper.factories.record();
      const recordC = await helper.factories.record();
      await recordA.addOrUpdateProperties({ name: ["mario"] });
      await recordB.addOrUpdateProperties({ name: ["toad"] });
      await recordC.addOrUpdateProperties({ name: ["toad"] });

      await expect(property.update({ unique: true })).rejects.toThrow(
        /cannot make this property unique as there are 2 records with the value 'toad'/
      );

      await recordC.addOrUpdateProperties({ name: ["peach"] });

      await property.update({ unique: true }); // does not throw

      await recordA.destroy();
      await recordB.destroy();
      await recordC.destroy();
      await property.destroy();
    });
  });

  test("updating a property with new options enqueued an internalRun and update groups relying on it", async () => {
    await api.resque.queue.connection.redis.flushdb();
    const property = await Property.findOne({ where: { key: "email" } });

    const group = await helper.factories.group();
    expect(group.state).toBe("ready");
    await group.setRules([
      {
        key: property.key,
        operation: { op: "eq" },
        match: "abc",
      },
    ]);

    const runningRuns = await Run.findAll({
      where: { state: "running", creatorType: "group" },
    });
    expect(runningRuns.length).toBe(1);

    await property.setOptions({ column: "id" });

    const runningRunsAgain = await Run.findAll({
      where: { state: "running", creatorType: "group" },
    });
    expect(runningRunsAgain.length).toBe(1);
    expect(runningRunsAgain[0].id).not.toEqual(runningRuns[0].id);
  });

  test("when a property with no options or filters first becomes ready, a run will be started", async () => {
    plugin.registerPlugin({
      name: "test-plugin-no-options",
      apps: [
        {
          name: "app-no-options",
          displayName: "app-no-options",
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
          name: "source-no-options",
          displayName: "source-no-options",
          description: "a test source",
          apps: ["app-no-options"],
          direction: "import",
          options: [],
          methods: {
            recordProperty: async () => {
              return [];
            },
          },
        },
      ],
    });

    const app = await App.create({ type: "app-no-options" });
    await app.update({ state: "ready" });
    const source = await Source.create({
      appId: app.id,
      type: "source-no-options",
      modelId: model.id,
    });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });
    const property = await Property.create({
      key: "property-no-options",
      sourceId: source.id,
      type: "boolean",
    });
    await property.update({ state: "ready" });

    const firstRun = await Run.findOne({
      where: { creatorId: property.id },
    });
    expect(firstRun).toBeTruthy();
    await firstRun.destroy();

    await property.update({ key: "new-key" });
    const secondRun = await Run.findOne({
      where: { creatorId: property.id },
    });
    expect(secondRun).toBeNull();

    await property.destroy();
    await source.destroy();
    await app.destroy();
  });

  test("options can be set and retrieved", async () => {
    const property = await Property.findOne({ where: { key: "email" } });
    await property.setOptions({ column: "id" });
    const options = await property.getOptions();
    expect(options).toEqual({ column: "id" });
  });

  test("__options only includes options for properties", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const property = await Property.create({
      id: "myPropertyId",
      type: "string",
      name: "test property",
      sourceId: source.id,
    });

    await Option.create({
      ownerId: property.id,
      ownerType: "property",
      key: "column",
      value: "id",
      type: "string",
    });

    await Option.create({
      ownerId: property.id,
      ownerType: "source",
      key: "someOtherProperty",
      value: "someValue",
      type: "string",
    });

    const options = await property.$get("__options");
    expect(options.length).toBe(1);
    expect(options[0].ownerType).toBe("property");
    expect(options[0].key).toBe("column");

    await property.destroy();
    await source.destroy();
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

  test("options will have mustache keys converted to mustache ids", async () => {
    const property = await Property.findOne({ where: { key: "email" } });
    await property.setOptions({
      column: "{{{ email }}}@example.com",
    });
    let options = await property.getOptions();
    expect(options).toEqual({ column: "{{{ email }}}@example.com" }); //appears normal (but formatted) to the user

    const rawOption = await Option.findOne({
      where: { ownerId: property.id },
    });
    expect(rawOption.value).toBe(`{{{ ${property.id} }}}@example.com`);
  });

  test("an array property cannot be used as an option", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const cartsProperty = await Property.create({
      sourceId: source.id,
      key: "carts",
      type: "string",
      isArray: true,
    });
    await cartsProperty.setOptions({ column: "carts" });
    await cartsProperty.update({ state: "ready" });

    const property = await Property.findOne({ where: { key: "email" } });
    await expect(
      property.setOptions({
        column: "{{{carts}}}@example.com",
      })
    ).rejects.toThrow('missing mustache key "carts"');

    await cartsProperty.destroy();
    await source.destroy();
  });

  test("a property cannot be created in the ready state with missing required options", async () => {
    const source = await helper.factories.source();
    const property = Property.build({
      sourceId: source.id,
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
      sourceId: source.id,
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

  test("updating a property's unique property queues a task to update the record properties", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "test table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const property = await Property.create({
      sourceId: source.id,
      key: "thing",
      type: "string",
      unique: false,
    });

    // when unique changes
    await api.resque.queue.connection.redis.flushdb();
    await property.update({ unique: true });
    let foundTasks = await specHelper.findEnqueuedTasks(
      "property:updateRecordProperties"
    );
    expect(foundTasks.length).toBe(1);
    expect(foundTasks[0].args[0].propertyId).toBe(property.id);

    // when something else changes
    await api.resque.queue.connection.redis.flushdb();
    await property.update({ key: "new name" });
    foundTasks = await specHelper.findEnqueuedTasks(
      "property:updateRecordProperties"
    );
    expect(foundTasks.length).toBe(0);

    await property.destroy();
    await source.destroy();
  });

  test("a property cannot be deleted if a calculated group is using it", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const property = await Property.create({
      sourceId: source.id,
      key: "thing",
      type: "string",
      unique: false,
    });
    await property.setOptions({ column: "thing" });
    await property.update({ state: "ready" });

    const group = await helper.factories.group();
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
      sourceId: source.id,
      key: "thing",
      type: "string",
      unique: false,
    });

    await property.setOptions({ column: "abc" });

    await property.destroy(); // doesn't throw
    await source.destroy();

    const optionsCount = await Option.count({
      where: { ownerId: property.id },
    });
    expect(optionsCount).toBe(0);
  });

  test("deleting a property does not delete options for other models with the same id", async () => {
    const source = await helper.factories.source();
    await source.setOptions({ table: "some table" });
    await source.setMapping({ id: "userId" });
    await source.update({ state: "ready" });

    const property = await Property.create({
      sourceId: source.id,
      key: "thing",
      type: "string",
      unique: false,
    });

    await property.setOptions({ column: "abc" });

    const foreignOption = await Option.create({
      ownerId: property.id,
      ownerType: "other",
      key: "someKey",
      value: "someValue",
      type: "string",
    });

    let count = await Option.count({
      where: { ownerId: property.id },
    });
    expect(count).toBe(2);

    await property.destroy();
    const options = await Option.findAll({
      where: { ownerId: property.id },
    });
    expect(options.length).toBe(1);
    expect(options[0].ownerType).toBe("other");
    expect(options[0].key).toBe("someKey");

    await foreignOption.destroy();
    await source.destroy();
  });

  describe("with plugin", () => {
    let app: App;
    let source: Source;
    let queryCounter = 0;

    const propertiesToMoveKeys = Object.freeze([
      "userId",
      "firstName",
      "lastName",
    ]);
    const prevSourceIds: string[] = [];

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            displayName: "test-template-app",
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
            displayName: "import-from-test-app",
            description: "a test app",
            apps: ["test-template-app"],
            direction: "import",
            options: [],
            methods: {
              propertyOptions: async ({ propertyOptions }) => {
                const results = [];

                results.push({
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
                });

                if (propertyOptions?.column === "more") {
                  results.push({
                    key: "extra",
                    required: true,
                    description: "extra stuff",
                    type: "string",
                    options: async () => [],
                  });
                }

                return results;
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
              recordProperty: async ({ property, propertyOptions, record }) => {
                const s = `the time is {{{now.sql}}} + ${JSON.stringify(
                  propertyOptions
                )}`;
                const q = await property.parameterizedQueryFromRecord(
                  s,
                  record
                );

                if (propertyOptions.column?.toString().match(/throw/)) {
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
        appId: app.id,
        modelId: model.id,
      });

      await source.update({ state: "ready" });

      for (const key of propertiesToMoveKeys) {
        const propertyToMove = await Property.findOne({
          where: { key },
        });
        prevSourceIds.push(propertyToMove.sourceId);
        propertyToMove.sourceId = source.id;
        await propertyToMove.save();
      }
    });

    beforeEach(() => {
      queryCounter = 0;
    });

    afterAll(async () => {
      for (const key of propertiesToMoveKeys) {
        const prevSourceId = prevSourceIds.shift();
        const propertyToMove = await Property.findOne({
          where: { key },
        });
        propertyToMove.sourceId = prevSourceId;
        await propertyToMove.save();
      }
    });

    describe("mapped though a non-unique property", () => {
      let property: Property;

      const updateUserIdPropertyUnique = async (unique: boolean) => {
        const userIdProperty = await Property.scope(null).findOne({
          where: { key: "userId" },
        });
        await userIdProperty.update({ unique });
      };

      beforeAll(async () => {
        property = await helper.factories.property(
          source,
          { key: "wordInSpanish" },
          { column: "spanishWord" }
        );
      });

      beforeEach(async () => {
        await property.update({ unique: false, isArray: false });
      });

      afterEach(async () => {
        await source.setMapping({});
        await updateUserIdPropertyUnique(true);
      });

      afterAll(async () => {
        await property.destroy();
      });

      test("properties mapped through unique properties can be unique", async () => {
        await source.setMapping({ id: "userId" });
        await property.update({ unique: true });
        expect((await property.reload()).unique).toEqual(true);
      });

      test("properties mapped through unique properties can be arrays", async () => {
        await source.setMapping({ id: "userId" });
        await property.update({ isArray: true });
        expect((await property.reload()).isArray).toEqual(true);
      });

      test("properties mapped through non-unique properties cannot be unique", async () => {
        await updateUserIdPropertyUnique(false);
        await source.setMapping({ last_name: "lastName" });
        await expect(property.update({ unique: true })).rejects.toThrow(
          /Unique Property .+ cannot be mapped through a non-unique Property/
        );
      });

      test("properties mapped through non-unique properties cannot be arrays", async () => {
        await updateUserIdPropertyUnique(false);
        await source.setMapping({ last_name: "lastName" });
        await expect(property.update({ isArray: true })).rejects.toThrow(
          /Array Property .+ cannot be mapped through a non-unique Property/
        );
      });
    });

    describe("filters", () => {
      test("we can determine if rule's filters have been changed", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await property.setFilters([
          { key: "id", match: "0", op: "greater than" },
        ]);
        const filters = await property.getFilters();

        expect(FilterHelper.filtersAreEqual(filters, [])).toBe(false);
        expect(
          FilterHelper.filtersAreEqual(filters, [
            { key: "id", match: "0", op: "greater than" },
          ])
        ).toBe(true);
        expect(
          FilterHelper.filtersAreEqual(filters, [
            { key: "id", match: "1", op: "greater than" },
          ])
        ).toBe(false);
        expect(
          FilterHelper.filtersAreEqual(filters, [
            { key: "id", match: "0", op: "less than" },
          ])
        ).toBe(false);

        await property.destroy();
      });

      test("it can get the filter options from the plugin", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        const filterOptions = await FilterHelper.pluginFilterOptions(property);
        expect(filterOptions).toEqual([
          {
            key: "id",
            ops: ["greater than", "less than"],
            canHaveRelativeMatch: false,
          },
        ]);

        await property.destroy();
      });

      test("it will memoize filters as they are set", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await property.setFilters([
          { op: "greater than", match: 1, key: "id" },
        ]);

        expect(property.filters.length).toBe(1);
        expect(property.filters[0].op).toBe("greater than");
        expect(property.filters[0].match).toBe("1");
        expect(property.filters[0].key).toBe("id");

        await property.destroy();
      });

      test("it will use memoized filters if they exist", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await property.setFilters([
          { op: "greater than", match: 999, key: "id" },
        ]);

        property.filters = [
          Filter.build({
            propertyId: property.id,
            position: 1,
            key: "foo",
            match: "-1",
            op: "less than",
          }),
        ];

        const filters = await property.getFilters();
        expect(filters.length).toBe(1);
        expect(filters[0].key).toEqual("foo");
        expect(filters[0].match).toEqual("-1");
        expect(filters[0].op).toEqual("less than");

        await property.destroy();
      });

      test("filters that match the options can be set", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
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
        const count = await Filter.count({ where: { ownerType: "property" } });
        expect(count).toBe(0);
      });

      test("filters that do not match the options cannot be set", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
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

    describe("options", () => {
      test.each(["deleted", "ready"])(
        "properties can retrieve their options from the %p source",
        async (state) => {
          const property = await Property.create({
            key: "test",
            type: "string",
            sourceId: source.id,
          });

          await source.update({ state });
          await app.update({ state });

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
          await source.update({ state: "ready" });
          await app.update({ state: "ready" });
        }
      );

      test("creating or editing a property options will test the query against a record", async () => {
        expect(queryCounter).toBe(0);

        const record = await helper.factories.record();
        await record.addOrUpdateProperties({ userId: [1000] });

        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
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
        await record.destroy();
      });

      test("options cannot be saved if they fail testing import against a record", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({ userId: [1000] });

        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await expect(property.setOptions({ column: "throw" })).rejects.toThrow(
          /throw/
        );

        expect(await property.getOptions()).toEqual({});
        await property.destroy();
        await record.destroy();
      });

      test("the property can be tested against the existing options or potential new options", async () => {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({ userId: [1000] });

        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });
        await property.setOptions({ column: "~" });
        await property.update({ state: "ready" });

        await record.addOrUpdateProperties({ test: [true] });

        // against saved query
        const response = await property.test();
        expect(response[0]).toMatch(`+ {"column":"~"}`);

        // against new query
        const responseAgain = await property.test({ column: "abc" });
        expect(responseAgain[0]).toMatch('+ {"column":"abc"}');

        await record.destroy();
        await property.destroy();
      });

      test("options will be dynamically validated", async () => {
        const property = await Property.create({
          key: "test-with-extra",
          type: "string",
          sourceId: source.id,
        });
        await expect(property.setOptions({ column: "more" })).rejects.toThrow(
          /extra is required for a property/
        );
        await expect(property.update({ state: "ready" })).rejects.toThrow();
      });

      test("apiData will include the options", async () => {
        const property = await Property.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });
        await property.setOptions({ column: "id" });

        const apiData = await property.apiData();
        expect(apiData.options).toEqual({ column: "id" });
        await property.destroy();
      });
    });

    test("apiData will include the source", async () => {
      const property = await Property.create({
        key: "test",
        type: "string",
        sourceId: source.id,
      });

      const apiData = await property.apiData();
      expect(apiData.sourceId).toEqual(source.id);
      await property.destroy();
    });
  });
});
