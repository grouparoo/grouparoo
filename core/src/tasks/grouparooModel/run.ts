import { config } from "actionhero";
import { Run } from "../../models/Run";
import { GrouparooModel } from "../../models/GrouparooModel";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { RecordProperty } from "../../models/RecordProperty";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Op } from "sequelize";
import { Import } from "../../models/Import";
import { GroupMember } from "../../models/GroupMember";

export class RunInternalRun extends CLSTask {
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

    const model = await GrouparooModel.scope(null).findOne({
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
      if (model.state === "ready") {
        await RecordProperty.update(
          { state: "pending" },
          { where: { recordId: { [Op.in]: records.map((p) => p.id) } } }
        );
      }

      await GrouparooRecord.update(
        { state: "pending" },
        { where: { id: { [Op.in]: records.map((p) => p.id) } } }
      );

      // create imports to track the lineage of the record property values
      const now = new Date();
      const bulkImports = [];

      for (const record of records) {
        const oldRecordProperties = await record.simplifiedProperties();
        const oldGroupIds = record.groupMembers.map((gm) => gm.groupId);
        const data = run.destinationId
          ? { _meta: { destinationId: run.destinationId } }
          : {};

        bulkImports.push({
          rawData: data,
          data: data,
          recordId: record.id,
          recordAssociatedAt: now,
          oldRecordProperties,
          oldGroupIds,
          creatorType: "run",
          creatorId: run.id,
        });
      }

      await Import.bulkCreate(bulkImports);
    }

    await run.update({
      memberLimit: limit,
      memberOffset: offset + records.length,
    });

    const pendingImports = await run.$count("imports", {
      where: { groupsUpdatedAt: null },
    });

    // we don't want to denote the group as ready until all the imports are imported
    if (records.length === 0 && pendingImports === 0) {
      await run.afterBatch("complete");
    } else {
      await run.afterBatch();
    }

    return records.length;
  }
}
