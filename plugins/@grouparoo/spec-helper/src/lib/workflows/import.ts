import { loadPath } from "./../loadPath";
import { specHelper } from "actionhero";

export async function ImportWorkflow() {
  const { GrouparooRecord } = await import(`@grouparoo/core/${loadPath}`);

  const maxAttempts = 5;
  let attempts = 0;
  let importTasks = [];
  let pendingRecords = 1;

  async function _import() {
    await specHelper.runTask("recordProperties:enqueue", {});

    // batch
    importTasks = await specHelper.findEnqueuedTasks(
      "recordProperty:importRecordProperties"
    );
    for (const t of importTasks) {
      await specHelper.runTask(
        "recordProperty:importRecordProperties",
        t.args[0]
      );
    }

    // single
    importTasks = await specHelper.findEnqueuedTasks(
      "recordProperty:importRecordProperty"
    );
    for (const t of importTasks) {
      await specHelper.runTask(
        "recordProperty:importRecordProperty",
        t.args[0]
      );
    }

    await specHelper.runTask("records:makeReady", {});

    pendingRecords = await GrouparooRecord.count({
      where: { state: "pending" },
    });
  }

  // we'll need to loop more than once to get dependent s first before secondary ones
  while (pendingRecords > 0 && attempts < maxAttempts) {
    await _import();
    attempts++;
  }
}
