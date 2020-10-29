import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Op } from "sequelize";
import { log } from "actionhero";

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
    const { pluginConnection } = await source.getPlugin();

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

    if (profilesWithDependenciesMet.length === 0) return;

    // TODO: Move to Op
    // TODO: Write in Batches?
    // TODO: Preload Properties?
    if (pluginConnection.methods.profileProperties) {
      // in batches

      const propertyValuesBatch = await source.importProfileProperties(
        profilesWithDependenciesMet,
        profilePropertyRule
      );

      for (const profileGuid in propertyValuesBatch) {
        const profile = profilesWithDependenciesMet.find(
          (p) => p.guid === profileGuid
        );
        const hash = {};
        hash[profilePropertyRule.key] = propertyValuesBatch[profileGuid];
        await profile.addOrUpdateProperties(hash);
      }
    } else {
      // not in batches

      for (const i in profilesWithDependenciesMet) {
        const profile = profilesWithDependenciesMet[i];
        const propertyValues = await source.importProfileProperty(
          profile,
          profilePropertyRule
        );

        if (propertyValues) {
          const hash = {};
          hash[profilePropertyRule.key] = Array.isArray(propertyValues)
            ? propertyValues
            : [propertyValues];
          await profile.addOrUpdateProperty(hash);
        }
      }
    }

    // update the properties that got no data back
    await ProfileProperty.update(
      { state: "ready", stateChangedAt: new Date(), confirmedAt: new Date() },
      {
        where: {
          profilePropertyRuleGuid: profilePropertyRule.guid,
          profileGuid: {
            [Op.in]: profilesWithDependenciesMet.map((p) => p.guid),
          },
          state: "pending",
        },
      }
    );

    log(
      `imported ${profilePropertyRule.key} (${profilePropertyRule.guid}) for ${profilesWithDependenciesMet.length} profiles`
    );
  }
}
