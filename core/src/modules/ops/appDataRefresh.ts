import { Source } from "../../models/Source";
import { App } from "../../models/App";
import { AppDataRefresh } from "../../models/AppDataRefresh";
import { Schedule } from "../..";
import { Op } from "sequelize/types";

//to do: what belongs here versus as a task versus in app-templates (see stories in tracker)

export namespace AppDataRefreshOps {
  export async function checkDataRefreshValue(appDataRefresh: AppDataRefresh) {
    const { refreshQuery, value, appId } = appDataRefresh;
    // app connection to run query
    // const sampleValue = connection.query(queryString)
    // if (sampleValue !== value) triggerSchedules
  }

  export async function triggerSchedules(appDataRefresh: AppDataRefresh) {
    const appId: string = appDataRefresh.appId;
    const sources: Source[] = await Source.findAll({ where: { appId: appId } });
    const sourceIds: string[] = sources.map((source) => {
      return source.id;
    });
    const schedulesToRun: Schedule[] = await Schedule.findAll({
      where: { sourceId: { [Op.in]: sourceIds } },
    });

    schedulesToRun.forEach((schedule) => {
      schedule.enqueueRun();
    });
  }
}
