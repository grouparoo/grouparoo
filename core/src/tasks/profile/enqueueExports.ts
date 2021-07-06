import { Op } from "sequelize";
import { Profile } from "../../models/Profile";
import { CLSTask } from "../../classes/tasks/clsTask";
import { plugin } from "../../modules/plugin";
import { Import } from "../../models/Import";
import { CLS } from "../../modules/cls";

export class ProfilesEnqueueExports extends CLSTask {
  constructor() {
    super();
    this.name = "profiles:enqueueExports";
    this.description =
      "If a profile is ready and has an import that has not exported, enqueue profile:export for them";
    this.frequency = 1000 * 10;
    this.queue = "profiles";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const profiles = await Profile.findAll({
      limit,
      where: {
        state: "ready",
      },
      include: [
        {
          model: Import,
          attributes: [],
          where: {
            profileUpdatedAt: { [Op.not]: null },
            groupsUpdatedAt: { [Op.not]: null },
            exportedAt: null,
          },
        },
      ],
    });

    for (const profile of profiles) {
      await CLS.enqueueTask("profile:export", {
        force: false,
        profileId: profile.id,
      });
    }

    return profiles;
  }
}
