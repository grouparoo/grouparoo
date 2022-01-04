import { config } from "actionhero";
import { Run } from "../../models/Run";
import { GrouparooModel } from "../../models/GrouparooModel";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { RecordProperty } from "../../models/RecordProperty";
import { CLSTask } from "../../classes/tasks/clsTask";
import { GroupMember } from "../../models/GroupMember";
import { GroupOps } from "../../modules/ops/group";

export class RunModel extends CLSTask {
  constructor() {
    super();
    this.name = "grouparooModel:run";
    this.description =
      "build imports that will check and sync all records of this model";
    this.frequency = 0;
    this.queue = "runs";
    this.inputs = {
      runId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const run = await Run.scope(null).findOne({
      where: { id: params.runId },
    });

    if (!run) return;
    if (run.state === "stopped") return;

    const offset: number = run.memberOffset || 0;
    const limit: number = run.memberLimit || config.batchSize.imports;

    const model = await GrouparooModel.findOne({
      where: { id: run.creatorId },
    });
    if (!model) return;

    const records = await GrouparooRecord.findAll({
      where: { modelId: model.id },
      order: [["createdAt", "asc"]],
      include: [RecordProperty, GroupMember],
      limit,
      offset,
    });

    if (records.length > 0) {
      await GroupOps.updateRecords(
        records.map((r) => r.id),
        "run",
        run.id,
        run.destinationId
      );
    }

    await run.update({
      memberLimit: limit,
      memberOffset: offset + records.length,
    });

    const pendingImports = await run.$count("imports", {
      where: { state: "pending" },
    });

    // we don't want to denote the run as ready until all the imports are imported
    if (records.length === 0 && pendingImports === 0) {
      await run.afterBatch("complete");
    } else {
      await run.afterBatch();
    }

    return records.length;
  }
}
