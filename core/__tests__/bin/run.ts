import { helper } from "@grouparoo/spec-helper";
import { RunCLI } from "../../src/bin/run";
import { Run } from "../../src";

describe("bin/run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());

  let messages = [];
  let spy;

  beforeEach(() => {
    messages = [];
    spy = jest
      .spyOn(console, "log")
      .mockImplementation((message) => messages.push(message));
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test("workers are required", async () => {
    process.env.WORKERS = "0";

    const command = new RunCLI();
    await expect(command.run({ params: {} })).rejects.toThrow();
  });

  describe("with instance", () => {
    // NOTE: The command cannot be run in full as the config/env is already set at boot
    // We can test each method individually

    let instance: RunCLI;
    beforeAll(() => {
      instance = new RunCLI();
    });

    test("we can tell if the app has booted", async () => {
      await instance.waitForReady(); // does not time out
    });

    test("paused tasks can be run", async () => {
      await instance.runPausedTasks({}); // does not throw
    });

    test("will be complete with no pending items", async () => {
      await Run.truncate(); // there will be pending runs from `factories.properties()`

      const complete = await instance.checkForComplete();
      expect(complete).toBe(true);
    });

    test("will not be complete with a pending profile", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "pending" });
      expect(await instance.checkForComplete()).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending import", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "ready" });
      await helper.factories.import(null, { profileId: profile.id });

      expect(await instance.checkForComplete()).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const profile = await helper.factories.profile();
      await profile.update({ state: "ready" });
      await helper.factories.export(profile);

      expect(await instance.checkForComplete()).toBe(false);
      await profile.destroy();
    });

    test("will not be complete with a pending export", async () => {
      const run = await helper.factories.run(null, { state: "running" });

      expect(await instance.checkForComplete()).toBe(false);
      await run.destroy();
    });
  });
});
