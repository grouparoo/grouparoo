import {
  PropertyConfigurationObject,
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
  configObject: PropertyConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  const source: Source = await getParentByName(Source, configObject.sourceId);

  validateConfigObjectKeys(Property, configObject, ["name"]);

  let property = await Property.scope(null).findOne({
    where: {
      id: configObject.id,
    },
  });

  // don't process bootstrapped properties again
  if (property && property.directlyMapped) return {};

  if (!property) {
    isNew = true;
    property = await Property.create({
      id: configObject.id,
      key: configObject.key || configObject["name"],
      type: configObject.type,
      sourceId: source.id,
    });
  }

  await property.setOptions(extractNonNullParts(configObject, "options"), null);

  await property.update({
    type: configObject.type,
    key: configObject.key || configObject["name"],
    unique: configObject.unique,
    isArray: configObject.isArray,
    keepValueIfNotFound: configObject.keepValueIfNotFound,
    locked: ConfigWriter.getLockKey(configObject),
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
  const properties = await Property.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in properties) {
    const property = properties[i];
    await property.update({ state: "deleted", locked: null });
    logModel(property, "deleted");
  }

  return properties.map((instance) => instance.id);
}
