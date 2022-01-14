import { ParamsFrom } from "actionhero";
import { RetryableTask } from "../../../classes/tasks/retryableTask";
import { APIData } from "../../../modules/apiData";
import { getGrouparooRunMode } from "../../../modules/runMode";
import { Telemetry } from "../../../modules/telemetry";

export class TelemetryTask extends RetryableTask {
  name = "telemetry";
  description = "send telemetry information about this cluster (recurring)";
  frequency = getGrouparooRunMode() === "cli:run" ? 0 : 1000 * 60 * 60 * 24; // every 24 hours
  queue = "system";
  inputs = {
    trigger: {
      required: true,
      default: "timer",
      formatter: (p: unknown) =>
        APIData.ensureString<Telemetry.TelemetryCallTrigger>(p),
    },
  };

  async runWithinTransaction({ trigger }: ParamsFrom<TelemetryTask>) {
    return Telemetry.send(trigger, [], true);
  }
}
