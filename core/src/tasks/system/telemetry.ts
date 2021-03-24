import { api, config } from "actionhero";
import "isomorphic-fetch";
import { plugin } from "../../modules/plugin";
import path from "path";
import os from "os";
import { CLSTask } from "../../classes/tasks/clsTask";

export class Telemetry extends CLSTask {
  constructor() {
    super();
    this.name = "telemetry";
    this.description = "send telemetry information about this cluster";
    this.frequency = 1000 * 60 * 60 * 24; // every 24 hours
    this.queue = "system";
  }

  async runWithinTransaction() {
    if (!config.telemetry.enabled) return;

    try {
      const payload = await api.telemetry.build();

      const response = await fetch(config.telemetry.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      return response.status === 200;
    } catch (error) {
      try {
        // If there's something wrong with our ability to gather telemetry,
        // we should try to report that error to the Telemetry service...
        await fetch(config.telemetry.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(await this.generateErrorPayload(error)),
        });
      } catch (newError) {}

      throw error;
    }
  }

  async generateErrorPayload(error) {
    const clusterName = (await plugin.readSetting("core", "cluster-name"))
      .value;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
    const customerLicense = (
      await plugin.readSetting("telemetry", "customer-license")
    ).value;

    const errorPayload = {
      name: clusterName,
      id: customerId,
      license: customerLicense,
      metrics: [
        {
          collection: "telemetry",
          topic: "error",
          aggregation: "exact",
          key: `${process.platform}/${os.release()}`,
          value: this.sanitizeErrorPayload(error),
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
