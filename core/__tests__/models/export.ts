import { helper } from "@grouparoo/spec-helper";
import { Destination, Profile, Export, ProfileProperty } from "../../src";
import { Op } from "sequelize";

describe("models/export", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let destination: Destination;
  let profile: Profile;
  let _export: Export;

  beforeAll(async () => {
    await helper.factories.properties();
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
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
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
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      state: "complete",
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
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups: [],
      newGroups: [],
      state: "complete",
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
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties,
      newProfileProperties,
      oldGroups: [],
      newGroups: [],
      state: "complete",
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

  test("when destinations build exports, properties are serialized back to strings", async () => {
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
      where: { profileId: profile.id },
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

  test("a profile.export can simulate the next export", async () => {
    const profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({
      userId: [123],
      email: ["person@example.com"],
      lastLoginAt: [new Date(10)],
      ltv: [100.99],
      isVIP: [true],
    });
    await ProfileProperty.update(
      { state: "ready" },
      { where: { profileId: profile.id } }
    );
    await profile.update({ state: "ready" });

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

    const _exports = await profile.export(false, [], false);
    expect(_exports.length).toEqual(1);

    const rawProperties = JSON.parse(
      _exports[0]["dataValues"].newProfileProperties
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
    expect(await Export.count({ where: { profileId: profile.id } })).toEqual(0);

    // cleanup
    await profile.destroy();
    await destination.unTrackGroup();
    await group.destroy();
    await destination.destroy();
  });

  test("exports can be marked as having changes or not", async () => {
    await Export.destroy({ where: { destinationId: destination.id } });
    const group = await helper.factories.group();
    await group.addProfile(profile);
    await destination.trackGroup(group);

    const oldExport = await Export.create({
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      state: "complete",
    });

    await destination.exportProfile(profile);

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

  test("old entries can be swept away, not the newest one for each profile + destination", async () => {
    const oldExport = await Export.create({
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      state: "pending",
    });

    const oldExportMostRecent = await Export.create({
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: new Date(),
      oldProfileProperties: {},
      newProfileProperties: {},
      oldGroups: [],
      newGroups: [],
      completedAt: new Date(),
      state: "complete",
    });

    oldExport.set({ createdAt: new Date(0) }, { raw: true });
    oldExport.changed("createdAt", true);
    await oldExport.save({
      silent: true,
      fields: ["createdAt"],
    });

    oldExportMostRecent.set({ createdAt: new Date(1000 * 61) }, { raw: true });
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
    expect(remaining[0].id).toBe(oldExportMostRecent.id);
  });

  describe("errors", () => {
    let errorExport;
    beforeEach(async () => {
      errorExport = await Export.create({
        destinationId: destination.id,
        profileId: profile.id,
        startedAt: new Date(),
        oldProfileProperties: { firstName: "old" },
        newProfileProperties: { firstName: "new" },
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
