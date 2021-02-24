import fs from "fs";
import path from "path";
import { getParentPath } from "../utils/pluginDetails";

const envFileAttempts = [path.resolve(path.join(getParentPath(), ".env"))];
if (process.env.GROUPAROO_ENV_CONFIG_FILE) {
  envFileAttempts.unshift(process.env.GROUPAROO_ENV_CONFIG_FILE);
  envFileAttempts.unshift(
    path.join(getParentPath(), process.env.GROUPAROO_ENV_CONFIG_FILE)
  );
}

let found = false;
envFileAttempts.forEach((file) => {
  if (!found && fs.existsSync(file)) {
    require("dotenv").config({ path: file });
    process.env.GROUPAROO_ENV_CONFIG_FILE = file;
    found = true;
  }
});
