import { helper } from "@grouparoo/spec-helper";
import { RunCLI } from "../../src/bin/run";
import { Schedule } from "../../src/models/Schedule";

describe("bin/run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let messages = [];
  let spies = [];

  beforeEach(async () => {
    await helper.factories.schedule();
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
    await Schedule.destroy({ where: {}, truncate: true });
    spies.map((s) => s.mockRestore());
  });

  test("workers are required", async () => {
    process.env.WORKERS = "0";

    const command = new RunCLI();
    const toStop = await command.run({ params: {} });
    expect(messages.join(" ")).toContain(
      "❌ The Task Scheduler is not enabled"
    );
    expect(messages.join(" ")).toContain("❌ No Task Workers are enabled");
    expect(toStop).toBe(true);
  });

  test("at least one schedule is required", async () => {
    await Schedule.destroy({ where: {}, truncate: true });
    let scheduleCount = await Schedule.count();
    expect(scheduleCount).toEqual(0);

    const command = new RunCLI();
    const toStop = await command.run({ params: {} });
    expect(messages.join(" ")).toContain(
      "❌ No schedules found. The run command uses schedules to know what profiles to import."
    );
    expect(toStop).toBe(true);
  });

  describe("with instance", () => {
    // NOTE: The command cannot be run in full as the config/env is already set at boot
    // We can test each method individually

    let instance: RunCLI;
    beforeAll(() => {
      instance = new RunCLI();
    });

    test("paused tasks can be run", async () => {
      await instance.runPausedTasks({}); // does not throw
    });
  });
});
