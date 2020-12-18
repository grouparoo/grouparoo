import { Task } from "actionhero";
import { Setting } from "../../models/Setting";
import { Run } from "../../models/Run";
import { internalRun } from "../../modules/internalRun";

export class RunRecurringInternalRun extends Task {
  constructor() {
    super();
    this.name = "run:recurringInternalRun";
    this.description =
      "check if we should run an internal import on a frequency";
    this.frequency = 1000 * 60 * 10; // 10 minutes
    this.queue = "runs";
  }

  async run() {
    const setting = await Setting.findOne({
      where: { key: "runs-recurring-internal-run-frequency" },
    });
    const frequency = parseInt(setting.value);
    if (frequency <= 0) {
      return;
    }

    const lastRun = await Run.findOne({
      where: { creatorType: "task" },
      order: [["createdAt", "desc"]],
    });

    let toRun = false;

    if (!lastRun) {
      toRun = true;
    }
    if (new Date().getTime() - lastRun?.createdAt?.getTime() >= frequency) {
      toRun = true;
    }
    if (lastRun?.state === "running") {
      toRun = false;
    }

    if (toRun) await internalRun("task", this.name);
  }
}
