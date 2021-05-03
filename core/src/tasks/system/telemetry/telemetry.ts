import { RetryableTask } from "../../../classes/tasks/retryableTask";
import { Telemetry } from "../../../modules/telemetry";

export class TelemetryTask extends RetryableTask {
  constructor() {
    super();
    this.name = "telemetry";
    this.description =
      "send telemetry information about this cluster (recurring)";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 60 * 24; // every 24 hours
    this.queue = "system";
    this.inputs = {
      trigger: { required: false, default: "timer" },
    };
  }

  async runWithinTransaction({
    trigger,
  }: {
    trigger: Telemetry.TelemetryCallTrigger;
  }) {
    return Telemetry.send(trigger, [], true);
  }
}
