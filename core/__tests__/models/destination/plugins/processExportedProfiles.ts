import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../../../src/modules/plugin";
import {
  App,
  Destination,
  Export,
  ExportProcessor,
  GrouparooModel,
  GroupMember,
  Setting,
} from "../../../../src";
import { api, specHelper } from "actionhero";

describe("models/destination - with custom processExportedRecords", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let model: GrouparooModel;
  let app: App;
  let destination: Destination;
  let exportArgs = {
    app: null,
    appOptions: null,
    destination: null,
    destinationOptions: null,
    exports: null,
  };
  let processArgs = {
    app: null,
    appOptions: null,
    destination: null,
    destinationOptions: null,
    exports: null,
    remoteKey: null,
  };
  let exportArrayProperties = [];
  let parallelismResponse = Infinity;
  let exportProfilesResponse = {
    success: true,
    errors: undefined,
    retryDelay: undefined,
    processExports: undefined,
  };
  let processProfilesResponse = {
    success: true,
    errors: undefined,
    retryDelay: undefined,
    processExports: undefined,
  };
  let processExportedProfilesThrow = null;

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
  });

  beforeEach(() => {
    exportArgs = {
      app: null,
      appOptions: null,
      destination: null,
      destinationOptions: null,
      exports: [],
    };
    processArgs = {
      app: null,
      appOptions: null,
      destination: null,
      destinationOptions: null,
      exports: [],
      remoteKey: null,
    };
    processExportedProfilesThrow = null;
  });

  beforeAll(async () => {
    plugin.registerPlugin({
      name: "test-plugin",
      apps: [
        {
          name: "test-template-app",
          displayName: "test-template-app",
          options: [{ key: "test_key", required: true }],
          methods: {
            test: async () => {
              return { success: true, errors: [] };
            },
            parallelism: async () => {
              return parallelismResponse;
            },
          },
        },
      ],
      connections: [
        {
          name: "export-from-test-template-app",
          displayName: "export-from-test-template-app",
          description: "a test app connection",
          apps: ["test-template-app"],
          direction: "export",
          syncModes: ["sync", "enrich", "additive"],
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
            exportArrayProperties: async () => exportArrayProperties,
            exportRecords: async ({
              app,
              appOptions,
              destination,
              destinationOptions,
              exports,
            }) => {
              exportArgs = {
                app,
                appOptions,
                destination,
                destinationOptions,
                exports,
              };

              return exportProfilesResponse;
            },
            processExportedRecords: async ({
              app,
              appOptions,
              destination,
              destinationOptions,
              exports,
              remoteKey,
            }) => {
              processArgs = {
                app,
                appOptions,
                destination,
                destinationOptions,
                exports,
                remoteKey,
              };

              if (processExportedProfilesThrow) {
                throw processExportedProfilesThrow;
              }

              return processProfilesResponse;
            },
          },
        },
      ],
    });

    app = await App.create({
      name: "test with real methods - async exports",
      type: "test-template-app",
    });
    await app.setOptions({ test_key: "abc" });
    await app.update({ state: "ready" });
  });

  describe.each(["ready", "deleted"])("with app in %p state", (appState) => {
    beforeEach(async () => {
      await app.update({ state: "ready" });

      destination = await Destination.create({
        name: "test plugin destination",
        type: "export-from-test-template-app",
        syncMode: "sync",
        appId: app.id,
        modelId: model.id,
      });
      await destination.update({ state: "ready" });

      await api.resque.queue.connection.redis.flushdb();

      await app.update({ state: appState });
    });

    afterEach(async () => {
      await Export.truncate();
      await destination.updateTracking("none");
      await destination.destroy();
    });

    test("the exportRecords method can indicate exports will be processed later and models will be created", async () => {
      await destination.setMapping({
        uid: "userId",
        customer_email: "email",
      });

      const groupA = await helper.factories.group();
      await destination.updateTracking("group", groupA.id);

      const record = await helper.factories.record();
      await record.addOrUpdateProperties({
        email: ["newemail@example.com"],
      });
      await GroupMember.create({ recordId: record.id, groupId: groupA.id });

      await destination.exportRecord(record);
      await specHelper.runTask("export:enqueue", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:sendBatch");
      expect(foundTasks.length).toBe(1);

      exportProfilesResponse = {
        success: true,
        errors: null,
        retryDelay: null,
        processExports: {
          recordIds: [record.id],
          processDelay: 1000,
          remoteKey: "remote-import-id",
        },
      };

      await specHelper.runTask("export:sendBatch", foundTasks[0].args[0]);

      expect(exportArgs.destination.id).toEqual(destination.id);
      expect(exportArgs.app.id).toEqual(app.id);
      expect(exportArgs.exports.length).toEqual(1);

      const exportProcessors = await ExportProcessor.findAll({
        where: { destinationId: destination.id },
      });
      expect(exportProcessors.length).toBe(1);
      expect(exportProcessors[0].state).toBe("pending");
      expect(exportProcessors[0].remoteKey).toBe("remote-import-id");

      const _exports = await Export.findAll({
        where: { destinationId: destination.id },
      });
      expect(_exports.length).toBe(1);
      expect(_exports[0].destinationId).toBe(destination.id);
      expect(_exports[0].recordId).toBe(record.id);
      expect(_exports[0].state).toBe("processing");
      expect(_exports[0].startedAt).toBeTruthy();
      expect(_exports[0].completedAt).toBeFalsy();
      expect(_exports[0].exportProcessorId).toBe(exportProcessors[0].id);

      await record.destroy();
    });

    test("the processExportedRecords method can be called by the destination", async () => {
      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
          remoteKey: "my-remote-key",
        }
      );
      const record1 = await helper.factories.record();
      const record2 = await helper.factories.record();
      const export1 = await helper.factories.export(record1, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });
      const export2 = await helper.factories.export(record2, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      let foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueueProcessors", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      await specHelper.runTask("export:process", foundTasks[0].args[0]);
      expect(processArgs.exports).toHaveLength(2);
      expect(processArgs.remoteKey).toBe("my-remote-key");

      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("complete");
      expect(exportProcessor.completedAt).toBeTruthy();
      expect(exportProcessor.errorMessage).toBeNull();

      await export1.reload();
      expect(export1.state).toBe("complete");
      expect(export1.completedAt).toBeTruthy();
      expect(export1.errorMessage).toBeNull();

      await export2.reload();
      expect(export2.state).toBe("complete");
      expect(export2.completedAt).toBeTruthy();
      expect(export2.errorMessage).toBeNull();

      await record1.destroy();
      await record2.destroy();
    });

    test("the processExportedRecords method can throw an error and it will be retried", async () => {
      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
        }
      );
      const record = await helper.factories.record();
      const _export = await helper.factories.export(record, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      let foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueueProcessors", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      processExportedProfilesThrow = new Error("oops!");

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // export processor retried and marked with error
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("pending");
      expect(exportProcessor.retryCount).toBe(1);
      expect(exportProcessor.completedAt).toBeFalsy();
      expect(exportProcessor.errorMessage).toMatch(/oops!/);
      expect(exportProcessor.processAt.getTime()).toBeGreaterThan(
        new Date(0).getTime()
      );

      // exports still processing
      await _export.reload();
      expect(_export.state).toBe("processing");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.errorMessage).toBeNull();
      expect(_export.exportProcessorId).toBe(exportProcessor.id);

      // try again without an error
      processExportedProfilesThrow = null;
      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // processor is complete
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("complete");
      expect(exportProcessor.completedAt).toBeTruthy();
      expect(exportProcessor.errorMessage).toBeNull();
      expect(exportProcessor.retryCount).toBe(1);

      // exports are complete
      await _export.reload();
      expect(_export.state).toBe("complete");
      expect(_export.completedAt).toBeTruthy();
      expect(_export.errorMessage).toBeNull();

      await record.destroy();
    });

    test("the processExportedRecords method can throw an error and the processor/exports will be marked as failed if retried too many times", async () => {
      const setting = await Setting.findOne({
        where: { key: "export-processors-max-retries-count" },
      });
      await setting.update({ value: 5 });

      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
          retryCount: 5,
        }
      );
      const record = await helper.factories.record();
      const _export = await helper.factories.export(record, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      let foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueueProcessors", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      processExportedProfilesThrow = new Error("oops!");

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // export processor retried and failed
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("failed");
      expect(exportProcessor.retryCount).toBe(6);
      expect(exportProcessor.completedAt).toBeFalsy();
      expect(exportProcessor.errorMessage).toMatch(/oops!/);
      expect(exportProcessor.errorLevel).toBe("error");

      // exports marked as failed
      await _export.reload();
      expect(_export.state).toBe("failed");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.errorMessage).toBe(
        "An error occurred while processing the export: oops!"
      );
      expect(_export.errorLevel).toBe("error");
      expect(_export.exportProcessorId).toBe(exportProcessor.id);

      await setting.update({ value: setting.defaultValue });
      await record.destroy();
    });

    test("some records can return an error and the processor will still be marked completed", async () => {
      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
        }
      );
      const record1 = await helper.factories.record();
      const export1 = await helper.factories.export(record1, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });
      const record2 = await helper.factories.record();
      const export2 = await helper.factories.export(record2, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });
      const record3 = await helper.factories.record();
      const export3 = await helper.factories.export(record3, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      const recordError1 = new Error("oh no!");
      recordError1["recordId"] = record1.id;
      const recordError2 = new Error("info error!");
      recordError2["recordId"] = record2.id;
      recordError2["errorLevel"] = "info";

      await specHelper.runTask("export:enqueueProcessors", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      processProfilesResponse = {
        success: false,
        errors: [recordError1, recordError2],
        retryDelay: 1000,
        processExports: null,
      };

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // export processor marked as completed
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("complete");
      expect(exportProcessor.completedAt).toBeTruthy();
      expect(exportProcessor.errorMessage).toBeNull();

      // Failed exports get their error set
      await export1.reload();
      expect(export1.recordId).toBe(record1.id);
      expect(export1.state).toBe("pending"); // kicked back to pending state
      expect(export1.completedAt).toBeFalsy();
      expect(export1.errorMessage).toBe("oh no!");
      expect(export1.errorLevel).toBe("error");
      expect(export1.exportProcessorId).toBeNull(); // cleared

      await export2.reload();
      expect(export2.recordId).toBe(record2.id);
      expect(export2.state).toBe("failed"); // marked as failed
      expect(export2.completedAt).toBeFalsy();
      expect(export2.errorMessage).toBe("info error!");
      expect(export2.errorLevel).toBe("info");
      expect(export2.exportProcessorId).toBe(exportProcessor.id);

      // Successful exports will be marked as complete
      await export3.reload();
      expect(export3.recordId).toBe(record3.id);
      expect(export3.state).toBe("complete");
      expect(export3.completedAt).toBeTruthy();
      expect(export3.errorMessage).toBeNull();
      expect(export3.exportProcessorId).toBe(exportProcessor.id);

      await export1.destroy();
      await record1.destroy();
      await record2.destroy();
      await record3.destroy();
    });

    test("failed exports will be retried, sent back to pending and cleared of an exportProcessor", async () => {
      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
        }
      );
      const record1 = await helper.factories.record();
      const export1 = await helper.factories.export(record1, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      const recordError1 = new Error("oh no!");
      recordError1["recordId"] = record1.id;

      await specHelper.runTask("export:enqueueProcessors", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      processProfilesResponse = {
        success: false,
        errors: [recordError1],
        retryDelay: 1000,
        processExports: null,
      };

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // export processor marked as completed
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("complete");
      expect(exportProcessor.completedAt).toBeTruthy();
      expect(exportProcessor.errorMessage).toBeNull();

      // Failed export gets kicked back to pending, bump retry and clear processor
      await export1.reload();
      expect(export1.recordId).toBe(record1.id);
      expect(export1.state).toBe("pending"); // kicked back to pending state
      expect(export1.completedAt).toBeFalsy();
      expect(export1.errorMessage).toBe("oh no!");
      expect(export1.errorLevel).toBe("error");
      expect(export1.exportProcessorId).toBeNull(); // cleared
      expect(export1.retryCount).toBe(0);

      await export1.destroy();
      await record1.destroy();
    });

    test("the processExportedRecords method can return processExports to have them reprocessed", async () => {
      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
          remoteKey: "my-remote-key",
        }
      );
      const record1 = await helper.factories.record();
      const record2 = await helper.factories.record();
      const record3 = await helper.factories.record();
      const export1 = await helper.factories.export(record1, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });
      const export2 = await helper.factories.export(record2, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });
      const export3 = await helper.factories.export(record3, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      let foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueueProcessors", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      processProfilesResponse = {
        success: true,
        processExports: {
          recordIds: [record1.id, record2.id], // record3 was successful
          processDelay: 1000,
        },
        errors: null,
        retryDelay: null,
      };

      await specHelper.runTask("export:process", foundTasks[0].args[0]);
      expect(processArgs.exports).toHaveLength(3);
      expect(processArgs.remoteKey).toBe("my-remote-key");

      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("pending");
      expect(exportProcessor.completedAt).toBeFalsy();
      expect(exportProcessor.errorMessage).toBeNull();
      expect(exportProcessor.retryCount).toBe(1); // count bumped!

      // exports still processing
      await export1.reload();
      expect(export1.state).toBe("processing");
      expect(export1.completedAt).toBeFalsy();
      expect(export1.exportProcessorId).toBe(exportProcessor.id);

      await export2.reload();
      expect(export2.state).toBe("processing");
      expect(export2.completedAt).toBeFalsy();
      expect(export2.exportProcessorId).toBe(exportProcessor.id);

      // one export was successful
      await export3.reload();
      expect(export3.state).toBe("complete");
      expect(export3.completedAt).toBeTruthy();
      expect(export3.exportProcessorId).toBe(exportProcessor.id);

      // process again, all are done
      processProfilesResponse = {
        success: true,
        processExports: null,
        errors: null,
        retryDelay: null,
      };

      await specHelper.runTask("export:process", foundTasks[0].args[0]);
      expect(processArgs.exports).toHaveLength(2); // only 2 this time
      expect(processArgs.remoteKey).toBe("my-remote-key");

      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("complete");
      expect(exportProcessor.completedAt).toBeTruthy();
      expect(exportProcessor.errorMessage).toBeNull();
      expect(exportProcessor.retryCount).toBe(1);

      // exports done
      await export1.reload();
      expect(export1.state).toBe("complete");
      expect(export1.completedAt).toBeTruthy();
      expect(export1.exportProcessorId).toBe(exportProcessor.id);

      await export2.reload();
      expect(export2.state).toBe("complete");
      expect(export2.completedAt).toBeTruthy();
      expect(export2.exportProcessorId).toBe(exportProcessor.id);

      await record1.destroy();
      await record2.destroy();
      await record3.destroy();
    });

    test("the processor/exports will be marked as failed if the processExportedRecords method returns processExports too many times", async () => {
      const setting = await Setting.findOne({
        where: { key: "export-processors-max-retries-count" },
      });
      await setting.update({ value: 5 });

      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
          retryCount: 5,
        }
      );
      const record = await helper.factories.record();
      const _export = await helper.factories.export(record, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      let foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(0);

      await specHelper.runTask("export:enqueueProcessors", {});

      foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      processProfilesResponse = {
        success: true,
        processExports: {
          recordIds: [record.id],
          processDelay: 1000,
        },
        errors: null,
        retryDelay: null,
      };

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // export processor retried too many times
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("failed");
      expect(exportProcessor.retryCount).toBe(6);
      expect(exportProcessor.completedAt).toBeFalsy();
      expect(exportProcessor.errorMessage).toBeNull();

      // exports marked as failed
      await _export.reload();
      expect(_export.state).toBe("failed");
      expect(_export.completedAt).toBeFalsy();
      expect(_export.errorMessage).toMatch(
        /The maximum amount of retries was reached when trying to process this export/
      );
      expect(_export.errorLevel).toBe("info");
      expect(_export.exportProcessorId).toBe(exportProcessor.id);

      await setting.update({ value: setting.defaultValue });
      await record.destroy();
    });

    test("processExportedRecords can handle parallelsim limits", async () => {
      parallelismResponse = 0;

      const exportProcessor = await helper.factories.exportProcessor(
        destination,
        {
          processAt: new Date(0),
        }
      );
      const record1 = await helper.factories.record();
      const export1 = await helper.factories.export(record1, destination, {
        startedAt: new Date(),
        state: "processing",
        exportProcessorId: exportProcessor.id,
      });

      await specHelper.runTask("export:enqueueProcessors", {});

      const foundTasks = await specHelper.findEnqueuedTasks("export:process");
      expect(foundTasks.length).toBe(1);

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // export processor retried and marked with error
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("pending");
      expect(exportProcessor.retryCount).toBe(0);
      expect(exportProcessor.completedAt).toBeFalsy();
      expect(exportProcessor.errorMessage).toBeNull();

      // exports still processing
      await export1.reload();
      expect(export1.state).toBe("processing");
      expect(export1.completedAt).toBeFalsy();
      expect(export1.errorMessage).toBeNull();
      expect(export1.exportProcessorId).toBe(exportProcessor.id);

      // when the parallelism is back to OK...
      parallelismResponse = Infinity;

      await specHelper.runTask("export:process", foundTasks[0].args[0]);

      // processor is complete
      await exportProcessor.reload();
      expect(exportProcessor.state).toBe("complete");
      expect(exportProcessor.completedAt).toBeTruthy();
      expect(exportProcessor.errorMessage).toBeNull();
      expect(exportProcessor.retryCount).toBe(0);

      // exports are complete
      await export1.reload();
      expect(export1.state).toBe("complete");
      expect(export1.completedAt).toBeTruthy();
      expect(export1.errorMessage).toBeNull();

      await record1.destroy();
    });
  });
});
