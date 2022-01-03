import {
  ScheduleConfigurationObject,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  extractNonNullParts,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { FilterHelper } from "../filterHelper";
import { Schedule, Source } from "../..";
import { Op } from "sequelize";
import { Deprecation } from "../deprecation";
import { ConfigWriter } from "../configWriter";

export async function loadSchedule(
  configObject: ScheduleConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  if (configObject.hasOwnProperty("confirmProfiles")) {
    Deprecation.warnChanged(
      "config",
      "schedule.confirmProfiles",
      "schedule.confirmRecords"
    );
    configObject.confirmRecords = configObject["confirmProfiles"];
    delete configObject["confirmProfiles"];
  }

  validateConfigObjectKeys(Schedule, configObject, ["options", "filters"]);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  let schedule = await Schedule.scope(null).findOne({
    where: { id: configObject.id, locked: getCodeConfigLockKey() },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      id: configObject.id,
      locked: ConfigWriter.getLockKey(configObject),
      sourceId: source.id,
      refreshEnabled: configObject.refreshEnabled,
    });
  }

  await schedule.update({
    name: configObject.name,
    recurring: configObject.recurring,
    recurringFrequency: configObject.recurringFrequency,
    confirmRecords: configObject.confirmRecords,
  });

  const options = extractNonNullParts(configObject, "options");
  await schedule.setOptions(options);

  if (configObject.filters) {
    for (const filter of configObject.filters) {
      if (Object.keys(FilterHelper.deprecatedFilters).includes(filter.op)) {
        throw new Error(
          `Schedule filter \`${
            filter.op
          }\` has been deprecated and replaced with \`${
            FilterHelper.deprecatedFilters[filter.op]
          }\`. `
          // There is nowhere in the docs to point yet for schedule filters
        );
      }
    }
    await schedule.setFilters(configObject.filters, externallyValidate);
  }

  await schedule.update({ state: "ready" });

  logModel(schedule, validate ? "validated" : isNew ? "created" : "updated");

  return { schedule: [schedule.id] };
}

export async function deleteSchedules(ids: string[]) {
  const schedules = await Schedule.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in schedules) {
    await schedules[i].destroy();
    logModel(schedules[i], "deleted");
  }

  return schedules.map((instance) => instance.id);
}
