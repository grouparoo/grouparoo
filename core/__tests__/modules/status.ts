import { helper } from "@grouparoo/spec-helper";
import { api, utils, config } from "actionhero";
import {
  StatusMetric,
  FinalSummaryReporters,
} from "../../src/modules/statusReporters";
import { Status } from "../../src/modules/status";
import {
  Destination,
  GrouparooRecord,
  Source,
  Schedule,
  Export,
} from "../../src";
import Moment from "moment";
import { StatusReporters } from "../../dist/modules/statusReporters";

describe("modules/status", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    process.env.GROUPAROO_RUN_MODE = "x";
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
      await redis.set(
        `${cachePrefix}:old-format-1`,
        JSON.stringify({ timestamp: new Date().getTime(), thing: "stuff" })
      );
      await redis.set(
        `${cachePrefix}:old-format-2`,
        JSON.stringify({
          timestamp: new Date().getTime(),
          metric: { collection: "foo" },
        })
      );

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
        Model: {
          deleted: [
            {
              timestamp: expect.any(Number),
              metric: {
                collection: "deleted",
                topic: "Model",
                aggregation: "count",
                count: 0,
              },
            },
          ],
        },
        Destination: {
          deleted: [
            {
              metric: {
                aggregation: "count",
                collection: "deleted",
                count: 0,
                topic: "Destination",
              },
              timestamp: expect.any(Number),
            },
          ],
        },

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
          "1DayDistinct": [
            {
              metric: {
                aggregation: "count",
                collection: "1DayDistinct",
                count: 0,
                topic: "Export",
              },
              timestamp: expect.any(Number),
            },
          ],
          "30DayDistinct": [
            {
              metric: {
                aggregation: "count",
                collection: "30DayDistinct",
                count: 0,
                topic: "Export",
              },
              timestamp: expect.any(Number),
            },
          ],
          "7DayDistinct": [
            {
              metric: {
                aggregation: "count",
                collection: "7DayDistinct",
                count: 0,
                topic: "Export",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Group: {
          deleted: [
            {
              metric: {
                aggregation: "count",
                collection: "deleted",
                count: 0,
                topic: "Group",
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
        GrouparooRecord: {
          pending: [
            {
              metric: {
                aggregation: "count",
                collection: "pending",
                count: 0,
                topic: "GrouparooRecord",
              },
              timestamp: expect.any(Number),
            },
          ],
          deleted: [
            {
              metric: {
                aggregation: "count",
                collection: "deleted",
                count: 0,
                topic: "GrouparooRecord",
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
                topic: "GrouparooRecord",
              },
              timestamp: expect.any(Number),
            },
          ],
        },
        Property: {
          deleted: [
            {
              metric: {
                aggregation: "count",
                collection: "deleted",
                count: 0,
                topic: "Property",
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
          deleted: [
            {
              metric: {
                aggregation: "count",
                collection: "deleted",
                count: 0,
                topic: "Source",
              },
              timestamp: expect.any(Number),
            },
          ],
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
        env: {
          GROUPAROO_UI_EDITION: [
            {
              metric: {
                aggregation: "exact",
                collection: "GROUPAROO_UI_EDITION",
                topic: "env",
                value: "unknown",
              },
              timestamp: expect.any(Number),
            },
          ],
          NODE_ENV: [
            {
              metric: {
                aggregation: "exact",
                collection: "NODE_ENV",
                topic: "env",
                value: "test",
              },
              timestamp: expect.any(Number),
            },
          ],
          GROUPAROO_CLOUD: [
            {
              metric: {
                aggregation: "exact",
                collection: "GROUPAROO_CLOUD",
                topic: "env",
                value: "false",
              },
              timestamp: expect.any(Number),
            },
          ],
          GROUPAROO_DISTRIBUTION: [
            {
              metric: {
                aggregation: "exact",
                collection: "GROUPAROO_DISTRIBUTION",
                topic: "env",
                value: "unknown",
              },
              timestamp: expect.any(Number),
            },
          ],
          GROUPAROO_RUN_MODE: [
            {
              metric: {
                aggregation: "exact",
                collection: "GROUPAROO_RUN_MODE",
                topic: "env",
                value: "x",
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
    let oldProfile: GrouparooRecord;
    let newProfile: GrouparooRecord;

    beforeEach(async () => {
      await helper.truncate();
      await helper.factories.properties();
      oldProfile = await helper.factories.record();
      await helper.changeTimestamps([oldProfile], true); // 'true' will set both updatedAt and createdAt

      newProfile = await helper.factories.record();
    });

    test("it gathers records", async () => {
      const records = await FinalSummaryReporters.GrouparooRecords.getData();
      expect(records[0].recordsCreated).toEqual(1);
      expect(records[0].recordsUpdated).toEqual(1);
      expect(records[0].allRecords).toEqual(2);
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
            recordAssociatedAt: now,
            importedAt: now,
          });

          await source.update({ state: sourceState });

          const sources = await FinalSummaryReporters.Sources.getData();
          expect(sources[0].name).toEqual(source.name);
          expect(sources[0].importsCreated).toEqual(1);
          expect(sources[0].recordsCreated).toEqual(0);
          expect(sources[0].recordsImported).toEqual(1);
          expect(sources[0].error).toEqual(null);
        }
      );
    });

    test("runs with no source show warning", async () => {
      await Schedule.truncate();

      const warnings = await FinalSummaryReporters.Warnings.getWarnings();
      const warning = warnings[0];
      expect(warning.name).toBe("Schedules");
      expect(warning.message).toBe(
        `No schedules found.  The run command uses schedules to know what records to import.`
      );
      expect(warning.link).toBe(
        `See this link for more info: https://www.grouparoo.com/docs/getting-started/product-concepts#schedule`
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
          await helper.changeTimestamps([_export3], true);

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

  describe("exports", () => {
    async function makeOldExport(
      destination: Destination,
      record: GrouparooRecord,
      createdAt = new Date(0)
    ) {
      const _export = await Export.create({
        destinationId: destination.id,
        recordId: record.id,
        startedAt: new Date(),
        oldRecordProperties: {},
        newRecordProperties: {},
        oldGroups: [],
        newGroups: [],
        state: "complete",
      });

      _export.set({ createdAt }, { raw: true });
      _export.changed("createdAt", true);
      await _export.save({
        silent: true,
        fields: ["createdAt"],
      });

      return _export;
    }

    it("counts up unique records exported", async () => {
      await Destination.truncate();
      await Export.truncate();

      const recordA = await helper.factories.record();
      const recordB = await helper.factories.record();
      const recordC = await helper.factories.record(); // never exported
      const destinationA = await helper.factories.destination();
      const destinationB = await helper.factories.destination();

      const oldExportA = await makeOldExport(
        destinationA,
        recordA,
        new Date(0)
      );
      const thisMonthExportA = await makeOldExport(
        destinationA,
        recordA,
        Moment().subtract(10, "days").toDate()
      );
      const todayExportA = await makeOldExport(
        destinationB,
        recordA,
        Moment().subtract(10, "minutes").toDate()
      );
      const thisMonthExportB = await makeOldExport(
        destinationA,
        recordB,
        Moment().subtract(10, "days").toDate()
      );
      const thisWeekExportB = await makeOldExport(
        destinationA,
        recordB,
        Moment().subtract(5, "days").toDate()
      );

      const metrics = await StatusReporters.Totals.UniqueRecordsExported();
      expect(metrics).toEqual([
        {
          collection: "1DayDistinct",
          topic: "Export",
          aggregation: "count",
          count: 1,
        },
        {
          collection: "7DayDistinct",
          topic: "Export",
          aggregation: "count",
          count: 2,
        },
        {
          collection: "30DayDistinct",
          topic: "Export",
          aggregation: "count",
          count: 2,
        },
      ]);
    });
  });

  describe("getCurrent", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Status.set([metric]);
    });

    it("returns the current status", async () => {
      let foundMetric = await Status.getCurrent();
      expect(foundMetric["test"]["test"].length).toBe(1);
      expect(foundMetric["test"]["test"][0].metric).toEqual(metric);
    });
  });
});
