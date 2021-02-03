import {
  ConfigurationObject,
  validateAndFormatId,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  extractNonNullParts,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Schedule, Source } from "../..";
import { Op } from "sequelize";

export async function loadSchedule(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  let isNew = false;
  const id = await validateAndFormatId(Schedule, configObject.id);
  validateConfigObjectKeys(Schedule, configObject);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  let schedule = await Schedule.scope(null).findOne({
    where: { id, locked: getCodeConfigLockKey() },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      id,
      locked: getCodeConfigLockKey(),
      sourceId: source.id,
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

  return schedule;
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
