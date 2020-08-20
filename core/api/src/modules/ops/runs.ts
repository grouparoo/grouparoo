import { Run } from "../../models/Run";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Profile } from "../../models/Profile";
import { Group } from "../../models/Group";
import { Schedule } from "../../models/Schedule";
import { Op } from "sequelize";
import { api, log, task, utils, config } from "actionhero";
import { ExportRun } from "../../models/ExportRun";
import { plugin } from "../../modules/plugin";

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
      const group = await Group.findByGuid(run.creatorGuid);
      const groupMembersCount =
        group.type === "calculated"
          ? await group.countPotentialMembers()
          : await group.$count("groupMembers");

      const offset =
        run.groupMemberOffset > groupMembersCount
          ? groupMembersCount
          : run.groupMemberOffset;

      // there are 3 phases to group runs, but only 2 really could have work, so we attribute 1/2 to each phase
      return Math.round(
        100 *
          ((run.groupMethod.match(/remove/i)
            ? offset + groupMembersCount
            : offset) /
            (groupMembersCount > 0 ? groupMembersCount * 2 : 2))
      );
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
      return Math.round(
        100 * (run.profilesImported / (totalProfiles > 0 ? totalProfiles : 1))
      );
    }
  }

  /**
   * Process pending exports in the current batch.
   */
  export async function processBatchExports(run: Run, limit?: number) {
    let _exports: Export[] = [];
    let loopCount = 0;

    if (!limit) {
      limit = parseInt(
        (await plugin.readSetting("core", "export-profile-batch-size")).value
      );
    }

    await utils.sleep(config.tasks.timeout + 1);
    await run.reload();

    // we are still importing profiles, don't try to export yet
    if (run.importsCreated > run.profilesImported) return;

    async function loadExports() {
      _exports = await Export.findAll({
        where: { completedAt: null, errorMessage: null },
        include: [
          {
            model: ExportRun,
            where: { runGuid: run.guid },
            attributes: [],
            required: true,
          },
        ],
        order: [["createdAt", "desc"]],
        limit,
        offset: loopCount * limit,
      });
      loopCount++;
    }

    await loadExports();

    while (_exports.length > 0) {
      const destinationGuids = [
        ...new Set(_exports.map((e) => e.destinationGuid)),
      ];

      for (const i in destinationGuids) {
        await task.enqueue("export:sendBatch", {
          destinationGuid: destinationGuids[i],
          exportGuids: _exports
            .filter((e) => e.destinationGuid === destinationGuids[i])
            .map((e) => e.guid),
        });
      }

      await loadExports();
    }
  }
}
