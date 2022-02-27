import {
  RecordConfigurationObject,
  validateConfigObjectKeys,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { GrouparooRecord } from "../.."; // configLoader imports need to be from root
import { getGrouparooRunMode } from "../runMode";
import { PropertiesCache } from "../caches/propertiesCache";

export async function loadRecord(
  configObject: RecordConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  if (getGrouparooRunMode() !== "cli:config") return;

  validateConfigObjectKeys(GrouparooRecord, configObject, ["properties"]);

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

  const primaryKeyProperties = (
    await PropertiesCache.findAllWithCache(record.modelId, "ready")
  )
    .filter((p) => p.isPrimaryKey === true)
    .map((p) => p.id);

  let hasPrimaryKeyProperty = false;
  for (const propertyId in nonNullProperties) {
    if (primaryKeyProperties.includes(propertyId)) {
      hasPrimaryKeyProperty = true;
      break;
    }
  }

  const serializedProps = JSON.stringify(nonNullProperties);

  if (!hasPrimaryKeyProperty) {
    throw new Error(
      `there are no directly mapped record properties provided in ${serializedProps}`
    );
  }

  await record.addOrUpdateProperties(nonNullProperties);

  logModel<GrouparooRecord>(
    record,
    validate ? "validated" : isNew ? "created" : "updated",
    serializedProps
  );

  return {
    record: [record.id],
  };
}
