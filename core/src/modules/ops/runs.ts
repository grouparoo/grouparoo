import { log, api, task } from "actionhero";
import { Run } from "../../models/Run";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Group } from "../../models/Group";
import { Schedule } from "../../models/Schedule";
import { GroupMember } from "../../models/GroupMember";
import { GrouparooModel } from "../../models/GrouparooModel";
import { Property } from "../../models/Property";
import { Import } from "../../models/Import";
import { Op } from "sequelize";
import { TaskInputs } from "actionhero/dist/classes/task";
import { getGrouparooRunMode } from "../runMode";

export namespace RunOps {
  /**
   * Create a Run for this Group or Model
   */
  export async function run(
    creator: Group | GrouparooModel,
    destinationId?: string
  ) {
    if (getGrouparooRunMode() === "cli:validate") return;
    if (getGrouparooRunMode() === "cli:config") return;

    await stopPreviousRuns(creator);

    if (creator instanceof Group) {
      if (creator.state !== "deleted") {
        await creator.update({ state: "updating" });
      }
    }

    const run = await Run.create({
      creatorId: creator.id,
      creatorType: getCreatorTypeString(creator),
      state: "running",
      destinationId,
    });

    return run;
  }

  /**
   * Stop previous Runs for this Group
   */
  export async function stopPreviousRuns(creator: Group | GrouparooModel) {
    const previousRuns = await Run.findAll({
      where: {
        creatorId: creator.id,
        creatorType: getCreatorTypeString(creator),
        state: "running",
      },
    });

    for (const run of previousRuns) await run.stop();
  }

  export function getCreatorTypeString(
    creator: Schedule | Property | Group | GrouparooModel
  ) {
    if (creator instanceof Schedule) return "schedule";
    if (creator instanceof Property) return "property";
    if (creator instanceof Group) return "group";
    if (creator instanceof GrouparooModel) return "grouparooModel";
    throw new Error(`cannot determine creator type of ${creator}`);
  }

  /**
   * Return counts of the states of each import in N chunks over the lifetime of the run
   * Great for drawing charts!
   */
  export async function quantizedTimeline(run: Run, steps = 25) {
    const data: {
      lastBoundary: number;
      nextBoundary: number;
      steps: {
        associate: number;
        imported: number;
        processed: number;
      };
    }[] = [];
    const start = run.createdAt.getTime();

    const lastProcessedImport = await Import.findOne({
      where: { creatorId: run.id },
      order: [["processedAt", "desc"]],
      limit: 1,
    });

    const lastImportedImport = await Import.findOne({
      where: { creatorId: run.id },
      order: [["importedAt", "desc"]],
      limit: 1,
    });

    const end =
      lastProcessedImport?.processedAt?.getTime() ||
      lastImportedImport?.processedAt?.getTime() ||
      run?.completedAt?.getTime() ||
      new Date().getTime();

    const stepSize = Math.floor((end - start) / steps);
    const boundaries = [start - stepSize * 2];
    let i = 1;
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
              recordAssociatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          imported: await run.$count("imports", {
            where: {
              importedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          processed: await run.$count("imports", {
            where: {
              processedAt: {
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

    return data;
  }

  /**
   * Count up the totals from imports for `importsCreated`, `recordsCreated` and `recordsImported`
   */
  export async function updateTotals(run: Run) {
    const importsCreated = await Import.count({
      where: { creatorId: run.id },
    });
    const recordsCreated = await Import.count({
      where: { creatorId: run.id, createdRecord: true },
    });
    const recordsImported = await Import.count({
      where: { creatorId: run.id, importedAt: { [Op.ne]: null } },
      distinct: true,
      col: "recordId",
    });

    const percentComplete = await run.determinePercentComplete(false, false);

    await run.update({
      importsCreated,
      recordsCreated,
      recordsImported,
      percentComplete,
    });
  }

  /**
   * Make a guess to what percent complete this Run is
   */
  export async function determinePercentComplete(run: Run) {
    await run.reload(); // the loaded instance's counts may have changed after it was loaded

    if (run.state === "complete") return 100;
    if (run.state === "stopped") return 100;

    if (run.creatorType === "group") {
      if (run.method === "complete") return 99;
      if (!run.method) return 0; // we are exporting the group to CSV or not yet set

      const group = await Group.findById(run.creatorId);
      let totalGroupMembers = await group.countPotentialMembers();

      const membersAlreadyUpdated = await GroupMember.count({
        where: {
          groupId: group.id,
          updatedAt: { [Op.gte]: run.createdAt },
        },
      });

      if (totalGroupMembers === 0 && membersAlreadyUpdated === 0) return 0;
      if (group.state === "deleted") return 99;

      // there are 3 phases to group runs, but only 2 really could have work, so we attribute 1/2 to each phase
      let percentComplete = Math.floor(
        100 *
          (membersAlreadyUpdated /
            (totalGroupMembers > 0 ? totalGroupMembers : 1))
      );

      if (!run.method.match(/remove/i)) {
        percentComplete = Math.floor(percentComplete / 2);
      } else {
        percentComplete = 49 + Math.floor(percentComplete / 2);
      }

      return percentComplete;
    } else if (run.creatorType === "schedule") {
      const schedule = await Schedule.findById(run.creatorId);
      try {
        return schedule.runPercentComplete(run);
      } catch (error) {
        log(
          `Error calculating the percent complete for run ${run.id} (${schedule.name}): ${error}`,
          "error"
        );
        return 0;
      }
    } else {
      // for properties and for other types of internal run, we can assume we have to check every record in the system
      const totalRecords = await GrouparooRecord.count();
      return Math.floor(
        100 * (run.importsCreated / (totalRecords > 0 ? totalRecords : 1))
      );
    }
  }

  /**
   * Is there already a task enqueued to process this run?
   */
  export async function isRunEnqueued(taskName: string, runId: string) {
    let found: TaskInputs = [];

    // normal queues
    const queues = await api.resque.queue.queues();
    for (const i in queues) {
      const q = queues[i];
      const length = await api.resque.queue.length(q);
      const batchFound = await task.queued(q, 0, length + 1);
      const matches = batchFound.filter((t) => t.class === taskName);
      found = found.concat(matches);
    }

    // delayed queues
    const allDelayed = await api.resque.queue.allDelayed();
    for (const timestamp in allDelayed) {
      const matches = allDelayed[timestamp].filter((t) => t.class === taskName);
      found = found.concat(matches);
    }

    // working tasks
    const workingOn = await task.allWorkingOn();
    for (const worker in workingOn) {
      if (typeof workingOn[worker] === "string") continue;
      const payload = workingOn[worker].payload;
      if (payload.class === taskName) found = found.concat(payload);
    }

    return (
      found.filter((t: TaskInputs[number]) => t.args[0].runId === runId)
        .length > 0
    );
  }
}
