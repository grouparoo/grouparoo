import { config, ParamsFrom } from "actionhero";
import { Schedule } from "../../models/Schedule";
import { CLSTask } from "../../classes/tasks/clsTask";
import { APIData } from "../../modules/apiData";

export class ScheduleEnqueueRuns extends CLSTask {
  name = "schedules:enqueueRuns";
  description = "check all schedules and run them if it is time";
  frequency = config.general.runMode === "cli:run" ? 0 : 1000 * 60; // Run every minute
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
  };

  async runWithinTransaction(params: ParamsFrom<ScheduleEnqueueRuns>) {
    const ignoreDeltas =
      params.ignoreDeltas === undefined ? false : params.ignoreDeltas;
    const runIfNotRecurring =
      params.runIfNotRecurring === undefined ? false : params.runIfNotRecurring;

    const schedules = await Schedule.scope(null).findAll({
      where: { state: "ready" },
    });

    for (const schedule of schedules) {
      const shouldRun = await schedule.shouldRun({
        ignoreDeltas,
        runIfNotRecurring,
      });
      if (shouldRun) await schedule.enqueueRun();
    }
  }
}
