import { helper } from "@grouparoo/spec-helper";
import { task, specHelper } from "actionhero";

describe("tasks/export:process", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("can be enqueued", async () => {
    await task.enqueue("export:process", {
      exportProcessorId: "abc123",
    });
    const found = await specHelper.findEnqueuedTasks("export:process");
    expect(found.length).toEqual(1);
  });

  test("does not throw if the export processor cannot be found", async () => {
    await specHelper.runTask("export:process", {
      exportProcessorId: "missing",
    });
  });

  test("does not re-process if the export processor is complete", async () => {
    const exportProcessor = await helper.factories.exportProcessor(null, {
      state: "complete",
      completedAt: new Date(0),
    });

    await specHelper.runTask("export:process", {
      exportProcessorId: exportProcessor.id,
    });

    await exportProcessor.reload();
    expect(exportProcessor.state).toBe("complete");
    expect(exportProcessor.completedAt.getTime()).toBe(new Date(0).getTime());
  });

  test("throws error if plugin does not have a processExportedRecords method", async () => {
    const exportProcessor = await helper.factories.exportProcessor();

    await expect(
      specHelper.runTask("export:process", {
        exportProcessorId: exportProcessor.id,
      })
    ).rejects.toThrow(/has no `processExportedRecords` method/);
  });
});
