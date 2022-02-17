import { ParamsFrom } from "actionhero";
import { RetryableTask } from "../../../classes/tasks/retryableTask";
import { APIData } from "../../../modules/apiData";
import { Telemetry } from "../../../modules/telemetry";

export class TelemetryAdHocTask extends RetryableTask {
  name = "telemetry:adHoc";
  description = "send telemetry information about this cluster (ad hoc)";
  frequency = 0;
  queue = "system";
  inputs = {
    trigger: {
      required: true,
      formatter: (p: unknown) =>
        APIData.ensureString<Telemetry.TelemetryCallTrigger>(p),
    },
  } as const;

  async runWithinTransaction({ trigger }: ParamsFrom<TelemetryAdHocTask>) {
    return Telemetry.send(trigger, [], true);
  }
}
