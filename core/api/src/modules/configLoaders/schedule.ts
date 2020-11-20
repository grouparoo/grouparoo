import {
  ConfigurationObject,
  validateAndFormatGuid,
  logModel,
  getParentByName,
  extractNonNullParts,
} from "../../classes/codeConfig";
import { Schedule, Source } from "../..";

export async function loadSchedule(configObject: ConfigurationObject) {
  let isNew = false;
  const guid = await validateAndFormatGuid(Schedule, configObject.id);
  const source: Source = await getParentByName(Source, configObject.sourceId);

  let schedule = await Schedule.scope(null).findOne({
    where: { guid, locked: true },
  });
  if (!schedule) {
    isNew = true;
    schedule = await Schedule.create({
      guid,
      locked: true,
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
