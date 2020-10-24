import { helper } from "@grouparoo/spec-helper";
import { Run } from "./../../src/models/Run";
import { App } from "./../../src/models/App";
import { Source } from "./../../src/models/Source";
import { Import } from "./../../src/models/Import";
import { ProfilePropertyRule } from "./../../src/models/ProfilePropertyRule";
import { plugin } from "./../../src/modules/plugin";
import { Schedule } from "../../src/models/Schedule";
import { Group } from "../../src/models/Group";
import { Team } from "../../src/models/Team";
import { TeamMember } from "../../src/models/TeamMember";
import { Profile } from "../../src/models/Profile";

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

  describe("with creators", () => {
    let run: Run;
    let source: Source;
    let profilePropertyRule: ProfilePropertyRule;
    let group: Group;
    let team: Team;
    let teamMember: TeamMember;
    let schedule: Schedule;

    beforeAll(async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      profilePropertyRule = await ProfilePropertyRule.findOne();
      group = await helper.factories.group();
      team = await helper.factories.team();
      teamMember = await helper.factories.teamMember(team);
      schedule = await helper.factories.schedule(source);
    });

    describe("creatorName", () => {
      test("unknown type name", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: "xxx",
          creatorType: "xxx",
        });
        expect(await run.getCreatorName()).toBe("unknown");
      });

      test("profilePropertyRule Name", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: profilePropertyRule.guid,
          creatorType: "profilePropertyRule",
        });
        expect(await run.getCreatorName()).toBe(profilePropertyRule.key);
      });

      test("group Name", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: group.guid,
          creatorType: "group",
        });
        expect(await run.getCreatorName()).toBe(group.name);
      });

      test("schedule Name", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: schedule.guid,
          creatorType: "schedule",
        });
        expect(await run.getCreatorName()).toBe(source.name);
      });

      test("teamMember Name", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: teamMember.guid,
          creatorType: "teamMember",
        });
        expect(await run.getCreatorName()).toBe(
          `${teamMember.firstName} ${teamMember.lastName}`
        );
      });
    });

    describe("percentComplete", () => {
      test("complete", async () => {
        run = await Run.create({
          state: "complete",
          creatorGuid: group.guid,
          creatorType: "group",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(100);
      });

      test("stopped", async () => {
        run = await Run.create({
          state: "stopped",
          creatorGuid: group.guid,
          creatorType: "group",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(100);
      });

      test("running - schedule", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: schedule.guid,
          creatorType: "schedule",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(0);
      });

      test("running - group - runAddGroupMembers", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: group.guid,
          creatorType: "group",
          groupMethod: "runAddGroupMembers",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(0);
      });

      test("running - group - runRemoveGroupMembers", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: group.guid,
          creatorType: "group",
          groupMethod: "runRemoveGroupMembers",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(50);
      });

      test("running - group - removePreviousRunGroupMembers", async () => {
        run = await Run.create({
          state: "running",
          creatorGuid: group.guid,
          creatorType: "group",
          groupMethod: "removePreviousRunGroupMembers",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(50);
      });

      test("running - teamMember", async () => {
        const profileA = await helper.factories.profile();
        const profileB = await helper.factories.profile();
        run = await Run.create({
          state: "running",
          creatorGuid: teamMember.guid,
          creatorType: "teamMember",
          profilesImported: 1,
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(50);
        await profileA.destroy();
        await profileB.destroy();
      });
    });

    afterEach(async () => {
      await run.destroy();
    });

    afterAll(async () => {
      await teamMember.destroy();
      await team.destroy();
      await group.destroy();
      await schedule.destroy();
      await source.destroy();
    });
  });

  test("a run requires a creatorGuid", async () => {
    const run = new Run({ state: "complete", creatorType: "schedule" });
    await expect(run.save()).rejects.toThrow("Run.creatorGuid cannot be null");
  });

  describe("determineState", () => {
    let run: Run;
    let profile: Profile;

    beforeEach(async () => {
      Import.destroy({ truncate: true });

      profile = await helper.factories.profile();

      run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });
    });

    afterEach(async () => {
      await run.destroy();
      await profile.destroy();
    });

    it("will keep the state running if there are incomplete imports", async () => {
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
      });

      await run.afterBatch();
      await run.reload();
      expect(run.state).toBe("running");
      await run.update({ state: "stopped" });
    });

    it("will move the run to complete if all the imports have failed with an error", async () => {
      await Import.create({
        creatorType: "run",
        creatorGuid: run.guid,
        errorMessage: "oh no!",
      });

      await run.afterBatch("complete");
      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.error).toMatch(/oh no/);
    });

    it("a complete run will remain complete", async () => {
      await run.update({ state: "complete" });
      await run.afterBatch();
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

      await run.afterBatch("complete");
      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.error).toBe("error class A (x2)\r\nerror class B (x1)");
    });
  });

  describe("stopping a run", () => {
    let run: Run;

    beforeAll(async () => {
      Import.destroy({ truncate: true });

      run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });
    });

    it("can stop a run and include errors", async () => {
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

      await run.stop();
      expect(run.state).toBe("stopped");
      expect(run.error).toBe("error class A (x2)\r\nerror class B (x1)");
    });

    it("a stopped run will remain stopped", async () => {
      await run.afterBatch();
      await run.reload();
      expect(run.state).toBe("stopped");
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

    test("will not find a previous run with an error (setting=false)", async () => {
      await plugin.updateSetting(
        "core",
        "runs-previous-can-include-errors",
        "false"
      );

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

    test("will find a previous run with an error (setting=true)", async () => {
      await plugin.updateSetting(
        "core",
        "runs-previous-can-include-errors",
        "true"
      );

      previousRun = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        error: "OH NO!",
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun.guid).toEqual(previousRun.guid);
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
      expect(quantizedTimeline.length).toBe(25 + 4);
      let associateTotal = 0;
      let updateTotal = 0;
      let groupsTotal = 0;
      quantizedTimeline.map((q) => {
        expect(q.steps.associate).toBeLessThanOrEqual(1);
        expect(q.steps.update).toBeLessThanOrEqual(1);
        expect(q.steps.groups).toBeLessThanOrEqual(1);

        associateTotal += q.steps.associate;
        updateTotal += q.steps.update;
        groupsTotal += q.steps.groups;
      });

      expect(associateTotal).toBe(3);
      expect(updateTotal).toBe(3);
      expect(groupsTotal).toBe(3);
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
            methods: {
              test: async () => {
                return { success: true };
              },
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
              profileProperty: async ({ profilePropertyRuleOptions }) => {
                if (profilePropertyRuleOptions.column) {
                  throw new Error(profilePropertyRuleOptions.column);
                } else {
                  return ["ok"];
                }
              },
            },
          },
        ],
      });
    });

    test("creating a run will throw and become complete if there is an error with a profilePropertyRule", async () => {
      const app = await App.create({
        name: "bad app",
        type: "test-error-app",
        state: "ready",
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
      const rule = await helper.factories.profilePropertyRule(
        source,
        { key: "new_property" },
        { column: "something-broken" }
      );
      await rule.update({ state: "ready" });

      // we need at least one profile to test against
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [1000] });

      // importing the profile should raise...
      await expect(profile.import()).rejects.toThrow(/something-broken/);

      // ... which means that no run should be able to be created
      await expect(
        Run.create({
          creatorGuid: "test",
          creatorType: "test",
          state: "running",
        })
      ).rejects.toThrow(/something-broken/);
    });
  });
});
