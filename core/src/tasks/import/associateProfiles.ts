import { plugin } from "../../modules/plugin";
import { CLSTask } from "../../classes/tasks/clsTask";
import { ImportOps } from "../../modules/ops/import";

export class ImportAssociateProfiles extends CLSTask {
  constructor() {
    super();
    this.name = "import:associateProfiles";
    this.description = "ensure that imports are associated to profiles";
    this.frequency = 1000 * 10;
    this.queue = "imports";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const delayMs =
      parseInt(
        (await plugin.readSetting("core", "imports-retry-delay-seconds")).value
      ) * 1000;

    const imports = await ImportOps.processPendingImportsForAssociation(
      limit,
      delayMs
    );
  }
}
