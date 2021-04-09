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
    const run = await Run.scope(null).findOne({ where: { id: params.runId } });
    if (!run) return;

    const schedule = await Schedule.findOne({
      where: { id: run.creatorId },
    });
    if (!schedule) return;

    if (schedule.state !== "ready") {
      throw new Error(`schedule ${run.creatorId} is not ready`);
    }

    const response = await schedule.run(run);

    await run.update({
      highWaterMark: response.highWaterMark,
      sourceOffset: response.sourceOffset,
    });

    if (response.importsCount === 0) {
      await run.afterBatch("complete");
    } else {
      await run.afterBatch();
    }

    return response.importsCount;
  }
}
