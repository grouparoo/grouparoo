import { Task, api, config } from "actionhero";
import fetch from "isomorphic-fetch";

export class Sweeper extends Task {
  constructor() {
    super();
    this.name = "telemetry";
    this.description = "send telemetry information about this cluster";
    this.frequency = 1000 * 60 * 60 * 24; // every 24 hours
    this.queue = "default";
  }

  async run() {
    if (!config.telemetry.enabled) return;

    const payload = await api.telemetry.build();

    const response = await fetch(config.telemetry.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return response.status === 200;
  }
}
