import { Op } from "sequelize";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Import } from "../../models/Import";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { env, log } from "actionhero";
import { DestinationOps } from "../../modules/ops/destination";

export class RecordExport extends RetryableTask {
  constructor() {
    super();
    this.name = "record:export";
    this.description =
      "export this record to the destinations who want to know";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      recordId: { required: true },
      force: { required: false },
    };
  }

  async runWithinTransaction(params) {
    const record = await GrouparooRecord.findOne({
      where: { id: params.recordId },
    });

    if (!record) return; // the record may have been deleted or merged by the time this task ran
    if (record.state !== "ready") return;

    const imports = await Import.findAll({
      where: {
        state: "exporting",
        recordId: record.id,
      },
      order: [["createdAt", "asc"]],
    });

    try {
      const oldGroupIds = imports[0]?.oldGroupIds;
      const newGroupIds = imports[imports.length - 1]?.newGroupIds;

      const oldGroups =
        oldGroupIds && oldGroupIds.length > 0
          ? await Group.findAll({
              where: { id: { [Op.in]: oldGroupIds } },
            })
          : [];

      const newGroups =
        newGroupIds && newGroupIds.length > 0
          ? await Group.findAll({
              where: { id: { [Op.in]: newGroupIds } },
            })
          : [];

      const destinations = await DestinationOps.relevantFor(
        record,
        oldGroups,
        newGroups
      );

      // check for explicit destinations to export to from each import
      for (const i in imports) {
        const _import = imports[i];
        if (
          _import.data?._meta?.destinationId &&
          !destinations
            .map((d) => d.id)
            .includes(_import.data?._meta?.destinationId)
        ) {
          const destination = await Destination.scope(null).findOne({
            where: { id: _import.data._meta.destinationId },
          });
          if (destination) destinations.push(destination);
        }
      }

      for (const i in destinations) {
        await destinations[i].exportRecord(
          record,
          false,
          params.force ? params.force : undefined
        );
      }

      if (imports.length > 0) {
        await Import.update(
          { exportedAt: new Date(), state: "complete" },
          { where: { id: imports.map((i) => i.id) } }
        );
      }
    } catch (error) {
      if (env !== "test") log(`[EXPORT ERROR] ${error}`, "alert");

      for (const i of imports) {
        await i.setError(error, this.name);
      }
    }
  }
}
