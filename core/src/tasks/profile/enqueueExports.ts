import { Op } from "sequelize";
import { Import } from "../../models/Import";
import { Profile } from "../../models/Profile";
import { CLSTask } from "../../classes/tasks/clsTask";
import { ProfileProperty } from "../../models/ProfileProperty";
import { plugin } from "../../modules/plugin";
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
        { model: ProfileProperty, attributes: ["state"], required: true },
      ],
    });

    const readyProfiles = profiles.filter(
      (profile) => !profile.profileProperties.find((p) => p.state !== "ready")
    );

    for (const profile of readyProfiles) {
      await CLS.enqueueTask("profile:export", {
        force: false,
        profileId: profile.id,
      });
    }
  }
}
