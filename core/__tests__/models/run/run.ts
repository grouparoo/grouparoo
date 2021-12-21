import { helper } from "@grouparoo/spec-helper";
import {
  plugin,
  Run,
  App,
  Source,
  Import,
  Property,
  Schedule,
  Group,
  Team,
  TeamMember,
  GrouparooRecord,
  GroupMember,
  Log,
  GrouparooModel,
} from "../../../src";
import { utils } from "actionhero";

describe("models/run", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;
  let schedule: Schedule;
  let firstRun: Run;

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());
    schedule = await helper.factories.schedule();
  });

  test("a run can be created", async () => {
    const run = new Run({
      creatorId: schedule.id,
      creatorType: "schedule",
      state: "complete",
    });
    await run.save();

    expect(run.id.length).toBe(40);
    firstRun = run;
  });

  describe("with creators", () => {
    let run: Run;
    let source: Source;
    let property: Property;
    let group: Group;
    let team: Team;
    let teamMember: TeamMember;
    let schedule: Schedule;
    let recordA: GrouparooRecord;
    let recordB: GrouparooRecord;
    let recordC: GrouparooRecord;

    beforeAll(async () => {
      source = await helper.factories.source();
      await source.setOptions({ table: "table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });
      property = await Property.findOne();
      group = await helper.factories.group();
      team = await helper.factories.team();
      teamMember = await helper.factories.teamMember(team);
      schedule = await helper.factories.schedule(source);

      await group.setRules(
        group.fromConvenientRules([
          { key: "grouparooId", operation: { op: "exists" } },
        ])
      );

      recordA = await helper.factories.record();
      recordB = await helper.factories.record();
      recordC = await helper.factories.record();
    });

    describe("creatorName", () => {
      test("unknown type name", async () => {
        run = await Run.create({
          state: "running",
          creatorId: "xxx",
          creatorType: "xxx",
        });
        expect(await run.getCreatorName()).toBe("unknown");
      });

      test("property Name", async () => {
        run = await Run.create({
          state: "running",
          creatorId: property.id,
          creatorType: "property",
        });
        expect(await run.getCreatorName()).toBe(property.key);
      });

      test("group Name", async () => {
        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
        });
        expect(await run.getCreatorName()).toBe(group.name);
      });

      test("schedule Name", async () => {
        run = await Run.create({
          state: "running",
          creatorId: schedule.id,
          creatorType: "schedule",
        });
        expect(await run.getCreatorName()).toBe(source.name);
      });

      test("teamMember Name", async () => {
        run = await Run.create({
          state: "running",
          creatorId: teamMember.id,
          creatorType: "teamMember",
        });
        expect(await run.getCreatorName()).toBe(
          `${teamMember.firstName} ${teamMember.lastName}`
        );
      });
    });

    describe("percentComplete", () => {
      beforeEach(async () => {
        await GroupMember.truncate();
      });

      test("complete", async () => {
        run = await Run.create({
          state: "complete",
          creatorId: group.id,
          creatorType: "group",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(100);
      });

      test("stopped", async () => {
        run = await Run.create({
          state: "stopped",
          creatorId: group.id,
          creatorType: "group",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(100);
      });

      test("running - schedule", async () => {
        run = await Run.create({
          state: "running",
          creatorId: schedule.id,
          creatorType: "schedule",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(0);
      });

      test("running - group - runAddGroupMembers", async () => {
        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
          method: "runAddGroupMembers",
        });

        // 0 members
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(0);

        // 1 member
        await recordA.updateGroupMembership();
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(16);
      });

      test("running - group - runRemoveGroupMembers", async () => {
        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
          method: "runRemoveGroupMembers",
        });

        // 0 members
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(49);

        // 1 member
        await recordA.updateGroupMembership();
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(65);
      });

      test("running - group - removePreviousRunGroupMembers", async () => {
        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
          method: "removePreviousRunGroupMembers",
        });

        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
          method: "runRemoveGroupMembers",
        });

        // 3 members
        await recordA.updateGroupMembership();
        await recordB.updateGroupMembership();
        await recordC.updateGroupMembership();
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(99);
      });

      test("running - group - complete", async () => {
        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
          method: "complete",
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(99);
      });

      test("running - group - deleted", async () => {
        await group.update({ state: "deleted" });

        await Log.create({
          ownerId: group.id,
          topic: "group",
          verb: "update",
          message: "all good",
          data: { recordsCount: 10 }, // previous group size was 10
        });

        run = await Run.create({
          state: "running",
          creatorId: group.id,
          creatorType: "group",
          method: "runRemoveGroupMembers",
        });

        // 3 members left (manually added because group is deleted)
        await GroupMember.create({ groupId: group.id, recordId: recordA.id });
        await GroupMember.create({ groupId: group.id, recordId: recordB.id });
        await GroupMember.create({ groupId: group.id, recordId: recordC.id });

        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(70);
      });

      test("running - teamMember", async () => {
        run = await Run.create({
          state: "running",
          creatorId: teamMember.id,
          creatorType: "teamMember",
          importsCreated: 1, // based on imports created
        });
        await run.determinePercentComplete();
        expect(run.percentComplete).toBe(33);
      });
    });

    afterEach(async () => {
      await run.destroy();
    });

    afterAll(async () => {
      await teamMember.destroy();
      await team.reload();
      if (!team.locked) await team.destroy();
      await group.destroy();
      await schedule.destroy();
      await source.destroy();
    });
  });

  test("a run requires a creatorId", async () => {
    const run = new Run({ state: "complete", creatorType: "schedule" });
    await expect(run.save()).rejects.toThrow("Run.creatorId cannot be null");
  });

  describe("determineState", () => {
    let run: Run;
    let record: GrouparooRecord;

    beforeEach(async () => {
      Import.truncate();

      record = await helper.factories.record();

      run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });
    });

    afterEach(async () => {
      await run.destroy();
      await record.destroy();
    });

    it("will keep the state running if there are incomplete imports", async () => {
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
      });

      await run.afterBatch();
      await run.reload();
      expect(run.state).toBe("running");
      await run.update({ state: "stopped" });
    });

    it("will move the run to complete if all the imports have failed with an error", async () => {
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
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

    it("will not try to transition a run out of a terminal state (to complete)", async () => {
      await run.update({ state: "stopped" });
      await run.afterBatch("complete");
      await run.reload();
      expect(run.state).toBe("stopped");
    });

    it("will not try to transition a run out of a terminal state (to stopped)", async () => {
      await run.update({ state: "complete" });
      await run.afterBatch("stopped");
      await run.reload();
      expect(run.state).toBe("complete");
    });

    it("will mark the run with an error comprised of the counts of the import errors", async () => {
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
        errorMessage: "error class A",
      });
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
        errorMessage: "error class A",
      });
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
        errorMessage: "error class B",
      });

      await run.afterBatch("complete");
      await run.reload();
      expect(run.state).toBe("complete");
      expect(run.error.split("\r\n").sort()).toEqual([
        "error class A (x2)",
        "error class B (x1)",
      ]);
    });
  });

  describe("stopping a run", () => {
    let run: Run;

    beforeAll(async () => {
      Import.truncate();

      run = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });
    });

    it("can stop a run and include errors", async () => {
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
        errorMessage: "error class A",
      });
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
        errorMessage: "error class A",
      });
      await Import.create({
        creatorType: "run",
        creatorId: run.id,
        errorMessage: "error class B",
      });

      await run.stop();
      expect(run.state).toBe("stopped");
      expect(run.error.split("\r\n").sort()).toEqual([
        "error class A (x2)",
        "error class B (x1)",
      ]);
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
        creatorId: schedule.id,
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
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        error: null,
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun.id).toBe(previousRun.id);
    });

    test("will not find a previous run which found 0 records", async () => {
      previousRun = await Run.create({
        creatorId: schedule.id,
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
        creatorId: schedule.id,
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
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        error: "OH NO!",
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun.id).toEqual(previousRun.id);
    });

    test("will not find a previous run that is not complete", async () => {
      previousRun = await Run.create({
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
        importsCreated: 1,
        error: null,
      });

      const foundPreviousRun = await nextRun.previousRun();
      expect(foundPreviousRun).toBeNull();
    });
  });

  describe("with imports", () => {
    let run: Run;

    beforeAll(async () => {
      run = await Run.create({
        createdAt: 0,
        creatorId: schedule.id,
        creatorType: "schedule",
        state: "running",
      });

      await utils.sleep(100);

      await Import.create({
        recordId: "a",
        creatorType: "run",
        creatorId: run.id,
        recordAssociatedAt: new Date(),
        recordUpdatedAt: new Date(),
        groupsUpdatedAt: new Date(),
        exportedAt: new Date(),
        createdRecord: true,
      });

      await utils.sleep(100);

      await Import.create({
        recordId: "a",
        creatorType: "run",
        creatorId: run.id,
        recordAssociatedAt: new Date(),
        recordUpdatedAt: new Date(),
        groupsUpdatedAt: new Date(),
        exportedAt: new Date(),
      });

      await utils.sleep(100);

      await Import.create({
        recordId: "b",
        creatorType: "run",
        creatorId: run.id,
        recordAssociatedAt: new Date(),
        recordUpdatedAt: new Date(),
        groupsUpdatedAt: new Date(),
        exportedAt: new Date(),
      });

      await utils.sleep(100);

      await run.update({ state: "complete", completedAt: new Date() });
    });

    it("can update totals from imports", async () => {
      await run.updateTotals();
      expect(run.importsCreated).toBe(3);
      expect(run.recordsCreated).toBe(1);
      expect(run.recordsImported).toBe(2);
    });

    it("returns a quantizedTimeline of imports based on sate change time", async () => {
      const quantizedTimeline = await run.quantizedTimeline();
      expect(quantizedTimeline.length).toBe(25 + 4);
      let associateTotal = 0;
      let updateTotal = 0;
      let groupsTotal = 0;
      quantizedTimeline.map((q) => {
        expect(q.steps.associate).toBeLessThanOrEqual(1);
        expect(q.steps.recordsUpdated).toBeLessThanOrEqual(1);
        expect(q.steps.groupsUpdated).toBeLessThanOrEqual(1);
        expect(q.steps.exported).toBeLessThanOrEqual(1);

        associateTotal += q.steps.associate;
        updateTotal += q.steps.recordsUpdated;
        groupsTotal += q.steps.groupsUpdated;
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
            displayName: "test-error-app",
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
            displayName: "test-error-connection",
            description: "a test app",
            apps: ["test-error-app"],
            direction: "import",
            options: [{ key: "query", required: true }],
            methods: {
              propertyOptions: async () => [
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
              recordProperty: async ({ propertyOptions }) => {
                if (propertyOptions.column) {
                  throw new Error(propertyOptions.column.toString());
                } else {
                  return ["ok"];
                }
              },
            },
          },
        ],
      });
    });

    test("creating a run will throw and become complete if there is an error with a property", async () => {
      await GrouparooRecord.truncate();

      const app = await App.create({
        name: "bad app",
        type: "test-error-app",
        state: "ready",
      });

      const source = await Source.create({
        name: "bad source",
        type: "test-error-connection",
        appId: app.id,
        modelId: model.id,
      });
      await source.setOptions({ query: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      // the app throws whatever the query is a new error (see above)
      const property = await helper.factories.property(
        source,
        { key: "new_property" },
        { column: "something-broken" }
      );
      await property.update({ state: "ready" });

      // we need at least one record to test against
      const record = await helper.factories.record();
      await record.addOrUpdateProperties({ userId: [1000] });

      // importing the record should raise...
      await expect(record.import()).rejects.toThrow(/something-broken/);

      // ... which means that no run should be able to be created
      await expect(
        Run.create({
          creatorId: "test",
          creatorType: "test",
          state: "running",
        })
      ).rejects.toThrow(/something-broken/);
    });
  });
});
