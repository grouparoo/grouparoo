import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { Profile, ProfileProperty } from "../../../src";

describe("tasks/import:associateProfile", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

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
      expect(_import.profileId).toBeFalsy();
      expect(_import.profileAssociatedAt).toBeFalsy();

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

    test("if there is an error, the import will have the error appended after a few attempts", async () => {
      const run = await helper.factories.run();
      const _import = await helper.factories.import(run, {
        thing: "stuff",
      });

      let found = await specHelper.findEnqueuedTasks("import:associateProfile");
      expect(found.length).toEqual(1);
      expect(found[0].args[0]).toEqual({ importId: _import.id, attempts: 0 });

      // attempt 1
      await specHelper.runTask("import:associateProfile", found[0].args[0]);

      await _import.reload();
      expect(_import.errorMessage).toBeFalsy();
      found = await specHelper.findEnqueuedTasks("import:associateProfile");
      expect(found.length).toEqual(2);
      expect(found[1].args[0]).toEqual({ importId: _import.id, attempts: 1 });

      // attempt 2
      await specHelper.runTask("import:associateProfile", found[1].args[0]);

      await _import.reload();
      expect(_import.errorMessage).toBeFalsy();
      found = await specHelper.findEnqueuedTasks("import:associateProfile");
      expect(found.length).toEqual(3);
      expect(found[2].args[0]).toEqual({ importId: _import.id, attempts: 2 });

      // attempt 3
      await specHelper.runTask("import:associateProfile", found[2].args[0]);

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

    test("it will set properties included in the import data", async () => {
      await Profile.truncate();

      const run = await helper.factories.run();

      const _import = await helper.factories.import(run, {
        email: "bowserjr@example.com",
        firstName: "Bowser",
        lastName: "Jr",
        someNonexistentProp: "Hi there",
      });
      expect(_import.profileId).toBeFalsy();
      expect(_import.profileAssociatedAt).toBeFalsy();

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

      const properties = await profile.simplifiedProperties();
      expect(properties.email).toEqual(["bowserjr@example.com"]);
      expect(properties.firstName).toEqual(["Bowser"]);
      expect(properties.lastName).toEqual(["Jr"]);
      expect(properties.someNonexistentProp).toBeUndefined();
    });
  });
});
