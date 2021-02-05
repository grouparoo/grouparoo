import { config } from "actionhero";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { CLS } from "../../modules/cls";

export class ScheduleRun extends RetryableTask {
  constructor() {
    super();
    this.name = "schedule:run";
    this.description = "run a schedule and import and export data";
    this.frequency = 0;
    this.queue = "schedules";
    this.inputs = {
      scheduleId: { required: true },
      runId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const schedule = await Schedule.findOne({
      where: { id: params.scheduleId },
    });
    if (!schedule) return;

    if (schedule.state !== "ready") {
      throw new Error(`schedule ${params.scheduleId} is not ready`);
    }

    const run = await Run.findById(params.runId);

    const { importsCount } = await schedule.run(run);

    await run.afterBatch();

    if (importsCount > 0) {
      await CLS.enqueueTaskIn(config.tasks.timeout + 1, this.name, params);
    } else {
      await run.afterBatch("complete");
    }
  }
}
