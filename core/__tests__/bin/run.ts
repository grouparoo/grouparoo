import { helper } from "@grouparoo/spec-helper";
import { RunCLI } from "../../src/bin/run";

describe("bin/run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let messages: string[] = [];
  const spies: any[] = [];

  beforeEach(async () => {
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

  afterEach(async () => {
    spies.map((s) => s.mockRestore());
  });

  describe("with instance", () => {
    // NOTE: The command cannot be run in full as the config/env is already set at boot
    // We can test each method individually

    let instance: RunCLI;
    beforeAll(() => {
      instance = new RunCLI();
    });

    test("requires workers to be enabled", async () => {
      instance.checkWorkers();
      expect(messages.join(" ")).toContain("❌ No Task Workers are enabled");
    });
  });
});
