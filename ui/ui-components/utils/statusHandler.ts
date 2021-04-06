import { EventDispatcher } from "./eventDispatcher";

export class StatusHandler extends EventDispatcher {
  maxSamples: 50;
  samples: any[];

  constructor() {
    super();
    this.maxSamples = 50;
    this.samples = [];
  }

  async afterPublish(data) {
    this.samples.push(data);
    this.trim();
  }

  async afterSubscribe(name, handler) {
    const latestSample = this.samples[this.samples.length - 1];
    if (latestSample) await handler(latestSample);
  }

  private trim() {
    while (this.samples.length > this.maxSamples) this.samples.shift();
  }

  /**
   * Do a manual sample now vs waiting for the websocket to broadcast
   */
  async sample(execApi) {
    const { metrics, timestamp } = await execApi("get", `/status/private`);
    this.publish({ metrics, timestamp });
  }
}
