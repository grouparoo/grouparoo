import { CLSTask } from "../../classes/tasks/clsTask";
import { ProfileOps } from "../../modules/ops/profile";
import { plugin } from "../../modules/plugin";

export class ProfilesCheckReady extends CLSTask {
  constructor() {
    super();
    this.name = "profiles:checkReady";
    this.description =
      "If all of a Profile's Properties are ready, mark the profile ready and complete the import";
    this.frequency = 1000 * 10;
    this.queue = "profiles";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    await ProfileOps.makeReadyAndCompleteImports(limit, toExport);
  }
}
