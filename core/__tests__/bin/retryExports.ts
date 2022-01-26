import { helper } from "@grouparoo/spec-helper";
import { RetryExportsCLI } from "../../src/bin/retryExports";

describe("bin/retryExports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => await helper.factories.properties());

  let messages: string[] = [];
  const spies: jest.SpyInstance[] = [];

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
    test("it requires one of --start or --startAgoSeconds", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: {} });
      const output = messages.join(" ");

      expect(output).toContain(
        "One of --start or --startAgoSeconds must be specified"
      );
      expect(output).not.toContain("Success!");
    });

    test("cannot set both --start and --startAgoSeconds", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: { start: 1000, startAgoSeconds: "1000" } });
      const output = messages.join(" ");

      expect(output).toContain(
        "One of --start or --startAgoSeconds must be specified"
      );
      expect(output).not.toContain("Success!");
    });

    test("--start can be set to 0", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: { start: 0 } });
      const output = messages.join(" ");
      expect(output).toContain("Success!");
    });

    test("it errors on an invalid start date", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: { start: NaN } });
      const output = messages.join(" ");

      expect(output).toContain("Invalid start date specified");
      expect(output).not.toContain("Success!");
    });

    test("it errors on an invalid startAgoSeconds value", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: { startAgoSeconds: "something" } });
      const output = messages.join(" ");

      expect(output).toContain("--startAgoSeconds must be a number");
      expect(output).not.toContain("Success!");
    });

    test("it errors on an invalid end date", async () => {
      const command = new RetryExportsCLI();
      await command.run({ params: { startAgoSeconds: "1000", end: NaN } });
      const output = messages.join(" ");

      expect(output).toContain("Invalid end date specified");
      expect(output).not.toContain("Success!");
    });

    test("it requires ids to be passed if --destinationIds is set", async () => {
      const command = new RetryExportsCLI();
      await command.run({
        params: { startAgoSeconds: "1000", destinationIds: true },
      });
      const output = messages.join(" ");

      expect(output).toContain(
        "Please specify which destination ids to check or remove the --destinationIds param to check all Destinations."
      );
      expect(output).not.toContain("Success!");
    });

    test("it errors if passed destinations do not exist", async () => {
      const command = new RetryExportsCLI();
      await command.run({
        params: { startAgoSeconds: "1000", destinationIds: ["foo"] },
      });
      const output = messages.join(" ");

      expect(output).toContain('Destination with id "foo" was not found');
    });
  });
});
