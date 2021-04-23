import {
  ConfigurationObject,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";
import { Op } from "sequelize";

export async function loadApiKey(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  validateConfigObjectKeys(ApiKey, configObject);

  let apiKey = await ApiKey.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), id: configObject.id },
  });
  if (!apiKey) {
    isNew = true;
    apiKey = await ApiKey.create({
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
    });
  }

  await apiKey.update({ type: configObject.type, name: configObject.name }, {});

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
    { where: { ownerId: apiKey.id } }
  );

  logModel(apiKey, validate ? "validated" : isNew ? "created" : "updated");

  return { apikey: [apiKey.id] };
}

export async function deleteApiKeys(ids: string[]) {
  const apiKeys = await ApiKey.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in apiKeys) {
    await apiKeys[i].destroy();
    logModel(apiKeys[i], "deleted");
  }

  return apiKeys.map((instance) => instance.id);
}
