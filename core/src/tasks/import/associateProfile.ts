import { log, env, Task } from "actionhero";
import { Import } from "../../models/Import";
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

  async run(params) {
    const { importId } = params;
    let _import: Import;

    try {
      await CLS.wrap(async () => {
        _import = await Import.findById(importId);
        if (_import.profileId) return;

        const { profile, isNew } = await _import.associateProfile();

        const oldProfileProperties = await profile.simplifiedProperties();
        const oldGroups = await profile.$get("groups");

        await _import.update({
          createdProfile: isNew,
          oldProfileProperties,
          oldGroupIds: oldGroups.map((g) => g.id),
        });

        await profile.markPending();
      });
    } catch (error) {
      if (env !== "test") log(`[ASSOCIATE PROFILE ERROR] ${error}`, "alert");
      await _import.setError(error, this.name);
    }
  }
}
