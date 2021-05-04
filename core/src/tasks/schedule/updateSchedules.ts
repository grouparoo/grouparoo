import { log } from "actionhero";
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
    this.inputs = {
      checkDeltas: { required: false, default: true },
    };
  }

  async runWithinTransaction(params) {
    const checkDeltas =
      params.checkDeltas === undefined ? true : params.checkDeltas;
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
        !checkDeltas ||
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
