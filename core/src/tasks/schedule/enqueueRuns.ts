import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { CLSTask } from "../../classes/tasks/clsTask";

export class ScheduleEnqueueRuns extends CLSTask {
  constructor() {
    super();
    this.name = "schedules:enqueueRuns";
    this.description = "check all schedules and run them if it is time";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 5; // Run every 5 minutes
    this.queue = "schedules";
    this.inputs = {
      ignoreDeltas: { required: false, default: false },
      runIfNotRecurring: { required: false, default: false },
    };
  }

  async runWithinTransaction(params) {
    const ignoreDeltas: boolean =
      params.ignoreDeltas === undefined ? false : params.ignoreDeltas;
    const runIfNotRecurring: boolean =
      params.runIfNotRecurring === undefined ? false : params.runIfNotRecurring;

    const schedules = await Schedule.scope(null).findAll({
      where: { state: "ready" },
    });

    for (const schedule of schedules) {
      if (
        !schedule.recurring ||
        !schedule.recurringFrequency ||
        schedule.recurringFrequency < 1
      ) {
        if (!runIfNotRecurring) continue;
      }

      const runningRuns = await Run.count({
        where: {
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "running",
        },
      });

      if (runningRuns > 0) continue;

      const lastCompleteRun = await Run.scope(null).findOne({
        where: {
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "complete",
        },
        order: [["completedAt", "desc"]],
      });

      let delta = 0;
      if (lastCompleteRun) {
        delta = new Date().getTime() - lastCompleteRun.completedAt.getTime();
      }

      if (
        !lastCompleteRun ||
        ignoreDeltas ||
        delta > schedule.recurringFrequency
      ) {
        const run = await Run.create({
          creatorId: schedule.id,
          creatorType: "schedule",
          state: "running",
        });
      }
    }
  }
}
