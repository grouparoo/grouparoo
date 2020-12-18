import {
  ConfigurationObject,
  validateAndFormatGuid,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  extractNonNullParts,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Schedule, Source } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadSchedule(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  transaction?: Transaction
) {
  let isNew = false;
  const guid = await validateAndFormatGuid(Schedule, configObject.id);
  validateConfigObjectKeys(Schedule, configObject);
  const source: Source = await getParentByName(
    Source,
    configObject.sourceId,
    transaction
  );

  let schedule = await Schedule.scope(null).findOne({
    where: { guid, locked: getCodeConfigLockKey() },
    transaction,
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create(
      {
        guid,
        locked: getCodeConfigLockKey(),
        sourceGuid: source.guid,
      },
      { transaction }
    );
  }

  await schedule.update(
    {
      name: configObject.name,
      recurring: configObject.recurring,
      recurringFrequency: configObject.recurringFrequency,
    },
    { transaction }
  );

  await schedule.setOptions(
    extractNonNullParts(configObject, "options"),
    transaction
  );

  await schedule.update({ state: "ready" }, { transaction });

  logModel(schedule, transaction ? "validated" : isNew ? "created" : "updated");

  return schedule;
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
