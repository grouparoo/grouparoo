import { Task } from "actionhero";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { plugin } from "../../modules/plugin";

export class ProfilePropertySweep extends Task {
  constructor() {
    super();
    this.name = "profileProperties:sweep";
    this.description =
      "Double check that all profile properties are removed that don't belong to a profile or profile property rule";
    this.frequency = 1000 * 30;
    this.queue = "profileProperties";
    this.inputs = {};
  }

  async run() {
    let count = 0;

    const limit = parseInt(
      (
        await plugin.readSetting(
          "core",
          "imports-profile-properties-batch-size"
        )
      ).value
    );

    // delete those profile properties who have no profile
    const profilePropertiesMissingProfile = await ProfileProperty.findAll({
      include: [{ model: Profile, required: false }],
      where: { "$profile.guid$": null },
      limit,
    });

    // delete those profile properties who have no profile property rule
    const profilePropertiesMissingRule = await ProfileProperty.findAll({
      include: [{ model: ProfilePropertyRule, required: false }],
      where: { "$profilePropertyRule.guid$": null },
      limit,
    });

    for (const i in profilePropertiesMissingProfile) {
      await profilePropertiesMissingProfile[i].destroy();
    }

    for (const i in profilePropertiesMissingRule) {
      await profilePropertiesMissingRule[i].destroy();
    }

    count += profilePropertiesMissingProfile.length;
    count += profilePropertiesMissingRule.length;
    return count;
  }
}
