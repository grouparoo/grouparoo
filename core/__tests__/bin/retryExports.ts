import { helper } from "@grouparoo/spec-helper";
import { Destination, Export } from "../../src";
import { RetryExportsCLI } from "../../src/bin/retryExports";

describe("bin/retryExports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let destination: Destination;
  let messages: string[] = [];
  const spies: jest.SpyInstance[] = [];

  beforeAll(async () => {
    await helper.factories.properties();
    destination = await helper.factories.destination();
  });

  beforeEach(() => {
    messages = [];
    spies.push(
      jest
        .spyOn(console, "log")
        .mockImplementation((message) => messages.push(message))
    );
    spies.push(
      jest
        .spyOn(console, "error")
        .mockImplementation((message) => messages.push(message))
    );
  });

  afterEach(() => {
    spies.map((s) => s.mockRestore());
  });

  describe("input validation", () => {
    test("it requires one of --start or --startAgo", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: {} });
      const output = messages.join(" ");

      expect(output).toContain(
        "One of --start or --startAgo must be specified"
      );
      expect(output).not.toContain("Success!");
    });

    test("cannot set both --start and --startAgo", async () => {
      const command = new RetryExportsCLI();
      await command.run({
        params: { start: new Date(), startAgo: 1000 },
      });
      const output = messages.join(" ");

      expect(output).toContain(
        "One of --start or --startAgo must be specified"
      );
      expect(output).not.toContain("Success!");
    });

    test("it errors if passed destinations do not exist", async () => {
      const command = new RetryExportsCLI();
      await command.run({
        params: {
          startAgo: 1000,
          destinationIds: [destination.id, "foo"],
        },
      });

      const output = messages.join(" ");
      expect(output).toContain('Destination with id "foo" was not found');
    });
  });

  describe("with exports", () => {
    let failedExport: Export;
    let otherFailedExport: Export;
    let instance: RetryExportsCLI;

    beforeEach(async () => {
      instance = new RetryExportsCLI();

      failedExport = await helper.factories.export(null, destination);
      await failedExport.update({ state: "failed" });

      otherFailedExport = await helper.factories.export(null);
      await otherFailedExport.update({ state: "failed" });
    });

    afterEach(async () => {
      await failedExport.destroy();
      await otherFailedExport.destroy();
    });

    test("can preview exports to retry", async () => {
      await instance.run({
        params: { startAgo: 3600, preview: true },
      });
      const output = messages.join(" ");
      expect(output).toContain(
        "ℹ️  (Preview) Found 2 failed Exports to retry."
      );

      await failedExport.reload();
      expect(failedExport.state).toBe("failed");

      await otherFailedExport.reload();
      expect(otherFailedExport.state).toBe("failed");
    });

    test("can preview exports to retry for a destination", async () => {
      await instance.run({
        params: {
          startAgo: 3600,
          preview: true,
          destinationIds: [destination.id],
        },
      });
      const output = messages.join(" ");
      expect(output).toContain(
        "ℹ️  (Preview) Found 1 failed Exports to retry."
      );

      await failedExport.reload();
      expect(failedExport.state).toBe("failed");

      await otherFailedExport.reload();
      expect(otherFailedExport.state).toBe("failed");
    });

    test("can retry exports", async () => {
      await instance.run({
        params: {
          startAgo: 3600,
        },
      });
      const output = messages.join(" ");
      expect(output).toContain(
        "✅ Success! 2 failed Exports marked to be retried."
      );

      await failedExport.reload();
      expect(failedExport.state).toBe("pending");

      await otherFailedExport.reload();
      expect(otherFailedExport.state).toBe("pending");
    });

    test("can retry exports for a destination", async () => {
      await instance.run({
        params: {
          startAgo: 3600,
          destinationIds: [destination.id],
        },
      });
      const output = messages.join(" ");
      expect(output).toContain(
        "✅ Success! 1 failed Exports marked to be retried. Run `grouparoo run` or `grouparoo start` to retry them."
      );

      await failedExport.reload();
      expect(failedExport.state).toBe("pending");

      await otherFailedExport.reload();
      expect(otherFailedExport.state).toBe("failed");
    });

    test("returns different messaging if there were no exports to retry", async () => {
      const destination2 = await helper.factories.destination();

      await instance.run({
        params: {
          startAgo: 3600,
          destinationIds: [destination2.id],
        },
      });
      const output = messages.join(" ");
      expect(output).toContain("✨ Success! No failed Exports found to retry.");

      await failedExport.reload();
      expect(failedExport.state).toBe("failed");

      await otherFailedExport.reload();
      expect(otherFailedExport.state).toBe("failed");
    });
  });
});
