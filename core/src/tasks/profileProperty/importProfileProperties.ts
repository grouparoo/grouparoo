import { RetryableTask } from "../../classes/tasks/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { Op } from "sequelize";
import { log } from "actionhero";
import { CLS } from "../../modules/cls";
import { ProfilePropertiesPluginMethodResponse } from "../../classes/plugin";
import { PropertyOps } from "../../modules/ops/property";
import { ImportOps } from "../../modules/ops/import";

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
    if (profiles.length === 0) return;

    const property = await Property.findOne({
      where: { id: params.propertyId },
    });

    if (!property) return;
    const source = await property.$get("source");

    const profilesToImport: Profile[] = [];
    const profilesNotReady: Profile[] = [];
    const dependencies = await PropertyOps.dependencies(property);

    for (const profile of profiles) {
      let ok = true;
      const profileProperties = await profile.properties();

      if (profileProperties[property.key].state === "ready") ok = false;

      dependencies.forEach((dep) => {
        if (profileProperties[dep.key].state !== "ready") ok = false;
      });

      if (ok) {
        profilesToImport.push(profile);
      } else {
        profilesNotReady.push(profile);
      }
    }

    if (profilesNotReady.length > 0) {
      await ProfileProperty.update(
        { startedAt: ImportOps.retryStartedAt() },
        {
          where: {
            propertyId: property.id,
            profileId: {
              [Op.in]: profilesNotReady.map((p) => p.id),
            },
            state: "pending",
          },
        }
      );
    }

    if (profilesToImport.length === 0) return;

    let propertyValuesBatch: ProfilePropertiesPluginMethodResponse = {};
    try {
      propertyValuesBatch = await source.importProfileProperties(
        profilesToImport,
        property
      );
    } catch (error) {
      // if something goes wrong with the batch import, fall-back to per-profile/property imports
      await Promise.all(
        profilesToImport.map((profile) => {
          CLS.enqueueTask("profileProperty:importProfileProperty", {
            profileId: profile.id,
            propertyId: property.id,
          });
        })
      );
      return log(error, "error");
    }

    for (const profileId in propertyValuesBatch) {
      const profile = profilesToImport.find((p) => p.id === profileId);
      const hash = { [property.id]: propertyValuesBatch[profileId] };
      await profile.addOrUpdateProperties(hash, false, [property]); // we are disabling the profile lock here because the transaction will be saved out-of-band from the lock check
    }

    // update the properties that got no data back
    await ProfileProperty.update(
      { state: "ready", stateChangedAt: new Date(), confirmedAt: new Date() },
      {
        where: {
          propertyId: property.id,
          profileId: {
            [Op.in]: profilesToImport.map((p) => p.id),
          },
          state: "pending",
        },
      }
    );
  }
}
