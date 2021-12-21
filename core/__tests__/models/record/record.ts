import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import {
  plugin,
  GrouparooRecord,
  RecordProperty,
  Property,
  Group,
  GroupMember,
  App,
  Source,
  Log,
  GrouparooModel,
} from "../../../src";
import { RecordOps } from "../../../src/modules/ops/record";

function simpleRecordValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleRecordProperties = {};
  keys.forEach((key) => {
    simpleRecordProperties[key] = complexProfileValues[key].values;
  });
  return simpleRecordProperties;
}

describe("models/record", () => {
  let model: GrouparooModel;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => {
    model = await helper.factories.model();
  });

  test("a record can be created", async () => {
    const record = new GrouparooRecord({ modelId: model.id });

    await record.save();

    expect(record.id.length).toBe(40);
    expect(record.createdAt).toBeTruthy();
    expect(record.updatedAt).toBeTruthy();
  });

  it("records can retrieve related log messages with custom messages", async () => {
    const record = await GrouparooRecord.findOne();
    const logs = await record.$get("logs");
    expect(logs.length).toBe(1);
    expect(logs[0].topic).toBe("grouparooRecord");
    expect(logs[0].verb).toBe("create");
    expect(logs[0].message).toBe("record created");
  });

  it("deleting a record creates a custom log messages", async () => {
    const record = await GrouparooRecord.create({ modelId: model.id });
    await record.destroy();
    const logs = await record.$get("logs", { order: [["createdAt", "asc"]] });
    expect(logs.length).toBe(2);
    expect(logs[1].topic).toBe("grouparooRecord");
    expect(logs[1].verb).toBe("destroy");
    expect(logs[1].message).toBe("record destroyed");
  });

  test("records require a valid modelId", async () => {
    expect(GrouparooRecord.create()).rejects.toThrow(/modelId cannot be null/);
    expect(GrouparooRecord.create({ modelId: "foo" })).rejects.toThrow(
      /cannot find model with id "foo"/
    );
  });

  test("records cannot change models", async () => {
    const record = await GrouparooRecord.create({ modelId: model.id });
    await expect(record.update({ modelId: "foo" })).rejects.toThrow(
      /cannot change models/
    );

    await record.destroy();
  });

  describe("findOrCreateByUniqueRecordProperties", () => {
    let source: Source;
    let toad: GrouparooRecord;
    let emailProperty: Property;
    let userIdProperty: Property;
    let colorProperty: Property;
    let houseProperty: Property;

    beforeAll(async () => {
      await GrouparooRecord.truncate();

      source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      emailProperty = await Property.create({
        sourceId: source.id,
        key: "email",
        type: "email",
        unique: true,
      });
      await emailProperty.setOptions({ column: "email" });
      await emailProperty.update({ state: "ready" });

      colorProperty = await Property.create({
        sourceId: source.id,
        key: "color",
        type: "string",
        unique: false,
      });
      await colorProperty.setOptions({ column: "color" });
      await colorProperty.update({ state: "ready" });

      houseProperty = await Property.create({
        sourceId: source.id,
        key: "house",
        type: "string",
        unique: false,
      });
      await houseProperty.setOptions({ column: "house" });
      await houseProperty.update({ state: "ready" });

      const record = await GrouparooRecord.create({ modelId: model.id });
      await record.addOrUpdateProperties({
        email: ["toad@example.com"],
        color: ["orange"],
      });

      toad = record;
    });

    afterAll(async () => {
      await source.setMapping({});
      await toad.destroy();
      await userIdProperty.destroy();
      await emailProperty.destroy();
      await colorProperty.destroy();
      await houseProperty.destroy();
      await source.destroy();
    });

    test("it can find the record via email", async () => {
      const { record, isNew } =
        await RecordOps.findOrCreateByUniqueRecordProperties({
          email: ["toad@example.com"],
          color: ["orange"],
        });

      expect(isNew).toBe(false);
      expect(record.id).toBe(toad.id);
    });

    test("it cannot find the record by color and will create a new one", async () => {
      const { record, isNew } =
        await RecordOps.findOrCreateByUniqueRecordProperties(
          {
            email: ["luigi@example.com"],
            color: ["green"],
          },
          source
        );

      expect(isNew).toBe(true);
      expect(record.id).not.toBe(toad.id);
    });

    test("it will throw an error if no unique record properties are included", async () => {
      await expect(
        RecordOps.findOrCreateByUniqueRecordProperties(
          {
            color: ["orange"],
          },
          source
        )
      ).rejects.toThrow(
        'there are no unique record properties provided in {"color":["orange"]}'
      );
    });

    test("it will lock when creating new records so duplicate records are not created", async () => {
      const responseA = await RecordOps.findOrCreateByUniqueRecordProperties(
        {
          email: ["bowser@example.com"],
          color: ["green"],
        },
        source
      );

      const responseB = await RecordOps.findOrCreateByUniqueRecordProperties(
        {
          email: ["bowser@example.com"],
          house: ["castle"],
        },
        source
      );

      expect(responseA.record.id).toEqual(responseB.record.id);
      expect(responseA.isNew).toBe(true);
      expect(responseB.isNew).toBe(false);
    });

    test("it will merge overlapping unique properties and not store non-unique properties", async () => {
      const responseA = await RecordOps.findOrCreateByUniqueRecordProperties(
        {
          email: ["koopa@example.com"],
          userId: [99],
        },
        source
      );

      const responseB = await RecordOps.findOrCreateByUniqueRecordProperties(
        {
          userId: [99],
          house: ["castle"],
        },
        source
      );

      expect(responseA.record.id).toEqual(responseB.record.id);
      expect(responseA.isNew).toBe(true);
      expect(responseB.isNew).toBe(false);

      const record = responseB.record;
      const properties = await record.getProperties();
      expect(properties.email.values).toEqual(["koopa@example.com"]);
      expect(properties.userId.values).toEqual([99]);
      expect(properties.house.values).toEqual([null]);
      expect(properties.house.values).toEqual([null]);
    });

    test("cannot create a new record without a source or override", async () => {
      await expect(
        RecordOps.findOrCreateByUniqueRecordProperties({
          email: ["yoshi@example.com"],
        })
      ).rejects.toThrow(
        'could not create a new record because no record property in {"email":["yoshi@example.com"]} is unique and owned by the source'
      );

      await expect(
        RecordOps.findOrCreateByUniqueRecordProperties(
          { email: ["yoshi@example.com"] },
          false
        )
      ).rejects.toThrow(
        'could not create a new record because no record property in {"email":["yoshi@example.com"]} is unique and owned by the source'
      );
    });

    test("properties will include the value, type, unique, and timestamps", async () => {
      const properties = await toad.getProperties();
      expect(properties.email.type).toBe("email");
      expect(properties.email.unique).toBe(true);
      expect(properties.email.values[0]).toBe("toad@example.com");
      expect(properties.email.createdAt).toBeTruthy();
      expect(properties.email.updatedAt).toBeTruthy();
    });
  });

  describe("record property helpers", () => {
    let record: GrouparooRecord;
    beforeAll(async () => {
      await GrouparooRecord.truncate();
    });

    test("it cannot add a record property that is not defined", async () => {
      record = new GrouparooRecord({ modelId: model.id });
      await record.save();
      await expect(
        record.addOrUpdateProperties({ email: ["luigi@example.com"] })
      ).rejects.toThrow("cannot find a property for id or key `email`");
      await record.destroy();
    });

    describe("with properties", () => {
      let source: Source;

      beforeAll(async () => {
        source = await helper.factories.source();
        await source.setOptions({ table: "test table" });
        await source.bootstrapUniqueProperty("userId", "integer", "id");
        await source.setMapping({ id: "userId" });
        await source.update({ state: "ready" });

        const emailProperty = await Property.create({
          sourceId: source.id,
          key: "email",
          type: "string",
        });
        await emailProperty.setOptions({ column: "email" });
        await emailProperty.update({ state: "ready" });

        const firstNameProperty = await Property.create({
          sourceId: source.id,
          key: "firstName",
          type: "string",
        });
        await firstNameProperty.setOptions({ column: "firstName" });
        await firstNameProperty.update({ state: "ready" });

        const lastNameProperty = await Property.create({
          sourceId: source.id,
          key: "lastName",
          type: "string",
        });
        await lastNameProperty.setOptions({ column: "lastName" });
        await lastNameProperty.update({ state: "ready" });

        const colorProperty = await Property.create({
          sourceId: source.id,
          key: "color",
          type: "string",
        });
        await colorProperty.setOptions({ column: "color" });
        await colorProperty.update({ state: "ready" });
      });

      beforeAll(async () => {
        record = new GrouparooRecord({ modelId: model.id });
        await record.save();
      });

      afterAll(async () => {
        await source.setMapping({});
        await Property.truncate();
        await source.destroy();
      });

      test("creating a record creates null record properties", async () => {
        const newProfile = await GrouparooRecord.create({
          modelId: model.id,
        });
        const properties = await newProfile.getProperties();
        expect(Object.keys(properties).length).toBe(5);
        for (const k in properties) {
          expect(properties[k].values).toEqual([null]);
          expect(properties[k].state).toEqual("pending");
        }
      });

      test("a record can be marked as pending and it's properties will be marked as pending as well", async () => {
        const newProfile = await GrouparooRecord.create({
          modelId: model.id,
        });
        await RecordProperty.update(
          { state: "ready" },
          { where: { recordId: newProfile.id } }
        );
        await newProfile.update({ state: "ready" });

        await newProfile.markPending();
        await newProfile.reload();

        expect(newProfile.state).toBe("pending");
        const properties = await newProfile.getProperties();
        for (const k in properties) {
          expect(properties[k].state).toEqual("pending");
          expect(properties[k].startedAt).toBeNull();
        }
      });

      test("it can add a new record property when the schema is prepared", async () => {
        await record.addOrUpdateProperties({ email: ["luigi@example.com"] });
        const properties = await record.getProperties();
        expect(simpleRecordValues(properties)).toEqual({
          email: ["luigi@example.com"],
          firstName: [null],
          lastName: [null],
          userId: [null],
          color: [null],
        });
      });

      test("adding values to record properties moves them to the ready state", async () => {
        await RecordProperty.update(
          { state: "pending" },
          { where: { recordId: record.id } }
        );

        await record.addOrUpdateProperties({ email: ["luigi@example.com"] });
        const properties = await record.getProperties();
        expect(properties.email.state).toBe("ready");
        expect(properties.firstName.state).toBe("pending");
      });

      test("record cannot transition to ready state until all properties are ready", async () => {
        await RecordProperty.update(
          { state: "pending" },
          { where: { recordId: record.id } }
        );

        await expect(record.update({ state: "ready" })).rejects.toThrow(
          /cannot transition record .* to ready state as not all properties are ready/
        );
      });

      test("record can transition to ready state if all properties are ready", async () => {
        await RecordProperty.update(
          { state: "ready" },
          { where: { recordId: record.id } }
        );

        await record.update({ state: "ready" }); // does not throw
      });

      describe("record property timestamps (non-array)", () => {
        test("changing a value sets valueChangedAt and confirmedAt", async () => {
          const start = new Date().getTime();
          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            email: ["new-email@example.com"],
          });
          const properties = await record.getProperties();
          expect(properties.email.valueChangedAt.getTime()).toBeGreaterThan(
            start
          );
          expect(properties.email.confirmedAt.getTime()).toBeGreaterThan(start);
        });

        test("updating with the same value only sets confirmedAt", async () => {
          const start = new Date().getTime();
          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            email: ["new-email@example.com"],
          });
          const properties = await record.getProperties();
          expect(properties.email.valueChangedAt.getTime()).toBeLessThan(start);
          expect(properties.email.confirmedAt.getTime()).toBeGreaterThan(start);
        });

        test("changing state sets stateChangedAt", async () => {
          await RecordProperty.update(
            { state: "pending" },
            { where: { recordId: record.id } }
          );
          const start = new Date().getTime();
          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            email: ["new-email@example.com"],
          });
          const properties = await record.getProperties();
          expect(properties.email.stateChangedAt.getTime()).toBeGreaterThan(
            start
          );
        });
      });

      describe("record property timestamps (array)", () => {
        let purchasesProperty: Property;

        beforeAll(async () => {
          purchasesProperty = await Property.create({
            sourceId: source.id,
            key: "purchases",
            type: "string",
            isArray: true,
          });
          await purchasesProperty.setOptions({ column: "purchases" });
          await purchasesProperty.update({ state: "ready" });
        });

        afterAll(async () => {
          if (purchasesProperty) await purchasesProperty.destroy();
        });

        test("changing a value sets valueChangedAt and confirmedAt", async () => {
          const start = new Date().getTime();
          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            purchases: ["hat"],
          });
          let properties = await record.getProperties();
          expect(properties.purchases.valueChangedAt.getTime()).toBeGreaterThan(
            start
          );
          const firstChangeAt = properties.purchases.valueChangedAt.getTime();
          expect(properties.purchases.confirmedAt.getTime()).toBeGreaterThan(
            start
          );

          await record.addOrUpdateProperties({
            purchases: ["hat", "mushroom"],
          });
          properties = await record.getProperties();
          expect(properties.purchases.valueChangedAt.getTime()).toBeGreaterThan(
            firstChangeAt
          );
        });

        test("updating with the same value only sets confirmedAt", async () => {
          const start = new Date().getTime();
          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            purchases: ["hat", "mushroom"],
          });
          const properties = await record.getProperties();
          expect(properties.purchases.valueChangedAt.getTime()).toBeLessThan(
            start
          );
          expect(properties.purchases.confirmedAt.getTime()).toBeGreaterThan(
            start
          );
        });

        test("changing state sets stateChangedAt", async () => {
          await RecordProperty.update(
            { state: "pending" },
            { where: { recordId: record.id } }
          );
          const start = new Date().getTime();
          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            purchases: ["hat", "mushroom"],
          });
          const properties = await record.getProperties();
          expect(properties.purchases.stateChangedAt.getTime()).toBeGreaterThan(
            start
          );
        });
      });

      describe("record property lifecycle", () => {
        test("it can add properties in bulk with proper timestamps", async () => {
          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
          });

          const properties = await record.getProperties();
          expect(simpleRecordValues(properties)).toEqual({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
          });

          expect(record.createdAt.getTime()).toBeLessThan(
            properties.color.createdAt.getTime()
          );
          expect(record.updatedAt.getTime()).toBeLessThan(
            properties.color.updatedAt.getTime()
          );
        });

        test("it can update an existing property", async () => {
          await record.addOrUpdateProperties({
            email: ["luigi-again@example.com"],
          });
          const properties = await record.getProperties();
          expect(simpleRecordValues(properties)).toEqual({
            email: ["luigi-again@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
          });
        });

        test("it will ignore the property _meta, as it is reserved", async () => {
          await record.addOrUpdateProperties({ _meta: ["bla"] });
          const properties = await record.getProperties();
          expect(simpleRecordValues(properties)._meta).toBeFalsy();
          expect(simpleRecordValues(properties).firstName).toEqual(["Luigi"]);
        });

        test("it can remove an existing property", async () => {
          await record.removeProperty("email");
          const properties = await record.getProperties();
          expect(properties["email"]).toBeUndefined();
          expect(simpleRecordValues(properties)).toEqual({
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
          });
        });

        test("no problems arise when re-adding a deleted property", async () => {
          let properties = await record.getProperties();
          expect(properties.email).toBeUndefined();
          await record.addOrUpdateProperties({ email: ["luigi@example.com"] });
          properties = await record.getProperties();
          expect(properties.email.values).toEqual(["luigi@example.com"]);
        });

        test("it will not raise when trying to remove a non-existent property", async () => {
          await record.removeProperty("funky");
          const properties = await record.getProperties();
          expect(simpleRecordValues(properties)).toEqual({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
          });
        });

        test("record properties can be addded by key", async () => {
          await record.addOrUpdateProperties({ email: ["luigi@example.com"] });
          const properties = await record.getProperties();
          expect(simpleRecordValues(properties).email).toEqual([
            "luigi@example.com",
          ]);
        });

        test("record properties can be addded by id", async () => {
          const emailProperty = await Property.findOne({
            where: { key: "email" },
          });
          await record.addOrUpdateProperties({
            [emailProperty.id]: ["luigi@example.com"],
          });

          const properties = await record.getProperties();
          expect(simpleRecordValues(properties).email).toEqual([
            "luigi@example.com",
          ]);
        });

        test("orphan record properties will be removed", async () => {
          await record.reload();

          const recordProperty = await RecordProperty.create(
            {
              id: "rule_missing",
              recordId: record.id,
              propertyId: "missing",
              rawValue: "green-hat",
              position: 0,
            },
            //@ts-ignore
            { hooks: false } // we need to skip validations
          );

          const properties = await record.getProperties(); // does not throw
          expect(Object.keys(properties).length).toBe(5);

          await expect(recordProperty.reload()).rejects.toThrow(
            /does not exist anymore/
          );
        });

        test("deleting the record also deletes the properties", async () => {
          const beforeCount = await RecordProperty.count({
            where: { recordId: record.id },
          });
          expect(beforeCount).toBe(5);
          await record.destroy();
          const afterCount = await RecordProperty.count({
            where: { recordId: record.id },
          });
          expect(afterCount).toBe(0);
        });
      });

      describe("array properties", () => {
        let purchasesProperty: Property;

        beforeAll(async () => {
          const purchasesProperty = await Property.create({
            sourceId: source.id,
            key: "purchases",
            type: "string",
            isArray: true,
          });
          await purchasesProperty.setOptions({ column: "purchases" });
          await purchasesProperty.update({ state: "ready" });
        });

        afterAll(async () => {
          if (purchasesProperty) await purchasesProperty.destroy();
        });

        test("multiple values can be set for array properties and the order is maintained", async () => {
          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const properties = await record.getProperties();
          expect(simpleRecordValues(properties)).toEqual({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
        });

        test("when array properties are the same, they will have bumped timestamps", async () => {
          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const firstProperties = await record.getProperties();
          const firstUpdate = firstProperties.purchases.updatedAt;

          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const secondProperties = await record.getProperties();
          expect(
            secondProperties.purchases.updatedAt.getTime()
          ).toBeGreaterThanOrEqual(firstUpdate.getTime());
        });

        test("when any array property has changed, they will all be updated", async () => {
          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const firstProperties = await record.getProperties();
          const firstUpdate = firstProperties.purchases.updatedAt;

          await helper.sleep(1000);

          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["go kart"],
          });
          const secondProperties = await record.getProperties();
          expect(
            secondProperties.purchases.updatedAt.getTime()
          ).toBeGreaterThan(firstUpdate.getTime());
        });

        test("array property length can grow and shrink", async () => {
          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const firstProperties = await record.getProperties();
          expect(firstProperties.purchases.values).toEqual([
            "star",
            "mushroom",
            "mushroom",
            "go kart",
          ]);

          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star"],
          });
          const secondProperties = await record.getProperties();
          expect(secondProperties.purchases.values).toEqual(["star"]);

          await record.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom"],
          });
          const thirdProperties = await record.getProperties();
          expect(thirdProperties.purchases.values).toEqual([
            "star",
            "mushroom",
            "mushroom",
          ]);
        });

        test("other record properties do not accept array values", async () => {
          await expect(
            record.addOrUpdateProperties({
              firstName: ["Luigi"],
              lastName: ["Mario"],
              color: ["green", "blue", "red"],
              userId: [123],
            })
          ).rejects.toThrow(
            /cannot set multiple record properties for a non-array property/
          );
        });
      });
    });
  });

  describe("with a group", () => {
    let group: Group;
    let record: GrouparooRecord;
    let app: App;
    let source: Source;
    let emailProperty: Property;

    beforeAll(async () => {
      await GrouparooRecord.truncate();

      app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });
      await app.setOptions({ fileId: "abc123" });
      await app.update({ state: "ready" });

      source = await Source.create({
        appId: app.id,
        name: "test import source",
        type: "test-plugin-import",
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      emailProperty = await Property.create({
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: true,
      });
      await emailProperty.setOptions({ column: "email" });
      await emailProperty.update({ state: "ready" });

      group = await helper.factories.group({
        name: "calculated-group",
      });

      record = await GrouparooRecord.create({ modelId: model.id });
      await record.addOrUpdateProperties({
        email: ["mario@example.com"],
      });
    });

    afterAll(async () => {
      const members = await group.$get("groupMembers");
      for (const m of members) await m.destroy();
      await group.destroy();
      await source.setMapping({});
      for (const property of await Property.findAll()) await property.destroy();
      await source.destroy();
      await app.destroy();
    });

    describe("#updateGroupMembership", () => {
      test("records can re-calculate their group memberships", async () => {
        let members = await group.$get("groupMembers");
        expect(members.length).toBe(0);

        await group.update({ matchType: "all" });
        await group.setRules([
          { key: "email", match: "%@example.com", operation: { op: "like" } },
        ]);

        const groupMemberships = await record.updateGroupMembership();
        expect(groupMemberships[group.id]).toBe(true);

        members = await group.$get("groupMembers");
        expect(members.length).toBe(1);
        expect(members[0].recordId).toBe(record.id);
      });
    });
  });

  describe("#import", () => {
    let emailProperty: Property;
    let colorProperty: Property;
    let app: App;
    let source: Source;

    let importResult: { [table: string]: { [mappingValue: string]: any } } = {};

    beforeAll(async () => {
      await GrouparooRecord.truncate();

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
            name: "import-from-test-template-app",
            displayName: "import-from-test-template-app",
            description: "a test app connection",
            apps: ["test-template-app"],
            direction: "import" as "import",
            options: [{ key: "table", required: true }],
            methods: {
              recordProperty: async ({
                property,
                sourceOptions,
                sourceMapping,
                record,
              }) => {
                const table = sourceOptions.table.toString();
                const recordProperties = await record.simplifiedProperties();
                const mappingKey = Object.values(sourceMapping)[0];
                const mappingVal =
                  recordProperties[mappingKey].length > 0 &&
                  recordProperties[mappingKey][0]?.toString();

                return mappingVal &&
                  importResult[table] &&
                  importResult[table][mappingVal]
                  ? importResult[table][mappingVal][property.key]
                  : undefined;
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app",
        type: "test-template-app",
        options: {},
        state: "ready",
      });

      source = await Source.create({
        appId: app.id,
        name: "test import source",
        type: "import-from-test-template-app",
        modelId: model.id,
      });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setOptions({ table: "users" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      emailProperty = await Property.create({
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: true,
      });

      colorProperty = await Property.create({
        sourceId: source.id,
        key: "color",
        type: "string",
        unique: false,
      });

      await emailProperty.update({ state: "ready" });
      await colorProperty.update({ state: "ready" });
    });

    afterAll(async () => {
      await Property.truncate();
      await Source.truncate();
      await App.truncate();
    });

    test("it can pull record properties in from all connected apps", async () => {
      const record = await GrouparooRecord.create({ modelId: model.id });
      await record.addOrUpdateProperties({ userId: [1001] });
      await record.addOrUpdateProperties({ email: ["peach@example.com"] });
      let properties = await record.getProperties();
      expect(simpleRecordValues(properties)).toEqual({
        userId: [1001],
        email: ["peach@example.com"],
        color: [null],
      });

      importResult = {
        users: {
          "1001": {
            userId: [1001],
            email: ["peach@example.com"],
            color: ["pink"],
          },
        },
      };
      await record.import();

      properties = await record.getProperties();
      expect(simpleRecordValues(properties)).toEqual({
        userId: [1001],
        email: ["peach@example.com"],
        color: ["pink"],
      });
    });

    test("importing properties for source that doesn't support direct property imports will keep the old value", async () => {
      const record = await GrouparooRecord.create({ modelId: model.id });
      await record.addOrUpdateProperties({
        userId: [1003],
        email: ["bowser@example.com"],
        color: ["green"],
      });
      let properties = await record.getProperties();
      expect(Object.keys(properties).sort()).toEqual([
        "color",
        "email",
        "userId",
      ]);

      const connection = api.plugins.plugins.filter(
        (p) => p.name === "test-plugin"
      )[0].connections[0];
      const oldMethod = connection.methods.recordProperty;
      delete connection.methods.recordProperty;

      await record.import();

      properties = await record.getProperties();
      const pendingProperties = Object.values(properties).filter(
        (v) => v.state === "pending"
      );
      expect(pendingProperties.length).toBe(0);
      expect(simpleRecordValues(properties)).toEqual({
        userId: [1003],
        email: ["bowser@example.com"],
        color: ["green"],
      });

      connection.methods.recordProperty = oldMethod;
    });

    test("after importing, all missing properties will have created a null record property", async () => {
      const record = await GrouparooRecord.create({ modelId: model.id });
      await record.addOrUpdateProperties({ userId: [1002] });
      let properties = await record.getProperties();
      expect(Object.keys(properties).sort()).toEqual([
        "color",
        "email",
        "userId",
      ]);

      importResult = {
        users: {
          "1002": {
            userId: [1002],
            color: ["pink"],
          },
        },
      };
      await record.import();

      properties = await record.getProperties();
      const pendingProperties = Object.values(properties).filter(
        (v) => v.state === "pending"
      );
      expect(pendingProperties.length).toBe(0);

      expect(simpleRecordValues(properties)).toEqual({
        userId: [1002],
        email: [null],
        color: ["pink"],
      });
    });

    describe("with a dependent source", () => {
      let purchasesTable: Source;
      let daisyProfile: GrouparooRecord;

      beforeAll(async () => {
        purchasesTable = await Source.create({
          appId: app.id,
          name: "test import purchases source",
          type: "import-from-test-template-app",
          modelId: model.id,
        });
        await purchasesTable.setOptions({ table: "purchases" });
        await purchasesTable.setMapping({ user_id: "userId" });
        await purchasesTable.update({ state: "ready" });

        const purchasesCountProperty = await Property.create({
          key: "myPurchasesCount",
          type: "integer",
          unique: false,
          sourceId: purchasesTable.id,
        });
        await purchasesCountProperty.update({ state: "ready" });
      });

      test("properties from a dependent source can be imported at the same time", async () => {
        const record = await GrouparooRecord.create({
          modelId: model.id,
        });
        await record.addOrUpdateProperties({ userId: [1010] });
        let properties = await record.getProperties();
        expect(simpleRecordValues(properties)).toEqual({
          userId: [1010],
          email: [null],
          color: [null],
          myPurchasesCount: [null],
        });

        importResult = {
          users: {
            "1010": {
              userId: [1010],
              email: ["daisy@example.com"],
              color: ["pink"],
            },
          },
          purchases: {
            "1010": {
              myPurchasesCount: [2020],
            },
          },
        };
        await record.markPending();
        await record.import();

        properties = await record.getProperties();
        expect(simpleRecordValues(properties)).toEqual({
          userId: [1010],
          email: ["daisy@example.com"],
          color: ["pink"],
          myPurchasesCount: [2020],
        });

        daisyProfile = record;
      });

      test("properties from a dependent source can be cleared at the same time if the mapping is gone", async () => {
        const record = daisyProfile;
        let properties = await record.getProperties();
        expect(simpleRecordValues(properties)).toEqual({
          userId: [1010],
          email: ["daisy@example.com"],
          color: ["pink"],
          myPurchasesCount: [2020],
        });

        importResult = {
          users: {
            // daisy is gone
          },
          purchases: {
            "1010": {
              // related row still here
              myPurchasesCount: [2020],
            },
          },
        };
        await record.markPending();
        await record.import();

        properties = await record.getProperties();
        expect(simpleRecordValues(properties)).toEqual({
          userId: [null],
          email: [null],
          color: [null],
          myPurchasesCount: [null],
        });
      });
    });
  });

  describe("merging", () => {
    let recordA: GrouparooRecord;
    let recordB: GrouparooRecord;

    beforeAll(async () => {
      await GrouparooRecord.truncate();
      await helper.factories.properties(model.id);

      // create the records
      recordA = await helper.factories.record();
      await recordA.import();

      recordB = await helper.factories.record();
      await recordB.import();

      // disable the test plugin import so we can explicitly set record properties
      helper.disableTestPluginImport();
    });

    afterAll(async () => {
      await Property.truncate();
      await Source.truncate();
      await App.truncate();
    });

    test("the records both have properties", async () => {
      const propertiesA = await recordA.getProperties();
      const propertiesB = await recordB.getProperties();
      expect(Object.keys(propertiesA).length).toBe(9);
      expect(Object.keys(propertiesB).length).toBe(9);
    });

    test("record A has newer email, record B has newer userId, record B has a newer ltv but it is null", async () => {
      await recordA.addOrUpdateProperties({ ltv: [123.45] });
      await recordB.addOrUpdateProperties({ userId: [100] });
      await recordB.addOrUpdateProperties({ firstName: ["fname"] });

      // bump the updatedAt time for the email record property, even though they remain null
      await helper.sleep(1001);
      await recordA.addOrUpdateProperties({
        email: ["new-email@example.com"],
      });

      const propertiesA = await recordA.getProperties();
      const propertiesB = await recordB.getProperties();

      expect(propertiesA.email.values).toEqual(["new-email@example.com"]);
      expect(propertiesA.userId.values).toBeTruthy();
      expect(propertiesA.firstName.values).toEqual(["Mario"]);
      expect(propertiesA.ltv.values).toEqual([123.45]);

      expect(propertiesB.email.values).toBeTruthy();
      expect(propertiesB.userId.values).toEqual([100]);
      expect(propertiesB.firstName.values).toEqual(["fname"]);
      expect(propertiesB.ltv.values).toEqual([100]);

      expect(propertiesA.email.updatedAt.getTime()).toBeGreaterThan(
        propertiesB.email.updatedAt.getTime()
      );
    });

    test("record A and B each have different purchases", async () => {
      await recordA.addOrUpdateProperties({ purchases: ["hat"] });
      await recordB.addOrUpdateProperties({ purchases: ["shoe"] });
    });

    test("merging records moved the properties", async () => {
      await RecordOps.merge(recordA, recordB);

      const propertiesA = await recordA.getProperties();
      const propertiesB = await recordB.getProperties();
      expect(Object.keys(propertiesA).length).toBe(9);
      expect(Object.keys(propertiesB).length).toBe(0);
    });

    test("the merged record kept the newer non-null properties", async () => {
      const properties = await recordA.getProperties();
      expect(properties.email.values).toEqual(["new-email@example.com"]);
      expect(properties.userId.values).toEqual([100]);
      expect(properties.firstName.values).toEqual(["fname"]);
      expect(properties.ltv.values).toEqual([123.45]);
    });

    test("the merged records should have only kept the array properties of the newest record property", async () => {
      // we can't be sure of the array-order for the combined records.  A re-import should be deterministic too
      const propertiesA = await recordA.getProperties();
      expect(propertiesA.purchases.values).toEqual(["shoe"]);
    });

    test("the merged record is pending", async () => {
      await recordA.reload();
      expect(recordA.state).toBe("pending");
      const properties = await recordA.getProperties();
      for (const k in properties) {
        expect(properties[k].state).toBe("pending");
      }
    });

    test("the merged record has a log entry about the merge", async () => {
      const logs = await Log.findAll({
        where: { ownerId: recordA.id, verb: "merge" },
      });
      expect(logs.length).toEqual(1);
      expect(logs[0].message).toEqual(`merged with record ${recordB.id}`);
    });

    test("after merging the other record is deleted", async () => {
      await expect(recordB.reload()).rejects.toThrow(/does not exist/);
      const records = await GrouparooRecord.findAll();
      expect(records.length).toBe(1);
    });
  });
});
