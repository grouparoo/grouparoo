import { api } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";

export class Notifier extends CLSTask {
  name = "notifier";
  description = "run all notifiers";
  frequency = 1000 * 60 * 60 * 6; // every 6 hours
  queue = "system";

  async runWithinTransaction() {
    for (const i in api.notifiers.notifiers) {
      const notifier = api.notifiers.notifiers[i];
      await notifier.run();
    }
  }
}
