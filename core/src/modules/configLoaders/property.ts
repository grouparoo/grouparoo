import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Property, Source } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadProperty(
  configObject: ConfigurationObject,
  transaction?: Transaction
) {
  let isNew = false;
  const source: Source = await getParentByName(
    Source,
    configObject.sourceId,
    transaction
  );

  const guid = await validateAndFormatGuid(Property, configObject.id);
  validateConfigObjectKeys(Property, configObject, ["name"]);

  let property = await Property.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
    transaction,
  });
  if (!property) {
    isNew = true;
    property = await Property.create(
      {
        guid,
        locked: getCodeConfigLockKey(),
        key: configObject.key || configObject.name,
        type: configObject.type,
        sourceGuid: source.guid,
      },
      { transaction }
    );
  }

  await property.update(
    {
      key: configObject.key || configObject.name,
      unique: configObject.unique,
      isArray: configObject.isArray,
    },
    { transaction }
  );

  await property.setOptions(
    extractNonNullParts(configObject, "options"),
    null,
    transaction
  );

  if (configObject.filters) {
    await property.setFilters(configObject.filters, transaction);
  }

  if (configObject.identifying === true) {
    await property.makeIdentifying(transaction);
  }

  await property.update({ state: "ready" }, { transaction });

  logModel(property, transaction ? "validated" : isNew ? "created" : "updated");

  return property;
}

export async function deleteProperties(guids: string[]) {
  const properties = await Property.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in properties) {
    const property = properties[i];
    if (property.directlyMapped) continue;
    await property.destroy();
    logModel(property, "deleted");
  }

  return properties.map((instance) => instance.guid);
}
