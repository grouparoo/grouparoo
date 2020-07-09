import { helper } from "../utils/specHelper";
import { Log } from "../../src/models/Log";
import { plugin } from "../../src/modules/plugin";
import { api, task, specHelper, config } from "actionhero";

let actionhero;

// uncomment to use real HTTP requests
// import nock from "nock";
// nock.recorder.rec();

// load the saved nock recordings
// Note: This fixture has been made generic so it returns 200 regardless of the content sent
require("./../fixtures/tasks/telemetry");

describe("tasks/telemetry", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

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
      const {
        customerName,
        customerGuid,
        customerLicense,
        metrics,
      } = await api.telemetry.build();
      expect(customerName).toBe("My Grouparoo Cluster");
      expect(customerGuid).toMatch(/^tcs_/);
      expect(customerLicense).toBe("");

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
          collection: "totals",
          topic: "App",
          aggregation: "count",
        })
      );
    });

    test("the task can be run", async () => {
      // does not throw
      config.telemetry.enabled = true;
      const ok = await specHelper.runTask("telemetry", {});
      expect(ok).toBe(true);
      config.telemetry.enabled = false;
    });

    test("telemetry can be disabled", async () => {
      // disabled by default in NODE_ENV=test
      const response = await specHelper.runTask("telemetry", {});
      expect(response).toBeUndefined();
    });
  });
});
