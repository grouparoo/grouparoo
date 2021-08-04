import {
  ApiKeyConfigurationObject,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";
import { Op } from "sequelize";

export async function loadApiKey(
  configObject: ApiKeyConfigurationObject,
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

  await apiKey.update({ apiKey: configObject.apiKey, name: configObject.name });

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
    const permissions = await apiKey.$get("permissions");
    const updatedPermissions: Permission[] = [];
    for (const permission of permissions) {
      const configPermission = configObject.permissions.find(
        (p) => p.topic === permission.topic
      );
      if (configPermission) {
        permission.read = configPermission.read;
        permission.write = configPermission.write;
      }
      updatedPermissions.push(permission);
    }
    console.log(updatedPermissions);

    await apiKey.setPermissions(permissions);
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
