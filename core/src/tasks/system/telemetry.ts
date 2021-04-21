import { CLSTask } from "../../classes/tasks/clsTask";
import { Telemetry } from "../../modules/telemetry";

export class TelemetryTask extends CLSTask {
  constructor() {
    super();
    this.name = "telemetry";
    this.description = "send telemetry information about this cluster";
    this.frequency = 1000 * 60 * 60 * 24; // every 24 hours
    this.queue = "system";
    this.inputs = {
      trigger: { required: false, default: "timer" },
    };
  }

  async runWithinTransaction(params) {
    return Telemetry.send(params.trigger);
  }
}
