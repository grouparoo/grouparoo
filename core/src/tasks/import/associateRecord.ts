import { log, env, config, task, Task } from "actionhero";
import { Import } from "../../models/Import";
import { APM } from "../../modules/apm";
import { CLS } from "../../modules/cls";

const maxAttempts = 3;

export class ImportAssociateRecord extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created records happening in parallel to this task/transaction
  // We still want things to be in a transaction, so we wrap the run method custom
  // This Task has no side effects
  constructor() {
    super();
    this.name = "import:associateRecord";
    this.description = "find or create the record this import is about";
    this.frequency = 0;
    this.queue = "imports";
    this.plugins = ["QueueLock", "JobLock"];
    this.pluginOptions = { JobLock: { reEnqueue: false } };
    this.inputs = {
      importId: { required: true },
      attempts: { required: true, default: 0 },
    };
  }

  async run(params, worker) {
    const { importId, attempts }: { importId: string; attempts: number } =
      params;
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
            log(`[ASSOCIATE PROFILE ERROR] ${error}`, "alert");
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
