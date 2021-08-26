import fs from "fs";
import path from "path";
import { getParentPath } from "../modules/pluginDetails";

const envFileAttempts: string[] = [];

// suppress long stack traces for customer-facing errors
if (!process.env.ACTIONHERO_FATAL_ERROR_STACK_DISPLAY) {
  process.env.ACTIONHERO_FATAL_ERROR_STACK_DISPLAY = "false";
}

if (process.env.GROUPAROO_ENV_CONFIG_FILE) {
  envFileAttempts.unshift(process.env.GROUPAROO_ENV_CONFIG_FILE);
  envFileAttempts.unshift(
    path.join(getParentPath(), process.env.GROUPAROO_ENV_CONFIG_FILE)
  );
} else {
  envFileAttempts.push(path.resolve(path.join(getParentPath(), ".env")));
}

let found = false;
envFileAttempts.forEach((file) => {
  if (!found && fs.existsSync(file)) {
    require("dotenv").config({ path: file });
    process.env.GROUPAROO_ENV_CONFIG_FILE = file;
    found = true;
  }
});
