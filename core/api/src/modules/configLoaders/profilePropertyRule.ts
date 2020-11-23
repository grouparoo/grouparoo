import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { ProfilePropertyRule, Source } from "../..";
import { Op } from "sequelize";

export async function loadProfilePropertyRule(
  configObject: ConfigurationObject
) {
  let isNew = false;
  const source: Source = await getParentByName(Source, configObject.sourceId);

  const guid = await validateAndFormatGuid(
    ProfilePropertyRule,
    configObject.id
  );
  let profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
    where: { locked: true, guid },
  });
  if (!profilePropertyRule) {
    isNew = true;
    profilePropertyRule = await ProfilePropertyRule.create({
      guid,
      locked: true,
      key: configObject.key || configObject.name,
      type: configObject.type,
      sourceGuid: source.guid,
    });
  }

  await profilePropertyRule.update({
    key: configObject.key || configObject.name,
    unique: configObject.unique,
    isArray: configObject.isArray,
    identifying: configObject.identifying,
  });

  await profilePropertyRule.setOptions(
    extractNonNullParts(configObject, "options")
  );

  await profilePropertyRule.update({ state: "ready" });
  logModel(profilePropertyRule, isNew);
  return profilePropertyRule;
}

export async function deleteUnseenProfilePropertyRules(guids: string[]) {
  const rules = await ProfilePropertyRule.scope(null).findAll({
    where: { locked: true, guid: { [Op.notIn]: guids } },
  });

  for (const i in rules) {
    const rule = rules[i];
    if (rule.directlyMapped) continue;
    await rule.destroy();
  }
}
