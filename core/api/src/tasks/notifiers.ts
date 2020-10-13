import { Task, api } from "actionhero";

export class Notifier extends Task {
  constructor() {
    super();
    this.name = "notifier";
    this.description = "run all notifiers";
    this.frequency = 1000 * 60 * 60 * 6; // every 6 hours
    this.queue = "default";
  }

  async run() {
    for (const i in api.notifiers.notifiers) {
      const notifier = api.notifiers.notifiers[i];
      await notifier.run();
    }
  }
}
