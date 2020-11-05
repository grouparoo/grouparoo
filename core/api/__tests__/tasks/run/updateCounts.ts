import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { internalRun } from "../../../src/modules/internalRun";
import { Import } from "../../../src/models/Import";
import { Run } from "../../../src/models/Run";

let actionhero;
let profile;

describe("tasks/runs:updateCounts", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.profilePropertyRules();
  }, 1000 * 30);

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  describe("runs:updateCounts", () => {
    beforeEach(async () => {
      await Run.truncate();
    });

    test("it will find running schedule", async () => {
      const schedule = await helper.factories.schedule();
      await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });

      const runsChecked = await specHelper.runTask("runs:updateCounts", {});
      expect(runsChecked).toBe(1);
    });

    test("it will not find stopped", async () => {
      const schedule = await helper.factories.schedule();
      await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "stopped",
      });

      const runsChecked = await specHelper.runTask("runs:updateCounts", {});
      expect(runsChecked).toBe(0);
    });

    test("it will not find running schedules which are over 1 day old", async () => {
      const schedule = await helper.factories.schedule();
      const run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });

      await api.sequelize.query(
        `UPDATE runs set "updatedAt" = '1900-01-01' where guid='${run.guid}'`
      );

      const runsChecked = await specHelper.runTask("runs:updateCounts", {});
      expect(runsChecked).toBe(0);
    });

    test("it will find runs in the complete state that have un-imported profiles", async () => {
      const schedule = await helper.factories.schedule();
      const run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        profilesImported: 0,
      });

      const runsChecked = await specHelper.runTask("runs:updateCounts", {});
      expect(runsChecked).toBe(1);
    });

    test("it will not find runs in the complete state that have all their profiles imported", async () => {
      const schedule = await helper.factories.schedule();
      const run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "complete",
        importsCreated: 1,
        profilesImported: 1,
      });

      const runsChecked = await specHelper.runTask("runs:updateCounts", {});
      expect(runsChecked).toBe(0);
    });
  });
});
