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

  // TODO
  test.todo("exportProcessor apiData");
  test.todo("old entries can be swept away");

  describe("errors", () => {
    let processor;
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
      processor.errorLevel = "other";
      await expect(processor.save()).rejects.toThrow(/Validation error/);
    });
  });
});
