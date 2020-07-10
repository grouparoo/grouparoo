import { Task, api, config } from "actionhero";
import fetch from "isomorphic-fetch";
import { plugin } from "../modules/plugin";
import os from "os";

export class Telemetry extends Task {
  constructor() {
    super();
    this.name = "telemetry";
    this.description = "send telemetry information about this cluster";
    this.frequency = 1000 * 60 * 60 * 24; // every 24 hours
    this.queue = "default";
  }

  async run() {
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
      // if there's something wrong with our ability to gather telemetry, we should try to report that error to the Telemetry service...
      try {
        const clusterName = (await plugin.readSetting("core", "cluster-name"))
          .value;
        const customerGuid = (
          await plugin.readSetting("telemetry", "customer-guid")
        ).value;
        const customerLicense = (
          await plugin.readSetting("telemetry", "customer-license")
        ).value;

        const errorPayload = {
          name: clusterName,
          guid: customerGuid,
          license: customerLicense,
          metrics: [
            {
              collection: "telemetry",
              topic: "error",
              aggregation: "exact",
              key: `${process.platform}/${os.release()}`,
              value: error.stack || error.toString(),
            },
          ],
        };

        await fetch(config.telemetry.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(errorPayload),
        });
      } catch (newError) {}

      throw error;
    }
  }
}
