import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { RecordOps } from "../../modules/ops/record";

export class GrouparooRecordsCheckReady extends CLSTask {
  name = "records:checkReady";
  description =
    "If all of a GrouparooRecord's Properties are ready, mark the record ready and complete the import";
  frequency = 1000 * 10;
  queue = "records";
  inputs = {};

  async runWithinTransaction() {
    const limit: number = config.batchSize.imports;
    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    await RecordOps.makeReadyAndCompleteImports(limit, toExport);
  }
}
