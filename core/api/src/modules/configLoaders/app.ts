import {
  ConfigurationObject,
  validateAndFormatGuid,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { App } from "../..";

export async function loadApp(configObject: ConfigurationObject) {
  let isNew = false;
  const guid = await validateAndFormatGuid(App, configObject.id);

  let app = await App.findOne({ where: { guid, locked: true } });
  if (!app) {
    isNew = true;
    app = await App.create({
      guid,
      locked: true,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.setOptions(extractNonNullParts(configObject, "options"));
  await app.update({ state: "ready" });
  logModel(app, isNew);
  return app;
}
