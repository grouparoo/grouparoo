import { helper } from "../utils/specHelper";
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

  test("an export can be created", async () => {
    const oldProfileProperties = { email: "oldEmail" };
    const newProfileProperties = { email: "newEmail" };
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
    await destination.exportProfile(profile, [run], [], {}, {}, [], []);

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

    await destination.exportProfile(
      profile,
      [run],
      [],
      {},
      {},
      [group],
      [group]
    );

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
