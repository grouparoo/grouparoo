import { log } from "actionhero";
import { Destination } from "../../models/Destination";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { plugin } from "../../modules/plugin";
import { ExportProcessorOps } from "../../modules/ops/exportProcessor";

export class EnqueueExportProcessors extends RetryableTask {
  constructor() {
    super();
    this.name = "export:enqueueProcessors";
    this.description =
      "check for pending export processors and enqueue other tasks to process them";
    this.frequency = 1000 * 30; // every 30 seconds
    this.queue = "exports";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const delayMs =
      parseInt(
        (
          await plugin.readSetting(
            "core",
            "export-processors-retry-delay-seconds"
          )
        ).value
      ) * 1000;

    let totalEnqueued = 0;
    const destinations = await Destination.findAll();

    for (const i in destinations) {
      const enqueuedProcessorsCount =
        await ExportProcessorOps.enqueuePendingProcessorsForDestination(
          destinations[i],
          delayMs
        );
      totalEnqueued += enqueuedProcessorsCount;
      if (enqueuedProcessorsCount > 0) {
        log(
          `enqueued ${enqueuedProcessorsCount} export processors for ${destinations[i].name} (${destinations[i].id})`
        );
      }
    }

    return totalEnqueued;
  }
}
