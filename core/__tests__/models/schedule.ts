import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import {
  plugin,
  App,
  Log,
  Schedule,
  Source,
  Option,
  Run,
  Filter,
  GrouparooModel,
} from "../../src";
import { FilterHelper } from "../../src/modules/filterHelper";

describe("models/schedule", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;

  describe("with source", () => {
    let app: App;
    let source: Source;

    beforeAll(async () => {
      ({ model } = await helper.factories.properties());
      app = await helper.factories.app();

      source = await Source.create({
        name: "test source",
        type: "test-plugin-import",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    test("a schedule can be created with a source, and it can find the related app", async () => {
      const schedule = new Schedule({
        name: "test schedule",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await schedule.save();

      expect(schedule.id.length).toBe(40);
      expect(schedule.createdAt).toBeTruthy();
      expect(schedule.updatedAt).toBeTruthy();

      const options = await schedule.getOptions();
      expect(options).toEqual({});

      const _source = await schedule.$get("source");
      const _app = await _source.$get("app");
      expect(_app.id).toBe(app.id);
      await schedule.destroy();
    });

    test("creating a schedule creates a log entry", async () => {
      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "schedule" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();
    });

    test("a schedule name will be generated from the source if one is not provided", async () => {
      const schedule = await Schedule.create({
        type: "test-plugin-import",
        sourceId: source.id,
      });

      expect(schedule.name).toMatch(/test source schedule/);

      await schedule.destroy();
    });

    test("deleting a schedule creates a log entry", async () => {
      const schedule = await Schedule.create({
        name: "bye schedule",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await schedule.destroy();

      const latestLog = await Log.findOne({
        where: { verb: "create", topic: "schedule" },
        order: [["createdAt", "desc"]],
        limit: 1,
      });

      expect(latestLog).toBeTruthy();
    });

    test("a schedule cannot be created if the source does not have all the required options set", async () => {
      const app = await helper.factories.app();
      await app.update({ state: "ready" });
      const source = await helper.factories.source(app);
      const sourceOptions = await source.getOptions();
      await expect(source.validateOptions(sourceOptions)).rejects.toThrow(
        /table is required/
      );

      await expect(
        Schedule.create({
          name: "test schedule",
          type: "test-plugin-import",
          sourceId: source.id,
        })
      ).rejects.toThrow(/source is not ready/);
    });

    test("creating 2 schedules for the same source will throw an error", async () => {
      const scheduleA = new Schedule({
        name: "incoming schedule A",
        type: "test-plugin-import",
        sourceId: source.id,
      });
      await scheduleA.save();

      const scheduleB = new Schedule({
        name: "incoming schedule B",
        type: "test-plugin-import",
        sourceId: source.id,
      });
      await expect(scheduleB.save()).rejects.toThrow(/already has a schedule/);

      await scheduleA.destroy();
    });

    test("options can be set and retrieved", async () => {
      const schedule = await Schedule.create({
        name: "incoming schedule A",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await schedule.setOptions({ maxColumn: "id" });
      const options = await schedule.getOptions();
      expect(options).toEqual({ maxColumn: "id" });

      await schedule.destroy();
    });

    test("deleting a schedule deleted the options", async () => {
      const schedule = await Schedule.create({
        name: "incoming schedule A",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await schedule.setOptions({ maxColumn: "abc" });

      await schedule.destroy(); // doesn't throw

      const optionsCount = await Option.count({
        where: { ownerId: schedule.id },
      });
      expect(optionsCount).toBe(0);
    });

    test("deleting a schedule does not delete options for other models with the same id", async () => {
      const schedule = await Schedule.create({
        name: "incoming schedule A",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await schedule.setOptions({ maxColumn: "abc" });

      const foreignOption = await Option.create({
        ownerId: schedule.id,
        ownerType: "other",
        key: "someKey",
        value: "someValue",
        type: "string",
      });

      let count = await Option.count({
        where: { ownerId: schedule.id },
      });
      expect(count).toBe(2);

      await schedule.destroy();
      const options = await Option.findAll({
        where: { ownerId: schedule.id },
      });
      expect(options.length).toBe(1);
      expect(options[0].ownerType).toBe("other");
      expect(options[0].key).toBe("someKey");

      await foreignOption.destroy();
    });

    test("deleting a schedule deletes the previous runs", async () => {
      const schedule = await Schedule.create({
        name: "incoming schedule A",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await schedule.setOptions({ maxColumn: "col" });
      await schedule.update({ state: "ready" });

      await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });

      let runCount = await Run.scope(null).count({
        where: { creatorId: schedule.id },
      });
      expect(runCount).toBe(1);

      await schedule.destroy();

      runCount = await Run.scope(null).count({
        where: { creatorId: schedule.id },
      });
      expect(runCount).toBe(0);
    });

    test("providing invalid options will result in an error", async () => {
      const schedule = await Schedule.create({
        name: "incoming schedule A",
        type: "test-plugin-import",
        sourceId: source.id,
      });

      await expect(schedule.setOptions({ notThing: "abc" })).rejects.toThrow(
        /maxColumn is required for a schedule of type test-plugin-import/
      );

      await expect(
        schedule.setOptions({ maxColumn: "abc", otherThing: "false" })
      ).rejects.toThrow(
        /otherThing is not an option for a test-plugin-import schedule/
      );

      await schedule.destroy();
    });

    describe("running after save", () => {
      let schedule: Schedule;

      beforeEach(async () => {
        schedule = await Schedule.create({
          name: "schedule",
          type: "test-plugin-import",
          sourceId: source.id,
        });
        await schedule.setOptions({ maxColumn: "foo" });
        await schedule.update({ state: "ready" });
      });

      afterEach(async () => {
        await schedule.destroy();
      });

      test("creating a new non-recurring schedule will not run now", async () => {
        const runs = await schedule.$get("runs");
        expect(runs.length).toBe(0);
      });

      test("creating a new recurring schedule will run now", async () => {
        await schedule.update({
          recurring: true,
          recurringFrequency: 1000 * 60 * 60,
        });
        const runs = await schedule.$get("runs");
        expect(runs.length).toBe(1);
        expect(runs[0].state).toBe("running");
      });

      test("saving a recurring schedule will run not now if there is already a run in progress", async () => {
        const firstRun = await schedule.enqueueRun();

        await schedule.update({
          recurring: true,
          recurringFrequency: 1000 * 60 * 60,
        });
        const runs = await schedule.$get("runs");
        expect(runs.length).toBe(1);
        expect(runs[0].id).toBe(firstRun.id);
      });
    });

    describe("with plugin that does not support schedules", () => {
      beforeAll(() => {
        plugin.registerPlugin({
          name: "test-plugin-no-schedule",
          apps: [
            {
              name: "test-plugin-app-no-schedule",
              displayName: "test-plugin-app-no-schedule",
              options: [],
              methods: {
                test: async () => {
                  return { success: true };
                },
              },
            },
          ],
          connections: [
            {
              name: "test-plugin-source-no-schedule",
              displayName: "test-plugin-source-no-schedule",
              description: "a test connection",
              apps: ["test-plugin-app-no-schedule"],
              direction: "import",
              options: [],
              methods: {
                propertyOptions: async () => {
                  return null;
                },
                recordProperty: async () => {
                  return [];
                },
              },
            },
          ],
        });
      });

      test("a schedule cannot be created if the source does not support schedules", async () => {
        const app = await App.create({
          type: "test-plugin-app-no-schedule",
          name: "test app",
        });
        await app.update({ state: "ready" });
        const source = await Source.create({
          type: "test-plugin-source-no-schedule",
          appId: app.id,
          modelId: model.id,
        });
        await source.update({ state: "ready" });

        await expect(
          Schedule.create({
            name: "test schedule",
            type: "test-plugin-import",
            sourceId: source.id,
          })
        ).rejects.toThrow(/cannot have a schedule/);

        await source.destroy();
        await app.destroy();
      });
    });

    describe("validations", () => {
      test("options must match the app options (extra options needed by app)", async () => {
        const schedule = new Schedule({
          name: "incoming schedule - too many options",
          type: "test-plugin-import",
          sourceId: source.id,
        });

        await schedule.save();
        expect(schedule.id).toBeTruthy();

        await expect(
          schedule.setOptions({ maxColumn: "abc", something: "abc123" })
        ).rejects.toThrow(
          /something is not an option for a test-plugin-import schedule/
        );

        await schedule.destroy();
      });

      test("__options only includes options for schedules", async () => {
        const schedule = await Schedule.create({
          id: "myScheduleId",
          type: "test-plugin-import",
          name: "test schedule",
          sourceId: source.id,
        });

        await Option.create({
          ownerId: schedule.id,
          ownerType: "schedule",
          key: "maxColumn",
          value: "abc",
          type: "string",
        });

        await Option.create({
          ownerId: schedule.id,
          ownerType: "source",
          key: "someOtherProperty",
          value: "someValue",
          type: "string",
        });

        const options = await schedule.$get("__options");
        expect(options.length).toBe(1);
        expect(options[0].ownerType).toBe("schedule");
        expect(options[0].key).toBe("maxColumn");

        await schedule.destroy();
      });

      test("recurring schedules require a recurring frequency > 1 minute", async () => {
        const schedule = await helper.factories.schedule();
        await expect(
          schedule.update({ recurring: true, recurringFrequency: 0 })
        ).rejects.toThrow(
          /recurring frequency is required to be one minute or greater/
        );

        await expect(
          schedule.update({ recurring: true, recurringFrequency: null })
        ).rejects.toThrow(
          /recurring frequency is required to be one minute or greater/
        );

        await schedule.update({
          recurring: true,
          recurringFrequency: 1000 * 60,
        }); // OK

        await schedule.destroy();
      });

      test("a schedule cannot be changed to to the ready state if there are missing required options", async () => {
        const schedule = await Schedule.create({
          sourceId: source.id,
          name: "no opts",
        });

        await expect(schedule.update({ state: "ready" })).rejects.toThrow(
          /maxColumn is required/
        );
        await schedule.destroy();
      });

      test("a schedule cannot be created in the ready state with missing required options", async () => {
        const schedule = Schedule.build({
          sourceId: source.id,
          name: "no opts",
          state: "ready",
        });

        await expect(schedule.save()).rejects.toThrow(/maxColumn is required/);
      });

      test("a schedule that is ready cannot move back to draft", async () => {
        const schedule = await helper.factories.schedule();
        await schedule.update({ state: "ready" });
        await expect(schedule.update({ state: "draft" })).rejects.toThrow(
          /cannot transition schedule state from ready to draft/
        );
        await schedule.destroy();
      });

      test("changing a schedule's options will reset previous highWaterMarks and start a run", async () => {
        const schedule: Schedule = await helper.factories.schedule();
        const opts = await schedule.getOptions();
        expect(opts).toEqual({ maxColumn: "updated_at" });

        const run = await Run.create({
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "complete",
          highWaterMark: { updated_at: 12345 },
        });
        expect((await schedule.$get("runs")).length).toBe(1);
        expect(run.highWaterMark).toEqual({ updated_at: 12345 });

        await schedule.setOptions({ maxColumn: "createdAt" });

        await run.reload();
        expect(run.highWaterMark).toEqual({}); // the getter formats to an empty array
        expect((await schedule.$get("runs")).length).toBe(2);

        await schedule.destroy();
      });

      test("changing a schedule's filters will reset previous highWaterMarks and start a run", async () => {
        const schedule: Schedule = await helper.factories.schedule();
        const filters = await schedule.getFilters();
        expect(filters).toEqual([]);

        const run = await Run.create({
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "complete",
          highWaterMark: { updated_at: 12345 },
        });
        expect((await schedule.$get("runs")).length).toBe(1);
        expect(run.highWaterMark).toEqual({ updated_at: 12345 });

        await schedule.setFilters([{ key: "id", match: "0", op: "gt" }]);

        await run.reload();
        expect(run.highWaterMark).toEqual({}); // the getter formats to an empty array
        expect((await schedule.$get("runs")).length).toBe(2);

        await schedule.destroy();
      });
    });

    describe("shouldRun", () => {
      let schedule: Schedule;

      beforeEach(async () => {
        schedule = await Schedule.create({
          name: "schedule",
          type: "test-plugin-import",
          sourceId: source.id,
        });
        await schedule.setOptions({ maxColumn: "foo" });
        await schedule.update({ state: "ready" });
      });

      afterEach(async () => {
        await schedule.destroy();
      });

      describe("default behavior", () => {
        test("it will not enqueue a run for a non-recurring schedule", async () => {
          await schedule.update({
            recurring: false,
            recurringFrequency: 0,
          });

          await Run.truncate();
          expect(await schedule.shouldRun()).toBe(false);
        });

        test("it will not enqueue a run for a recurring schedule that has never run but is a draft", async () => {
          const source = await helper.factories.source();
          await source.setOptions({ table: "users" });
          await source.setMapping({ id: "userId" });
          await source.update({ state: "ready" });

          const localSchedule = await Schedule.create({
            sourceId: source.id,
            name: "tmp",
            recurring: true,
            recurringFrequency: 60 * 1000,
          });
          expect(localSchedule.state).toBe("draft");

          await Run.truncate();
          expect(await localSchedule.shouldRun()).toBe(false);

          await localSchedule.destroy();
          await source.destroy();
        });

        test("it will enqueue a run for a recurring schedule that has never run and is ready", async () => {
          await schedule.update({
            recurring: true,
            recurringFrequency: 60 * 1000,
            state: "ready",
          });

          await Run.truncate();
          expect(await schedule.shouldRun()).toBe(true);
        });

        test("it will enqueue a run for a recurring schedule that ran in the past", async () => {
          await schedule.update({
            recurring: true,
            recurringFrequency: 60 * 1000,
          });
          await Run.truncate();

          await Run.create({
            creatorId: schedule.id,
            creatorType: "schedule",
            state: "complete",
            completedAt: new Date(0),
          });

          expect(await schedule.shouldRun()).toBe(true);
        });

        test("it will not enqueue a run for a recurring schedule that ran too recently", async () => {
          await schedule.update({
            recurring: true,
            recurringFrequency: 60 * 1000,
          });
          await Run.truncate();

          await Run.create({
            creatorId: schedule.id,
            creatorType: "schedule",
            state: "complete",
            completedAt: new Date(),
          });

          expect(await schedule.shouldRun()).toBe(false);
        });

        test("it will not enqueue a run for a recurring schedule that is running", async () => {
          await schedule.update({
            recurring: true,
            recurringFrequency: 60 * 1000,
          });
          await Run.truncate();

          await Run.create({
            creatorId: schedule.id,
            creatorType: "schedule",
            state: "running",
          });
          expect(await schedule.shouldRun()).toBe(false);
        });
      });

      describe("custom inputs", () => {
        test("it can enqueue a run for a non-recurring schedule (runIfNotRecurring)", async () => {
          await schedule.update({
            recurring: false,
            recurringFrequency: 0,
          });
          await Run.truncate();

          expect(await schedule.shouldRun({ runIfNotRecurring: true })).toBe(
            true
          );
        });

        test("it will not enqueue a run for a recurring schedule that ran too recently (ignoreDeltas)", async () => {
          await schedule.update({
            recurring: true,
            recurringFrequency: 60 * 1000,
          });
          await Run.truncate();

          const run = await Run.create({
            creatorId: schedule.id,
            creatorType: "schedule",
            state: "complete",
            completedAt: new Date(),
          });

          expect(await schedule.shouldRun({ ignoreDeltas: true })).toBe(true);
        });
      });
    });
  });

  describe("with custom plugin", () => {
    let app: App;
    let source: Source;

    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            displayName: "test-template-app",
            options: [],
            methods: {
              test: async () => {
                return { success: true };
              },
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            displayName: "import-from-test-template-app",
            supportIncrementalSchedule: true,
            description: "a test app connection",
            apps: ["test-template-app"],
            direction: "import" as "import",
            options: [],
            methods: {
              scheduleOptions: async () => [
                {
                  key: "maxColumn",
                  required: true,
                  description: "the column to choose",
                  type: "list",
                  options: async () => {
                    return [
                      { key: "created_at", examples: [1, 2, 3] },
                      { key: "updated_at", examples: [1, 2, 3] },
                    ];
                  },
                },
              ],
              sourceRunPercentComplete: async () => {
                return 33;
              },
              records: async () => {
                return {
                  highWaterMark: { updated_at: 200 },
                  sourceOffset: 100,
                  importsCount: 100,
                };
              },
              recordProperty: async () => {
                return [];
              },
              sourceFilters: async () => {
                return [
                  {
                    key: "id",
                    ops: ["gt", "lt"],
                    canHaveRelativeMatch: false,
                  },
                ];
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app with real methods",
        type: "test-template-app",
        state: "ready",
      });

      source = await Source.create({
        name: "test source from plugin",
        type: "import-from-test-template-app",
        appId: app.id,
        modelId: model.id,
      });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
    });

    test.each(["ready", "deleted"])(
      "schedules can retrieve their options from a %p source",
      async (state) => {
        const schedule = await Schedule.create({
          name: "test plugin schedule",
          sourceId: source.id,
        });

        await app.update({ state });
        await source.update({ state });

        const pluginOptions = await schedule.pluginOptions();
        expect(pluginOptions).toEqual([
          {
            description: "the column to choose",
            key: "maxColumn",
            options: [
              { examples: [1, 2, 3], key: "created_at" },
              { key: "updated_at", examples: [1, 2, 3] },
            ],
            required: true,
            type: "list",
          },
        ]);

        await schedule.destroy();
        await source.update({ state: "ready" });
        await app.update({ state: "ready" });
      }
    );

    test("running a schedule that isn't ready will throw", async () => {
      const schedule = await Schedule.create({
        name: "test plugin schedule",
        sourceId: source.id,
      });

      await expect(
        Run.create({
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "running",
        })
      ).rejects.toThrow(/creator schedule is not ready/);

      await schedule.destroy();
    });

    test("the source can provide the percentComplete via sourceRunPercentComplete", async () => {
      const schedule = await Schedule.create({
        name: "test plugin schedule",
        sourceId: source.id,
      });
      await schedule.setOptions({ maxColumn: "col" });
      await schedule.update({ state: "ready" });

      const run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });
      expect(run.percentComplete).toBe(0);

      await run.determinePercentComplete();
      expect(run.percentComplete).toBe(33);

      await schedule.destroy();
    });

    test("a source using a plugin with no records method cannot have a schedule", async () => {
      expect(await source.scheduleAvailable()).toBe(true);

      // delete the records method
      const plugin = api.plugins.plugins.filter(
        (p) => p.name === "test-plugin"
      )[0];
      const originalMethod = plugin.connections[0].methods.records;
      plugin.connections[0].methods.records = undefined;
      expect(await source.scheduleAvailable()).toBe(false);

      await expect(
        Schedule.create({
          name: "test plugin schedule",
          sourceId: source.id,
        })
      ).rejects.toThrow(/cannot have a schedule/);

      // replace method
      plugin.connections[0].methods.records = originalMethod;
    });

    describe("filters", () => {
      test("we can determine if schedule's filters have been changed", async () => {
        const schedule = await Schedule.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await schedule.setFilters([{ key: "id", match: "0", op: "gt" }]);
        const filters = await schedule.getFilters();

        expect(FilterHelper.filtersAreEqual(filters, [])).toBe(false);
        expect(
          FilterHelper.filtersAreEqual(filters, [
            { key: "id", match: "0", op: "gt" },
          ])
        ).toBe(true);
        expect(
          FilterHelper.filtersAreEqual(filters, [
            { key: "id", match: "1", op: "gt" },
          ])
        ).toBe(false);
        expect(
          FilterHelper.filtersAreEqual(filters, [
            { key: "id", match: "0", op: "lt" },
          ])
        ).toBe(false);

        await schedule.destroy();
      });

      test("it can get the filter options from the plugin", async () => {
        const schedule = await Schedule.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        const filterOptions = await FilterHelper.pluginFilterOptions(schedule);
        expect(filterOptions).toEqual([
          {
            key: "id",
            ops: ["gt", "lt"],
            canHaveRelativeMatch: false,
          },
        ]);

        await schedule.destroy();
      });

      test("it will memoize filters as they are set", async () => {
        const schedule = await Schedule.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await schedule.setFilters([{ op: "gt", match: 1, key: "id" }]);

        expect(schedule.filters.length).toBe(1);
        expect(schedule.filters[0].op).toBe("gt");
        expect(schedule.filters[0].match).toBe("1");
        expect(schedule.filters[0].key).toBe("id");

        await schedule.destroy();
      });

      test("it will use memoized filters if they exist", async () => {
        const schedule = await Schedule.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await schedule.setFilters([{ op: "gt", match: 999, key: "id" }]);

        schedule.filters = [
          Filter.build({
            propertyId: schedule.id,
            position: 1,
            key: "foo",
            match: "-1",
            op: "less than",
          }),
        ];

        const filters = await schedule.getFilters();
        expect(filters.length).toBe(1);
        expect(filters[0].key).toEqual("foo");
        expect(filters[0].match).toEqual("-1");
        expect(filters[0].op).toEqual("less than");

        await schedule.destroy();
      });

      test("filters that match the options can be set", async () => {
        const schedule = await Schedule.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await schedule.setFilters([
          { op: "gt", match: 1, key: "id" },
          { op: "lt", match: 99, key: "id" },
        ]);

        const filters = await schedule.getFilters();
        expect(filters).toEqual([
          {
            op: "gt",
            match: "1",
            key: "id",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
          {
            op: "lt",
            match: "99",
            key: "id",
            relativeMatchDirection: null,
            relativeMatchNumber: null,
            relativeMatchUnit: null,
          },
        ]);

        await schedule.destroy();
      });

      test("deleting a schedule also deleted the filters", async () => {
        const count = await Filter.count({ where: { ownerType: "schedule" } });
        expect(count).toBe(0);
      });

      test("filters that do not match the options cannot be set", async () => {
        const schedule = await Schedule.create({
          key: "test",
          type: "string",
          sourceId: source.id,
        });

        await expect(
          schedule.setFilters([{ op: "gt", match: 1, key: "other-key" }])
        ).rejects.toThrow("other-key is not filterable");

        await expect(
          //@ts-ignore
          schedule.setFilters([{ op: "max it out", match: 1, key: "id" }])
        ).rejects.toThrow('"max it out" cannot be applied to id');

        await schedule.destroy();
      });
    });
  });
});
