import { Task, task, log, config } from "actionhero";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";

export class ScheduleRun extends Task {
  constructor() {
    super();
    this.name = "schedule:run";
    this.description = "run a schedule and import and export data";
    this.frequency = 0;
    this.queue = "schedules";
    this.inputs = {
      scheduleGuid: { required: true },
      runGuid: { required: true },
    };
  }

  async run(params) {
    const schedule = await Schedule.findByGuid(params.scheduleGuid);
    if (schedule.state !== "ready") {
      throw new Error(`schedule ${params.scheduleGuid} is not ready`);
    }

    const run = await Run.findByGuid(params.runGuid);

    // we still have exports from the previous batch that need to be processed
    if (run.exportsCreated > 0 && run.exportsCreated > run.profilesExported) {
      await run.afterBatch();
      return task.enqueueIn(config.tasks.timeout + 1, this.name, params);
    }

    const { importsCount } = await schedule.run(run);

    await run.determinePercentComplete();

    if (importsCount > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, this.name, params);
    } else {
      await task.enqueueIn(config.tasks.timeout + 1, "run:determineState", {
        runGuid: run.guid,
      });
    }
  }
}
