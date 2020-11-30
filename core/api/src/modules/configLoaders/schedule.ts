import {
  ConfigurationObject,
  validateAndFormatGuid,
  logModel,
  getParentByName,
  codeConfigLockKey,
  extractNonNullParts,
} from "../../classes/codeConfig";
import { Schedule, Source } from "../..";
import { Op } from "sequelize";

export async function loadSchedule(configObject: ConfigurationObject) {
  let isNew = false;
  const guid = await validateAndFormatGuid(Schedule, configObject.id);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  let schedule = await Schedule.scope(null).findOne({
    where: { guid, locked: codeConfigLockKey },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      guid,
      locked: codeConfigLockKey,
      sourceGuid: source.guid,
    });
  }

  await schedule.update({
    name: configObject.name,
    recurring: configObject.recurring,
    recurringFrequency: configObject.recurringFrequency,
  });

  await schedule.setOptions(extractNonNullParts(configObject, "options"));

  await schedule.update({ state: "ready" });
  logModel(schedule, isNew);
  return schedule;
}

export async function deleteSchedules(guids: string[]) {
  const schedules = await Schedule.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in schedules) await schedules[i].destroy();
}
