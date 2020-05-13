import { RetryableTask } from "../../classes/retryableTask";
import { Op } from "sequelize";
import { Profile } from "../../models/Profile";
import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { Destination } from "../../models/Destination";
import { Group } from "../../models/Group";

export class ProfileExport extends RetryableTask {
  constructor() {
    super();
    this.name = "profile:export";
    this.description =
      "export this profile to the destinations who want to know";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      guid: { required: true },
    };
  }

  async run(params) {
    const profile = await Profile.findOne({ where: { guid: params.guid } });
    // the profile may have been deleted or merged by the time this task ran
    if (!profile) {
      return;
    }

    const imports = await Import.findAll({
      where: {
        profileGuid: profile.guid,
        profileUpdatedAt: { [Op.not]: null },
        groupsUpdatedAt: { [Op.not]: null },
        exportedAt: null,
      },
      order: [["createdAt", "asc"]],
    });

    if (imports.length === 0) {
      return;
    }

    const runs = await Run.findAll({
      where: {
        guid: {
          [Op.in]: imports
            .filter((e) => e.creatorType === "run")
            .map((e) => e.creatorGuid),
        },
      },
    });

    try {
      // take the old data from the oldest import
      const oldProfileProperties = imports[0].oldProfileProperties;
      const oldGroupGuids = imports[0].oldGroupGuids;

      // take the new data from the newest import
      const newProfileProperties =
        imports[imports.length - 1].newProfileProperties;
      const newGroupGuids = imports[imports.length - 1].newGroupGuids;

      const oldGroups = await Group.findAll({
        where: { guid: { [Op.in]: oldGroupGuids } },
      });
      const newGroups = await Group.findAll({
        where: { guid: { [Op.in]: newGroupGuids } },
      });

      const destinations = await Destination.destinationsForGroups(
        oldGroups,
        newGroups
      );

      // check for explicit destinations to export to from each import
      for (const i in imports) {
        const _import = imports[i];
        if (
          _import.data?._meta?.destinationGuid &&
          !destinations
            .map((d) => d.guid)
            .includes(_import.data?._meta?.destinationGuid)
        ) {
          const destination = await Destination.findOne({
            where: { guid: _import.data._meta.destinationGuid },
          });
          if (destination) {
            destinations.push(destination);
          }
        }
      }

      await Promise.all(
        destinations.map((destination) =>
          destination.exportProfile(
            profile,
            imports,
            oldProfileProperties,
            newProfileProperties,
            oldGroups,
            newGroups
          )
        )
      );

      await Promise.all(
        imports.map((e) => e.update({ exportedAt: new Date() }))
      );
      await Promise.all(runs.map((r) => r.increment("profilesExported")));
    } catch (error) {
      await Promise.all(imports.map((e) => e.setError(error, this.name)));
      throw error;
    }
  }
}
