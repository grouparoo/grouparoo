import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { ParamsFrom } from "actionhero";

export class ScheduleRun extends RetryableTask {
  name = "schedule:run";
  description = "run a schedule and import and export data";
  frequency = 0;
  queue = "schedules";
  inputs = {
    runId: { required: true },
  } as const;

  async runWithinTransaction({ runId }: ParamsFrom<ScheduleRun>) {
    const run = await Run.scope(null).findOne({ where: { id: runId } });
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
