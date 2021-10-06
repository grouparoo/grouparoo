import { config } from "actionhero";
import { Run } from "../../models/Run";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { RecordProperty } from "../../models/RecordProperty";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Op } from "sequelize";
import { RecordOps } from "../../modules/ops/record";
import { Import } from "../../models/Import";
import { GroupMember } from "../../models/GroupMember";

export class RunInternalRun extends CLSTask {
  constructor() {
    super();
    this.name = "run:internalRun";
    this.description = "build imports that will check and sync all records";
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

    const offset: number = run.groupMemberOffset || 0;
    const limit: number = run.groupMemberLimit || config.batchSize.imports;

    const records = await GrouparooRecord.findAll({
      order: [["createdAt", "asc"]],
      include: [RecordProperty, GroupMember],
      limit,
      offset,
    });

    if (records.length > 0) {
      if (run.creatorType === "property") {
        // ensure the property exists and set this property to pending for these records
        await RecordOps.buildNullProperties(records);

        await RecordProperty.update(
          { state: "pending" },
          {
            where: {
              recordId: { [Op.in]: records.map((p) => p.id) },
              propertyId: run.creatorId,
            },
          }
        );
      } else {
        // set all properties to pending for these records
        await RecordProperty.update(
          { state: "pending" },
          { where: { recordId: { [Op.in]: records.map((p) => p.id) } } }
        );
      }

      // always mark the record as pending
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

        bulkImports.push({
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
      groupMemberLimit: limit,
      groupMemberOffset: offset + records.length,
    });

    if (records.length === 0) {
      await run.afterBatch("complete");
      return 0;
    } else {
      await run.afterBatch();
    }

    return records.length;
  }
}
