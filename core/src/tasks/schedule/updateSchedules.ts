import { task, log } from "actionhero";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { CLSTask } from "../../classes/tasks/clsTask";

export class UpdateSchedules extends CLSTask {
  constructor() {
    super();
    this.name = "schedule:updateSchedules";
    this.description = "check all schedules and run them if it is time";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 5; // Run every 5 minutes
    this.queue = "schedules";
  }

  async runWithinTransaction() {
    const schedules = await Schedule.findAll({
      where: { recurring: true, state: "ready" },
    });

    for (const i in schedules) {
      const schedule = schedules[i];

      if (!schedule.recurringFrequency || schedule.recurringFrequency < 1) {
        continue;
      }

      const runningRuns = await Run.count({
        where: {
          creatorGuid: schedule.guid,
          creatorType: "schedule",
          state: "running",
        },
      });

      if (runningRuns > 0) {
        continue;
      }

      const lastCompleteRun = await Run.scope(null).findOne({
        where: {
          creatorGuid: schedule.guid,
          creatorType: "schedule",
          state: "complete",
        },
        order: [["updatedAt", "desc"]],
      });

      let delta = 0;
      if (lastCompleteRun) {
        delta = new Date().getTime() - lastCompleteRun.updatedAt.getTime();
      }

      if (!lastCompleteRun || delta > schedule.recurringFrequency) {
        const run = await Run.create({
          creatorGuid: schedule.guid,
          creatorType: "schedule",
          state: "running",
        });

        await task.enqueue("schedule:run", {
          scheduleGuid: schedule.guid,
          runGuid: run.guid,
        });

        log(
          `[ run ] starting run ${run.guid} for schedule ${schedule.name} (${schedule.guid})`,
          "notice"
        );
      }
    }
  }
}
