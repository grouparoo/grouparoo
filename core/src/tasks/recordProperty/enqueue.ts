import { api, env, config, ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { Source } from "../../models/Source";
import { RecordPropertyOps } from "../../modules/ops/recordProperty";
import { Worker } from "node-resque";

export class RecordPropertiesEnqueue extends CLSTask {
  name = "recordProperties:enqueue";
  description =
    "Enqueue a batch of GrouparooRecords who need a GrouparooRecord Property";
  frequency = 1000 * 10;
  queue = "recordProperties";

  async runWithinTransaction(
    params: ParamsFrom<RecordPropertiesEnqueue>,
    worker: Worker
  ) {
    let count = 0;
    const limit: number = config.batchSize.recordProperties;

    const sources = await Source.findAll();

    for (const source of sources) {
      try {
        const pendingRecordPropertyIds =
          await RecordPropertyOps.processPendingRecordProperties(source, limit);

        count = count + pendingRecordPropertyIds.length;
      } catch (error) {
        if (env === "test") console.error(error);

        // this is a periodic task, and will be retried
        api.exceptionHandlers.task(error, this.queue, worker.job, worker.id);
      }
    }

    // re-enqueue if there is more to do
    if (count > 0) await CLS.enqueueTask(this.name, {});

    return count;
  }
}
