import { Destination } from "../../models/Destination";
import { log } from "actionhero";
import { ExportOps } from "../../modules/ops/export";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { plugin } from "../../modules/plugin";
import { CLS } from "../../modules/cls";

export class EnqueueExports extends RetryableTask {
  constructor() {
    super();
    this.name = "export:enqueue";
    this.description =
      "check for pending exports and enqueue other tasks to send them";
    this.frequency = 1000 * 10;
    this.queue = "exports";
    this.inputs = {
      count: { required: false, default: 0 },
    };
  }

  async runWithinTransaction(params) {
    const count = params.count || 0;
    const limit = parseInt(
      (await plugin.readSetting("core", "exports-profile-batch-size")).value
    );

    const delayMs =
      parseInt(
        (await plugin.readSetting("core", "exports-retry-delay-seconds")).value
      ) * 1000;

    let totalEnqueued = 0;
    const destinations = await Destination.scope(null).findAll();

    for (const i in destinations) {
      const enqueuedExportsCount =
        await ExportOps.processPendingExportsForDestination(
          destinations[i],
          limit,
          delayMs
        );
      totalEnqueued += enqueuedExportsCount;
      if (enqueuedExportsCount > 0) {
        log(
          `enqueued ${enqueuedExportsCount} exports to send to ${destinations[i].name} (${destinations[i].id})`
        );
      }
    }

    if (totalEnqueued > 0) {
      await CLS.enqueueTask(this.name, { count: count + 1 });
    }

    return totalEnqueued;
  }
}
