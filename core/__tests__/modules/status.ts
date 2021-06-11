import { helper } from "@grouparoo/spec-helper";
import { api, utils, config } from "actionhero";
import {
  StatusMetric,
  FinalSummaryReporters,
} from "../../src/modules/statusReporters";
import { Status } from "../../src/modules/status";
import { Destination, Profile, Source } from "../../src";

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

  describe("with a metric", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Status.set([metric]);
    });

    test("a status metric can be saved and retrieved", async () => {
      const foundMetrics = await Status.get();
      expect(foundMetrics["test"]["test"].length).toBe(1);
      expect(foundMetrics["test"]["test"][0].metric).toEqual(metric);
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
      expect(foundMetrics["test"]["test"].length).toBe(5);
      for (let i = 0; i < foundMetrics["test"]["test"].length - 1; i++) {
        expect(foundMetrics["test"]["test"][i].timestamp).toBeLessThanOrEqual(
          foundMetrics["test"]["test"][i + 1].timestamp
        );
      }
    });

    test("the number of metrics returned can be chosen", async () => {
      const foundMetrics = await Status.get(3);
      expect(foundMetrics["test"]["test"].length).toBe(3);
    });

    test("if a metric expires mid-read, it will not cause problems", async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Status.set([metric]);

      const cachePrefix = `${config.general.cachePrefix}status:samples:`;
      const redis = api.redis.clients.client;
      await redis.set(`${cachePrefix}:foo`, "foo");
      await redis.set(`${cachePrefix}:undefined`, undefined);
      await redis.set(`${cachePrefix}:null`, null);
      await redis.set(`${cachePrefix}:not-json`, "{a:1");

      const foundMetrics = await Status.get(); // does not throw
      expect(foundMetrics["test"]["test"].length).toBe(1);
    });
  });

  describe("Status#setAll", () => {
    beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

    test("metrics contains data", async () => {
      await Status.setAll();

      const foundMetrics = await Status.get();
      expect(foundMetrics).toEqual({
        Export: {
          pending: [
            {
              metric: {
                aggregation: "count",
                collection: "pending",
                count: 0,
                topic: "Export",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Group: {
          totals: [
            {
              metric: {
                aggregation: "count",
                collection: "totals",
                count: 0,
                topic: "Group",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Import: {
          pending: [
            {
              metric: {
                aggregation: "count",
                collection: "pending",
                count: 0,
                topic: "Import",
              },
              timestamp: expect.any(Number),
            },
          ],
          pendingBySource: [
            {
              metric: {
                aggregation: "count",
                collection: "pendingBySource",
                count: 0,
                key: expect.stringMatching(/^src_/),
                topic: "Import",
                value: expect.stringMatching(/^source /),
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Profile: {
          pending: [
            {
              metric: {
                aggregation: "count",
                collection: "pending",
                count: 0,
                topic: "Profile",
              },
              timestamp: expect.any(Number),
            },
          ],
          totals: [
            {
              metric: {
                aggregation: "count",
                collection: "totals",
                count: 0,
                topic: "Profile",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Run: {
          pending: [
            {
              metric: {
                aggregation: "count",
                collection: "pending",
                count: 1,
                topic: "Run",
                value: expect.any(String),
              },
              timestamp: expect.any(Number),
            },
          ],
          percentComplete: [
            {
              metric: {
                aggregation: "exact",
                collection: "percentComplete",
                count: 0,
                key: expect.stringMatching(/^run_/),
                topic: "Run",
                value: "purchaseAmounts",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Source: {
          nextRun: [
            {
              metric: {
                aggregation: "exact",
                collection: "nextRun",
                count: 0,
                key: expect.stringMatching(/^src_/),
                metadata: "-1",
                topic: "Source",
                value: expect.stringMatching(/^source/),
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        node_env: {
          cluster: [
            {
              metric: {
                aggregation: "exact",
                collection: "cluster",
                topic: "node_env",
                value: "test",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        os: {
          cluster: [
            {
              metric: {
                aggregation: "exact",
                collection: "cluster",
                topic: "os",
                value: expect.any(String),
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        resqueDetails: {
          cluster: [
            {
              metric: {
                aggregation: "exact",
                collection: "cluster",
                metadata: '{"queues":{},"workers":{},"stats":{},"leader":null}',
                topic: "resqueDetails",
                value: "None",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        resqueErrors: {
          cluster: [
            {
              metric: {
                aggregation: "count",
                collection: "cluster",
                count: 0,
                topic: "resqueErrors",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        unreadNotifications: {
          cluster: [
            {
              metric: {
                aggregation: "count",
                collection: "cluster",
                count: 0,
                topic: "unreadNotifications",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        workers: {
          cluster: [
            {
              metric: {
                aggregation: "count",
                collection: "cluster",
                count: 0,
                topic: "workers",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
      });
    });
  });

  describe("final summary", () => {
    let oldProfile: Profile;
    let newProfile: Profile;

    beforeEach(async () => {
      await helper.truncate();
      await helper.factories.properties();
      oldProfile = await helper.factories.profile();
      await helper.changeTimestamps(oldProfile, true); // 'true' will set both updatedAt and createdAt

      newProfile = await helper.factories.profile();
    });

    test("it gathers profiles", async () => {
      const profiles = await FinalSummaryReporters.Profiles.getData();
      expect(profiles[0].profilesCreated).toEqual(1);
      expect(profiles[0].profilesUpdated).toEqual(1);
      expect(profiles[0].allProfiles).toEqual(2);
    });

    describe("it gathers sources", () => {
      it("does not show sources without a run", async () => {
        const sources = await Source.findAll();
        expect(sources.length).toBe(1);
        const sourceReport = await FinalSummaryReporters.Sources.getData();
        expect(sourceReport).toEqual([]);
      });

      it.each(["ready", "deleted"])(
        "shows %p sources that ran",
        async (sourceState) => {
          const source: Source = await helper.factories.source();
          await source.setOptions({ table: "users_table" });
          await source.setMapping({ id: "userId" });
          await source.update({ state: "ready" });

          const schedule = await helper.factories.schedule(source);
          const run = await helper.factories.run(schedule);

          const _import = await helper.factories.import(
            run,
            undefined,
            oldProfile.id
          );
          const now = new Date();
          await _import.update({
            profileAssociatedAt: now,
            profileUpdatedAt: now,
            groupsUpdatedAt: now,
          });

          await source.update({ state: sourceState });

          const sources = await FinalSummaryReporters.Sources.getData();
          expect(sources[0].name).toEqual(source.name);
          expect(sources[0].importsCreated).toEqual(1);
          expect(sources[0].profilesCreated).toEqual(0);
          expect(sources[0].profilesImported).toEqual(1);
          expect(sources[0].error).toEqual(null);
        }
      );
    });

    describe("it gathers destinations", () => {
      it("does not show destinations without an export", async () => {
        const destination = await helper.factories.destination();
        const destinations = await Destination.findAll();
        expect(destinations.length).toBe(1);
        const destinationReport =
          await FinalSummaryReporters.Destinations.getData();
        expect(destinationReport).toEqual([]);
      });

      it.each(["ready", "deleted"])(
        "shows %p destinations that ran",
        async (destinationState) => {
          const destination: Destination = await helper.factories.destination();

          const _export = await helper.factories.export(
            undefined,
            destination,
            undefined
          );
          const _export2 = await helper.factories.export(
            undefined,
            destination,
            undefined
          );
          const _export3 = await helper.factories.export(
            undefined,
            destination,
            undefined
          );
          await helper.changeTimestamps(_export3, true);

          const now = new Date();
          await _export.update({
            completedAt: new Date(now),
            state: "complete",
          });

          await destination.update({ state: destinationState });

          const destinations =
            await FinalSummaryReporters.Destinations.getData();
          expect(destinations[0].name).toEqual(destination.name);
          expect(destinations[0].exportsCreated).toEqual(2);
          expect(destinations[0].exportsFailed).toEqual(0);
          expect(destinations[0].exportsComplete).toEqual(1);
        }
      );
    });
  });
});
