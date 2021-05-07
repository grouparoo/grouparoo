import { api, config } from "actionhero";
// import { Model } from "sequelize-typescript";
import { App } from "../models/App";
import fs from "fs";
import path from "path";

import { getConfigDir } from "./configLoaders";

/**
 * TODO:
 *
 * ⬜️  Ignore the original code-config files at boot
 * ✅  (thanks sequelize) Skip "dirty" (eg: un-changed) models
 * ⬜️  Make JSON pretty
 * ⬜️  Distinguish between JSON and JS files
 * ⬜️  Account for the file name not matching the ID
 * ⬜️  Account for the file having multiple objects in it
 */

const writeFile = async ({ configFilePath, object }) => {
  const filePath = path.join(getConfigDir(), configFilePath);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return fs.writeFileSync(filePath, JSON.stringify(object));
};

export namespace ConfigWriter {
  export async function write(instance: App) {
    // Any models we see before starting would be from existing code config
    // files.
    if (!api.process.started) return;

    const { id, name, type } = instance;

    const object = {
      id,
      name,
      type,
      class: "app",
    };

    // console.log(instance);
    await writeFile({ object, configFilePath: `apps/${id}.json` });
  }
}
