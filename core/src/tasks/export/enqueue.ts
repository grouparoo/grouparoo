import { log, config, ParamsFrom } from "actionhero";
import { Destination } from "../../models/Destination";
import { ExportOps } from "../../modules/ops/export";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { plugin } from "../../modules/plugin";
import { CLS } from "../../modules/cls";
import { APIData } from "../../modules/apiData";

export class EnqueueExports extends RetryableTask {
  name = "export:enqueue";
  description =
    "check for pending exports and enqueue other tasks to send them";
  frequency = 1000 * 10;
  queue = "exports";
  inputs = {
    count: { required: false, default: 0, formatter: APIData.ensureNumber },
  };

  async runWithinTransaction(params: ParamsFrom<EnqueueExports>) {
    const count = params.count || 0;
    const limit: number = config.batchSize.exports;

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
