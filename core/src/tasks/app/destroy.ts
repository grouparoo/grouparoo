import { CLSTask } from "../../classes/tasks/clsTask";
import { App } from "../../models/App";

export class AppDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "app:destroy";
    this.description =
      "wait for dependencies to finish being deleted, then delete the app";
    this.frequency = 0;
    this.queue = "apps";
    this.inputs = {
      appId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const app = await App.scope(null).findOne({
      where: { id: params.appId, state: "deleted" },
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
