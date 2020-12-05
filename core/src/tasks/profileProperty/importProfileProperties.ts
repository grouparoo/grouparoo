import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Op } from "sequelize";
import { log, task } from "actionhero";
import { ProfilePropertiesPluginMethodResponse } from "../../classes/plugin";
import { ProfilePropertyRuleOps } from "../../modules/ops/profilePropertyRule";

export class ImportProfileProperties extends RetryableTask {
  constructor() {
    super();
    this.name = "profileProperty:importProfileProperties";
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
    const profilePropertyRule = await ProfilePropertyRule.findOne({
      where: { guid: params.profilePropertyRuleGuid },
    });
    if (!profilePropertyRule) return;
    const source = await profilePropertyRule.$get("source");

    const profilesWithDependenciesMet: Profile[] = [];
    const dependencies = await ProfilePropertyRuleOps.dependencies(
      profilePropertyRule
    );

    for (const i in profiles) {
      const profile = profiles[i];
      let ok = true;
      const properties = await profile.properties();

      dependencies.forEach((dep) => {
        if (properties[dep.key].state !== "ready") ok = false;
      });

      if (ok) profilesWithDependenciesMet.push(profile);
    }

    if (profilesWithDependenciesMet.length === 0) return;

    let propertyValuesBatch: ProfilePropertiesPluginMethodResponse = {};
    try {
      propertyValuesBatch = await source.importProfileProperties(
        profilesWithDependenciesMet,
        profilePropertyRule
      );
    } catch (error) {
      // if something goes wrong with the batch import, fall-back to per-profile/property imports
      await Promise.all(
        profilesWithDependenciesMet.map((profile) => {
          task.enqueue("profileProperty:importProfileProperty", {
            profileGuid: profile.guid,
            profilePropertyRuleGuid: profilePropertyRule.guid,
          });
        })
      );
      return log(error, "error");
    }

    for (const profileGuid in propertyValuesBatch) {
      const profile = profilesWithDependenciesMet.find(
        (p) => p.guid === profileGuid
      );
      const hash = {};
      hash[profilePropertyRule.key] = propertyValuesBatch[profileGuid];
      await profile.addOrUpdateProperties(hash);
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
