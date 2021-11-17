import { Schedule } from "../../models/Schedule";
import { CLSTask } from "../../classes/tasks/clsTask";

export class ScheduleEnqueueRuns extends CLSTask {
  constructor() {
    super();
    this.name = "schedules:enqueueRuns";
    this.description = "check all schedules and run them if it is time";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60; // Run every minute
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
      const shouldRun = await schedule.shouldRun({
        ignoreDeltas,
        runIfNotRecurring,
      });
      if (shouldRun) await schedule.enqueueRun();
    }
  }
}
