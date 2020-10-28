import { RetryableTask } from "../../classes/retryableTask";
import { Destination } from "../../models/Destination";
import { log } from "actionhero";
import { ExportOps } from "../../modules/ops/export";

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

  async run() {
    const destinations = await Destination.findAll({
      where: { state: "ready" },
    });

    let totalEnqueued = 0;

    for (const i in destinations) {
      let enqueuedExportsCount = await ExportOps.processPendingExportsForDestination(
        destinations[i]
      );
      totalEnqueued += enqueuedExportsCount;

      while (enqueuedExportsCount > 0) {
        log(
          `enqueued ${enqueuedExportsCount} exports to send to ${destinations[i].name} (${destinations[i].guid})`
        );
        enqueuedExportsCount = await ExportOps.processPendingExportsForDestination(
          destinations[i]
        );
        totalEnqueued += enqueuedExportsCount;
      }
    }

    return totalEnqueued;
  }
}
