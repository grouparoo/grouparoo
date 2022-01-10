import { Op } from "sequelize";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Import } from "../../models/Import";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { env, log, ParamsFrom } from "actionhero";
import { DestinationOps } from "../../modules/ops/destination";
import { APIData } from "../../modules/apiData";

export class RecordExport extends RetryableTask {
  name = "record:export";
  description = "export this record to the destinations who want to know";
  frequency = 0;
  queue = "exports";
  inputs = {
    recordId: { required: true },
    force: { required: false, formatter: APIData.ensureBoolean },
  };

  async runWithinTransaction({ force, recordId }: ParamsFrom<RecordExport>) {
    const record = await GrouparooRecord.findOne({ where: { id: recordId } });

    if (!record) return; // the record may have been deleted or merged by the time this task ran
    if (record.state !== "ready") return;

    const imports = await Import.findAll({
      where: {
        state: "processing",
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
          force ? force : undefined
        );
      }

      if (imports.length > 0) {
        await Import.update(
          { processedAt: new Date(), state: "complete" },
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
