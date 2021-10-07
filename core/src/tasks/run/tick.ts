import { Run } from "../../models/Run";
import { CLSTask } from "../../classes/tasks/clsTask";
import { config } from "actionhero";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";
import { RunOps } from "../../modules/ops/runs";

export class RunsTick extends CLSTask {
  constructor() {
    super();
    this.name = "run:tick";
    this.description = "process pending runs and enqueue the next batch";
    this.frequency = config.tasks.timeout + 1;
    this.queue = "runs";
  }

  async runWithinTransaction() {
    const lastCheck = new Date().getTime() - Math.max(this.frequency, 1000);
    const runs = await Run.findAll({
      where: { state: "running", updatedAt: { [Op.lt]: lastCheck } },
    });
    let runsEnqueued = 0;

    for (const run of runs) {
      const args = { runId: run.id };
      let taskName = "";

      if (run.method === "internalRun") {
        taskName = "run:internalRun";
      } else if (run.creatorType === "group") {
        taskName = "group:run";
      } else if (run.creatorType === "schedule") {
        taskName = "schedule:run";
      } else if (run.creatorType === "grouparooModel") {
        taskName = "grouparooModel:run";
      } else {
        throw new Error(`cannot tick run ${run.id}`);
      }

      const enqueued = await RunOps.isRunEnqueued(taskName, run.id);
      if (!enqueued) {
        CLS.enqueueTask(taskName, args);
        runsEnqueued++;
      }
    }

    return runsEnqueued;
  }
}
