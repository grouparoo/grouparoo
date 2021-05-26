import { CLS } from "../../modules/cls";
import { config } from "actionhero";
import { Profile } from "../../models/Profile";
import { Property } from "../../models/Property";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Import } from "../../models/Import";
import { Op } from "sequelize";

export class ProfileCompleteImport extends RetryableTask {
  constructor() {
    super();
    this.name = "profile:completeImport";
    this.description =
      "Once the profile properties are imported, update runs, imports, and groups then export";
    this.frequency = 0;
    this.queue = "profiles";
    this.inputs = {
      profileId: { required: true },
      toExport: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const profile = await Profile.findOne({
      where: { id: params.profileId },
      include: [ProfileProperty],
    });
    if (!profile) return; // the profile may have been deleted or merged by the time this task ran

    const properties = await Property.findAllWithCache();
    const pendingProfileProperty = profile.profileProperties.find(
      (p) => p.state !== "ready" // a property may have gone back into the pending state
    );

    if (profile.state !== "ready" || pendingProfileProperty) {
      return CLS.enqueueTaskIn(config.tasks.timeout + 1, this.name, params);
    }

    const mergedValues = {};
    const imports = await profile.$get("imports", {
      where: { profileUpdatedAt: null },
      order: [["createdAt", "asc"]],
    });

    for (const i in imports) {
      const data = imports[i].data;
      for (const key in data) {
        // only if we still have property
        if (properties.find((r) => r.key === key)) {
          mergedValues[key] = data[key];
        }
      }
    }

    try {
      if (Object.keys(mergedValues).length > 0) {
        await profile.addOrUpdateProperties(mergedValues);
        await profile.reload({ include: [ProfileProperty] });
      }

      await profile.updateGroupMembership();

      const newProfileProperties = await profile.simplifiedProperties();
      const newGroups = await profile.$get("groups");
      const newGroupIds = newGroups.map((g) => g.id);
      const now = new Date();

      if (imports.length > 0) {
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
    } catch (error) {
      await Promise.all(imports.map((e) => e.setError(error, this.name)));
      throw error;
    }
  }
}
