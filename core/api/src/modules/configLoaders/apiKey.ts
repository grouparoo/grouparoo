import {
  ConfigurationObject,
  extractNonNullParts,
  validateAndFormatGuid,
  logModel,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";

export async function loadApiKey(configObject: ConfigurationObject) {
  let isNew = false;

  const guid = await validateAndFormatGuid(ApiKey, configObject.id);
  let apiKey = await ApiKey.scope(null).findOne({
    where: { locked: true, guid },
  });
  if (!apiKey) {
    isNew = true;
    apiKey = await ApiKey.create({
      guid,
      locked: true,
      name: configObject.name,
    });
  }

  if (configObject.options?.permissionAllRead) {
    await apiKey.update({
      permissionAllRead: configObject.options.permissionAllRead,
    });
  }

  if (configObject.options?.permissionAllWrite) {
    await apiKey.update({
      permissionAllWrite: configObject.options.permissionAllWrite,
    });
  }

  // await apiKey.setPermissions();

  await Permission.update(
    { locked: true },
    { where: { ownerGuid: apiKey.guid } }
  );

  logModel(apiKey, isNew);
  return apiKey;
}
