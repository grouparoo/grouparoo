import { helper } from "../../utils/specHelper";
import { api, task, specHelper } from "actionhero";
import { Profile } from "./../../../src/models/Profile";
import { Import } from "./../../../src/models/Import";
import { Run } from "./../../../src/models/Run";
import { Group } from "./../../../src/models/Group";

let actionhero;

describe("tasks/profile:importAndUpdate", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profile:importAndUpdate", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profile:importAndUpdate", { guid: "abc123" });
      const found = await specHelper.findEnqueuedTasks(
        "profile:importAndUpdate"
      );
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("enqueuing more than one tasks for the same profile will de-duplicate", async () => {
      await task.enqueue("profile:importAndUpdate", { guid: "abc123" });
      await task.enqueue("profile:importAndUpdate", { guid: "abc123" });

      const found = await specHelper.findEnqueuedTasks(
        "profile:importAndUpdate"
      );
      expect(found.length).toEqual(1);
    });

    test("enqueuing more tasks for different profiles is OK", async () => {
      await task.enqueue("profile:importAndUpdate", { guid: "abc123" });
      await task.enqueue("profile:importAndUpdate", { guid: "cde456" });

      const found = await specHelper.findEnqueuedTasks(
        "profile:importAndUpdate"
      );
      expect(found.length).toEqual(2);
    });

    describe("with multiple runs and imports", () => {
      let group: Group;

      beforeAll(async () => {
        await helper.truncate();
        await helper.factories.profilePropertyRules();
        helper.disableTestPluginImport();
        await api.resque.queue.connection.redis.flushdb();

        group = await helper.factories.group({
          name: "test group",
          type: "calculated",
          matchType: "all",
        });
        await group.setRules([{ key: "lastName", match: "Mario", op: "eq" }]);
      });

      it("updates the run and imports", async () => {
        const runA = await helper.factories.run(null, { state: "running" });
        const runB = await helper.factories.run(null, { state: "running" });

        const importA = await helper.factories.import(runA, {
          email: "mario@example.com",
          lastName: "Mario",
        });

        const importB = await helper.factories.import(runB, {
          email: "mario@example.com",
          firstName: "Super",
        });

        const foundAssociateTasks = await specHelper.findEnqueuedTasks(
          "import:associateProfile"
        );
        expect(foundAssociateTasks.length).toEqual(2);

        await Promise.all(
          foundAssociateTasks.map(
            async (t) =>
              await specHelper.runTask("import:associateProfile", t.args[0])
          )
        );

        const profiles = await Profile.findAll();
        expect(profiles.length).toBe(1);

        const foundImportAndUpdateTasks = await specHelper.findEnqueuedTasks(
          "profile:importAndUpdate"
        );
        expect(foundImportAndUpdateTasks.length).toEqual(1);

        await specHelper.runTask(
          "profile:importAndUpdate",
          foundImportAndUpdateTasks[0].args[0]
        );

        const properties = await profiles[0].properties();
        expect(properties.email.value).toBe("mario@example.com");
        expect(properties.lastName.value).toBe("Mario");
        expect(properties.firstName.value).toBe("Super");

        const imports = await Import.findAll();
        expect(imports.length).toBe(2);
        imports.forEach((i) => {
          expect(i.profileAssociatedAt).toBeTruthy();
          expect(i.profileUpdatedAt).toBeTruthy();
          expect(i.groupsUpdatedAt).toBeTruthy();
          expect(i.exportedAt).toBeFalsy();
        });

        const runs = await Run.findAll({
          where: {
            creatorType: "schedule",
          },
        });

        expect(runs.length).toBe(2);
        await runA.reload();
        await runB.reload();
        expect(runA.profilesCreated).toBe(1);
        expect(runB.profilesCreated).toBe(0);
        expect(runA.profilesImported).toBe(1);
        expect(runB.profilesImported).toBe(1);
        expect(runA.profilesExported).toBe(0);
        expect(runB.profilesExported).toBe(0);
        expect(runA.state).toBe("running");
        expect(runB.state).toBe("running");

        await importA.reload();
        await importB.reload();

        expect(importA.oldProfileProperties).toEqual({
          email: "mario@example.com",
        });
        expect(importA.newProfileProperties).toEqual({
          email: "mario@example.com",
          firstName: "Super",
          lastName: "Mario",
          isVIP: null,
          lastLoginAt: null,
          ltv: null,
          userId: null,
        });
        expect(importA.oldGroupGuids).toEqual([]);
        expect(importA.newGroupGuids).toEqual([group.guid]);

        expect(importB.oldProfileProperties).toEqual({
          email: "mario@example.com",
        });
        expect(importB.newProfileProperties).toEqual({
          email: "mario@example.com",
          lastName: "Mario",
          firstName: "Super",
          isVIP: null,
          lastLoginAt: null,
          ltv: null,
          userId: null,
        });
        expect(importB.oldGroupGuids).toEqual([]);
        expect(importB.newGroupGuids).toEqual([group.guid]);

        const foundExportTasks = await specHelper.findEnqueuedTasks(
          "profile:export"
        );
        expect(foundExportTasks.length).toEqual(1);
      });
    });

    describe("errors", () => {
      let counter = 0;

      beforeAll(() => {
        Profile.prototype.updateGroupMembership = jest.fn(() => {
          counter++;
          throw new Error("oh no");
        });
      });

      it("applies errors to the imports", async () => {
        const run = await helper.factories.run();
        const profile = await helper.factories.profile();
        const _import = await Import.create({
          creatorType: "run",
          creatorGuid: run.guid,
          profileGuid: profile.guid,
          data: {},
        });

        await expect(
          specHelper.runTask("profile:importAndUpdate", {
            guid: profile.guid,
          })
        ).rejects.toThrow(/oh no/);

        expect(counter).toBe(1);

        await _import.reload();
        expect(_import.errorMessage).toMatch(/oh no/);
        const errorMetadata = JSON.parse(_import.errorMetadata);
        expect(errorMetadata.message).toMatch(/oh no/);
        expect(errorMetadata.step).toBe("profile:importAndUpdate");
        expect(errorMetadata.stack).toMatch(/ProfileImportAndUpdate/);
      });
    });
  });
});
