import { helper } from "@grouparoo/spec-helper";
import { RunCLI } from "../../src/bin/run";

describe("bin/run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let messages = [];
  let spies = [];

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

    test("fails with no schedules", async () => {
      await instance.checkSchedules();
      expect(messages.join(" ")).toContain("❌ No schedules found.");
    });

    test("will run if there is a schedule present", async () => {
      const schedule = await helper.factories.schedule();
      await instance.checkSchedules();
      expect(messages.join(" ")).not.toContain("❌ No schedules found.");
      await schedule.destroy();
    });
  });
});
