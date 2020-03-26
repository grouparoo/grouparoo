import { helper } from "../utils/specHelper";
import { Destination } from "../../src/models/Destination";
import { Profile } from "../../src/models/Profile";
import { Export } from "../../src/models/Export";
import { ExportImport } from "../../src/models/ExportImport";
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

  test("deleting the export should have deleted the exportImports", async () => {
    await _export.destroy();

    const exportedImports = await ExportImport.findAll();
    expect(exportedImports.length).toBe(0);
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
