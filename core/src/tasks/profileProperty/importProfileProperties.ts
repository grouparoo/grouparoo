import { RetryableTask } from "../../classes/tasks/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { Op } from "sequelize";
import { log } from "actionhero";
import { CLS } from "../../modules/cls";
import { ProfilePropertiesPluginMethodResponse } from "../../classes/plugin";
import { PropertyOps } from "../../modules/ops/property";

export class ImportProfileProperties extends RetryableTask {
  constructor() {
    super();
    this.name = "profileProperty:importProfileProperties";
    this.description = "Import the Profile Properties for a Property";
    this.frequency = 0;
    this.queue = "profileProperties";
    this.inputs = {
      profileIds: { required: true },
      propertyId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const profiles = await Profile.findAll({
      where: { id: { [Op.in]: params.profileIds } },
      include: [ProfileProperty],
    });
    const property = await Property.findOne({
      where: { id: params.propertyId },
    });
    if (!property) return;
    const source = await property.$get("source");

    const profilesWithDependenciesMet: Profile[] = [];
    const dependencies = await PropertyOps.dependencies(property);

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
        property
      );
    } catch (error) {
      // if something goes wrong with the batch import, fall-back to per-profile/property imports
      await Promise.all(
        profilesWithDependenciesMet.map((profile) => {
          CLS.enqueueTask("profileProperty:importProfileProperty", {
            profileId: profile.id,
            propertyId: property.id,
          });
        })
      );
      return log(error, "error");
    }

    for (const profileId in propertyValuesBatch) {
      const profile = profilesWithDependenciesMet.find(
        (p) => p.id === profileId
      );
      const hash = {};
      hash[property.id] = propertyValuesBatch[profileId];
      await profile.addOrUpdateProperties(hash);
    }

    // update the properties that got no data back
    await ProfileProperty.update(
      { state: "ready", stateChangedAt: new Date(), confirmedAt: new Date() },
      {
        where: {
          propertyId: property.id,
          profileId: {
            [Op.in]: profilesWithDependenciesMet.map((p) => p.id),
          },
          state: "pending",
        },
      }
    );
  }
}
