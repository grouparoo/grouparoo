import { helper } from "@grouparoo/spec-helper";
import { Destination, ExportProcessor } from "../../src";

describe("models/exportProcessor", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let destination: Destination;

  beforeAll(async () => {
    destination = await helper.factories.destination();
  });

  test("an export processor can be created", async () => {
    const exportProcessor = await ExportProcessor.create({
      destinationId: destination.id,
    });

    expect(exportProcessor.id).toMatch(/^prc_/);
    expect(exportProcessor.id.length).toBe(40);
  });

  test("an export processor cannot be marked as complete if exports are not all processed", async () => {
    const exportProcessor = await ExportProcessor.create({
      destinationId: destination.id,
    });

    await helper.factories.export(null, null, {
      exportProcessorId: exportProcessor.id,
      state: "processing",
    });

    await expect(exportProcessor.complete()).rejects.toThrow(
      /Cannot mark export processor as complete because some exports have not been processed/
    );
  });

  test("an export processor can be marked as complete", async () => {
    const exportProcessor = await ExportProcessor.create({
      destinationId: destination.id,
    });

    await helper.factories.export(null, null, {
      exportProcessorId: exportProcessor.id,
      state: "complete",
    });
    await helper.factories.export(null, null, {
      exportProcessorId: exportProcessor.id,
      state: "failed",
    });

    await exportProcessor.complete();

    await exportProcessor.reload();
    expect(exportProcessor.state).toBe("complete");
    expect(exportProcessor.completedAt).toBeTruthy();
  });

  test("export apiData includes the destination name", async () => {
    const exportProcessor = await ExportProcessor.create({
      destinationId: destination.id,
    });

    const apiData = await exportProcessor.apiData();
    expect(apiData.destinationName).toBe(destination.name);
  });

  test("entries without exports can be swept away", async () => {
    await ExportProcessor.truncate();

    await helper.factories.exportProcessor(null, { state: "complete" });
    await helper.factories.exportProcessor(null, { state: "failed" });
    await helper.factories.exportProcessor(null, { state: "pending" });

    const completeWithExports = await helper.factories.exportProcessor(null, {
      state: "complete",
    });
    await helper.factories.export(null, null, {
      exportProcessorId: completeWithExports.id,
    });

    const failedWithExports = await helper.factories.exportProcessor(null, {
      state: "failed",
    });
    await helper.factories.export(null, null, {
      exportProcessorId: failedWithExports.id,
    });

    const initialCount = await ExportProcessor.count();
    expect(initialCount).toBe(5);

    const count = await ExportProcessor.sweep(1000);
    expect(count).toBe(2);

    const remainingCount = await ExportProcessor.count();
    expect(remainingCount).toBe(3);
  });

  describe("errors", () => {
    let processor: ExportProcessor;
    beforeEach(async () => {
      processor = await ExportProcessor.create({
        destinationId: destination.id,
        startedAt: new Date(),
        processAt: new Date(),
        state: "complete",
      });
    });

    test("an export processor can save an error message", async () => {
      processor.errorMessage = "bad stuff happened!";
      await processor.save();
      await processor.reload();
      expect(processor.errorLevel).toEqual("error");
    });

    test("an export processor can save an info message", async () => {
      processor.errorMessage = "interesting stuff happened!";
      processor.errorLevel = "info";
      await processor.save();
      await processor.reload();
      expect(processor.errorLevel).toEqual("info");
    });

    test("an export processor needs a valid level", async () => {
      processor.errorMessage = "interesting stuff happened!";
      // @ts-ignore
      processor.errorLevel = "other";
      await expect(processor.save()).rejects.toThrow(/Validation error/);
    });
  });
});
