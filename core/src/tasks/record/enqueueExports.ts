import { Op } from "sequelize";
import { config } from "actionhero";
import { Import } from "../../models/Import";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { CLSTask } from "../../classes/tasks/clsTask";
import { RecordProperty } from "../../models/RecordProperty";
import { CLS } from "../../modules/cls";
import Sequelize from "sequelize";

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

    const _imports = await Import.findAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("recordId")), "recordId"],
      ],
      where: {
        state: "complete",
        exportedAt: null,
      },
      group: ["recordId"],
      limit,
    });

    if (_imports.length === 0) return;

    const records = await GrouparooRecord.findAll({
      where: {
        state: "ready",
        id: { [Op.in]: _imports.map((i) => i.recordId) },
      },
      include: {
        model: RecordProperty,
        attributes: ["state"],
        required: true,
      },
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
