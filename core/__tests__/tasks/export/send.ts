import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import {
  GrouparooRecord,
  Group,
  Destination,
  Export,
  Run,
  App,
  plugin,
} from "../../../src";

describe("tasks/export:send", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  test("can be enqueued", async () => {
    await task.enqueue("export:send", {
      destinationId: "abc123",
      exportId: "abc123",
    });
    const found = await specHelper.findEnqueuedTasks("export:send");
    expect(found.length).toEqual(1);
  });

  test("does not throw if the destination or export cannot be found", async () => {
    await specHelper.runTask("export:send", {
      destinationId: "missing",
      exportId: "missing",
    });

    const destination = await helper.factories.destination();
    await specHelper.runTask("export:send", {
      destinationId: destination.id,
      exportId: "missing",
    });

    await destination.destroy();
  });

  describe("within an export workflow", () => {
    let destination: Destination,
      group: Group,
      record: GrouparooRecord,
      run: Run;

    beforeAll(async () => {
      record = await helper.factories.record();
      await record.addOrUpdateProperties({ email: ["mario@example.com"] });

      group = await helper.factories.group({ type: "manual" });
      await group.addRecord(record);

      destination = await helper.factories.destination();
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
      expect(run.recordsCreated).toBe(0);
      expect(run.recordsImported).toBe(0);
    });

    test("the record can be imported and exported", async () => {
      await ImportWorkflow();
    });

    test("export:send will be enqueued into a custom queue with the app type", async () => {
      const foundExportTasks = await specHelper.findEnqueuedTasks(
        "record:export"
      );
      expect(foundExportTasks.length).toBe(1);
      await specHelper.runTask("record:export", foundExportTasks[0].args[0]);
      await specHelper.runTask("export:enqueue", {});
      const foundExportSendTasks = await specHelper.findEnqueuedTasks(
        "export:send"
      );
      expect(foundExportSendTasks.length).toBe(1);
      expect(foundExportSendTasks[0].queue).toBe("exports:test-plugin-app");
    });

    test("without the export being sent, the run cannot be completed", async () => {
      await run.afterBatch();
      await run.reload();
      expect(run.state).toEqual("running");
    });

    test("the export can be sent", async () => {
      const foundExportSendTasks = await specHelper.findEnqueuedTasks(
        "export:send"
      );
      await specHelper.runTask("export:send", foundExportSendTasks[0].args[0]);

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

      let exportProfileResponse = {
        success: true,
        error: undefined,
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
                exportRecord: async () => {
                  return exportProfileResponse;
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
        exportProfileResponse = {
          success: true,
          error: null,
          retryDelay: null,
        };

        await destination.exportRecord(record);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});
        let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
        expect(foundSendTasks.length).toBe(1);

        await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

        // the task should not be re-enqueued
        foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
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
        exportProfileResponse = {
          success: false,
          error: new Error("oh no!"),
          retryDelay: 1000 * 5,
        };

        await destination.exportRecord(record);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});
        let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
        expect(foundSendTasks.length).toBe(1);

        await specHelper.runTask("export:send", foundSendTasks[0].args[0]);

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
        exportProfileResponse = {
          success: false,
          error: new Error("oh no!"),
          retryDelay: undefined,
        };

        await destination.exportRecord(record);
        const _export = await Export.findOne({
          where: { destinationId: destination.id },
        });

        await specHelper.runTask("export:enqueue", {});
        let foundSendTasks = await specHelper.findEnqueuedTasks("export:send");
        expect(foundSendTasks.length).toBe(1);

        await specHelper.runFullTask("export:send", foundSendTasks[0].args[0]);

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
