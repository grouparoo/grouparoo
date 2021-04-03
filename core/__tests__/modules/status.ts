import { helper } from "@grouparoo/spec-helper";
import { api, utils } from "actionhero";
import { StatusMetric } from "../../src/modules/statusReporters";
import { Status } from "../../src/modules/status";

describe("modules/status", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await helper.factories.properties();
  });

  const metric: StatusMetric = {
    collection: "test",
    topic: "test",
    aggregation: "exact",
    value: "foo",
  };

  describe("with a metic", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Status.set([metric]);
    });

    test("a status metric can be saved and retrieved", async () => {
      const foundMetrics = await Status.get();
      expect(foundMetrics.length).toBe(1);
      expect(foundMetrics[0].metrics).toEqual([metric]);
    });

    test("metrics have a TTL and will expire", async () => {
      const redis = api.redis.clients.client;
      const keyMatch = `${Status.cachePrefix}*`;
      const keys = await redis.keys(keyMatch);
      expect(keys).toHaveLength(1);
      const ttl = await redis.ttl(keys[0]);

      expect(ttl).toBeGreaterThan(0);
      expect(ttl).toBeLessThanOrEqual(
        Status.sampleFrequencyMS * Status.sampleFrequencyMS * 2
      );
    });
  });

  describe("with many metrics", () => {
    beforeAll(async () => {
      await api.resque.queue.connection.redis.flushdb();

      await Status.set([metric]);
      await utils.sleep(10);
      await Status.set([metric]);
      await utils.sleep(10);
      await Status.set([metric]);
      await utils.sleep(10);
      await Status.set([metric]);
      await utils.sleep(10);
      await Status.set([metric]);
    });

    test("metrics are ordered by timestamp", async () => {
      const foundMetrics = await Status.get();
      expect(foundMetrics.length).toBe(5);
      for (let i = 0; i < foundMetrics.length - 1; i++) {
        expect(foundMetrics[i].timestamp).toBeLessThanOrEqual(
          foundMetrics[i + 1].timestamp
        );
      }
    });

    test("the number of metrics returned can be chosen", async () => {
      const foundMetrics = await Status.get(3);
      expect(foundMetrics.length).toBe(3);
    });
  });

  describe("sample", () => {
    test("a sample contains data", async () => {
      const sample = await Status.sample();
      expect(sample).toEqual([
        {
          aggregation: "count",
          collection: "cluster",
          count: 0,
          topic: "workers",
        },
        {
          aggregation: "count",
          collection: "cluster",
          count: 0,
          topic: "resqueErrors",
        },
        {
          aggregation: "exact",
          collection: "cluster",
          topic: "resqueLeader",
          value: "None",
        },
        expect.objectContaining({
          aggregation: "exact",
          collection: "cluster",
          topic: "os",
          // value: "darwin/20.3.0",
        }),
        {
          aggregation: "exact",
          collection: "cluster",
          topic: "node_env",
          value: "test",
        },
        {
          aggregation: "count",
          collection: "cluster",
          topic: "unreadNotifications",
          count: 0,
        },
        {
          aggregation: "count",
          collection: "totals",
          count: 0,
          topic: "Profile",
        },
        {
          aggregation: "count",
          collection: "totals",
          count: 0,
          topic: "Group",
        },
        {
          aggregation: "count",
          collection: "pending",
          count: 0,
          topic: "Import",
        },
        {
          aggregation: "count",
          collection: "pending",
          count: 0,
          topic: "Export",
        },
        {
          aggregation: "count",
          collection: "pending",
          count: 0,
          topic: "Profile",
        },
        {
          aggregation: "count",
          collection: "pending",
          count: 1,
          topic: "Run",
        },
        expect.objectContaining({
          aggregation: "exact",
          collection: "percentComplete",
          count: 0,
          // key: "run_c81ec3d2-2c3f-4097-b3cd-f2428e60095f",
          // metadata: undefined,
          topic: "Run",
          value: "purchaseAmounts",
        }),
      ]);
    });
  });
});
