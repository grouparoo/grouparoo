import { Op } from "sequelize";
import { Profile } from "../../models/Profile";
import { Import } from "../../models/Import";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";
import { RetryableTask } from "../../classes/tasks/retryableTask";
import { env, log } from "actionhero";

export class ProfileExport extends RetryableTask {
  constructor() {
    super();
    this.name = "profile:export";
    this.description =
      "export this profile to the destinations who want to know";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      profileId: { required: true },
      force: { required: false },
    };
  }

  async runWithinTransaction(params) {
    const profile = await Profile.findOne({
      where: { id: params.profileId },
    });

    if (!profile) return; // the profile may have been deleted or merged by the time this task ran
    if (profile.state !== "ready") return;

    const imports = await Import.findAll({
      where: {
        profileId: profile.id,
        profileUpdatedAt: { [Op.not]: null },
        groupsUpdatedAt: { [Op.not]: null },
        exportedAt: null,
      },
      order: [["createdAt", "asc"]],
    });

    try {
      const oldGroupIds = imports[0]?.oldGroupIds;
      const newGroupIds = imports[imports.length - 1]?.newGroupIds;

      const oldGroups =
        oldGroupIds && oldGroupIds.length > 0
          ? await Group.findAll({
              where: { id: { [Op.in]: oldGroupIds } },
            })
          : [];

      const newGroups =
        newGroupIds && newGroupIds.length > 0
          ? await Group.findAll({
              where: { id: { [Op.in]: newGroupIds } },
            })
          : [];

      const destinations = await Destination.destinationsForGroups(
        oldGroups,
        newGroups
      );

      // check for explicit destinations to export to from each import
      for (const i in imports) {
        const _import = imports[i];
        if (
          _import.data?._meta?.destinationId &&
          !destinations
            .map((d) => d.id)
            .includes(_import.data?._meta?.destinationId)
        ) {
          const destination = await Destination.scope(null).findOne({
            where: { id: _import.data._meta.destinationId },
          });
          if (destination) destinations.push(destination);
        }
      }

      for (const i in destinations) {
        await destinations[i].exportProfile(
          profile,
          false,
          params.force ? params.force : undefined
        );
      }

      if (imports.length > 0) {
        await Import.update(
          { exportedAt: new Date() },
          { where: { id: imports.map((i) => i.id) } }
        );
      }
    } catch (error) {
      if (env !== "test") log(`[EXPORT ERROR] ${error}`, "alert");
      await Promise.all(imports.map((e) => e.setError(error, this.name)));
    }
  }
}
