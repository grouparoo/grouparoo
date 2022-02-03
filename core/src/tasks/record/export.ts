import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Import } from "../../models/Import";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { env, log, ParamsFrom } from "actionhero";
import { DestinationOps } from "../../modules/ops/destination";
import { APIData } from "../../modules/apiData";
import { GroupMember } from "../../models/GroupMember";
import { RecordProperty } from "../../models/RecordProperty";

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
    const record = await GrouparooRecord.findOne({
      where: { id: recordId },
      include: [RecordProperty, { model: GroupMember, include: [Group] }],
    });

    if (!record) return; // the record may have been deleted or merged by the time this task ran
    if (record.state !== "ready") return;

    const imports = await Import.findAll({
      where: {
        state: "processing",
        recordId: record.id,
      },
    });

    const destinations = await DestinationOps.relevantFor(
      record,
      record.groupMembers.map((gm) => gm.group)
    );

    // check for explicit destinations to export to from each import
    for (const _import of imports) {
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

    try {
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
    }
  }
}
