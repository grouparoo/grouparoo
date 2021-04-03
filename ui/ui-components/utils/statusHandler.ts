import { EventDispatcher } from "./eventDispatcher";

export class StatusHandler extends EventDispatcher {}

export class StatusStore {
  limit: number;
  samples: any[];

  constructor(statsHandler: EventDispatcher) {
    this.limit = 100;
    this.samples = [];

    statsHandler.subscribe("statsStore", (data) => {
      this.samples.push(data);
      if (this.samples.length > this.limit) this.samples.shift();
    });
  }

  getSamples() {
    return this.samples;
  }

  latestSample() {
    this.samples[0];
  }
}
