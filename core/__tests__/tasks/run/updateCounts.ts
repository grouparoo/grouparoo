import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Run } from "../../..";

describe("tasks/runs:updateCounts", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

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
