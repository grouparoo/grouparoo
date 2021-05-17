import { CLS } from "../../modules/cls";
import { config } from "actionhero";
import { Profile } from "../../models/Profile";
import { Property } from "../../models/Property";
import { RetryableTask } from "../../classes/tasks/retryableTask";

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
    });
    if (!profile) return; // the profile may have been deleted or merged by the time this task ran

    const properties = await Property.findAll();
    const profileProperties = await profile.properties(properties);
    const pendingProfileProperty = Object.keys(profileProperties).find(
      (k) => profileProperties[k].state !== "ready" // a property may have gone back into the pending state
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
      await profile.addOrUpdateProperties(mergedValues);
      await profile.updateGroupMembership();

      const newProfileProperties = await profile.simplifiedProperties(
        properties
      );

      const newGroups = await profile.$get("groups");
      const newGroupIds = newGroups.map((g) => g.id);
      const now = new Date();

      for (const i in imports) {
        const _import = imports[i];
        _import.newProfileProperties = newProfileProperties;
        _import.profileUpdatedAt = now;
        _import.newGroupIds = newGroupIds;
        _import.groupsUpdatedAt = now;
        if (!params.toExport) _import.exportedAt = now; // we want to indicate that the import's lifecycle is complete
        await _import.save();
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
