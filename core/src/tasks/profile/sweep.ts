import { CLSTask } from "../../classes/tasks/clsTask";
import { ProfileOps } from "../../modules/ops/profile";

export class ProfileSweep extends CLSTask {
  constructor() {
    super();
    this.name = "profiles:sweep";
    this.description =
      "Remove profiles that no longer have any directly mapped properties";
    this.frequency = 1000 * 60 * 30; // every half hour
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
