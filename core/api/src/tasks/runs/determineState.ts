import { Task, task, log, config } from "actionhero";
import { Run } from "../../models/Run";

export class RunDetermineState extends Task {
  constructor() {
    super();
    this.name = "run:determineState";
    this.description = "check if this run is complete";
    this.frequency = 0;
    this.queue = "runs";
    this.inputs = {
      runGuid: { required: true },
      attempts: { required: true, default: 0 },
    };
  }

  async run(params) {
    const runGuid = params.runGuid;
    const attempts = params.attempts || 0;

    const run = await Run.findByGuid(runGuid);

    await run.determineState();
    await run.determinePercentComplete();
    await run.reload();

    if (run.state === "running") {
      await task.enqueueIn(config.tasks.timeout * 2, "run:determineState", {
        runGuid,
        attempts: attempts + 1,
      });
    } else {
      const delta = run.completedAt.getTime() - run.createdAt.getTime();

      log(
        `[ run ] completed run ${run.guid} for ${run.creatorType} ${run.creatorGuid}`,
        "notice",
        { attempts, delta }
      );
    }
  }
}
