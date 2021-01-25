import {
  ConfigurationObject,
  validateAndFormatGuid,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  GuidsByClass,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";

export async function loadApp(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<GuidsByClass> {
  let isNew = false;
  const guid = await validateAndFormatGuid(App, configObject.id);
  validateConfigObjectKeys(App, configObject);

  let app = await App.scope(null).findOne({
    where: { guid, locked: getCodeConfigLockKey() },
  });
  if (!app) {
    isNew = true;
    app = await App.create({
      guid,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.update({ name: configObject.name });
  await app.setOptions(extractNonNullParts(configObject, "options"));

  if (externallyValidate) {
    const response = await app.test(
      extractNonNullParts(configObject, "options")
    );
    if (!response.success) {
      throw new Error(
        `error testing app ${app.name} (${app.guid}) - ${response.error}`
      );
    }
  }

  await app.update({ state: "ready" }, {});

  logModel(app, validate ? "validated" : isNew ? "created" : "updated");

  return { app: [app.guid] };
}

export async function deleteApps(guids: string[]) {
  const apps = await App.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in apps) {
    await apps[i].destroy();
    logModel(apps[i], "deleted");
  }

  return apps.map((instance) => instance.guid);
}
