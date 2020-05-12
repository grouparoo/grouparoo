import { task, log, env } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { Import } from "../../models/Import";
import { Run } from "../../models/Run";

export class ImportAssociateProfile extends RetryableTask {
  constructor() {
    super();
    this.name = "import:associateProfile";
    this.description = "find or create the profile this import is about";
    this.frequency = 0;
    this.queue = "imports";
    this.inputs = {
      importGuid: { required: true },
    };
  }

  async run(params) {
    const { importGuid } = params;
    const _import = await Import.findByGuid(importGuid);

    try {
      const { profile, isNew } = await _import.associateProfile();

      if (_import.creatorType === "run") {
        const run = await Run.findOne({ where: { guid: _import.creatorGuid } });
        if (!run) {
          throw new Error(`run ${_import.creatorGuid} not found`);
        }

        if (isNew) {
          await run.increment(["profilesCreated"]);
        }
      }

      await task.enqueue("profile:importAndUpdate", { guid: profile.guid });
    } catch (error) {
      if (env !== "test") {
        log(`[ASSOCIATE PROFILE ERROR] ${error}`, "alert");
      }
      await _import.setError(error, this.name);
      throw error;
    }
  }
}
