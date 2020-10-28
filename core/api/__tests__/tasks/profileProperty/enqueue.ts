import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { plugin, ProfilePropertyRule } from "../../../src";

let actionhero;

describe("tasks/profileProperties:enqueue", () => {
  let profilePropertyRulesCount: number;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  afterEach(async () => {
    await plugin.updateSetting(
      "core",
      "imports-profile-properties-batch-size",
      50
    );
  });

  beforeAll(async () => {
    profilePropertyRulesCount = await ProfilePropertyRule.scope(null).count();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("profileProperties:enqueue", () => {
    test("can be enqueued", async () => {
      await task.enqueue("profileProperties:enqueue", {});
      const found = await specHelper.findEnqueuedTasks(
        "profileProperties:enqueue"
      );
      expect(found.length).toEqual(1);
    });

    test("it will enqueue batches of profile properties in the pending state", async () => {
      const run = await helper.factories.run();
      const marioImport = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Mario",
      });
      const luigiImport = await helper.factories.import(run, {
        email: "luigi@example.com",
      });

      await specHelper.runTask("import:associateProfile", {
        importGuid: marioImport.guid,
      });
      await specHelper.runTask("import:associateProfile", {
        importGuid: luigiImport.guid,
      });

      await specHelper.runTask("profileProperties:enqueue", {});

      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:import"
      );
      expect(found.length).toBe(profilePropertyRulesCount);
      found.forEach((task) => {
        expect(task.args[0].profileGuids.length).toBe(2);
      });
    });

    test("the batch size can be configured via a setting", async () => {
      await plugin.updateSetting(
        "core",
        "imports-profile-properties-batch-size",
        1
      );

      const run = await helper.factories.run();
      const marioImport = await helper.factories.import(run, {
        email: "mario@example.com",
        firstName: "Mario",
      });
      const luigiImport = await helper.factories.import(run, {
        email: "luigi@example.com",
      });

      await specHelper.runTask("import:associateProfile", {
        importGuid: marioImport.guid,
      });
      await specHelper.runTask("import:associateProfile", {
        importGuid: luigiImport.guid,
      });

      await specHelper.runTask("profileProperties:enqueue", {});

      const found = await specHelper.findEnqueuedTasks(
        "profileProperty:import"
      );
      expect(found.length).toBe(profilePropertyRulesCount * 2);
    });
  });
});
