import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Property, Source } from "../..";
import { Op } from "sequelize";

import { ConfigWriter } from "../configWriter";

export async function loadProperty(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  const source: Source = await getParentByName(Source, configObject.sourceId);

  validateConfigObjectKeys(Property, configObject, ["name"]);

  // We assume we will always have to create a new object when in config mode,
  // so it is safe to leave locked in the find query.
  let property = await Property.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), id: configObject.id },
  });
  if (!property) {
    isNew = true;
    property = await Property.create({
      id: configObject.id,
      locked: ConfigWriter.getLockKey(configObject),
      key: configObject.key || configObject.name,
      type: configObject.type,
      sourceId: source.id,
    });
  }

  await property.setOptions(extractNonNullParts(configObject, "options"), null);

  await property.update({
    type: configObject.type,
    key: configObject.key || configObject.name,
    unique: configObject.unique,
    isArray: configObject.isArray,
  });

  if (configObject.filters) {
    await property.setFilters(configObject.filters, externallyValidate);
  }

  if (configObject.identifying === true) {
    await property.makeIdentifying();
  }

  await property.update({ state: "ready" });

  logModel(property, validate ? "validated" : isNew ? "created" : "updated");

  return { property: [property.id] };
}

export async function deleteProperties(ids: string[]) {
  // Since this method is only used when config is loaded and because we assume
  // the db is ephemeral, we can target locked objects, even though this will
  // always return zero objects when in config mode.
  const properties = await Property.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in properties) {
    const property = properties[i];
    if (property.directlyMapped) continue;
    await property.update({ state: "deleted", locked: null });
    logModel(property, "deleted");
  }

  return properties.map((instance) => instance.id);
}
