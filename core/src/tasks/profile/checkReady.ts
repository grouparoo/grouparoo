import { CLSTask } from "../../classes/tasks/clsTask";
import { ProfileOps } from "../../modules/ops/profile";
import { config } from "actionhero";

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
    const limit: number = config.batchSize.imports;
    const toExport = process.env.GROUPAROO_DISABLE_EXPORTS
      ? process.env.GROUPAROO_DISABLE_EXPORTS !== "true"
      : true;

    await ProfileOps.makeReadyAndCompleteImports(limit, toExport);
  }
}
