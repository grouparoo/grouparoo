import { helper } from "./../utils/specHelper";
import { Run } from "./../../src/models/Run";
import { App } from "./../../src/models/App";
import { Source } from "./../../src/models/Source";
import { Import } from "./../../src/models/Import";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { plugin } from "./../../src/modules/plugin";

let actionhero;
let schedule;
let firstRun;

const sleep = (t) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};

describe("models/run", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    schedule = await helper.factories.schedule();
  });

  test("a run can be created", async () => {
    const run = new Run({
      creatorGuid: schedule.guid,
      creatorType: "schedule",
      state: "complete",
    });
    await run.save();

    expect(run.guid.length).toBe(40);
    firstRun = run;
  });

  test("a run requires a creatorGuid", async () => {
    const run = new Run({ state: "complete", creatorType: "schedule" });
    await expect(run.save()).rejects.toThrow("Run.creatorGuid cannot be null");
  });

  describe("determineState", () => {
    let run: Run;

    beforeEach(async () => {
      Import.destroy({ truncate: true });

      run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });
    });

    afterEach(async () => {
      await run.destroy();
    });

    it("will keep the state running if there are incomplete imports", async () => {
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
      });

      await run.determineState();
      await run.reload();
      expect(run.state).toBe("running");
    });

    it("will mark the run as complete if all the imports are complete", async () => {
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        exportedAt: new Date(),
      });

      await run.determineState();
      await run.reload();
      expect(run.state).toBe("complete");
    });

    it("will move the run to complete if all the imports have failed with an error", async () => {
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        errorMessage: "oh no!",
      });

      await run.determineState();
      await run.reload();
      expect(run.state).toBe("complete");
    });

    it("will mark the run with an error comprised of the counts of the import errors", async () => {
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        errorMessage: "error class A",
      });
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        errorMessage: "error class A",
      });
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        errorMessage: "error class B",
      });

      await run.determineState();
      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.error).toBe("error class A (x2)\r\nerror class B (x1)");
    });
  });

  describe("previousRun", () => {
    let previousRun: Run;
    let nextRun: Run;

    beforeAll(async () => {
      nextRun = new Run({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });
    });

    afterEach(async () => {
      if (previousRun instanceof Run) {
        await previousRun.destroy();
      }
    });

    test("a run can find the previous run for the same schedule that created imports", async () => {
      previousRun = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        error: null,
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun.guid).toBe(previousRun.guid);
    });

    test("will not find a previous run which found 0 profiles", async () => {
      previousRun = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 0,
        error: null,
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun).toBeNull();
    });

    test("will not find a previous run with an error", async () => {
      previousRun = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        error: "OH NO!",
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun).toBeNull();
    });

    test("will not find a previous run that is not complete", async () => {
      previousRun = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
        importsCreated: 1,
        error: null,
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun).toBeNull();
    });
  });

  describe("quantizedTimeline", () => {
    it("returns stats of imports based on sate change time", async () => {
      const run = await Run.create({
        createdAt: 0,
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });

      await sleep(100);

      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        profileAssociatedAt: new Date(),
        profileUpdatedAt: new Date(),
        groupsUpdatedAt: new Date(),
        exportedAt: new Date(),
      });

      await sleep(100);

      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        profileAssociatedAt: new Date(),
        profileUpdatedAt: new Date(),
        groupsUpdatedAt: new Date(),
        exportedAt: new Date(),
      });

      await sleep(100);

      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        profileAssociatedAt: new Date(),
        profileUpdatedAt: new Date(),
        groupsUpdatedAt: new Date(),
        exportedAt: new Date(),
      });

      await sleep(100);

      await run.update({ state: "complete", completedAt: new Date() });

      const quantizedTimeline = await run.quantizedTimeline();
      expect(quantizedTimeline.length).toBe(20 + 4);
      let associateTotal = 0;
      let updateTotal = 0;
      let groupsTotal = 0;
      let exportTotal = 0;
      quantizedTimeline.map((q) => {
        expect(q.steps.associate).toBeLessThanOrEqual(1);
        expect(q.steps.update).toBeLessThanOrEqual(1);
        expect(q.steps.groups).toBeLessThanOrEqual(1);
        expect(q.steps.export).toBeLessThanOrEqual(1);

        associateTotal += q.steps.associate;
        updateTotal += q.steps.update;
        groupsTotal += q.steps.groups;
        exportTotal += q.steps.export;
      });

      expect(associateTotal).toBe(3);
      expect(updateTotal).toBe(3);
      expect(groupsTotal).toBe(3);
      expect(exportTotal).toBe(3);
    });
  });

  describe("test", () => {
    beforeAll(async () => {
      plugin.registerPlugin({
        name: "test-error-plugin",
        apps: [
          {
            name: "test-error-app",
            options: [],
            test: async () => {
              return true;
            },
          },
        ],
        connections: [
          {
            name: "test-error-connection",
            description: "a test app",
            app: "test-error-app",
            direction: "import",
            options: [{ key: "query", required: true }],
            profilePropertyRuleOptions: [
              {
                key: "column",
                required: true,
                description: "the column to choose",
                type: "list",
                options: async () => {
                  return [];
                },
              },
            ],
            methods: {
              profileProperty: async (
                app,
                appOptions,
                source,
                sourceOptions,
                sourceMapping,
                profilePropertyRule,
                profilePropertyRuleOptions,
                profile
              ) => {
                if (profilePropertyRuleOptions.column) {
                  throw new Error(profilePropertyRuleOptions.column);
                } else {
                  return {};
                }
              },
            },
          },
        ],
      });
    });

    test("creating a run will throw and become complete if there is an error with a profilePropertyRule", async () => {
      const rule = await ProfilePropertyRule.findOne();
      const app = await App.create({
        name: "bad app",
        type: "test-error-app",
      });

      const source = await Source.create({
        name: "bad source",
        type: "test-error-connection",
        appGuid: app.guid,
      });
      await source.setOptions({ query: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      // the app throws whatever the query is a new error (see above)
      await rule.update({ sourceGuid: source.guid });
      await rule.setOptions({ column: "abc" });
      await rule.update({ state: "ready" });

      // we need at least one profile to test against
      const profile = await helper.factories.profile();

      await expect(
        Run.create({
          creatorGuid: "test",
          creatorType: "test",
          state: "running",
        })
      ).rejects.toThrow(/abc/);
    });
  });
});
