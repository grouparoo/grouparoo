import { helper } from "@grouparoo/spec-helper";
import { Import } from "../../src";
import { specHelper } from "actionhero";

describe("models/import", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  test("creating an import enqueued a task to process it", async () => {
    const _import = await Import.create({
      data: {},
      creatorType: "test",
      creatorId: "",
    });

    const tasks = await specHelper.findEnqueuedTasks("import:associateProfile");
    expect(tasks.length).toBe(1);

    await _import.destroy();
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

    await _import.destroy();
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
