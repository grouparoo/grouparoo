import os from "os";
import fs from "fs";
import path from "path";
import { Op } from "sequelize";
import { ensureDir } from "fs-extra";
import { helper } from "@grouparoo/spec-helper";
import * as actionhero from "actionhero";
import {
  Destination,
  GrouparooRecord,
  Export,
  RecordProperty,
  Errors,
  GroupMember,
  Group,
} from "../../src";

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
    const oldGroups: Group[] = [];
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

  test("export apiData includes the model id", async () => {
    const apiData = await _export.apiData();
    expect(apiData.modelId).toBe(record.modelId);
  });

  test("apiData can be retrieved for an export with a null destination", async () => {
    const oldExport = await helper.factories.export();
    await oldExport.update({ destinationId: null });

    const apiData = await oldExport.apiData(true);
    expect(apiData.id).toBe(oldExport.id);
    expect(apiData.destination).toBeUndefined();
    expect(apiData.destinationName).toBeNull();
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
    const oldGroups: Group[] = [];
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
      string: { type: "string", rawValue: null as string },
      email: { type: "email", rawValue: null as string },
      integer: { type: "integer", rawValue: null as string },
      float: { type: "float", rawValue: null as string },
      date: { type: "date", rawValue: null as string },
      phoneNumber: { type: "phoneNumber", rawValue: null as string },
    };
    const newRecordProperties = {
      string: { type: "string", rawValue: [null, null] as string[] },
      email: { type: "email", rawValue: [null, null] as string[] },
      integer: { type: "integer", rawValue: [null, null] as string[] },
      float: { type: "float", rawValue: [null, null] as string[] },
      date: { type: "date", rawValue: [null, null] as string[] },
      phoneNumber: {
        type: "phoneNumber",
        rawValue: [null, null] as string[],
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
    const oldRecordProperties: Record<string, any> = {
      string: null,
      email: null,
      integer: null,
      float: null,
      date: null,
      phoneNumber: null,
    };
    const newRecordProperties: Record<string, any[]> = {
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
    await GroupMember.create({ recordId: record.id, groupId: group.id });

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

    const rawProperties: Record<string, { type: string; rawValue: string }> =
      // @ts-ignore
      JSON.parse(_export["dataValues"].newRecordProperties);

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
    await GroupMember.create({ recordId: record.id, groupId: group.id });

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

    const rawProperties: Record<string, { type: string; rawValue: string }> =
      //@ts-ignore
      JSON.parse(_exports[0]["dataValues"].newRecordProperties);

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
    await GroupMember.create({ recordId: record.id, groupId: group.id });
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

  describe("retryFailed", () => {
    const startDate = new Date("2022-01-01T10:00:00Z");
    const endDate = new Date("2022-01-01T12:00:00Z");

    let oldFailedExport: Export;
    let inRangeFailedExport: Export;
    let foreignFailedExport: Export;
    let completeExport: Export;
    let retryingExport: Export;

    beforeAll(async () => {
      await Export.truncate();
      const destination2 = await helper.factories.destination();

      oldFailedExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: null,
        startedAt: new Date(1),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "failed",
        retryCount: 1,
        createdAt: new Date(0),
      });

      inRangeFailedExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: null,
        startedAt: new Date("2022-01-01T11:05:00Z"),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "failed",
        retryCount: 1,
        createdAt: new Date("2022-01-01T11:00:00Z"),
      });

      foreignFailedExport = await Export.create({
        recordId: record.id,
        destinationId: destination2.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: null,
        startedAt: new Date("2022-01-01T11:05:00Z"),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "failed",
        retryCount: 1,
        createdAt: new Date("2022-01-01T11:00:00Z"),
      });

      completeExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date("2022-01-01T11:02:00Z"),
        startedAt: new Date("2022-01-01T11:05:00Z"),
        completedAt: new Date("2022-01-01T11:10:00Z"),
        state: "complete",
        createdAt: new Date("2022-01-01T11:00:00Z"),
      });

      retryingExport = await Export.create({
        recordId: record.id,
        destinationId: destination.id,
        oldRecordProperties: {},
        newRecordProperties: {},
        newGroups: [],
        oldGroups: [],
        sendAt: new Date(),
        errorMessage: "Oh No!",
        errorLevel: "error",
        state: "pending",
        retryCount: 1,
        createdAt: new Date("2022-01-01T11:00:00Z"),
      });
    });

    test("can preview the count of exports to be retried for all destinations", async () => {
      const count = await Export.retryFailed(startDate, endDate, null, false);
      expect(count).toBe(2); // 1 from each destination

      // no changes on any export
      await oldFailedExport.reload();
      expect(oldFailedExport.state).toBe("failed");
      expect(oldFailedExport.errorLevel).toBe("error");
      expect(oldFailedExport.errorMessage).toBe("Oh No!");
      expect(oldFailedExport.retryCount).toBe(1);
      expect(oldFailedExport.sendAt).toBeNull();

      await inRangeFailedExport.reload();
      expect(inRangeFailedExport.state).toBe("failed");
      expect(inRangeFailedExport.errorLevel).toBe("error");
      expect(inRangeFailedExport.errorMessage).toBe("Oh No!");
      expect(inRangeFailedExport.retryCount).toBe(1);
      expect(inRangeFailedExport.sendAt).toBeNull();

      await foreignFailedExport.reload();
      expect(foreignFailedExport.state).toBe("failed");
      expect(foreignFailedExport.errorLevel).toBe("error");
      expect(foreignFailedExport.errorMessage).toBe("Oh No!");
      expect(foreignFailedExport.retryCount).toBe(1);
      expect(foreignFailedExport.sendAt).toBeNull();

      await completeExport.reload();
      expect(completeExport.state).toBe("complete");
      expect(completeExport.sendAt).toBeTruthy();
      expect(completeExport.startedAt).toBeTruthy();
      expect(completeExport.completedAt).toBeTruthy();

      await retryingExport.reload();
      expect(retryingExport.state).toBe("pending");
      expect(retryingExport.sendAt).toBeTruthy();
      expect(retryingExport.errorLevel).toBe("error");
      expect(retryingExport.errorMessage).toBe("Oh No!");
      expect(retryingExport.retryCount).toBe(1);
    });

    test("can preview the count of exports to be retried for a destination", async () => {
      const count = await Export.retryFailed(
        startDate,
        endDate,
        destination,
        false
      );
      expect(count).toBe(1); // only one in this destination to retry

      // no changes on any export
      await oldFailedExport.reload();
      expect(oldFailedExport.state).toBe("failed");
      expect(oldFailedExport.errorLevel).toBe("error");
      expect(oldFailedExport.errorMessage).toBe("Oh No!");
      expect(oldFailedExport.retryCount).toBe(1);
      expect(oldFailedExport.sendAt).toBeNull();

      await inRangeFailedExport.reload();
      expect(inRangeFailedExport.state).toBe("failed");
      expect(inRangeFailedExport.errorLevel).toBe("error");
      expect(inRangeFailedExport.errorMessage).toBe("Oh No!");
      expect(inRangeFailedExport.retryCount).toBe(1);
      expect(inRangeFailedExport.sendAt).toBeNull();

      await foreignFailedExport.reload();
      expect(foreignFailedExport.state).toBe("failed");
      expect(foreignFailedExport.errorLevel).toBe("error");
      expect(foreignFailedExport.errorMessage).toBe("Oh No!");
      expect(foreignFailedExport.retryCount).toBe(1);
      expect(foreignFailedExport.sendAt).toBeNull();

      await completeExport.reload();
      expect(completeExport.state).toBe("complete");
      expect(completeExport.sendAt).toBeTruthy();
      expect(completeExport.startedAt).toBeTruthy();
      expect(completeExport.completedAt).toBeTruthy();

      await retryingExport.reload();
      expect(retryingExport.state).toBe("pending");
      expect(retryingExport.sendAt).toBeTruthy();
      expect(retryingExport.errorLevel).toBe("error");
      expect(retryingExport.errorMessage).toBe("Oh No!");
      expect(retryingExport.retryCount).toBe(1);
    });

    test("can reset the exports to be retried for a destination", async () => {
      const count = await Export.retryFailed(startDate, endDate, destination);
      expect(count).toBe(1); // only one in this destination

      // export to be reset
      await inRangeFailedExport.reload();
      expect(inRangeFailedExport.state).toBe("pending");
      expect(inRangeFailedExport.errorLevel).toBeNull();
      expect(inRangeFailedExport.errorMessage).toBeNull();
      expect(inRangeFailedExport.retryCount).toBe(0);
      expect(inRangeFailedExport.sendAt).toBeTruthy();
      expect(inRangeFailedExport.startedAt).toBeNull();

      // no changes on these exports
      await oldFailedExport.reload();
      expect(oldFailedExport.state).toBe("failed");
      expect(oldFailedExport.errorLevel).toBe("error");
      expect(oldFailedExport.errorMessage).toBe("Oh No!");
      expect(oldFailedExport.retryCount).toBe(1);
      expect(oldFailedExport.sendAt).toBeNull();

      await foreignFailedExport.reload();
      expect(foreignFailedExport.state).toBe("failed");
      expect(foreignFailedExport.errorLevel).toBe("error");
      expect(foreignFailedExport.errorMessage).toBe("Oh No!");
      expect(foreignFailedExport.retryCount).toBe(1);
      expect(foreignFailedExport.sendAt).toBeNull();

      await completeExport.reload();
      expect(completeExport.state).toBe("complete");
      expect(completeExport.sendAt).toBeTruthy();
      expect(completeExport.startedAt).toBeTruthy();
      expect(completeExport.completedAt).toBeTruthy();

      await retryingExport.reload();
      expect(retryingExport.state).toBe("pending");
      expect(retryingExport.sendAt).toBeTruthy();
      expect(retryingExport.errorLevel).toBe("error");
      expect(retryingExport.errorMessage).toBe("Oh No!");
      expect(retryingExport.retryCount).toBe(1);
    });

    test("can reset the exports to be retried for all destinations", async () => {
      const count = await Export.retryFailed(startDate, endDate);
      expect(count).toBe(1); // only one left to retry

      // export to be reset
      await foreignFailedExport.reload();
      expect(foreignFailedExport.state).toBe("pending");
      expect(foreignFailedExport.errorLevel).toBeNull();
      expect(foreignFailedExport.errorMessage).toBeNull();
      expect(foreignFailedExport.retryCount).toBe(0);
      expect(foreignFailedExport.sendAt).toBeTruthy();
      expect(foreignFailedExport.startedAt).toBeNull();

      // no changes on these exports
      await oldFailedExport.reload();
      expect(oldFailedExport.state).toBe("failed");
      expect(oldFailedExport.errorLevel).toBe("error");
      expect(oldFailedExport.errorMessage).toBe("Oh No!");
      expect(oldFailedExport.retryCount).toBe(1);
      expect(oldFailedExport.sendAt).toBeNull();

      await inRangeFailedExport.reload();
      expect(inRangeFailedExport.state).toBe("pending");
      expect(inRangeFailedExport.errorLevel).toBeNull();
      expect(inRangeFailedExport.errorMessage).toBeNull();
      expect(inRangeFailedExport.retryCount).toBe(0);
      expect(inRangeFailedExport.sendAt).toBeTruthy();
      expect(inRangeFailedExport.startedAt).toBeNull();

      await completeExport.reload();
      expect(completeExport.state).toBe("complete");
      expect(completeExport.sendAt).toBeTruthy();
      expect(completeExport.startedAt).toBeTruthy();
      expect(completeExport.completedAt).toBeTruthy();

      await retryingExport.reload();
      expect(retryingExport.state).toBe("pending");
      expect(retryingExport.sendAt).toBeTruthy();
      expect(retryingExport.errorLevel).toBe("error");
      expect(retryingExport.errorMessage).toBe("Oh No!");
      expect(retryingExport.retryCount).toBe(1);
    });
  });

  describe("logExports", () => {
    let oldLogPath = process.env.GROUPAROO_EXPORT_LOG;
    const workerId = process.env.JEST_WORKER_ID;

    const logPath = `${os.tmpdir()}/test/${workerId}/exports.log`;

    let _export: Export;

    beforeAll(async () => {
      await ensureDir(path.dirname(logPath));
      if (fs.existsSync(logPath)) fs.rmSync(logPath);
      process.env.GROUPAROO_EXPORT_LOG = logPath;
    });

    afterAll(() => {
      process.env.GROUPAROO_EXPORT_LOG = oldLogPath;
    });

    let logMsgs: string[] = [];
    const spies: jest.SpyInstance[] = [];
    beforeEach(async () => {
      logMsgs = [];
      spies.push(
        jest
          .spyOn(actionhero, "log")
          .mockImplementation((message) => logMsgs.push(message))
      );
    });

    afterEach(async () => {
      spies.map((s) => s.mockRestore());
    });

    test("Exports will not be logged to file on creation or common updates", async () => {
      _export = await helper.factories.export();
      await _export.update({ startedAt: new Date(), sendAt: new Date() });

      _export.force = true;
      await _export.save();

      expect(fs.existsSync(logPath)).toBe(false);
    });

    test("Exports will be logged to file when successfully completed", async () => {
      await _export.complete();

      expect(fs.existsSync(logPath)).toBe(true);

      const logs = fs.readFileSync(logPath, "utf-8");
      const lines = logs.split("\n");
      expect(lines.length).toBe(2);

      const loggedObj = JSON.parse(lines[0]);
      expect(loggedObj.id).toBe(_export.id);
      expect(loggedObj.state).toBe("complete");
      expect(loggedObj.recordId).toBe(_export.recordId);
      expect(loggedObj.timestamp).toBeDefined();

      expect(logMsgs.join(" ")).not.toContain("[ export ]");
    });

    test("Exports will be logged to file when failed", async () => {
      _export = await helper.factories.export();
      await _export.setError(
        new Errors.InfoError("Something terribly wrong happened")
      );

      const logs = fs.readFileSync(logPath, "utf-8");
      const lines = logs.split("\n");
      expect(lines.length).toBe(3);

      const loggedObj = JSON.parse(lines[1]);
      expect(loggedObj.id).toBe(_export.id);
      expect(loggedObj.state).toBe("failed");
      expect(loggedObj.errorMessage).toBe("Something terribly wrong happened");
      expect(loggedObj.errorLevel).toBe("info");
      expect(loggedObj.recordId).toBe(_export.recordId);
      expect(loggedObj.timestamp).toBeDefined();

      expect(logMsgs.join(" ")).not.toContain("[ export ]");
    });

    test("Exports will be logged to file when canceled", async () => {
      _export = await helper.factories.export();
      await _export.update({ state: "canceled" });

      const logs = fs.readFileSync(logPath, "utf-8");
      const lines = logs.split("\n");
      expect(lines.length).toBe(4);

      const loggedObj = JSON.parse(lines[2]);
      expect(loggedObj.id).toBe(_export.id);
      expect(loggedObj.state).toBe("canceled");
      expect(loggedObj.recordId).toBe(_export.recordId);
      expect(loggedObj.timestamp).toBeDefined();

      expect(logMsgs.join(" ")).not.toContain("[ export ]");
    });

    test("Exports will not be logged if GROUPAROO_EXPORT_LOG is not set", async () => {
      delete process.env.GROUPAROO_EXPORT_LOG;

      fs.rmSync(logPath);

      _export = await helper.factories.export();
      await _export.complete();

      expect(fs.existsSync(logPath)).toBe(false);
      expect(logMsgs.join(" ")).not.toContain("[ export ]");
    });

    test("Exports will be logged to stdout if GROUPAROO_EXPORT_LOG is set to `stdout`", async () => {
      process.env.GROUPAROO_EXPORT_LOG = "stdout";

      _export = await helper.factories.export();
      await _export.complete();

      expect(fs.existsSync(logPath)).toBe(false);
      const logMsg = logMsgs.find((m) => m.startsWith("[ export ]"));
      expect(logMsg).toBeTruthy();
      const data = logMsg.split("[ export ] ")[1];

      const loggedObj = JSON.parse(data);
      expect(loggedObj.id).toBe(_export.id);
      expect(loggedObj.state).toBe("complete");
      expect(loggedObj.recordId).toBe(_export.recordId);
      expect(loggedObj.timestamp).toBeDefined();
    });
  });

  describe("errors", () => {
    let errorExport: Export;
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
      //@ts-ignore
      errorExport.errorLevel = "other";
      await expect(errorExport.save()).rejects.toThrow(/Validation error/);
    });
  });
});
