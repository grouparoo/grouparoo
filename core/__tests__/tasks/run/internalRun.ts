import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import {
  plugin,
  Property,
  Run,
  Profile,
  ProfileProperty,
  Import,
} from "../../../src";

describe("tasks/run:internalRun", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let profile: Profile;

  describe("run:internalRun", () => {
    beforeAll(async () => {
      await Run.truncate();
      profile = await helper.factories.profile();
      await profile.buildNullProperties();
    });

    beforeAll(async () => {
      await plugin.updateSetting("core", "runs-profile-batch-size", 100);
    });

    beforeEach(async () => {
      await ProfileProperty.update(
        { state: "ready" },
        { where: { profileId: profile.id } }
      );
      await profile.reload({ include: [ProfileProperty] });
      await profile.update({ state: "ready" });
    });

    beforeEach(async () => {
      await Import.truncate();
    });

    test("the task will mark every profile as pending by default", async () => {
      const run = await internalRun("test", "testId");
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(1);
      expect(run.groupMethod).toBe("internalRun");

      await profile.reload({ include: [ProfileProperty] });
      expect(profile.state).toBe("pending");
      profile.profileProperties.forEach((p) => expect(p.state).toBe("pending"));

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileId).toBe(profile.id);
    });

    test("if the run was created due to a property, only those profileProperties will become pending", async () => {
      const property = await Property.findOne({ where: { key: "email" } });
      const run = await internalRun("property", property.id);
      await specHelper.runTask("run:internalRun", { runId: run.id });

      await run.reload();
      expect(run.groupMemberLimit).toBe(100);
      expect(run.groupMemberOffset).toBe(1);
      expect(run.groupMethod).toBe("internalRun");

      await profile.reload({ include: [ProfileProperty] });
      expect(profile.state).toBe("pending");
      expect(new Set(profile.profileProperties.map((p) => p.state))).toEqual(
        new Set(["ready", "pending"])
      );
      for (const profileProperty of profile.profileProperties) {
        if (profileProperty.propertyId === property.id) {
          expect(profileProperty.state).toBe("pending");
        } else {
          expect(profileProperty.state).toBe("ready");
        }
      }

      const imports = await Import.findAll();
      expect(imports.length).toBe(1);
      expect(imports[0].profileId).toBe(profile.id);
    });

    test("a run can be stopped outside of the task and not enqueue another task", async () => {
      const property = await Property.findOne();
      const run = await helper.factories.run(property, {
        creatorType: "test",
        creatorId: "test",
        state: "running",
      });
      expect(run.state).toBe("running");

      await run.stop();

      await task.enqueue("run:internalRun", { runId: run.id });
      const foundTasks = await specHelper.findEnqueuedTasks("run:internalRun");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("run:internalRun", foundTasks[0].args[0]);

      const foundTasksAgain = await specHelper.findEnqueuedTasks(
        "run:internalRun"
      );
      expect(foundTasksAgain.length).toBe(1); // not re-enqueued
    });
  });
});
