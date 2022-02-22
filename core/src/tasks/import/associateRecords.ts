import { plugin } from "../../modules/plugin";
import { ImportOps } from "../../modules/ops/import";
import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";

export class ImportAssociateRecords extends CLSTask {
  name = "import:associateRecords";
  description = "ensure that imports are associated to records";
  frequency = 1000 * 5;
  queue = "imports";
  inputs = {} as const;

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
