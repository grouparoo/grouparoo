import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { log } from "actionhero";
import { ProfileProperty } from "../../models/ProfileProperty";

export class ProfilePropertyImport extends RetryableTask {
  constructor() {
    super();
    this.name = "profileProperty:importProfileProperty";
    this.description =
      "Import the Profile Property for a Profile Property Rule";
    this.frequency = 0;
    this.queue = "profileProperties";
    this.inputs = {
      profileGuid: { required: true },
      profilePropertyRuleGuid: { required: true },
    };
  }

  async run(params) {
    const profile = await Profile.findOne({
      where: { guid: params.profileGuid },
    });

    // has this profile been removed since we enqueued the import task?
    if (!profile) {
      return ProfileProperty.destroy({
        where: {
          profileGuid: params.profileGuid,
          profilePropertyRuleGuid: params.profilePropertyRuleGuid,
        },
      });
    }

    const properties = await profile.properties();
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.profilePropertyRuleGuid
    );
    const source = await profilePropertyRule.$get("source");

    const dependencies = await profilePropertyRule.dependsOn();

    let ok = true;
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

    // there's a dependency we don't have yet
    if (!ok) return;

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
    } else {
      await ProfileProperty.update(
        { state: "ready", stateChangedAt: new Date(), confirmedAt: new Date() },
        {
          where: {
            profilePropertyRuleGuid: profilePropertyRule.guid,
            profileGuid: profile.guid,
            state: "pending",
          },
        }
      );
    }

    log(
      `imported ${profilePropertyRule.key} (${profilePropertyRule.guid}) for 1 profile`
    );
  }
}
