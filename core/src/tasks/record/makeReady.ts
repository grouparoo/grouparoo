import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { RecordOps } from "../../modules/ops/record";

export class GrouparooRecordsMakeReady extends CLSTask {
  name = "records:makeReady";
  description =
    "If all of a GrouparooRecord's Properties are ready, mark the record ready and start the export";
  frequency = 1000 * 10;
  queue = "records";
  inputs = {} as const;

  async runWithinTransaction() {
    const limit: number = config.batchSize.imports;
    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    const partialRecords = await RecordOps.makeReady(limit);

    await RecordOps.makeExports(
      partialRecords.map((r) => r.id),
      toExport
    );

    return partialRecords.length;
  }
}
