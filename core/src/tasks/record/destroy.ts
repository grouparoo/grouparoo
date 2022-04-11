import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Export } from "../../models/Export";
import { GrouparooRecord } from "../../models/GrouparooRecord";

export class RecordDestroy extends CLSTask {
  name = "record:destroy";
  description =
    "Export and destroy records that no longer have any directly mapped properties";
  frequency = 0;
  queue = "records";
  inputs = {
    recordId: { required: true },
  } as const;

  async runWithinTransaction({ recordId }: ParamsFrom<RecordDestroy>) {
    const record = await GrouparooRecord.findOne({
      where: { id: recordId, state: ["ready", "deleted"] },
    });
    if (!record) return;

    const pendingExports = await Export.count({
      where: {
        recordId,
        state: ["pending", "processing"],
      },
    });
    if (pendingExports > 0) return;

    if (record.state === "ready") {
      // clear groups and export
      // when the export is done, this task will be enqueued again to destroy it
      const oldGroups = await record.$get("groups");
      await GrouparooRecord.destroyGroupMembers(record);
      await record.update({ state: "deleted" });
      await record.export(false, oldGroups, true, false, true);
    } else {
      // use "destroy" to clean up related models
      await record.destroy();
    }
  }
}
