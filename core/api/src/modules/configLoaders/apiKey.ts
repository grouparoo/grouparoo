import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { ApiKey, Permission } from "../..";

export async function loadApiKey(configObject: ConfigurationObject) {
  let [apiKey, isNew] = await ApiKey.scope(null).findOrCreate({
    where: { locked: true, name: configObject.name },
  });

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
