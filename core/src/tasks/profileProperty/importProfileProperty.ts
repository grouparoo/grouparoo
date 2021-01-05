import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { Property } from "../../models/Property";
import { log } from "actionhero";
import { ProfileProperty } from "../../models/ProfileProperty";
import { PropertyOps } from "../../modules/ops/property";

export class ImportProfileProperty extends RetryableTask {
  constructor() {
    super();
    this.name = "profileProperty:importProfileProperty";
    this.description = "Import the Profile Property for a Property";
    this.frequency = 0;
    this.queue = "profileProperties";
    this.inputs = {
      profileGuid: { required: true },
      propertyGuid: { required: true },
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
          propertyGuid: params.propertyGuid,
        },
      });
    }

    const property = await Property.findOne({
      where: { guid: params.propertyGuid },
    });
    if (!property) return;
    const properties = await profile.properties();
    const source = await property.$get("source");
    const dependencies = await PropertyOps.dependencies(property);

    let ok = true;
    dependencies.forEach((dep) => {
      if (properties[dep.key].state !== "ready") ok = false;
    });

    // there's a dependency we don't have yet
    if (!ok) return;

    const propertyValues = await source.importProfileProperty(
      profile,
      property
    );

    if (propertyValues) {
      const hash = {};
      hash[property.guid] = Array.isArray(propertyValues)
        ? propertyValues
        : [propertyValues];
      await profile.addOrUpdateProperty(hash);
    } else {
      await ProfileProperty.update(
        { state: "ready", stateChangedAt: new Date(), confirmedAt: new Date() },
        {
          where: {
            propertyGuid: property.guid,
            profileGuid: profile.guid,
            state: "pending",
          },
        }
      );
    }

    log(`imported ${property.key} (${property.guid}) for 1 profile`);
  }
}
