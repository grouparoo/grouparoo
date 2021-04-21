import { api, config } from "actionhero";
import "isomorphic-fetch";
import { plugin } from "../../modules/plugin";
import path from "path";
import os from "os";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Telemetry } from "../../modules/telemetry";

const telemetryPath = "/api/v1/telemetry";

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
    if (!config.telemetry.enabled) return;

    const trigger: Telemetry.TelemetryCallTrigger = params.trigger;
    const fullUrl = `${config.telemetry.host}${telemetryPath}`;

    try {
      const payload = await Telemetry.build(trigger);

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      return response.status === 200;
    } catch (error) {
      try {
        // If there's something wrong with our ability to gather telemetry,
        // we should try to report that error to the Telemetry service...
        await fetch(fullUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(await this.generateErrorPayload(error, trigger)),
        });
      } catch (newError) {}

      throw error;
    }
  }

  async generateErrorPayload(
    error: Error,
    trigger: Telemetry.TelemetryCallTrigger
  ) {
    const clusterName = (await plugin.readSetting("core", "cluster-name"))
      .value;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
    const customerLicense = (
      await plugin.readSetting("telemetry", "customer-license")
    ).value;

    const sanitizedError = this.sanitizeErrorPayload(error);

    const errorPayload = {
      name: clusterName,
      id: customerId,
      trigger,
      license: customerLicense,
      metrics: [
        {
          collection: "telemetry",
          topic: "error",
          aggregation: "exact",
          key: `${process.platform}/${os.release()}`,
          value: sanitizedError,
          errors: [sanitizedError],
        },
      ],
    };

    return errorPayload;
  }

  private sanitizeErrorPayload(error: Error): string {
    if (!error.stack) return error.toString();

    return error.stack
      .split(os.EOL)
      .map((line: string) => {
        // It's likely the part of the path with 'grouparoo' in it would be safely down in the path structure to not include app-information
        // There may be many instances of the word "grouparoo" in the file system, so we'll only take the last part of the path
        const chunks = line.split("grouparoo" + path.sep);
        return chunks[chunks.length - 1];
      })
      .join(os.EOL);
  }
}
