import { log, env, config, task, Task, ParamsFrom } from "actionhero";
import { Worker } from "node-resque";
import { Import } from "../../models/Import";
import { APIData } from "../../modules/apiData";
import { APM } from "../../modules/apm";
import { CLS } from "../../modules/cls";

const maxAttempts = 3;

export class ImportAssociateRecord extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created records happening in parallel to this task/transaction
  // We still want things to be in a transaction, so we wrap the run method custom
  // This Task has no side effects

  name = "import:associateRecord";
  description = "find or create the record this import is about";
  frequency = 0;
  queue = "imports";
  plugins = ["QueueLock", "JobLock"];
  pluginOptions = { JobLock: { reEnqueue: false } };
  inputs = {
    importId: { required: true },
    attempts: { required: true, default: 0, formatter: APIData.ensureNumber },
  };

  async run(
    { importId, attempts }: ParamsFrom<ImportAssociateRecord>,
    worker: Worker
  ) {
    let _import: Import;

    return APM.wrap(this.name, "task", worker, async () => {
      try {
        await CLS.wrap(
          async () => {
            _import = await Import.findOne({ where: { id: importId } });
            if (!_import) return;
            if (_import.recordId) return;

            const { record } = await _import.associateRecord();
            await record.addOrUpdateProperties(_import.data, undefined, true);
            await record.markPending();
          },
          { write: true }
        );
      } catch (error) {
        const nextAttempt = attempts + 1;
        if (nextAttempt >= maxAttempts) {
          if (env !== "test") {
            log(`[ASSOCIATE RECORD ERROR] ${error}`, "alert");
          }
          if (_import) await _import.setError(error, this.name);
        } else {
          try {
            await task.enqueueIn(config.tasks.timeout + 1, this.name, {
              importId,
              attempts: nextAttempt,
            });
          } catch (error) {
            if (
              error?.message.match(
                "already enqueued at this time with same arguments"
              )
            ) {
              // it's ok
            } else throw error;
          }
        }
      }
    });
  }
}
