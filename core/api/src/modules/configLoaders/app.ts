import {
  ConfigurationObject,
  validateAndFormatGuid,
  extractNonNullParts,
  codeConfigLockKey,
  logModel,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";

export async function loadApp(configObject: ConfigurationObject) {
  let isNew = false;
  const guid = await validateAndFormatGuid(App, configObject.id);

  let app = await App.scope(null).findOne({
    where: { guid, locked: codeConfigLockKey },
  });
  if (!app) {
    isNew = true;
    app = await App.create({
      guid,
      locked: codeConfigLockKey,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.update({ name: configObject.name });
  await app.setOptions(extractNonNullParts(configObject, "options"));

  const response = await app.test();
  if (!response.success) {
    throw new Error(
      `error testing app ${app.name} (${app.guid}) - ${response.error}`
    );
  }

  await app.update({ state: "ready" });
  logModel(app, isNew ? "created" : "updated");
  return app;
}

export async function deleteApps(guids: string[]) {
  const apps = await App.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in apps) {
    await apps[i].destroy();
    logModel(apps[i], "deleted");
  }
}
