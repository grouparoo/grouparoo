import {
  RecordConfigurationObject,
  validateConfigObjectKeys,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Property } from "../../models/Property";

export async function loadRecord(
  configObject: RecordConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  if (process.env.GROUPAROO_RUN_MODE !== "cli:config") return;

  validateConfigObjectKeys(GrouparooRecord, configObject);

  let record = await GrouparooRecord.scope(null).findOne({
    where: { id: configObject.id },
  });

  let isNew = false;
  if (!record) {
    isNew = true;
    record = await GrouparooRecord.create({
      id: configObject.id,
      modelId: configObject.modelId,
    });
  } else {
    await record.update({ modelId: configObject.modelId });
  }

  const nonNullProperties = extractNonNullParts(configObject, "properties");

  const directlyMappedProperties = (
    await Property.findAllWithCache(record.modelId)
  )
    .filter((p) => p.isPrimaryKey === true)
    .map((p) => p.id);

  let hasDirectlyMapped = false;
  for (const propertyId in nonNullProperties) {
    if (directlyMappedProperties.includes(propertyId)) {
      hasDirectlyMapped = true;
      break;
    }
  }

  const serializedProps = JSON.stringify(nonNullProperties);

  if (!hasDirectlyMapped) {
    throw new Error(
      `there are no directly mapped record properties provided in ${serializedProps}`
    );
  }

  await record.addOrUpdateProperties(nonNullProperties);

  logModel(
    record,
    validate ? "validated" : isNew ? "created" : "updated",
    serializedProps
  );

  return {
    record: [record.id],
  };
}
