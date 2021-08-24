import { Op } from "sequelize";
import { config } from "actionhero";
import { Import } from "../../models/Import";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { CLSTask } from "../../classes/tasks/clsTask";
import { RecordProperty } from "../../models/RecordProperty";
import { CLS } from "../../modules/cls";

export class GrouparooRecordsEnqueueExports extends CLSTask {
  constructor() {
    super();
    this.name = "records:enqueueExports";
    this.description =
      "If a record is ready and has an import that has not exported, enqueue record:export for them";
    this.frequency = 1000 * 10;
    this.queue = "records";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit: number = config.batchSize.imports;

    const records = await GrouparooRecord.findAll({
      limit,
      where: {
        state: "ready",
      },
      include: [
        {
          model: Import,
          attributes: [],
          where: {
            recordUpdatedAt: { [Op.not]: null },
            groupsUpdatedAt: { [Op.not]: null },
            exportedAt: null,
          },
        },
        {
          model: RecordProperty,
          attributes: ["state"],
          required: true,
        },
      ],
    });

    const readyRecords = records.filter(
      (record) => !record.recordProperties.find((p) => p.state !== "ready")
    );

    for (const record of readyRecords) {
      await CLS.enqueueTask("record:export", {
        force: false,
        recordId: record.id,
      });
    }
  }
}
