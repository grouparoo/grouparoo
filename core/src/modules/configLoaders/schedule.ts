import {
  ConfigurationObject,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  extractNonNullParts,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Schedule, Source } from "../..";
import { Op } from "sequelize";

export async function loadSchedule(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(Schedule, configObject);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  let schedule = await Schedule.scope(null).findOne({
    where: { id: configObject.id, locked: getCodeConfigLockKey() },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      sourceId: source.id,
    });
  }

  await schedule.update({
    type: configObject.type,
    name: configObject.name,
    recurring: configObject.recurring,
    recurringFrequency: configObject.recurringFrequency,
  });

  await schedule.setOptions(extractNonNullParts(configObject, "options"));

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
