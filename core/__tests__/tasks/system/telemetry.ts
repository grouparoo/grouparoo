import fetch, { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { helper } from "@grouparoo/spec-helper";
import { plugin } from "../../../src";
import { api, specHelper, config } from "actionhero";

describe("tasks/telemetry", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());
  beforeEach(() => fetch.resetMocks());

  describe("telemetry", () => {
    beforeAll(async () => {
      await helper.factories.properties();
    });

    test("settings are loaded at boot", async () => {
      const setting = await plugin.readSetting("telemetry", "customer-id");
      expect(setting.value).toMatch(/^tcs_/);
    });

    test("the telemetry task is recurring", async () => {
      await specHelper.runFullTask("telemetry", {});
      const foundTasks = await specHelper.findEnqueuedTasks("telemetry");
      expect(foundTasks.length).toBe(1);
    });

    test("the telemetry:adHoc task is not recurring", async () => {
      await specHelper.runFullTask("telemetry:adHoc", {});
      const foundTasks = await specHelper.findEnqueuedTasks("telemetry:adHoc");
      expect(foundTasks.length).toBe(0);
    });

    describe("enabled telemetry", () => {
      beforeAll(() => {
        config.telemetry.enabled = true;
      });

      afterAll(() => {
        config.telemetry.enabled = false;
      });

      test("the task can be run", async () => {
        fetch.mockResponseOnce(JSON.stringify({ response: "FROM TEST" }));

        // does not throw
        const ok = await specHelper.runTask("telemetry", {});
        expect(ok).toBe(true);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
          "https://telemetry.grouparoo.com/api/v1/telemetry",
          expect.objectContaining({ method: "POST" })
        );
      });
    });

    test("telemetry can be disabled", async () => {
      // disabled by default in NODE_ENV=test
      const response = await specHelper.runTask("telemetry", {});
      expect(response).toBeUndefined();
      expect(fetch).not.toHaveBeenCalled();
    });
  });
});
