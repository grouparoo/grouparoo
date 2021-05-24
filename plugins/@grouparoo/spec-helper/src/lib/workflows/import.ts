import { loadPath } from "./../loadPath";
import { specHelper } from "actionhero";

export async function ImportWorkflow() {
  const { Profile } = await import(`@grouparoo/core/${loadPath}`);

  const maxAttempts = 5;
  let attempts = 0;
  let importTasks = [];
  let pendingProfiles = 1;

  async function _import() {
    await specHelper.runTask("profileProperties:enqueue", {});

    // batch
    importTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperties"
    );
    for (const t of importTasks) {
      await specHelper.runTask(
        "profileProperty:importProfileProperties",
        t.args[0]
      );
    }

    // single
    importTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperty"
    );
    for (const t of importTasks) {
      await specHelper.runTask(
        "profileProperty:importProfileProperty",
        t.args[0]
      );
    }

    await specHelper.runTask("profiles:checkReady", {});

    pendingProfiles = await Profile.count({ where: { state: "pending" } });
  }

  // we'll need to loop more than once to get dependent profiles first before secondary ones
  while (pendingProfiles > 0 && attempts < maxAttempts) {
    await _import();
    attempts++;
  }

  const completeTasks = await specHelper.findEnqueuedTasks(
    "profile:completeImport"
  );
  for (const t of completeTasks) {
    await specHelper.runTask("profile:completeImport", t.args[0]);
  }
}
