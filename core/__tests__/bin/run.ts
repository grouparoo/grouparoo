import { helper } from "@grouparoo/spec-helper";
import { Run } from "../../src/models/Run";
import { RunCLI } from "../../src/bin/run";

describe("bin/run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let messages: string[] = [];
  const spies: jest.SpyInstance[] = [];

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
    beforeAll(async () => {
      instance = new RunCLI();
      await helper.factories.properties();
    });

    test("requires workers to be enabled", async () => {
      instance.checkWorkers();
      expect(messages.join(" ")).toContain("❌ No Task Workers are enabled");
    });

    test("stops running schedules", async () => {
      const schedule = await helper.factories.schedule();
      await Run.truncate();

      const run = await Run.create({
        state: "running",
        creatorType: "schedule",
        creatorId: schedule.id,
      });

      await instance.stopScheduleRuns();

      await run.reload();
      expect(run.state).toBe("stopped");
    });

    describe("with scheduleIds", () => {
      test("will error if param is specified with no schedules", async () => {
        await instance.checkSchedules(true);
        expect(messages.join(" ")).toContain(
          "❌ Please specify which schedule ids to run"
        );
      });

      test("will error if non-existent schedule ids are passed", async () => {
        await instance.checkSchedules(["foo"]);
        expect(messages.join(" ")).toContain(
          '❌ Schedule with id "foo" was not found'
        );
      });

      test("will not error if valid schedule ids are passed", async () => {
        const schedule = await helper.factories.schedule();
        await instance.checkSchedules([schedule.id]);
        expect(messages.join(" ")).not.toContain("❌");
      });
    });
  });
});
