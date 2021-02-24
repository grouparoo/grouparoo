import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { RetryableTask } from "../../classes/tasks/retryableTask";

export class ScheduleRun extends RetryableTask {
  constructor() {
    super();
    this.name = "schedule:run";
    this.description = "run a schedule and import and export data";
    this.frequency = 0;
    this.queue = "schedules";
    this.inputs = {
      runId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const run = await Run.findById(params.runId);

    const schedule = await Schedule.findOne({
      where: { id: run.creatorId },
    });
    if (!schedule) return;

    if (schedule.state !== "ready") {
      throw new Error(`schedule ${params.creatorId} is not ready`);
    }

    const { importsCount } = await schedule.run(run);

    if (importsCount === 0) {
      await run.afterBatch("complete");
    } else {
      await run.afterBatch();
    }

    return importsCount;
  }
}
