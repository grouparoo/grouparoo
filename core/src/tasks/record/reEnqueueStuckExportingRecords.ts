import { config } from "actionhero";
import { Op } from "sequelize";
import { GrouparooRecord } from "../..";
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
    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    const records = await GrouparooRecord.findAll({
      where: {
        readyToExport: true,
        updatedAt: { [Op.lt]: new Date(new Date().getTime() - delay) },
      },
      limit,
    });

    if (toExport) {
      for (const record of records) {
        await CLS.enqueueTask("record:export", { recordId: record.id });
      }
    }
  }
}
