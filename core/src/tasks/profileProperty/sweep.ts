import { CLSTask } from "../../classes/tasks/clsTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { plugin } from "../../modules/plugin";

export class ProfilePropertySweep extends CLSTask {
  constructor() {
    super();
    this.name = "profileProperties:sweep";
    this.description =
      "Double check that all profile properties are removed that don't belong to a profile or property";
    this.frequency = 1000 * 60 * 60;
    this.queue = "profileProperties";
    this.inputs = {};
  }

  async runWithinTransaction() {
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
      where: { "$profile.id$": null },
      limit,
    });

    // delete those profile properties who have no property
    const profilePropertiesMissingRule = await ProfileProperty.findAll({
      include: [{ model: Property, required: false }],
      where: { "$property.id$": null },
      limit,
    });

    count += profilePropertiesMissingProfile.length;
    count += profilePropertiesMissingRule.length;

    if (count > 0) {
      await ProfileProperty.destroy({
        where: {
          id: [].concat(
            profilePropertiesMissingProfile.map((p) => p.id),
            profilePropertiesMissingRule.map((p) => p.id)
          ),
        },
      });
    }

    return count;
  }
}
