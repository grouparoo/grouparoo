import { helper } from "@grouparoo/spec-helper";
import { Destination } from "../../src/models/Destination";
import { Profile } from "../../src/models/Profile";
import { Export } from "../../src/models/Export";
import { ExportImport } from "../../src/models/ExportImport";
import { ExportRun } from "../../src/models/ExportRun";
import { Op } from "sequelize";
let actionhero;

describe("models/export", () => {
  let destination: Destination;
  let profile: Profile;
  let _export: Export;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    destination = await helper.factories.destination();
    profile = await helper.factories.profile();
  });

  test("an export can be created and saved with both single-value and array properties", async () => {
    const oldProfileProperties = {
      string: { type: "string", rawValue: "name" },
      email: { type: "email", rawValue: "oldEmail" },
      integer: { type: "integer", rawValue: "1" },
      float: { type: "float", rawValue: "1.1" },
      date: { type: "date", rawValue: "1" },
      phoneNumber: { type: "phoneNumber", rawValue: "+1 412 897 0001" },
    };
    const newProfileProperties = {
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
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      mostRecent: true,
    });
  });

  test("an export can be deserialized returning Grouparoo types", async () => {
    const _export = await Export.findOne();
    expect(_export.oldProfileProperties).toEqual({
      string: "name",
      email: "oldEmail",
      date: new Date(1),
      float: 1.1,
      integer: 1,
      phoneNumber: "+1 412 897 0001",
    });
    expect(_export.newProfileProperties).toEqual({
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
    const oldProfileProperties = {
      string: "name",
      email: "oldEmail",
      integer: 1,
      float: 1.1,
      date: new Date(1).toISOString(),
      phoneNumber: "+1 412 897 0001",
    };
    const newProfileProperties = {
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
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      mostRecent: true,
    });

    expect(oldExport.oldProfileProperties).toEqual({
      string: "name",
      email: "oldEmail",
      date: "1970-01-01T00:00:00.001Z",
      float: 1.1,
      integer: 1,
      phoneNumber: "+1 412 897 0001",
    });
    expect(oldExport.newProfileProperties).toEqual({
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
    const oldProfileProperties = {
      string: { type: "string", rawValue: null },
      email: { type: "email", rawValue: null },
      integer: { type: "integer", rawValue: null },
      float: { type: "float", rawValue: null },
      date: { type: "date", rawValue: null },
      phoneNumber: { type: "phoneNumber", rawValue: null },
    };
    const newProfileProperties = {
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
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups: [],
      newGroups: [],
      mostRecent: true,
    });

    expect(nullExport.oldProfileProperties).toEqual({
      string: null,
      email: null,
      date: null,
      float: null,
      integer: null,
      phoneNumber: null,
    });
    expect(nullExport.newProfileProperties).toEqual({
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
    const oldProfileProperties = {
      string: null,
      email: null,
      integer: null,
      float: null,
      date: null,
      phoneNumber: null,
    };
    const newProfileProperties = {
      string: [null, null],
      email: [null, null],
      integer: [null, null],
      float: [null, null],
      date: [null, null],
      phoneNumber: [null, null],
    };

    const oldNullExport = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups: [],
      newGroups: [],
      mostRecent: true,
    });

    expect(oldNullExport.oldProfileProperties).toEqual({
      string: null,
      email: null,
      date: null,
      float: null,
      integer: null,
      phoneNumber: null,
    });
    expect(oldNullExport.newProfileProperties).toEqual({
      string: [null, null],
      email: [null, null],
      date: [null, null],
      float: [null, null],
      integer: [null, null],
      phoneNumber: [null, null],
    });

    await oldNullExport.destroy();
  });

  test("when destinations build exports, profile properties are serialized back to strings", async () => {
    const profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [123],
      email: ["person@example.com"],
      lastLoginAt: [new Date(10)],
      ltv: [100.99],
      isVIP: [true],
    });

    const group = await helper.factories.group();
    await group.addProfile(profile);

    const destination = await helper.factories.destination();
    await destination.trackGroup(group);
    await destination.setMapping({
      "primary-id": "userId",
      email: "email",
      lastLoginAt: "lastLoginAt",
      ltv: "ltv",
      isVIP: "isVIP",
    });
    await destination.update({ state: "ready" });

    await profile.export();
    const _export = await Export.findOne({
      where: { profileGuid: profile.guid },
    });

    const rawProperties = JSON.parse(
      _export["dataValues"].newProfileProperties
    );

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
    expect(_export.newProfileProperties["primary-id"]).toEqual(123);
    expect(_export.newProfileProperties.email).toEqual("person@example.com");
    expect(_export.newProfileProperties.lastLoginAt).toEqual(new Date(10));
    expect(_export.newProfileProperties.ltv).toEqual(100.99);
    expect(_export.newProfileProperties.isVIP).toEqual(true);

    // cleanup
    await profile.destroy();
    await destination.unTrackGroup();
    await group.destroy();
    await destination.destroy();
  });

  test("imports can be associated to the export via ExportImports", async () => {
    const importA = await helper.factories.import();
    const importB = await helper.factories.import();

    await _export.associateImports([importA, importB]);
    const exportImports = await ExportImport.findAll();
    expect(exportImports.length).toBe(2);
    expect(exportImports.map((exi) => exi.importGuid).sort()).toEqual(
      [importA, importB].map((imp) => imp.guid).sort()
    );

    const associatedImports = await _export.$get("imports");
    expect(associatedImports.map((exv) => exv.guid).sort()).toEqual(
      [importA, importB].map((exv) => exv.guid).sort()
    );
  });

  test("an export can claim the most-recent spot", async () => {
    expect(_export.mostRecent).toBe(true);

    const newExport = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
    });

    const unrelatedExport = await Export.create({
      destinationGuid: "other-destination",
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      mostRecent: true,
    });

    expect(newExport.mostRecent).toBe(false);

    await newExport.markMostRecent();

    await _export.reload();
    await newExport.reload();
    await unrelatedExport.reload();

    expect(_export.mostRecent).toBe(false);
    expect(newExport.mostRecent).toBe(true);
    expect(unrelatedExport.mostRecent).toBe(true);

    await newExport.destroy();
    await unrelatedExport.destroy();
  });

  test("runs can be associated by ExportRuns", async () => {
    const run = await helper.factories.run();
    await destination.exportProfile(profile, [run], []);

    const exportRuns = await ExportRun.findAll({
      where: { runGuid: run.guid },
    });
    expect(exportRuns.length).toBe(1);
    expect(exportRuns[0].guid).not.toEqual(_export.guid);

    const newExport = await Export.findByGuid(exportRuns[0].exportGuid);
    await newExport.destroy();
    await run.destroy();
  });

  test("exports can be marked as having changes or not", async () => {
    const group = await helper.factories.group();
    await group.addProfile(profile);
    await destination.trackGroup(group);

    const run = await helper.factories.run();
    await run.update({ creatorType: "group", creatorGuid: group.guid });

    const oldExport = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      mostRecent: true,
    });

    await destination.exportProfile(profile, [run], []);

    const exportRuns = await ExportRun.findAll({
      where: { runGuid: run.guid },
    });
    const newExport = await Export.findOne({
      where: {
        guid: {
          [Op.and]: [
            { [Op.in]: exportRuns.map((er) => er.exportGuid) },
            { [Op.ne]: oldExport.guid },
          ],
        },
      },
    });

    expect(newExport.hasChanges).toBe(false);
    expect(newExport.toDelete).toBe(false);

    await oldExport.destroy();
    await newExport.destroy();
    await run.destroy();
  });

  describe("deletion", () => {
    beforeAll(async () => {
      await _export.destroy();
    });

    test("deleting the export should have deleted the exportImports", async () => {
      const exportedImports = await ExportImport.findAll();
      expect(exportedImports.length).toBe(0);
    });

    test("deleting the export should have deleted the exportRuns", async () => {
      const exportRuns = await ExportRun.findAll();
      expect(exportRuns.length).toBe(0);
    });
  });

  test("old entries can be swept away, not the newest one for each profile + destination", async () => {
    const oldExport = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      mostRecent: false,
    });

    const oldExportMostRecent = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      mostRecent: true,
    });

    oldExport.set({ createdAt: new Date(0) }, { raw: true });
    oldExport.changed("createdAt", true);
    await oldExport.save({
      silent: true,
      fields: ["createdAt"],
    });

    oldExportMostRecent.set({ createdAt: new Date(0) }, { raw: true });
    oldExportMostRecent.changed("createdAt", true);
    await oldExportMostRecent.save({
      silent: true,
      fields: ["createdAt"],
    });

    let count = await Export.count();
    expect(count).toBe(2);

    await Export.sweep(999);

    const remaining = await Export.findAll();
    expect(remaining.length).toBe(1);
    expect(remaining[0].guid).toBe(oldExportMostRecent.guid);
  });
});
