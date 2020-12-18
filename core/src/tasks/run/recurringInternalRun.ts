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
      where: { key: "runs-recurring-internal-run-frequency-hours" },
    });
    const frequencyInMs = parseInt(setting.value) * 60 * 60 * 1000;
    if (frequencyInMs <= 0) {
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
    if (new Date().getTime() - lastRun?.createdAt?.getTime() >= frequencyInMs) {
      toRun = true;
    }
    if (lastRun?.state === "running") {
      toRun = false;
    }

    if (toRun) await internalRun("task", this.name);
  }
}
