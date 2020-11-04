import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { Group } from "../../models/Group";
import { Schedule } from "../../models/Schedule";
import { GroupMember } from "../../models/GroupMember";
import { Import } from "../../models/Import";
import { Op } from "sequelize";
import { log } from "actionhero";

export namespace RunOps {
  /**
   * Return counts of the states of each import in N chunks over the lifetime of the run
   * Great for drawing charts!
   */
  export async function quantizedTimeline(run: Run, steps = 25) {
    const data = [];
    const start = run.createdAt.getTime();

    const lastExportedImport = await Import.findOne({
      where: { creatorGuid: run.guid },
      order: [["exportedAt", "desc"]],
      limit: 1,
    });

    const lastImportedImport = await Import.findOne({
      where: { creatorGuid: run.guid },
      order: [["profileUpdatedAt", "desc"]],
      limit: 1,
    });

    const end =
      lastExportedImport?.exportedAt?.getTime() ||
      lastImportedImport?.exportedAt?.getTime() ||
      run?.completedAt?.getTime() ||
      new Date().getTime();

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
          profilesUpdated: await run.$count("imports", {
            where: {
              profileUpdatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          groupsUpdated: await run.$count("imports", {
            where: {
              groupsUpdatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          exported: await run.$count("imports", {
            where: {
              exportedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
        },
      };

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

      // we are exporting the group to CSV
      if (!run.groupMethod) return 100;

      // there are 3 phases to group runs, but only 2 really could have work, so we attribute 1/2 to each phase
      let percentComplete = Math.floor(
        100 *
          (membersAlreadyUpdated /
            (totalGroupMembers > 0 ? totalGroupMembers : 1))
      );
      if (!run.groupMethod.match(/remove/i)) {
        percentComplete = Math.floor(percentComplete / 2);
      } else {
        percentComplete = 50 + Math.floor(percentComplete / 2);
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
        100 * (run.importsCreated / (totalProfiles > 0 ? totalProfiles : 1))
      );
    }
  }
}
