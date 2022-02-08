import { config } from "actionhero";
import Sequelize, { Op } from "sequelize";
import { Import } from "../../models/Import";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";

const delay = 60 * 60 * 1000; // 1 hour

export class GrouparooRecordsReEnqueueStuckExportingRecords extends CLSTask {
  name = "records:reEnqueueStuckExportingRecords";
  description =
    "If a record has been stuck in the exporting state for a long time, try again";
  frequency = 1000 * 60;
  queue = "records";

  async runWithinTransaction() {
    const limit: number = config.batchSize.exports;
    let offset = 0;
    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    let imports = await getStuckImports(limit, offset);
    while (imports.length > 0) {
      if (toExport) {
        for (const _import of imports) {
          await CLS.enqueueTask("record:export", {
            recordId: _import.recordId,
          });
        }
      }

      offset = offset + limit;
      imports = await getStuckImports(limit, offset);
    }
  }
}

async function getStuckImports(limit: number, offset: number) {
  return Import.findAll({
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("recordId")), "recordId"],
    ],
    where: {
      state: "processing",
      importedAt: { [Op.lt]: new Date(new Date().getTime() - delay) },
    },
    limit,
    offset,
  });
}
