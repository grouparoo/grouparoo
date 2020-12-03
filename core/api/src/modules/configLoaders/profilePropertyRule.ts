import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  codeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
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
  validateConfigObjectKeys(ProfilePropertyRule, configObject, ["name"]);

  let profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
    where: { locked: codeConfigLockKey, guid },
  });
  if (!profilePropertyRule) {
    isNew = true;
    profilePropertyRule = await ProfilePropertyRule.create({
      guid,
      locked: codeConfigLockKey,
      key: configObject.key || configObject.name,
      type: configObject.type,
      sourceGuid: source.guid,
    });
  }

  await profilePropertyRule.update({
    key: configObject.key || configObject.name,
    unique: configObject.unique,
    isArray: configObject.isArray,
  });

  await profilePropertyRule.setOptions(
    extractNonNullParts(configObject, "options")
  );

  if (configObject.filters) {
    await profilePropertyRule.setFilters(configObject.filters);
  }

  if (configObject.identifying === true) {
    await profilePropertyRule.makeIdentifying();
  }

  await profilePropertyRule.update({ state: "ready" });
  logModel(profilePropertyRule, isNew ? "created" : "updated");
  return profilePropertyRule;
}

export async function deleteProfilePropertyRules(guids: string[]) {
  const rules = await ProfilePropertyRule.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in rules) {
    const rule = rules[i];
    if (rule.directlyMapped) continue;
    await rule.destroy();
    logModel(rule, "deleted");
  }
}
