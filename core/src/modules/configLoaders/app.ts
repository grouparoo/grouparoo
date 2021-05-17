import {
  ConfigurationObject,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";

import { ConfigWriter } from "../configWriter";

export async function loadApp(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(App, configObject);

  // We assume we will always have to create a new object when in config mode,
  // so it is safe to leave locked in the find query.
  let app = await App.scope(null).findOne({
    where: {
      id: configObject.id,
      locked: getCodeConfigLockKey(),
    },
  });
  if (!app) {
    isNew = true;
    app = await App.create({
      id: configObject.id,
      name: configObject.name,
      type: configObject.type,
      locked: ConfigWriter.getLockKey(configObject),
    });
  }

  await app.update({ type: configObject.type, name: configObject.name });
  await app.setOptions(extractNonNullParts(configObject, "options"));

  if (externallyValidate) {
    const response = await app.test(
      extractNonNullParts(configObject, "options")
    );
    if (!response.success) {
      throw new Error(
        `error testing app ${app.name} (${app.id}) - ${response.error}`
      );
    }
  }

  await app.update({ state: "ready" }, {});

  logModel(app, validate ? "validated" : isNew ? "created" : "updated");

  return { app: [app.id] };
}

export async function deleteApps(ids: string[]) {
  // Since this method is only used when config is loaded and because we assume
  // the db is ephemeral, we can target locked objects, even though this will
  // always return zero objects when in config mode.
  const apps = await App.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in apps) {
    await apps[i].update({ state: "deleted", locked: null });
    logModel(apps[i], "deleted");
  }

  return apps.map((instance) => instance.id);
}
