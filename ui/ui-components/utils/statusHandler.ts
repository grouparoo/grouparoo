import { EventDispatcher } from "./eventDispatcher";
import { Actions } from "../utils/apiData";

export class StatusHandler extends EventDispatcher {
  maxSamples: 50;
  samples: any[];

  constructor() {
    super();
    this.maxSamples = 50;
    this.samples = [];
  }

  async beforePublish(data) {
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

  async getSamples(execApi) {
    const { metrics }: Actions.PrivateStatus = await execApi(
      "get",
      `/status/private`
    );
    if (!metrics) return;
    if (metrics.length === 0) return;
    const mostRecent = metrics.shift();
    this.samples.push(...metrics.reverse());
    this.publish(mostRecent);
  }
}
