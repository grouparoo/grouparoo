import { CLS } from "../../modules/cls";
import { Profile } from "../../models/Profile";
import { Property } from "../../models/Property";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Import } from "../../models/Import";
import { Op } from "sequelize";
import { ProfileOps } from "../../modules/ops/profile";

export class ProfileCompleteImport extends RetryableTask {
  constructor() {
    super();
    this.name = "profile:completeImport";
    this.description =
      "Once the profile properties are imported, update runs, imports, and groups then export";
    this.frequency = 0;
    this.queue = "profiles";
    this.inputs = {
      profileIds: { required: true },
      toExport: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const properties = await Property.findAllWithCache();
    const profiles = await Profile.findAll({
      where: { id: { [Op.in]: params.profileIds } },
      include: [
        { model: ProfileProperty, required: true },
        { model: Import, required: false, where: { profileUpdatedAt: null } },
      ],
    });
    if (profiles.length === 0) return;

    const readyProfiles = profiles.filter(
      (profile) =>
        profile.state === "ready" &&
        !profile.profileProperties.find((p) => p.state !== "ready")
    );
    if (readyProfiles.length === 0) return;

    for (const profile of readyProfiles) {
      const mergedValues = {};
      const imports = profile.imports;

      for (const _import of imports) {
        const data = _import.data;
        for (const key in data) {
          // only if we still have property
          if (properties.find((r) => r.key === key)) {
            mergedValues[key] = data[key];
          }
        }
      }

      if (Object.keys(mergedValues).length > 0) {
        await profile.addOrUpdateProperties(mergedValues);
        delete profile.profileProperties; // will be reloaded
      }
    }

    const memberships = await ProfileOps.updateGroupMemberships(readyProfiles);
    const now = new Date();

    for (const profile of readyProfiles) {
      const imports = profile.imports;
      if (imports.length > 0) {
        const newProfileProperties = await profile.simplifiedProperties();
        const newGroupIds = Object.keys(memberships[profile.id]).filter(
          (groupId) => memberships[profile.id][groupId] === true
        );

        await Import.update(
          {
            newProfileProperties: newProfileProperties,
            profileUpdatedAt: now,
            newGroupIds: newGroupIds,
            groupsUpdatedAt: now,
            exportedAt: params.toExport ? undefined : now, // we want to indicate that the import's lifecycle is complete
          },
          {
            where: { id: { [Op.in]: imports.map((i) => i.id) } },
          }
        );
      }

      if (params.toExport) {
        await CLS.enqueueTask("profile:export", {
          profileId: profile.id,
          force: false,
        });
      }
    }
  }
}
