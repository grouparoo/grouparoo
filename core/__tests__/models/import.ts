import { helper } from "@grouparoo/spec-helper";
import { Import } from "./../../src/models/Import";
import { specHelper } from "actionhero";

let actionhero;

describe("models/import", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.properties();
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("creating an import enqueued a task to process it", async () => {
    const _import = await Import.create({
      data: {},
      creatorType: "test",
      creatorGuid: "",
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
      creatorGuid: "",
    });
    expect(_import.profileGuid).toBeFalsy();

    await _import.associateProfile();
    expect(_import.profileGuid).toBe(profile.guid);

    await _import.destroy();
  });

  test("old entries can be swept away", async () => {
    const oldImport = await Import.create({
      data: {},
      creatorType: "test",
      creatorGuid: "",
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
