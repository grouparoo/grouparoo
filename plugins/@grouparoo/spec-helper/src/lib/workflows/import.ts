import { specHelper } from "actionhero";

export async function ImportWorkflow() {
  let importTasks = [];
  await specHelper.runTask("profileProperties:enqueue", {});

  // batch
  importTasks = await specHelper.findEnqueuedTasks(
    "profileProperty:importProfileProperties"
  );
  await Promise.all(
    importTasks.map((t) =>
      specHelper.runTask("profileProperty:importProfileProperties", t.args[0])
    )
  );

  // single
  importTasks = await specHelper.findEnqueuedTasks(
    "profileProperty:importProfileProperty"
  );
  await Promise.all(
    importTasks.map((t) =>
      specHelper.runTask("profileProperty:importProfileProperty", t.args[0])
    )
  );

  await specHelper.runTask("profiles:checkReady", {});

  const completeTasks = await specHelper.findEnqueuedTasks(
    "profile:completeImport"
  );

  await Promise.all(
    completeTasks.map((t) =>
      specHelper.runTask("profile:completeImport", t.args[0])
    )
  );
}
