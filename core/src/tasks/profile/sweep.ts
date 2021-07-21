import { CLSTask } from "../../classes/tasks/clsTask";
import { ProfileOps } from "../../modules/ops/profile";

export class ProfileSweep extends CLSTask {
  constructor() {
    super();
    this.name = "profiles:sweep";
    this.description =
      "Remove profiles that no longer have any directly mapped properties";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run"
        ? 1000 * 30 // Run every 30 seconds in `grouparoo run`
        : 1000 * 60 * 30; // Run every half hour
    this.queue = "profiles";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const profiles = await ProfileOps.getProfilesToSweep();

    // use "destroy" to clean up related models
    for (const profile of profiles) {
      await profile.destroy();
    }

    return profiles.length;
  }
}
