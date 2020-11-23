import {
  ConfigurationObject,
  validateAndFormatGuid,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";

export async function loadApp(configObject: ConfigurationObject) {
  let isNew = false;
  const guid = await validateAndFormatGuid(App, configObject.id);

  let app = await App.scope(null).findOne({ where: { guid, locked: true } });
  if (!app) {
    isNew = true;
    app = await App.create({
      guid,
      locked: true,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.update({ name: configObject.name });

  await app.setOptions(extractNonNullParts(configObject, "options"));
  await app.update({ state: "ready" });
  logModel(app, isNew);
  return app;
}

export async function deleteApps(guids: string[]) {
  const apps = await App.scope(null).findAll({
    where: { locked: true, guid: { [Op.notIn]: guids } },
  });

  for (const i in apps) await apps[i].destroy();
}
