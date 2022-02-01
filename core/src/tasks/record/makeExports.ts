import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { RecordOps } from "../../modules/ops/record";

export class GrouparooRecordsMakeExports extends CLSTask {
  name = "records:makeExports";
  description =
    "If all of a GrouparooRecord's Properties are ready, mark the record ready and start the export";
  frequency = 1000 * 10;
  queue = "records";
  inputs = {};

  async runWithinTransaction() {
    const limit: number = config.batchSize.imports;
    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    const records = await RecordOps.makeExports(limit);

    if (toExport) {
      for (const record of records) {
        await CLS.enqueueTask("record:export", { recordId: record.id });
      }
    }
  }
}
