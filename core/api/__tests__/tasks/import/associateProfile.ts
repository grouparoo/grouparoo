import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";
import { Profile } from "../../../src/models/Profile";

let actionhero;

describe("tasks/import:associateProfile", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("import:associateProfile", () => {
    test("can be enqueued", async () => {
      await task.enqueue("import:associateProfile", { importGuid: "abc123" });
      const found = await specHelper.findEnqueuedTasks(
        "import:associateProfile"
      );
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("it will create a new profile from provided import data and update the run if present", async () => {
      const run = await helper.factories.run();

      const _import = await helper.factories.import(run, {
        email: "toad@example.com",
        firstName: "Toad",
      });
      expect(_import.profileGuid).toBeNull();
      expect(_import.profileAssociatedAt).toBeNull();

      let profilesCount = await Profile.count();
      expect(profilesCount).toBe(0);

      await specHelper.runTask("import:associateProfile", {
        importGuid: _import.guid,
      });

      await _import.reload();
      const profile = await Profile.findOne();
      expect(profile).toBeTruthy();
      expect(_import.profileGuid).toBe(profile.guid);
      expect(_import.profileAssociatedAt).toBeTruthy();

      await run.reload();
      expect(run.importsCreated).toBe(0);
      expect(run.profilesCreated).toBe(1);
      expect(run.profilesImported).toBe(0);
      expect(run.profilesExported).toBe(0);
    });

    test("if there is an error, the import will have the error appended", async () => {
      const run = await helper.factories.run();
      const _import = await helper.factories.import(run, {
        thing: "stuff",
      });

      await expect(
        specHelper.runTask("import:associateProfile", {
          importGuid: _import.guid,
        })
      ).rejects.toThrow(
        /there are no unique profile properties provided in {"thing":"stuff"}/
      );

      await _import.reload();
      expect(_import.errorMessage).toMatch(
        /there are no unique profile properties provided in {"thing":"stuff"}/
      );
      const errorMetadata = JSON.parse(_import.errorMetadata);
      expect(errorMetadata.message).toMatch(
        /there are no unique profile properties provided in {"thing":"stuff"}/
      );
      expect(errorMetadata.step).toBe("import:associateProfile");
      expect(errorMetadata.stack).toMatch(
        /findOrCreateByUniqueProfileProperties/
      );
    });

    test("running the task should have enqueued a profile:fullUpdate", async () => {
      const tasks = await specHelper.findEnqueuedTasks(
        "profile:importAndUpdate"
      );
      expect(tasks.length).toBe(1);
    });
  });
});
