import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  Profile,
  Group,
  Destination,
  Export,
  Run,
  App,
  plugin,
} from "../../../src";

describe("tasks/export:sendBatch", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  test("can be enqueued", async () => {
    await task.enqueue("export:sendBatch", {
      destinationId: "abc123",
      exportIds: ["abc123"],
    });
    const found = await specHelper.findEnqueuedTasks("export:sendBatch");
    expect(found.length).toEqual(1);
  });

  test("does not throw if the destination or export cannot be found", async () => {
    await specHelper.runTask("export:sendBatch", {
      destinationId: "missing",
      exportIds: ["missing"],
    });

    const destination = await helper.factories.destination();
    await specHelper.runTask("export:sendBatch", {
      destinationId: destination.id,
      exportIds: ["missing"],
    });

    await destination.destroy();
  });

  describe("within an export workflow", () => {
    let destination: Destination, group: Group, profile: Profile, run: Run;

    beforeAll(async () => {
      profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ email: ["mario@example.com"] });

      group = await helper.factories.group({ type: "manual" });
      await group.addProfile(profile);

      destination = await helper.factories.destination(null, {
        type: "test-plugin-export-batch",
      });
      await destination.trackGroup(group);

      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();

      const destinationGroupMemberships = {};
      destinationGroupMemberships[group.id] = group.name;
      await destination.setDestinationGroupMemberships(
        destinationGroupMemberships
      );
      await destination.update({ state: "ready" });

      await destination.exportGroupMembers(true);

      run = await Run.findOne({
        where: { creatorId: group.id },
      });
      await specHelper.runTask("group:run", { runId: run.id });

      await run.updateTotals();

      expect(run.importsCreated).toBe(1);
      expect(run.profilesCreated).toBe(0);
      expect(run.profilesImported).toBe(0);
    });

    test("the profile can be imported and exported", async () => {
      await ImportWorkflow();
    });

    test("export:sendBatch will be enqueued after a batch from the run", async () => {
      const foundExportTasks = await specHelper.findEnqueuedTasks(
        "profile:export"
      );
      expect(foundExportTasks.length).toBe(1);
      await specHelper.runTask("profile:export", foundExportTasks[0].args[0]);
      let foundExportSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundExportTasks.length).toBe(1);
      expect(foundExportSendBatchTasks.length).toBe(0);

      await specHelper.runTask("export:enqueue", {});

      foundExportSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      expect(foundExportSendBatchTasks.length).toBe(1);
    });

    test("without the export being sent, the run cannot be completed", async () => {
      await run.afterBatch();
      await run.reload();
      expect(run.state).toEqual("running");
    });

    test("the export can be sent", async () => {
      const foundExportSendBatchTasks = await specHelper.findEnqueuedTasks(
        "export:sendBatch"
      );
      await specHelper.runTask(
        "export:sendBatch",
        foundExportSendBatchTasks[0].args[0]
      );

      const _exports = await Export.findAll({
        where: {
          destinationId: destination.id,
        },
      });

      expect(_exports.length).toBe(1);
      expect(_exports[0].startedAt).toBeTruthy();
      expect(_exports[0].completedAt).toBeTruthy();
    });

    describe("with custom destination", () => {
      let app: App;
      let destination: Destination;

      let exportProfilesResponse = {
        success: true,
        errors: undefined,
        retryDelay: undefined,
      };

      beforeAll(async () => {
        plugin.registerPlugin({
          name: "test-export-plugin",
          apps: [
            {
              name: "test-template-app",
              options: [{ key: "test_key", required: true }],
              methods: {
                test: async () => {
                  return { success: true };
                },
              },
            },
          ],
          connections: [
            {
              name: "export-from-test-app",
              description: "a test app connection",
              app: "test-template-app",
              direction: "export",
              options: [],
              methods: {
                destinationMappingOptions: async () => {
                  return {
                    labels: {
                      group: {
                        singular: "list",
                        plural: "lists",
                      },
                      property: {
                        singular: "var",
                        plural: "vars",
                      },
                    },
                    properties: {
                      required: [],
                      known: [],
                      allowOptionalFromProperties: true,
                    },
                  };
                },
                exportArrayProperties: async () => [],
                exportProfiles: async () => {
                  return exportProfilesResponse;
                },
              },
            },
          ],
        });

        app = await App.create({
          name: "test with real methods",
          type: "test-template-app",
        });
        await app.setOptions({ test_key: "abc" });
        await app.update({ state: "ready" });

        destination = await Destination.create({
          name: "test plugin destination",
          type: "export-from-test-app",
          appId: app.id,
        });
        await destination.update({ state: "ready" });
        await destination.trackGroup(group);
      });

      beforeEach(async () => {
        await Export.truncate();
        await api.resque.queue.connection.redis.flushdb();
      });

      test("if the export succeeds, the task will not be enqueued and the export will be marked as complete", async () => {
        // this export will succeed
        exportProfilesResponse = {
          success: true,
          errors: null,
          retryDelay: null,
        };

        await destination.exportProfile(profile);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});
        let foundSendTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendTasks.length).toBe(1);

        await specHelper.runTask("export:sendBatch", foundSendTasks[0].args[0]);

        // the task should not be re-enqueued
        foundSendTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
        expect(foundSendTasks.length).toBe(1); // the original one

        // the export should be complete
        await _export.reload();
        expect(_export.startedAt).not.toBeFalsy();
        expect(_export.sendAt).not.toBeFalsy();
        expect(_export.errorMessage).toBeNull();
        expect(_export.errorLevel).toBeNull();
        expect(_export.completedAt).not.toBeFalsy();
        expect(_export.state).toBe("complete");
        expect(_export.retryCount).toBe(0);
      });

      test("if the export fails with a retryDelay, the export will have the error message appended", async () => {
        // this export will fail
        const error = new Error("oh no!");
        error["profileId"] = profile.id;
        exportProfilesResponse = {
          success: false,
          errors: [error],
          retryDelay: 1000 * 5,
        };

        await destination.exportProfile(profile);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});
        let foundSendTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendTasks.length).toBe(1);

        await specHelper.runTask("export:sendBatch", foundSendTasks[0].args[0]);

        // the export should be marked with the error
        await _export.reload();
        expect(_export.startedAt).toBeFalsy();
        expect(_export.sendAt.getTime()).toBeGreaterThan(new Date().getTime());
        expect(_export.errorMessage).toMatch(/oh no!/);
        expect(_export.errorLevel).toBe("error");
        expect(_export.completedAt).toBeFalsy();
        expect(_export.state).toBe("pending");
        expect(_export.retryCount).toBe(1);
      });

      test("if the export fails without a retryDelay, the export will have the error message appended", async () => {
        // this export will fail
        const error = new Error("oh no!");
        error["profileId"] = profile.id;
        exportProfilesResponse = {
          success: false,
          errors: [error],
          retryDelay: undefined,
        };

        await destination.exportProfile(profile);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});
        let foundSendTasks = await specHelper.findEnqueuedTasks(
          "export:sendBatch"
        );
        expect(foundSendTasks.length).toBe(1);

        await specHelper.runTask("export:sendBatch", foundSendTasks[0].args[0]);

        // the export should be marked with the error
        await _export.reload();
        expect(_export.startedAt).toBeFalsy();
        expect(_export.sendAt.getTime()).toBeGreaterThan(new Date().getTime());
        expect(_export.errorMessage).toMatch(/oh no!/);
        expect(_export.errorLevel).toBe("error");
        expect(_export.completedAt).toBeFalsy();
        expect(_export.state).toBe("pending");
        expect(_export.retryCount).toBe(1);
      });
    });
  });
});
