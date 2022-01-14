import { helper } from "@grouparoo/spec-helper";
import { api, config } from "actionhero";
import fetch, { enableFetchMocks } from "jest-fetch-mock";

import { Telemetry } from "../../src/modules/telemetry";
import { TelemetryInitializer } from "../../src/initializers/telemetry";

enableFetchMocks();

describe("modules/status", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  beforeEach(async () => {
    await helper.truncate();
    await api.resque.queue.connection.redis.flushdb();
    process.env.GROUPAROO_RUN_MODE = "x";
    config.telemetry.enabled = true;
  });

  afterEach(() => {
    config.telemetry.enabled = false;
    fetch.resetMocks();
  });

  describe("telemetry module", () => {
    test("the telemetry object can be built", async () => {
      const { name, id, metrics, trigger } = await Telemetry.build("timer");

      expect(name).toBe("My Grouparoo Cluster");
      expect(id).toMatch(/^tcs_/);
      expect(trigger).toBe("timer");

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "workers",
          aggregation: "count",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "resqueErrors",
          count: 0, // we hope
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "os",
          aggregation: "exact",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "sequelize",
          topic: "dialect",
          aggregation: "exact",
          value: "postgres",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "NODE_ENV",
          topic: "env",
          aggregation: "exact",
          value: "test",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "GROUPAROO_RUN_MODE",
          topic: "env",
          aggregation: "exact",
          value: "x",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "GROUPAROO_CLOUD",
          topic: "env",
          aggregation: "exact",
          value: "false",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "GROUPAROO_DISTRIBUTION",
          topic: "env",
          aggregation: "exact",
          value: "unknown",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "cluster",
          topic: "@grouparoo/core",
          aggregation: "exact",
          key: "version",
        })
      );

      expect(metrics).toContainEqual(
        expect.objectContaining({
          collection: "totals",
          topic: "App",
          aggregation: "count",
        })
      );
    });

    test("telemetry can be sent with an errors array", async () => {
      const { metrics } = await Telemetry.build("timer", [
        "something is wrong",
      ]);

      const errorMetrics = metrics.filter((m) => m.topic === "error");
      expect(errorMetrics.length).toEqual(1);
      expect(errorMetrics[0].value).toEqual("something is wrong");
    });

    describe("with errors", () => {
      let originalImplementation: typeof Telemetry.build;

      beforeAll(() => {
        config.telemetry.enabled = true;
        originalImplementation = Telemetry.build;
        const mockTelemetry = jest.fn();
        mockTelemetry.mockImplementation(() => {
          throw new Error("OH NO");
        });
        Telemetry.build = mockTelemetry;
      });

      afterAll(() => {
        config.telemetry.enabled = false;
        Telemetry.build = originalImplementation;
      });

      test("by default, errors are not thrown", async () => {
        await Telemetry.send("timer"); // does not throw
      });

      test("we will try to send errors about telemetry to the telemetry server if the send throws", async () => {
        await expect(Telemetry.send("timer", [], true)).rejects.toThrow(
          /OH NO/
        );

        expect(fetch).toHaveBeenCalledTimes(1);
        const args = fetch.mock.calls[0];
        expect(args[0]).toBe(
          "https://telemetry.grouparoo.com/api/v1/telemetry"
        );
        const payload = JSON.parse(args[1].body.toString());
        expect(payload.name).toBe("My Grouparoo Cluster");
        expect(payload.trigger).toBe("timer");
        expect(payload.metrics.length).toBe(1);
        expect(payload.metrics[0].topic).toBe("error");
        expect(payload.metrics[0].aggregation).toBe("exact");
        expect(payload.metrics[0].value).toMatch("Error: OH NO");
        expect(payload.metrics[0].value).toMatch(
          "core/__tests__/modules/telemetry.ts"
        );
        expect(payload.metrics[0].value).not.toMatch(
          "/grouparoo/core/__tests__/modules/telemetry.ts"
        );
      });
    });
  });

  describe("telemetry initializer", () => {
    test("will send telemetry when running via the CLI", async () => {
      process.env.GROUPAROO_RUN_MODE = "cli:run";
      config.telemetry.enabled = true;
      fetch.mockResponseOnce(JSON.stringify({ response: "FROM TEST" }));

      const instance = new TelemetryInitializer();
      await instance.stop();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        "https://telemetry.grouparoo.com/api/v1/telemetry",
        expect.objectContaining({ method: "POST" })
      );

      const args = fetch.mock.calls[0];
      const payload = JSON.parse(args[1].body as string);
      expect(payload.trigger).toBe("cli_run");
      expect(payload.metrics.length).toBeGreaterThan(1);
    });

    test("will not send telemetry when running via another method", async () => {
      fetch.mockResponseOnce(JSON.stringify({ response: "FROM TEST" }));

      const instance = new TelemetryInitializer();
      await instance.stop();

      expect(fetch).not.toHaveBeenCalled();
    });
  });
});
