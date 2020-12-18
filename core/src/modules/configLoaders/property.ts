import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  codeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Property, Source } from "../..";
import { Op } from "sequelize";

export async function loadProperty(configObject: ConfigurationObject) {
  let isNew = false;
  const source: Source = await getParentByName(Source, configObject.sourceId);

  const guid = await validateAndFormatGuid(Property, configObject.id);
  validateConfigObjectKeys(Property, configObject, ["name"]);

  let property = await Property.scope(null).findOne({
    where: { locked: codeConfigLockKey, guid },
  });
  if (!property) {
    isNew = true;
    property = await Property.create({
      guid,
      locked: codeConfigLockKey,
      key: configObject.key || configObject.name,
      type: configObject.type,
      sourceGuid: source.guid,
    });
  }

  await property.update({
    key: configObject.key || configObject.name,
    unique: configObject.unique,
    isArray: configObject.isArray,
  });

  await property.setOptions(extractNonNullParts(configObject, "options"));

  if (configObject.filters) {
    await property.setFilters(configObject.filters);
  }

  if (configObject.identifying === true) {
    await property.makeIdentifying();
  }

  await property.update({ state: "ready" });
  logModel(property, isNew ? "created" : "updated");
  return property;
}

export async function deleteProperties(guids: string[]) {
  const rules = await Property.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in rules) {
    const rule = rules[i];
    if (rule.directlyMapped) continue;
    await rule.destroy();
    logModel(rule, "deleted");
  }
}
