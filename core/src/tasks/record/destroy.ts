import { CLSTask } from "../../classes/tasks/clsTask";
import { Export } from "../../models/Export";
import { GrouparooRecord } from "../../models/GrouparooRecord";

export class RecordDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "record:destroy";
    this.description =
      "Export and destroy records that no longer have any directly mapped properties";
    this.frequency = 0;
    this.queue = "records";
    this.inputs = {
      recordId: { required: true },
    };
  }

  async runWithinTransaction({ recordId }: { recordId: string }) {
    const record = await GrouparooRecord.findById(recordId);
    if (!record) return;
    if (record.state !== "ready") return;

    const pendingExports = await Export.count({
      where: {
        recordId: recordId,
        state: ["pending", "processing"],
      },
    });
    if (pendingExports > 0) return;

    const oldGroups = await record.$get("groups");
    if (oldGroups.length > 0) {
      // clear groups and export
      // when the export is done, this task will be enqueued again to destroy it
      await GrouparooRecord.destroyGroupMembers(record);
      await record.export(false, oldGroups, true, false);
    } else {
      // use "destroy" to clean up related models
      await record.destroy();
    }
  }
}
