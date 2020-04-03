import { Task, task, log, config } from "actionhero";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";

export class RunSchedule extends Task {
  constructor() {
    super();
    this.name = "schedule:run";
    this.description = "run a schedule and import and export data";
    this.frequency = 0;
    this.queue = "schedules";
    this.inputs = {
      scheduleGuid: { required: true },
      runGuid: { required: false },
      limit: { required: false },
      highWaterMark: { required: false },
    };
  }

  async run(params) {
    const highWaterMark: string | number = params.highWaterMark || null;
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const schedule = await Schedule.findOne({
      where: { guid: params.scheduleGuid },
    });
    if (!schedule) {
      throw new Error(`cannot find schedule ${params.scheduleGuid}`);
    }
    if (schedule.state !== "ready") {
      throw new Error(`schedule ${params.scheduleGuid} is not ready`);
    }

    let run: Run;
    if (params.runGuid) {
      run = await Run.findOne({ where: { guid: params.runGuid } });
      if (!run) {
        throw new Error(`cannot find run ${params.runGuid}`);
      }
    } else {
      run = await Run.create({
        creatorGuid: schedule.guid,
        creatorType: "schedule",
        state: "running",
      });

      log(
        `starting run ${run.guid} for schedule ${schedule.guid}, ${schedule.name}`
      );
    }

    const { importsCount, nextHighWaterMark } = await schedule.run(
      run,
      limit,
      highWaterMark
    );

    if (importsCount > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, "schedule:run", {
        runGuid: run.guid,
        scheduleGuid: schedule.guid,
        highWaterMark: nextHighWaterMark,
        limit,
      });
    } else {
      await task.enqueueIn(config.tasks.timeout + 1, "run:determineState", {
        runGuid: run.guid,
      });
    }
  }
}
