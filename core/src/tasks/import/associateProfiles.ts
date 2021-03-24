import { log } from "actionhero";
import { plugin } from "../../modules/plugin";
import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";

export class ImportAssociateProfiles extends CLSTask {
  constructor() {
    super();
    this.name = "import:associateProfiles";
    this.description = "ensure that imports are associated to profiles";
    this.frequency = 30 * 1000;
    this.queue = "imports";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const imports = await Import.findAll({
      where: { profileId: null, errorMessage: null },
      limit,
      order: [["createdAt", "asc"]],
    });

    const runIds: string[] = [];
    for (const i in imports) {
      const _import = imports[i];
      await CLS.enqueueTask("import:associateProfile", {
        importId: _import.id,
      });

      if (
        _import.creatorType === "run" &&
        !runIds.includes(_import.creatorId)
      ) {
        runIds.push(_import.creatorId);
      }
    }

    if (runIds.length > 0) {
      await Run.update(
        { state: "running", completedAt: null },
        { where: { state: "complete", id: { [Op.in]: runIds } } }
      );
    }

    if (imports.length > 0) {
      log(`enqueued ${imports.length} imports for association`);
    }
  }
}
