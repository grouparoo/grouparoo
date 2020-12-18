import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { App, Source, Property } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadSource(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  transaction?: Transaction
) {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId, transaction);

  const guid = await validateAndFormatGuid(Source, configObject.id);
  validateConfigObjectKeys(Source, configObject);

  let source = await Source.scope(null).findOne({
    where: { guid, locked: getCodeConfigLockKey(), appGuid: app.guid },
    transaction,
  });
  if (!source) {
    isNew = true;
    source = await Source.create(
      {
        guid,
        locked: getCodeConfigLockKey(),
        name: configObject.name,
        type: configObject.type,
        appGuid: app.guid,
      },
      { transaction }
    );
  }

  await source.update({ name: configObject.name }, { transaction });

  await source.setOptions(
    extractNonNullParts(configObject, "options"),
    transaction
  );

  // a form of testing the options
  if (externallyValidate && (await source.previewAvailable())) {
    await source.sourcePreview(null, transaction);
  }

  let bootstrappedProperty: Property;
  let mappedProfileProperty: Property;
  let mapping = {};

  async function setMapping() {
    if (configObject.mapping) {
      mappedProfileProperty = await getParentByName(
        Property,
        Object.values(extractNonNullParts(configObject, "mapping"))[0],
        transaction
      );
      mapping[Object.keys(extractNonNullParts(configObject, "mapping"))[0]] =
        mappedProfileProperty.key;
      await source.setMapping(mapping, transaction);
    }
  }

  try {
    await setMapping();
    if (configObject.bootstrappedProperty) {
      bootstrappedProperty = await Property.findOne({
        where: {
          guid: await validateAndFormatGuid(
            Property,
            configObject.bootstrappedProperty.id
          ),
        },
        transaction,
      });
    }
  } catch (error) {
    if (
      error.toString().match(/cannot find Property/) &&
      configObject.bootstrappedProperty
    ) {
      const property = configObject.bootstrappedProperty;
      if (!property || !property.options) throw error;
      const mappedColumn = Object.values(property.options)[0];
      bootstrappedProperty = await source.bootstrapUniqueProperty(
        property.key || property.name,
        property.type,
        mappedColumn,
        await validateAndFormatGuid(Property, property.id),
        transaction
      );
      await setMapping();
    } else {
      throw error;
    }
  }

  await source.update({ state: "ready" }, { transaction });

  if (isNew && bootstrappedProperty) {
    await bootstrappedProperty.update(
      { locked: getCodeConfigLockKey() },
      { transaction }
    );
  }

  logModel(source, transaction ? "validated" : isNew ? "created" : "updated");
  if (bootstrappedProperty) {
    logModel(
      bootstrappedProperty,
      transaction ? "validated" : isNew ? "created" : "updated"
    );
  }

  return source;
}

export async function deleteSources(guids: string[]) {
  const deletedGuids: string[] = [];
  const sources = await Source.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in sources) {
    const source = sources[i];
    const properties = await source.$get("properties");

    for (const j in properties) {
      const property = properties[j];
      if (property.directlyMapped) {
        //@ts-ignore
        await property.destroy({ hooks: false });
        await Property.stopRuns(property);
        await Property.destroyOptions(property);
        await Property.destroyPropertyFilters(property);
        await Property.destroyProfileProperties(property);
        deletedGuids.push(property.guid);
      }
    }

    await source.destroy();
    logModel(source, "deleted");
  }

  sources.map((instance) => deletedGuids.push(instance.guid));
  return deletedGuids;
}
