import { plugin } from "../../modules/plugin";
import { ImportOps } from "../../modules/ops/import";
import { config, ParamsFrom, Task } from "actionhero";
import { CLS } from "../../modules/cls";
import { APM } from "../../modules/apm";
import { Worker } from "node-resque";

export class ImportAssociateRecords extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created records happening in parallel to this task/transaction
  // We still want things to be in a transaction, so we wrap the run method custom

  name = "import:associateRecords";
  description = "ensure that imports are associated to records";
  frequency = 1000 * 10;
  queue = "imports";
  inputs = {} as const;

  async run(params: ParamsFrom<ImportAssociateRecords>, worker: Worker) {
    return APM.wrap(this.name, "task", worker, async () => {
      await CLS.wrap(
        async () => {
          const limit: number = config.batchSize.imports;
          const delayMs =
            parseInt(
              (await plugin.readSetting("core", "imports-retry-delay-seconds"))
                .value
            ) * 1000;

          const imports = await ImportOps.processPendingImportsForAssociation(
            limit,
            delayMs
          );

          // more to do!
          if (imports.length > 0) await CLS.enqueueTask(this.name, {});

          return imports.length;
        },
        { write: true }
      );
    });
  }
}
