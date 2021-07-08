import { RetryableTask } from "../../classes/tasks/retryableTask";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { Mapping } from "../../models/Mapping";
import { Option } from "../../models/Option";
import { Op } from "sequelize";
import { log } from "actionhero";
import { CLS } from "../../modules/cls";
import { ProfilePropertiesPluginMethodResponse } from "../../classes/plugin";
import { PropertyOps } from "../../modules/ops/property";
import { ImportOps } from "../../modules/ops/import";
import { ProfileOps } from "../../modules/ops/profile";

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

    const property = await Property.findOneWithCache(params.propertyId);
    if (!property) return;
    const source = await property.$get("source", {
      include: [Option, Mapping],
      scope: null,
    });

    const profilesToImport: Profile[] = [];
    const profilesNotReady: Profile[] = [];
    const dependencies = await PropertyOps.dependencies(property);

    for (const profile of profiles) {
      let ok = true;
      // already (wrongly) ready?
      if (
        profile.profileProperties.find((p) => p.propertyId === property.id)
          ?.state === "ready"
      ) {
        ok = false;
      }

      // dependencies are not ready
      dependencies.forEach((dep) => {
        if (
          profile.profileProperties.find((p) => p.propertyId === dep.id)
            ?.state !== "ready"
        ) {
          ok = false;
        }
      });

      ok ? profilesToImport.push(profile) : profilesNotReady.push(profile);
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
      console.log("will import properties for", property.key);
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

    const orderedProfiles: Profile[] = [];
    const orderedHashes: any[] = [];
    for (const profileId in propertyValuesBatch) {
      const profile = profilesToImport.find((p) => p.id === profileId);
      const hash = { [property.id]: propertyValuesBatch[profileId] };
      orderedProfiles.push(profile);
      orderedHashes.push(hash);
    }
    if (orderedProfiles.length > 0) {
      console.log(
        "addOrUpdate vals",
        property.key,
        orderedProfiles,
        orderedHashes
      );
      await ProfileOps.addOrUpdateProperties(
        orderedProfiles,
        orderedHashes,
        false // we are disabling the profile lock here because the transaction will be saved out-of-band from the lock check
      );
    }

    // update the properties that got no data back
    await ProfileProperty.update(
      {
        state: "ready",
        rawValue: null,
        stateChangedAt: new Date(),
        confirmedAt: new Date(),
      },
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
