import {
  ConfigurationObject,
  validateAndFormatGuid,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  GuidsByClass,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";
import { Op } from "sequelize";

export async function loadApiKey(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<GuidsByClass> {
  let isNew = false;

  const guid = await validateAndFormatGuid(ApiKey, configObject.id);
  validateConfigObjectKeys(ApiKey, configObject);

  let apiKey = await ApiKey.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
  });
  if (!apiKey) {
    isNew = true;
    apiKey = await ApiKey.create({
      guid,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
    });
  }

  await apiKey.update({ name: configObject.name }, {});

  if (
    configObject.options?.permissionAllRead !== undefined &&
    configObject.options?.permissionAllRead !== null
  ) {
    await apiKey.update({
      permissionAllRead: configObject.options.permissionAllRead,
    });
  }

  if (
    configObject.options?.permissionAllWrite !== undefined &&
    configObject.options?.permissionAllWrite !== null
  ) {
    await apiKey.update({
      permissionAllWrite: configObject.options.permissionAllWrite,
    });
  }

  if (configObject.permissions) {
    await apiKey.setPermissions(configObject.permissions);
  }

  await Permission.update(
    { locked: getCodeConfigLockKey() },
    { where: { ownerGuid: apiKey.guid } }
  );

  logModel(apiKey, validate ? "validated" : isNew ? "created" : "updated");

  return { apikey: [apiKey.guid] };
}

export async function deleteApiKeys(guids: string[]) {
  const apiKeys = await ApiKey.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in apiKeys) {
    await apiKeys[i].destroy();
    logModel(apiKeys[i], "deleted");
  }

  return apiKeys.map((instance) => instance.guid);
}
