import { RetryableTask } from "../../classes/retryableTask";
import { Op } from "sequelize";
import { Profile } from "../../models/Profile";
import { Import } from "../../models/Import";
import { Export } from "../../models/Export";
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
      force: { required: false },
    };
  }

  async run(params) {
    const profile = await Profile.findOne({ where: { guid: params.guid } });

    // the profile may have been deleted or merged by the time this task ran
    if (!profile) return;

    const groups = await profile.$get("groups");

    // const imports = await Import.findAll({
    //   where: {
    //     profileGuid: profile.guid,
    //     profileUpdatedAt: { [Op.not]: null },
    //     groupsUpdatedAt: { [Op.not]: null },
    //     exportedAt: null,
    //   },
    //   order: [["createdAt", "asc"]],
    // });

    // if (imports.length === 0) return;

    const mostRecentExport = await Export.findOne({
      where: { profileGuid: profile.guid, mostRecent: true },
    });

    try {
      const oldGroupGuids = imports[0].oldGroupGuids;
      const newGroupGuids = groups.map((g) => g.guid);
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
          if (destination) destinations.push(destination);
        }
      }

      for (const i in destinations) {
        await destinations[i].exportProfile(
          profile,
          // imports,
          false,
          params.force ? params.force : undefined
        );
      }

      // await Promise.all(
      //   imports.map((e) => e.update({ exportedAt: new Date() }))
      // );
    } catch (error) {
      // await Promise.all(imports.map((e) => e.setError(error, this.name)));
      throw error;
    }
  }
}
