import { Run } from "../../models/Run";
import { CLSTask } from "../../classes/tasks/clsTask";
import { config, log } from "actionhero";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";
import { RunOps } from "../../modules/ops/runs";
import { Status } from "../../modules/status";

export class RunsTick extends CLSTask {
  constructor() {
    super();
    this.name = "run:tick";
    this.description = "process pending runs and enqueue the next batch";
    this.frequency = config.tasks.timeout + 1;
    this.queue = "runs";
  }

  async shouldWaitForPending(topic: string, limit: number) {
    const metrics = await Status.getCurrent();
    if (!metrics[topic]) return false;

    const value = metrics[topic]?.pending[0]?.metric?.value;

    if (value) {
      if (parseInt(value) > limit) {
        log(
          `pausing runs as there are too many pending ${topic.toLowerCase()}s (${value})`,
          "warning"
        );
        return true;
      }
    }

    return false;
  }

  async runWithinTransaction() {
    const circuitBreakerLimit = config.batchSize.profileProperties * 10;
    for (const topic of ["Import", "Export", "GrouparooRecord"]) {
      if (await this.shouldWaitForPending(topic, circuitBreakerLimit)) return 0;
    }

    const lastCheck = new Date().getTime() - Math.max(this.frequency, 1000);
    const runs = await Run.findAll({
      where: { state: "running", updatedAt: { [Op.lt]: lastCheck } },
    });
    let runsEnqueued = 0;

    for (const i in runs) {
      const run = runs[i];

      const args = { runId: run.id };
      let taskName = "";

      if (run.groupMethod === "internalRun") {
        taskName = "run:internalRun";
      } else if (run.creatorType === "group") {
        taskName = "group:run";
      } else if (run.creatorType === "schedule") {
        taskName = "schedule:run";
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
