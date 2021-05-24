import { log, env, Task } from "actionhero";
import { Import } from "../../models/Import";
import { APM } from "../../modules/apm";
import { CLS } from "../../modules/cls";

export class ImportAssociateProfile extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created profiles happening in parallel to this task/transaction
  // We still want things to be in a transaction, so we wrap the run method custom
  // This Task has no side effects
  constructor() {
    super();
    this.name = "import:associateProfile";
    this.description = "find or create the profile this import is about";
    this.frequency = 0;
    this.queue = "imports";
    this.plugins = ["QueueLock", "JobLock"];
    this.pluginOptions = { JobLock: { reEnqueue: false } };
    this.inputs = {
      importId: { required: true },
    };
  }

  async run(params, worker) {
    const { importId } = params;
    let _import: Import;

    return APM.wrap(this.name, "task", worker, async () => {
      try {
        await CLS.wrap(
          async () => {
            _import = await Import.findOne({ where: { id: importId } });
            if (!_import) return;
            if (_import.profileId) return;

            const { profile } = await _import.associateProfile();

            await profile.markPending();
          },
          { write: true }
        );
      } catch (error) {
        if (env !== "test") log(`[ASSOCIATE PROFILE ERROR] ${error}`, "alert");
        if (_import) await _import.setError(error, this.name);
      }
    });
  }
}
