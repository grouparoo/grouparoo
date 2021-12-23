import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { App } from "../../models/App";

export class AppDestroy extends CLSTask {
  name = "app:destroy";
  description =
    "wait for dependencies to finish being deleted, then delete the app";
  frequency = 0;
  queue = "apps";
  inputs = {
    appId: { required: true },
  };

  async runWithinTransaction({ appId }: ParamsFrom<AppDestroy>) {
    const app = await App.scope(null).findOne({
      where: { id: appId, state: "deleted" },
    });

    // the app may have been force-deleted
    if (!app) return;

    // check if we're still being used by something
    try {
      await App.ensureNotInUse(app);
    } catch (error) {
      if (error.message.match(/cannot delete this app,/)) {
        return; // check back later
      }

      throw error;
    }

    // all things that depend on this app have been cleaned up
    await app.destroy();
  }
}
