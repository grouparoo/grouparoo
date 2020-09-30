import { Run } from "../../models/Run";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Profile } from "../../models/Profile";
import { Group } from "../../models/Group";
import { Schedule } from "../../models/Schedule";
import { ExportRun } from "../../models/ExportRun";
import { GroupMember } from "../../models/GroupMember";
import { Op } from "sequelize";
import { api, log } from "actionhero";

export namespace RunOps {
  /**
   * Return counts of the states of each import in N chunks over the lifetime of the run
   * Great for drawing charts!
   */
  export async function quantizedTimeline(run: Run, steps = 25) {
    const data = [];
    const destinations = await Destination.findAll();
    const start = run.createdAt.getTime();
    const end = run.completedAt
      ? run.completedAt.getTime()
      : new Date().getTime();
    const stepSize = Math.floor((end - start) / steps);
    const boundaries = [start - stepSize * 2];
    let i = 1;
    let foundDestinationNames = [];
    while (i <= steps + 4) {
      const lastBoundary = boundaries[i - 1];
      const nextBoundary = lastBoundary + stepSize;
      boundaries.push(nextBoundary);

      const timeData = {
        lastBoundary,
        nextBoundary,
        steps: {
          associate: await run.$count("imports", {
            where: {
              profileAssociatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          update: await run.$count("imports", {
            where: {
              profileUpdatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          groups: await run.$count("imports", {
            where: {
              groupsUpdatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          export: await run.$count("imports", {
            where: {
              exportedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
        },
      };

      const _exportGroups = await Export.findAll({
        raw: true,
        attributes: [
          [api.sequelize.fn("COUNT", "*"), "count"],
          "destinationGuid",
        ],
        group: ["destinationGuid"],
        where: {
          startedAt: {
            [Op.gte]: lastBoundary,
            [Op.lt]: nextBoundary,
          },
        },
        include: [
          {
            model: ExportRun,
            where: { runGuid: run.guid },
            required: true,
            attributes: [],
          },
        ],
      });

      _exportGroups.forEach((_exportGroup) => {
        const destination = destinations.filter(
          (destination) => destination.guid === _exportGroup.destinationGuid
        )[0];
        if (destination) {
          if (!foundDestinationNames.includes(destination.name)) {
            foundDestinationNames.push(destination.name);
          }
          timeData.steps[destination.name] = _exportGroup["count"];
        }
      });

      data.push(timeData);
      i++;
    }

    // add back points for destinations that were not found at this interval
    for (const i in data) {
      foundDestinationNames.forEach((destinationName) => {
        if (!data[i].steps[destinationName]) data[i].steps[destinationName] = 0;
      });
    }

    return data;
  }

  /**
   * Make a guess to what percent complete this Run is
   */
  export async function determinePercentComplete(run: Run) {
    await run.reload(); // the loaded instance's counts may have changed after it was loaded

    if (run.state === "complete") return 100;
    if (run.state === "stopped") return 100;

    if (run.creatorType === "group") {
      if (run.groupMethod === "exporting") return 99; // this is hard to predict...

      const group = await Group.findByGuid(run.creatorGuid);
      const totalGroupMembers =
        group.type === "calculated"
          ? await group.countPotentialMembers()
          : await group.$count("groupMembers");

      const membersAlreadyUpdated = await GroupMember.count({
        where: {
          groupGuid: group.guid,
          updatedAt: { [Op.gte]: run.createdAt },
        },
      });

      // there are 3 phases to group runs, but only 2 really could have work, so we attribute 1/2 to each phase
      let percentComplete = Math.floor(
        100 *
          (membersAlreadyUpdated /
            (totalGroupMembers > 0 ? totalGroupMembers : 1))
      );
      if (!run.groupMethod.match(/remove/i)) {
        percentComplete = Math.round(percentComplete / 2);
      } else {
        percentComplete = 50 + percentComplete / 2;
      }

      return percentComplete;
    } else if (run.creatorType === "schedule") {
      const schedule = await Schedule.findByGuid(run.creatorGuid);
      try {
        return schedule.runPercentComplete(run);
      } catch (error) {
        log(
          `Error calculating the percent complete for run ${run.guid} (${schedule.name}): ${error}`,
          "error"
        );
        return 0;
      }
    } else {
      // for profilePropertyRules and for other types of internal run, we can assume we have to check every profile in the system
      const totalProfiles = await Profile.count();
      return Math.floor(
        100 * (run.profilesImported / (totalProfiles > 0 ? totalProfiles : 1))
      );
    }
  }
}
