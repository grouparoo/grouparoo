import { helper } from "@grouparoo/spec-helper";
import { Import, Run } from "../../src";
import { specHelper } from "actionhero";

describe("models/import", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await Import.truncate());

  test("creating an import enqueued a task to process it", async () => {
    const _import = await Import.create({
      data: {},
      creatorType: "test",
      creatorId: "",
    });

    const tasks = await specHelper.findEnqueuedTasks("import:associateProfile");
    expect(tasks.length).toBe(1);
  });

  test("the profile can be associated", async () => {
    const profile = await helper.factories.profile();
    await profile.addOrUpdateProperties({ email: ["mario@example.com"] });

    const _import = await Import.create({
      data: { email: "mario@example.com" },
      creatorType: "test",
      creatorId: "",
    });
    expect(_import.profileId).toBeFalsy();

    await _import.associateProfile();
    expect(_import.profileId).toBe(profile.id);
  });

  test("an error can be set", async () => {
    const _import: Import = await helper.factories.import();
    await _import.setError(new Error("oh no"), "associate");
    await _import.reload();

    expect(_import.errorMessage).toMatch("oh no");
    expect(_import.errorMetadata).toMatch("oh no");
  });

  test("setting an error will update complete runs", async () => {
    const run: Run = await helper.factories.run();
    await run.afterBatch("complete");
    expect(run.error).toBeFalsy();

    const _import: Import = await helper.factories.import(run);
    await _import.setError(new Error("oh no"), "associate");

    await run.reload();
    expect(run.error).toEqual("Error on step associate: oh no (x1)");
  });

  test("old entries can be swept away", async () => {
    const oldImport = await Import.create({
      data: {},
      creatorType: "test",
      creatorId: "",
    });

    oldImport.set({ createdAt: new Date(0) }, { raw: true });
    oldImport.changed("createdAt", true);
    await oldImport.save({
      silent: true,
      fields: ["createdAt"],
    });

    let count = await Import.count();
    expect(count).toBe(1);

    await Import.sweep(999);

    const remaining = await Import.findAll();
    expect(remaining.length).toBe(0);
  });
});
