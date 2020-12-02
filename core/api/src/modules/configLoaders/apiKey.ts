import {
  ConfigurationObject,
  validateAndFormatGuid,
  codeConfigLockKey,
  logModel,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";
import { Op } from "sequelize";

export async function loadApiKey(configObject: ConfigurationObject) {
  let isNew = false;

  const guid = await validateAndFormatGuid(ApiKey, configObject.id);
  let apiKey = await ApiKey.scope(null).findOne({
    where: { locked: codeConfigLockKey, guid },
  });
  if (!apiKey) {
    isNew = true;
    apiKey = await ApiKey.create({
      guid,
      locked: codeConfigLockKey,
      name: configObject.name,
    });
  }

  await apiKey.update({ name: configObject.name });

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
    { locked: codeConfigLockKey },
    { where: { ownerGuid: apiKey.guid } }
  );

  logModel(apiKey, isNew ? "created" : "updated");
  return apiKey;
}

export async function deleteApiKeys(guids: string[]) {
  const apiKeys = await ApiKey.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in apiKeys) {
    await apiKeys[i].destroy();
    logModel(apiKeys[i], "deleted");
  }
}
