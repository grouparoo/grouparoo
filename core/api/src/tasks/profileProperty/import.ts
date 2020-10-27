import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Op } from "sequelize";

export class ProfilePropertyImport extends RetryableTask {
  constructor() {
    super();
    this.name = "profileProperty:import";
    this.description =
      "Import the Profile Properties for a Profile Property Rule";
    this.frequency = 0;
    this.queue = "profileProperties";
    this.inputs = {
      profileGuids: { required: true },
      profilePropertyRuleGuid: { required: true },
    };
  }

  async run(params) {
    const profiles = await Profile.findAll({
      where: { guid: { [Op.in]: params.profileGuids } },
      include: [ProfileProperty],
    });
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.profilePropertyRuleGuid
    );
    const source = await profilePropertyRule.$get("source");

    const profilesWithDependenciesMet: Profile[] = [];
    const dependencies = await profilePropertyRule.dependsOn();

    for (const i in profiles) {
      const profile = profiles[i];
      let ok = true;
      const properties = await profile.properties();

      dependencies.forEach((dep) => {
        if (
          properties[dep.key].values.length === 0 ||
          properties[dep.key].values.filter((v) => v === null).length ===
            properties[dep.key].values.length ||
          properties[dep.key].values.filter((v) => v === undefined).length ===
            properties[dep.key].values.length
        ) {
          ok = false;
        }
      });

      if (ok) profilesWithDependenciesMet.push(profile);
    }

    for (const i in profilesWithDependenciesMet) {
      // TODO: Batches and write-in-bulk
      const profile = profilesWithDependenciesMet[i];
      const propertyValues = await source.importProfileProperty(
        profile,
        profilePropertyRule
      );

      const hash = {};
      hash[profilePropertyRule.key] = propertyValues
        ? Array.isArray(propertyValues)
          ? propertyValues
          : [propertyValues]
        : [];
      await profile.addOrUpdateProperty(hash);
    }
  }
}
