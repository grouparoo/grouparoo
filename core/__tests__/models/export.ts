import { helper } from "@grouparoo/spec-helper";
import {
  Destination,
  GrouparooRecord,
  Export,
  RecordProperty,
} from "../../src";
import { Op } from "sequelize";

describe("models/export", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let destination: Destination;
  let record: GrouparooRecord;
  let _export: Export;

  beforeAll(async () => {
    await helper.factories.properties();
    destination = await helper.factories.destination();
    record = await helper.factories.record();
  });

  test("an export can be created and saved with both single-value and array properties", async () => {
    const oldRecordProperties = {
      string: { type: "string", rawValue: "name" },
      email: { type: "email", rawValue: "oldEmail" },
      integer: { type: "integer", rawValue: "1" },
      float: { type: "float", rawValue: "1.1" },
      date: { type: "date", rawValue: "1" },
      phoneNumber: { type: "phoneNumber", rawValue: "+1 412 897 0001" },
    };
    const newRecordProperties = {
      string: { type: "string", rawValue: ["full", "name"] },
      email: { type: "email", rawValue: ["oldEmail", "newEmail"] },
      integer: { type: "integer", rawValue: ["1", "2"] },
      float: { type: "float", rawValue: ["1.1", "2.2"] },
      date: { type: "date", rawValue: ["1", "2"] },
      phoneNumber: {
        type: "phoneNumber",
        rawValue: ["+1 412 897 0001", "+1 412 897 0002"],
      },
    };
    const oldGroups = [];
    const newGroups = ["cool-people"];

    _export = await Export.create({
      destinationId: destination.id,
      recordId: record.id,
      startedAt: new Date(),
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      state: "complete",
    });
  });

  test("export apiData includes the destination name", async () => {
    const apiData = await _export.apiData();
    expect(apiData.destinationName).toBe(destination.name);
  });

  test("an export can be deserialized returning Grouparoo types", async () => {
    const _export = await Export.findOne();
    expect(_export.oldRecordProperties).toEqual({
      string: "name",
      email: "oldEmail",
      date: new Date(1),
      float: 1.1,
      integer: 1,
      phoneNumber: "+1 412 897 0001",
    });
    expect(_export.newRecordProperties).toEqual({
      string: ["full", "name"],
      email: ["oldEmail", "newEmail"],
      date: [new Date(1), new Date(2)],
      float: [1.1, 2.2],
      integer: [1, 2],
      phoneNumber: ["+1 412 897 0001", "+1 412 897 0002"],
    });
    expect(_export.oldGroups).toEqual([]);
    expect(_export.newGroups).toEqual(["cool-people"]);
  });

  test("exports with the old serialization will not throw but assume every property is a string", async () => {
    const oldRecordProperties = {
      string: "name",
      email: "oldEmail",
      integer: 1,
      float: 1.1,
      date: new Date(1).toISOString(),
      phoneNumber: "+1 412 897 0001",
    };
    const newRecordProperties = {
      string: ["full", "name"],
      email: ["oldEmail", "newEmail"],
      integer: [1, 2],
      float: [1.1, 2.2],
      date: [new Date(1).toISOString(), new Date(2).toISOString()],
      phoneNumber: ["+1 412 897 0001", "+1 412 897 0002"],
    };
    const oldGroups = [];
    const newGroups = ["cool-people"];

    const oldExport = await Export.create({
      destinationId: destination.id,
      recordId: record.id,
      startedAt: new Date(),
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      state: "complete",
    });

    expect(oldExport.oldRecordProperties).toEqual({
      string: "name",
      email: "oldEmail",
      date: "1970-01-01T00:00:00.001Z",
      float: 1.1,
      integer: 1,
      phoneNumber: "+1 412 897 0001",
    });
    expect(oldExport.newRecordProperties).toEqual({
      string: ["full", "name"],
      email: ["oldEmail", "newEmail"],
      date: ["1970-01-01T00:00:00.001Z", "1970-01-01T00:00:00.002Z"],
      float: [1.1, 2.2],
      integer: [1, 2],
      phoneNumber: ["+1 412 897 0001", "+1 412 897 0002"],
    });
    expect(oldExport.oldGroups).toEqual([]);
    expect(oldExport.newGroups).toEqual(["cool-people"]);

    await oldExport.destroy();
  });

  test("export serialization is OK with null values with types", async () => {
    const oldRecordProperties = {
      string: { type: "string", rawValue: null },
      email: { type: "email", rawValue: null },
      integer: { type: "integer", rawValue: null },
      float: { type: "float", rawValue: null },
      date: { type: "date", rawValue: null },
      phoneNumber: { type: "phoneNumber", rawValue: null },
    };
    const newRecordProperties = {
      string: { type: "string", rawValue: [null, null] },
      email: { type: "email", rawValue: [null, null] },
      integer: { type: "integer", rawValue: [null, null] },
      float: { type: "float", rawValue: [null, null] },
      date: { type: "date", rawValue: [null, null] },
      phoneNumber: {
        type: "phoneNumber",
        rawValue: [null, null],
      },
    };

    const nullExport = await Export.create({
      destinationId: destination.id,
      recordId: record.id,
      startedAt: new Date(),
      oldRecordProperties,
      newRecordProperties,
      oldGroups: [],
      newGroups: [],
      state: "complete",
    });

    expect(nullExport.oldRecordProperties).toEqual({
      string: null,
      email: null,
      date: null,
      float: null,
      integer: null,
      phoneNumber: null,
    });
    expect(nullExport.newRecordProperties).toEqual({
      string: [null, null],
      email: [null, null],
      date: [null, null],
      float: [null, null],
      integer: [null, null],
      phoneNumber: [null, null],
    });

    await nullExport.destroy();
  });

  test("export serialization is OK with null values without types", async () => {
    const oldRecordProperties = {
      string: null,
      email: null,
      integer: null,
      float: null,
      date: null,
      phoneNumber: null,
    };
    const newRecordProperties = {
      string: [null, null],
      email: [null, null],
      integer: [null, null],
      float: [null, null],
      date: [null, null],
      phoneNumber: [null, null],
    };

    const oldNullExport = await Export.create({
      destinationId: destination.id,
      recordId: record.id,
      startedAt: new Date(),
      oldRecordProperties,
      newRecordProperties,
      oldGroups: [],
      newGroups: [],
      state: "complete",
    });

    expect(oldNullExport.oldRecordProperties).toEqual({
      string: null,
      email: null,
      date: null,
      float: null,
      integer: null,
      phoneNumber: null,
    });
    expect(oldNullExport.newRecordProperties).toEqual({
      string: [null, null],
      email: [null, null],
      date: [null, null],
      float: [null, null],
      integer: [null, null],
      phoneNumber: [null, null],
    });

    await oldNullExport.destroy();
  });

  test("when destinations build exports, properties are serialized back to strings", async () => {
    const record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [123],
      email: ["person@example.com"],
      lastLoginAt: [new Date(10)],
      ltv: [100.99],
      isVIP: [true],
    });

    const group = await helper.factories.group();
    await group.addRecord(record);

    const destination = await helper.factories.destination();
    await destination.updateTracking("group", group.id);
    await destination.setMapping({
      "primary-id": "userId",
      email: "email",
      lastLoginAt: "lastLoginAt",
      ltv: "ltv",
      isVIP: "isVIP",
    });
    await destination.update({ state: "ready" });

    await record.export();
    const _export = await Export.findOne({
      where: { recordId: record.id },
    });

    const rawProperties = JSON.parse(_export["dataValues"].newRecordProperties);

    expect(rawProperties["primary-id"]).toEqual({
      type: "integer",
      rawValue: "123",
    });
    expect(rawProperties.email).toEqual({
      type: "email",
      rawValue: "person@example.com",
    });
    expect(rawProperties.lastLoginAt).toEqual({
      type: "date",
      rawValue: "10",
    });
    expect(rawProperties.ltv).toEqual({
      type: "float",
      rawValue: "100.99",
    });
    expect(rawProperties.isVIP).toEqual({
      type: "boolean",
      rawValue: "true",
    });

    // the value types are returned to the model properties
    expect(_export.newRecordProperties["primary-id"]).toEqual(123);
    expect(_export.newRecordProperties.email).toEqual("person@example.com");
    expect(_export.newRecordProperties.lastLoginAt).toEqual(new Date(10));
    expect(_export.newRecordProperties.ltv).toEqual(100.99);
    expect(_export.newRecordProperties.isVIP).toEqual(true);

    // cleanup
    await record.destroy();
    await destination.updateTracking("none");
    await group.destroy();
    await destination.destroy();
  });

  test("a record.export can simulate the next export", async () => {
    const record = await helper.factories.record();
    await record.addOrUpdateProperties({
      userId: [123],
      email: ["person@example.com"],
      lastLoginAt: [new Date(10)],
      ltv: [100.99],
      isVIP: [true],
    });
    await RecordProperty.update(
      { state: "ready" },
      { where: { recordId: record.id } }
    );
    await record.update({ state: "ready" });

    const group = await helper.factories.group();
    await group.addRecord(record);

    const destination = await helper.factories.destination();
    await destination.updateTracking("group", group.id);
    await destination.setMapping({
      "primary-id": "userId",
      email: "email",
      lastLoginAt: "lastLoginAt",
      ltv: "ltv",
      isVIP: "isVIP",
    });
    await destination.update({ state: "ready" });

    const _exports = await record.export(false, [], false);
    expect(_exports.length).toEqual(1);

    const rawProperties = JSON.parse(
      _exports[0]["dataValues"].newRecordProperties
    );

    expect(rawProperties["primary-id"]).toEqual({
      type: "integer",
      rawValue: "123",
    });
    expect(rawProperties.email).toEqual({
      type: "email",
      rawValue: "person@example.com",
    });

    // no exports were saved in the DB
    expect(await Export.count({ where: { recordId: record.id } })).toEqual(0);

    // cleanup
    await record.destroy();
    await destination.updateTracking("none");
    await group.destroy();
    await destination.destroy();
  });

  test("exports can be marked as having changes or not", async () => {
    await Export.truncate();
    const group = await helper.factories.group();
    await group.addRecord(record);
    await destination.updateTracking("group", group.id);

    const oldExport = await Export.create({
      destinationId: destination.id,
      recordId: record.id,
      startedAt: new Date(),
      oldRecordProperties: {},
      newRecordProperties: {},
      oldGroups: [],
      newGroups: [],
      state: "complete",
    });

    await destination.exportRecord(record);

    const newExport = await Export.findOne({
      where: {
        id: {
          [Op.and]: [{ [Op.ne]: oldExport.id }],
        },
      },
    });

    expect(newExport.hasChanges).toBe(false);
    expect(newExport.toDelete).toBe(false);

    await oldExport.destroy();
    await newExport.destroy();
  });

  describe("sweep", () => {
    async function makeOldExport(state = "complete", createdAt = new Date(0)) {
      const _export = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        startedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state,
      });

      _export.set({ createdAt }, { raw: true });
      _export.changed("createdAt", true);
      await _export.save({
        silent: true,
        fields: ["createdAt"],
      });

      return _export;
    }

    test("old complete entries can be swept away, not the newest one for each record + destination", async () => {
      await Export.truncate();
      const destinationB = await helper.factories.destination();
      const destinationC = await helper.factories.destination();

      const oldExportDestinationA = await makeOldExport(
        "complete",
        new Date(0)
      );
      const oldExportMostRecentDestinationA = await makeOldExport(
        "complete",
        new Date(1000 * 61)
      );

      const oldExportDestinationB = await makeOldExport(
        "complete",
        new Date(0)
      );
      const oldExportMostRecentDestinationB = await makeOldExport(
        "complete",
        new Date(1000 * 61)
      );
      await oldExportDestinationB.update({ destinationId: destinationB.id });
      await oldExportMostRecentDestinationB.update({
        destinationId: destinationB.id,
      });

      const oldExportDestinationC = await makeOldExport("pending", new Date(0));
      await oldExportDestinationC.update({ destinationId: destinationC.id });

      let count = await Export.count();
      expect(count).toBe(5);

      await Export.sweep(1000);
      const remaining = await Export.findAll();
      expect(remaining.length).toBe(3);
      expect(remaining.map((e) => e.id).sort()).toEqual(
        [
          oldExportMostRecentDestinationA.id,
          oldExportMostRecentDestinationB.id,
          oldExportDestinationC.id,
        ].sort()
      );
    });

    test("old pending entries will not be swept away", async () => {
      await Export.truncate();
      const oldExport = await makeOldExport("pending", new Date(0));
      const oldExportMostRecent = await makeOldExport(
        "complete",
        new Date(1000 * 61)
      );

      let count = await Export.count();
      expect(count).toBe(2);

      await Export.sweep(1000);
      const remaining = await Export.findAll();
      expect(remaining.length).toBe(2);
    });

    test("if there are no complete exports for the record+destination, old exports will not be swept", async () => {
      await Export.truncate();
      const oldExport = await makeOldExport("pending", new Date(0));
      const oldExportMostRecent = await makeOldExport(
        "pending",
        new Date(1000 * 61)
      );

      let count = await Export.count();
      expect(count).toBe(2);

      await Export.sweep(1000);
      const remaining = await Export.findAll();
      expect(remaining.length).toBe(2);
    });

    test("all exports older than 90 days which do not have a record will be swept", async () => {
      await Export.truncate();
      const exports = [
        await makeOldExport("pending", new Date()), // not old enough
        await makeOldExport("failed", new Date(0)),
        await makeOldExport("complete", new Date(0)),
        await makeOldExport("pending", new Date(0)),
      ];
      await Promise.all(exports.map((e) => e.update({ recordId: "foo" })));

      let count = await Export.count();
      expect(count).toBe(4);

      await Export.sweep(1000);
      const remaining = await Export.findAll();
      expect(remaining.length).toBe(1);
      expect(remaining[0].id).toBe(exports[0].id);
    });

    test("all exports older than 90 days which do not have a destination will be swept", async () => {
      await Export.truncate();
      const exports = [
        await makeOldExport("pending", new Date()), // not old enough
        await makeOldExport("failed", new Date(0)),
        await makeOldExport("complete", new Date(0)),
        await makeOldExport("pending", new Date(0)),
      ];
      await Promise.all(exports.map((e) => e.update({ destinationId: "foo" })));

      let count = await Export.count();
      expect(count).toBe(4);

      await Export.sweep(1000);
      const remaining = await Export.findAll();
      expect(remaining.length).toBe(1);
      expect(remaining[0].id).toBe(exports[0].id);
    });
  });

  describe("errors", () => {
    let errorExport;
    beforeEach(async () => {
      errorExport = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        startedAt: new Date(),
        oldRecordProperties: { firstName: "old" },
        newRecordProperties: { firstName: "new" },
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });
    });

    test("an export can save an error message", async () => {
      errorExport.errorMessage = "bad stuff happened!";
      await errorExport.save();
      await errorExport.reload();
      expect(errorExport.errorLevel).toEqual("error");
    });

    test("an export can save an info message", async () => {
      errorExport.errorMessage = "interesting stuff happened!";
      errorExport.errorLevel = "info";
      await errorExport.save();
      await errorExport.reload();
      expect(errorExport.errorLevel).toEqual("info");
    });

    test("an export needs a valid level", async () => {
      errorExport.errorMessage = "interesting stuff happened!";
      errorExport.errorLevel = "other";
      await expect(errorExport.save()).rejects.toThrow(/Validation error/);
    });
  });
});
