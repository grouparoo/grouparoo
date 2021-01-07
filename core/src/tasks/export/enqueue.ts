import { Destination } from "../../models/Destination";
import { log } from "actionhero";
import { ExportOps } from "../../modules/ops/export";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { plugin } from "../../modules/plugin";

export class EnqueueExports extends RetryableTask {
  constructor() {
    super();
    this.name = "export:enqueue";
    this.description =
      "check for pending exports and enqueue other tasks to send them";
    this.frequency = 1000 * 10;
    this.queue = "exports";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "exports-profile-batch-size")).value
    );

    const destinations = await Destination.scope(null).findAll();

    let totalEnqueued = 0;

    for (const i in destinations) {
      let enqueuedExportsCount = 1;

      while (enqueuedExportsCount > 0) {
        enqueuedExportsCount = await ExportOps.processPendingExportsForDestination(
          destinations[i],
          limit
        );
        totalEnqueued += enqueuedExportsCount;
        if (enqueuedExportsCount > 0) {
          log(
            `enqueued ${enqueuedExportsCount} exports to send to ${destinations[i].name} (${destinations[i].guid})`
          );
        }
      }
    }

    return totalEnqueued;
  }
}
