import {
  ConfigurationObject,
  validateAndFormatGuid,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  extractNonNullParts,
  validateConfigObjectKeys,
  GuidsByClass,
} from "../../classes/codeConfig";
import { Schedule, Source } from "../..";
import { Op } from "sequelize";

export async function loadSchedule(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<GuidsByClass> {
  let isNew = false;
  const guid = await validateAndFormatGuid(Schedule, configObject.id);
  validateConfigObjectKeys(Schedule, configObject);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  let schedule = await Schedule.scope(null).findOne({
    where: { guid, locked: getCodeConfigLockKey() },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      guid,
      locked: getCodeConfigLockKey(),
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

  logModel(schedule, validate ? "validated" : isNew ? "created" : "updated");

  return { schedule: [schedule.guid] };
}

export async function deleteSchedules(guids: string[]) {
  const schedules = await Schedule.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in schedules) {
    await schedules[i].destroy();
    logModel(schedules[i], "deleted");
  }

  return schedules.map((instance) => instance.guid);
}
