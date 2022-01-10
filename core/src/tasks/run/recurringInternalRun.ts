import { Setting } from "../../models/Setting";
import { Run } from "../../models/Run";
import { internalRun } from "../../modules/internalRun";
import { CLSTask } from "../../classes/tasks/clsTask";

export class RunRecurringInternalRun extends CLSTask {
  name = "run:recurringInternalRun";
  description = "check if we should run an internal import on a frequency";
  frequency = process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 10; // 10 minutes
  queue = "runs";

  async runWithinTransaction() {
    const setting = await Setting.findOne({
      where: { key: "runs-recurring-internal-run-frequency-hours" },
    });
    const frequencyInMs = parseInt(setting.value) * 60 * 60 * 1000;
    if (frequencyInMs <= 0) return;

    const lastRun = await Run.findOne({
      where: { creatorType: "task" },
      order: [["createdAt", "desc"]],
    });

    let toRun = false;

    if (!lastRun) {
      toRun = true;
    }
    if (new Date().getTime() - lastRun?.createdAt?.getTime() >= frequencyInMs) {
      toRun = true;
    }
    if (lastRun?.state === "running") {
      toRun = false;
    }

    if (toRun) await internalRun("task", this.name);
  }
}
