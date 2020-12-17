import {
  ConfigurationObject,
  validateAndFormatGuid,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadApiKey(
  configObject: ConfigurationObject,
  transaction?: Transaction
) {
  let isNew = false;

  const guid = await validateAndFormatGuid(ApiKey, configObject.id);
  validateConfigObjectKeys(ApiKey, configObject);

  let apiKey = await ApiKey.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
    transaction,
  });
  if (!apiKey) {
    isNew = true;
    apiKey = await ApiKey.create(
      {
        guid,
        locked: getCodeConfigLockKey(),
        name: configObject.name,
      },
      { transaction }
    );
  }

  await apiKey.update({ name: configObject.name }, { transaction });

  if (
    configObject.options?.permissionAllRead !== undefined &&
    configObject.options?.permissionAllRead !== null
  ) {
    await apiKey.update(
      {
        permissionAllRead: configObject.options.permissionAllRead,
      },
      { transaction }
    );
  }

  if (
    configObject.options?.permissionAllWrite !== undefined &&
    configObject.options?.permissionAllWrite !== null
  ) {
    await apiKey.update(
      {
        permissionAllWrite: configObject.options.permissionAllWrite,
      },
      { transaction }
    );
  }

  if (configObject.permissions) {
    await apiKey.setPermissions(configObject.permissions, transaction);
  }

  await Permission.update(
    { locked: getCodeConfigLockKey() },
    { where: { ownerGuid: apiKey.guid }, transaction }
  );

  logModel(apiKey, transaction ? "validated" : isNew ? "created" : "updated");

  return apiKey;
}

export async function deleteApiKeys(guids: string[]) {
  const apiKeys = await ApiKey.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in apiKeys) {
    await apiKeys[i].destroy();
    logModel(apiKeys[i], "deleted");
  }
}
