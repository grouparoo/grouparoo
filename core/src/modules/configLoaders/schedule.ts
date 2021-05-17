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

import { ConfigWriter } from "../configWriter";

export async function loadSchedule(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(Schedule, configObject);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  // We assume we will always have to create a new object when in config mode,
  // so it is safe to leave locked in the find query.
  let schedule = await Schedule.scope(null).findOne({
    where: { id: configObject.id, locked: getCodeConfigLockKey() },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      id: configObject.id,
      locked: ConfigWriter.getLockKey(configObject),
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
  // Since this method is only used when config is loaded and because we assume
  // the db is ephemeral, we can target locked objects, even though this will
  // always return zero objects when in config mode.
  const schedules = await Schedule.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in schedules) {
    await schedules[i].destroy();
    logModel(schedules[i], "deleted");
  }

  return schedules.map((instance) => instance.id);
}
