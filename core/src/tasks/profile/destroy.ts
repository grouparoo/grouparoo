import { CLSTask } from "../../classes/tasks/clsTask";
import { Export } from "../../models/Export";
import { Profile } from "../../models/Profile";

export class ProfileDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "profile:destroy";
    this.description =
      "Export and destroy profiles that no longer have any directly mapped properties";
    this.frequency = 0;
    this.queue = "profiles";
    this.inputs = {
      profileId: { required: true },
    };
  }

  async runWithinTransaction({ profileId }: { profileId: string }) {
    const profile = await Profile.findOne({
      where: { id: profileId, state: "ready" },
    });
    if (!profile) return;

    const pendingExports = await Export.count({
      where: {
        profileId: profileId,
        state: ["pending", "processing"],
      },
    });
    if (pendingExports > 0) return;

    const oldGroups = await profile.$get("groups");
    if (oldGroups.length > 0) {
      // clear groups and export
      // when the export is done, this task will be enqueued again to destroy it
      await Profile.destroyGroupMembers(profile);
      await profile.export(false, oldGroups, true, false);
    } else {
      // use "destroy" to clean up related models
      await profile.destroy();
    }
  }
}
