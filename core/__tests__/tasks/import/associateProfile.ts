import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile, ProfileProperty } from "../../../src";

describe("tasks/import:associateProfile", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  describe("import:associateProfile", () => {
    test("can be enqueued", async () => {
      await task.enqueue("import:associateProfile", { importId: "abc123" });
      const found = await specHelper.findEnqueuedTasks(
        "import:associateProfile"
      );
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("does not throw if the import cannot be found", async () => {
      await specHelper.runTask("import:associateProfile", {
        importId: "missing",
      });
    });

    test("it will create a new profile from provided import data and update the run if present", async () => {
      const run = await helper.factories.run();

      const _import = await helper.factories.import(run, {
        email: "toad@example.com",
        firstName: "Toad",
      });
      expect(_import.profileId).toBeNull();
      expect(_import.profileAssociatedAt).toBeNull();

      let profilesCount = await Profile.count();
      expect(profilesCount).toBe(0);

      await specHelper.runTask("import:associateProfile", {
        importId: _import.id,
      });

      await _import.reload();
      const profile = await Profile.findOne();
      expect(profile).toBeTruthy();
      expect(_import.profileId).toBe(profile.id);
      expect(_import.profileAssociatedAt).toBeTruthy();

      expect(_import.oldProfileProperties).toEqual({
        email: ["toad@example.com"],
        firstName: [null],
        isVIP: [null],
        lastLoginAt: [null],
        lastName: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
        userId: [null],
      });
      expect(_import.oldGroupIds).toEqual([]);
      expect(_import.newProfileProperties).toEqual({});
      expect(_import.newGroupIds).toEqual([]);

      await run.updateTotals();

      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(1);
      expect(run.profilesImported).toBe(0);
    });

    test("if there is an error, the import will have the error appended", async () => {
      const run = await helper.factories.run();
      const _import = await helper.factories.import(run, {
        thing: "stuff",
      });

      // I don't throw, but append the error to the Import
      await specHelper.runTask("import:associateProfile", {
        importId: _import.id,
      });

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

    test("the profile and properties should be marked as pending", async () => {
      const property = await ProfileProperty.findOne({
        where: { rawValue: "toad@example.com" },
      });
      expect(property.state).toEqual("pending");

      const profile = await Profile.findById(property.profileId);
      expect(profile.state).toEqual("pending");
    });
  });
});
