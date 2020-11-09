import { Task, task } from "actionhero";
import { ProfileOps } from "../../modules/ops/profile";
import { plugin } from "../../modules/plugin";

export class ProfilesCheckReady extends Task {
  constructor() {
    super();
    this.name = "profiles:checkReady";
    this.description =
      "If all of a Profile's Properties are ready, mark the profile ready and complete the import";
    this.frequency = 1000 * 10;
    this.queue = "profiles";
    this.inputs = {};
  }

  async run() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    await ProfileOps.makeReady(limit);
  }
}
