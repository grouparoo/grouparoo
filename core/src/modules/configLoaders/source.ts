import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { App, Source, Property } from "../..";
import { Op } from "sequelize";

export async function loadSource(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  validateConfigObjectKeys(Source, configObject);

  let source = await Source.scope(null).findOne({
    where: {
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      appId: app.id,
    },
  });
  if (!source) {
    isNew = true;
    source = await Source.create({
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
      appId: app.id,
    });
  }

  await source.update({ type: configObject.type, name: configObject.name });

  await source.setOptions(extractNonNullParts(configObject, "options"));

  // a form of testing the options
  if (externallyValidate && (await source.previewAvailable())) {
    await source.sourcePreview();
  }

  let bootstrappedProperty: Property;
  let mappedProfileProperty: Property;
  let mapping = {};

  async function setMapping() {
    if (configObject.mapping) {
      mappedProfileProperty = await getParentByName(
        Property,
        Object.values(extractNonNullParts(configObject, "mapping"))[0]
      );
      mapping[Object.keys(extractNonNullParts(configObject, "mapping"))[0]] =
        mappedProfileProperty.key;
      await source.setMapping(mapping);
    }
  }

  try {
    await setMapping();
    if (configObject.bootstrappedProperty) {
      bootstrappedProperty = await Property.findOne({
        where: {
          id: configObject.bootstrappedProperty.id,
        },
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
        property.id,
        validate
      );
      await setMapping();
    } else {
      throw error;
    }
  }

  await source.update({ state: "ready" });

  if (isNew && bootstrappedProperty) {
    await bootstrappedProperty.update({ locked: getCodeConfigLockKey() });
  }

  logModel(source, validate ? "validated" : isNew ? "created" : "updated");
  if (bootstrappedProperty) {
    logModel(
      bootstrappedProperty,
      validate ? "validated" : isNew ? "created" : "updated"
    );
  }

  return {
    source: [source.id],
    property: bootstrappedProperty ? [bootstrappedProperty.id] : [], // might have done this
  };
}

export async function deleteSources(ids: string[]) {
  const deletedIds: { property: string[]; source: string[] } = {
    property: [],
    source: [],
  };

  const sources = await Source.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
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
        logModel(property, "deleted");
        deletedIds.property.push(property.id);
      }
    }

    await source.destroy();
    logModel(source, "deleted");
    deletedIds.source.push(source.id);
  }

  return deletedIds;
}
