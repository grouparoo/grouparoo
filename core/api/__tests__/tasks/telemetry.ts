import fetch, { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import { helper } from "@grouparoo/spec-helper";
import { Log } from "../../src/models/Log";
import { plugin } from "../../src/modules/plugin";
import { api, specHelper, config } from "actionhero";

let actionhero;

describe("tasks/telemetry", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, helper.setupTime);

  beforeEach(() => {
    fetch.resetMocks();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("telemetry", () => {
    beforeAll(async () => {
      await helper.factories.profilePropertyRules();
      await Log.destroy({ truncate: true });
    });

    test("settings are loaded at boot", async () => {
      const setting = await plugin.readSetting("telemetry", "customer-guid");
      expect(setting.value).toMatch(/^tcs_/);
    });

    test("the telemetry object can be built", async () => {
      const { name, guid, license, metrics } = await api.telemetry.build();
      expect(name).toBe("My Grouparoo Cluster");
      expect(guid).toMatch(/^tcs_/);
      expect(license).toBe("");

      expect(metrics[0]).toEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "workers",
          aggregation: "count",
        })
      );

      expect(metrics[1]).toEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "os",
          aggregation: "exact",
        })
      );

      expect(metrics[2]).toEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "node_env",
          aggregation: "exact",
          value: "test",
        })
      );

      expect(metrics[3]).toEqual(
        expect.objectContaining({
          collection: "totals",
          topic: "App",
          aggregation: "count",
        })
      );
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
      });
    });

    test("telemetry can be disabled", async () => {
      // disabled by default in NODE_ENV=test
      const response = await specHelper.runTask("telemetry", {});
      expect(response).toBeUndefined();
      expect(fetch).not.toHaveBeenCalled();
    });

    describe("with errors", () => {
      let originalImplementation: () => Promise<any>;

      beforeAll(() => {
        config.telemetry.enabled = true;
        originalImplementation = api.telemetry.build;
      });

      afterAll(() => {
        config.telemetry.enabled = false;
        api.telemetry.build = originalImplementation;
      });

      test("we will try to send errors about telemetry to the telemetry server", async () => {
        const mockTelemetry = jest.fn();
        mockTelemetry.mockImplementation(() => {
          throw new Error("OH NO");
        });
        api.telemetry.build = mockTelemetry;

        await expect(specHelper.runTask("telemetry", {})).rejects.toThrow(
          /OH NO/
        );

        expect(fetch).toHaveBeenCalledTimes(1);
        const args = fetch.mock.calls[0];
        expect(args[0]).toBe(
          "https://telemetry.grouparoo.com/api/v1/telemetry"
        );
        const payload = JSON.parse(args[1].body.toString());
        expect(payload.name).toBe("My Grouparoo Cluster");
        expect(payload.metrics.length).toBe(1);
        expect(payload.metrics[0].topic).toBe("error");
        expect(payload.metrics[0].aggregation).toBe("exact");
        expect(payload.metrics[0].value).toMatch("Error: OH NO");
        expect(payload.metrics[0].value).toMatch(
          "api/__tests__/tasks/telemetry.ts"
        );
      });
    });
  });
});
