import { ParamsFrom, log } from "actionhero";
import { WhereOptions } from "sequelize/types";
import { Schedule } from "../../models/Schedule";
import { CLSTask } from "../../classes/tasks/clsTask";
import { APIData } from "../../modules/apiData";
import { getGrouparooRunMode } from "../../modules/runMode";

export class ScheduleEnqueueRuns extends CLSTask {
  name = "schedules:enqueueRuns";
  description = "check all schedules and run them if it is time";
  frequency = getGrouparooRunMode() === "cli:run" ? 0 : 1000 * 60; // Run every minute
  queue = "schedules";
  inputs = {
    ignoreDeltas: {
      required: false,
      default: false,
      formatter: APIData.ensureBoolean,
    },
    runIfNotRecurring: {
      required: false,
      default: false,
      formatter: APIData.ensureBoolean,
    },
    scheduleIds: {
      required: false,
      formatter: APIData.ensureArray,
    },
  } as const;

  async runWithinTransaction(params: ParamsFrom<ScheduleEnqueueRuns>) {
    const ignoreDeltas =
      params.ignoreDeltas === undefined ? false : params.ignoreDeltas;
    const runIfNotRecurring =
      params.runIfNotRecurring === undefined ? false : params.runIfNotRecurring;

    const where: WhereOptions<Schedule> = {};
    if (params.scheduleIds) where.id = params.scheduleIds;

    const schedules = await Schedule.findAll({ where });

    const enqueuedSchedules: Schedule[] = [];
    for (const schedule of schedules) {
      const shouldRun = await schedule.shouldRun({
        ignoreDeltas,
        runIfNotRecurring,
      });

      if (shouldRun) {
        await schedule.enqueueRun();
        enqueuedSchedules.push(schedule);
      }
    }

    if (enqueuedSchedules.length) {
      log(
        `Enqueued Runs for Schedules: ${enqueuedSchedules
          .map((s) => `${s.name} (${s.id})`)
          .join(", ")}`,
        getGrouparooRunMode() === "cli:run" ? "notice" : "info"
      );
    }
  }
}
