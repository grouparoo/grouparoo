import { App } from "../../models/App";
import { AppDataRefresh } from "../../models/AppDataRefresh";

//to do: what belongs here versus as a task versus in app-templates (see stories in tracker)

export namespace AppDataRefreshOps {
  //Should this be a task because it's recurring?
  export async function checkDataRefreshValue(appDataRefresh: AppDataRefresh) {
    // queryString = appDataRefresh.query
    // value = appDataRefresh.value
    // connection = app.getPlugin() where app.id = appDataRefresh.appId (pluginConnection or connection?)
    // const sampleValue = connection.query(queryString)
    // if (sampleValue !== value) triggerSchedules
  }

  export async function triggerSchedules(appDataRefresh: AppDataRefresh) {
    // sources = Source.findAll where appId = appDataRefresh.appId
    // schedulesToRun = schedules.findAll where sourceId in sources && refreshEnabled === true
    // for schedule in schedulesToRun,  scheduleOps.run? (this needs a runId... there's likely another method)
  }
}
