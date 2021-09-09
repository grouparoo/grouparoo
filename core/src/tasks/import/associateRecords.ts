import { plugin } from "../../modules/plugin";
import { CLSTask } from "../../classes/tasks/clsTask";
import { ImportOps } from "../../modules/ops/import";
import { config } from "actionhero";

export class ImportAssociateRecords extends CLSTask {
  constructor() {
    super();
    this.name = "import:associateRecords";
    this.description = "ensure that imports are associated to records";
    this.frequency = 1000 * 10;
    this.queue = "imports";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit: number = config.batchSize.imports;
    const delayMs =
      parseInt(
        (await plugin.readSetting("core", "imports-retry-delay-seconds")).value
      ) * 1000;

    const imports = await ImportOps.processPendingImportsForAssociation(
      limit,
      delayMs
    );

    return imports.length;
  }
}
