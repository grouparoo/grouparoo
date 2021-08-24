import {
  SourceConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
  getAutoBootstrappedProperty,
  AnyConfigurationObject,
} from "../../classes/codeConfig";
import { App, Source, Property } from "../..";
import { Op } from "sequelize";
import { log } from "actionhero";

import { ConfigWriter } from "../configWriter";

export async function loadSource(
  configObject: SourceConfigurationObject,
  configObjects: AnyConfigurationObject[],
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  validateConfigObjectKeys(Source, configObject);

  let source = await Source.scope(null).findOne({
    where: {
      id: configObject.id,
      appId: app.id,
      [Op.or]: {
        locked: getCodeConfigLockKey(),
        state: "deleted",
      },
    },
  });
  if (!source) {
    isNew = true;
    source = await Source.create({
      id: configObject.id,
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
  let mappedRecordProperty: Property;
  let mapping = {};

  async function setMapping() {
    if (configObject.mapping) {
      mappedRecordProperty = await getParentByName(
        Property,
        Object.values(extractNonNullParts(configObject, "mapping"))[0]
      );
      mapping[Object.keys(extractNonNullParts(configObject, "mapping"))[0]] =
        mappedRecordProperty.key;
      await source.setMapping(mapping);
    }
  }

  const bootstrappedPropertyConfig =
    configObject.bootstrappedProperty ||
    getAutoBootstrappedProperty(
      configObject,
      configObjects.filter((o) => o.id !== configObject.id)
    );

  try {
    await setMapping();
    if (bootstrappedPropertyConfig) {
      bootstrappedProperty = await Property.findOne({
        where: {
          id: bootstrappedPropertyConfig.id,
        },
      });
    }
  } catch (error) {
    if (
      error.toString().match(/cannot find Property/) &&
      bootstrappedPropertyConfig
    ) {
      const property = bootstrappedPropertyConfig;
      if (!property || !property.options) throw error;
      const mappedColumn = Object.values(property.options)[0];
      bootstrappedProperty = await source.bootstrapUniqueProperty(
        property.key || property["name"],
        property.type,
        mappedColumn,
        property.id,
        validate,
        extractNonNullParts(property, "options")
      );
      await setMapping();
    } else {
      throw error;
    }
  }

  if (isNew || source.state === "deleted") {
    await source.update({
      state: "ready",
      locked: ConfigWriter.getLockKey(configObject),
    });

    if (bootstrappedProperty) {
      await bootstrappedProperty.update({
        state: "ready",
        locked: ConfigWriter.getLockKey(configObject),
      });
    }
  }

  logModel(source, validate ? "validated" : isNew ? "created" : "updated");

  if (bootstrappedProperty) {
    logModel(
      bootstrappedProperty,
      validate ? "validated" : isNew ? "created" : "updated"
    );

    if (configObject.bootstrappedProperty) {
      log(
        `source.bootstrappedProperty is deprecated. Please generate a config file for the Property by using \`grouparoo generate\`. (${configObject.id})`,
        "warning"
      );
    }
  }

  return {
    source: [source.id],
    property: bootstrappedProperty ? [bootstrappedProperty.id] : [], // might have done this
  };
}

export async function deleteSources(ids: string[]) {
  const sources = await Source.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in sources) {
    const source = sources[i];
    await source.update({ state: "deleted", locked: null });
    logModel(source, "deleted");
  }

  return sources.map((instance) => instance.id);
}
