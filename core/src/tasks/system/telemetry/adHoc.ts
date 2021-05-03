import { RetryableTask } from "../../../classes/tasks/retryableTask";
import { Telemetry } from "../../../modules/telemetry";

export class TelemetryAdHocTask extends RetryableTask {
  constructor() {
    super();
    this.name = "telemetry:adHoc";
    this.description = "send telemetry information about this cluster (ad hoc)";
    this.frequency = 0;
    this.queue = "system";
    this.inputs = {
      trigger: { required: true },
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
