import fs from "fs";
import path from "path";
import { getParentPath } from "../utils/pluginDetails";

// load env from .env in development
// this needs to be done before requiring any part of actionhero
const env = process.env.NODE_ENV || "development";

if (env === "development" || process.env.GROUPAROO_ENV_CONFIG_FILE) {
  const envFile =
    process.env.GROUPAROO_ENV_CONFIG_FILE ||
    path.resolve(path.join(getParentPath(), ".env"));
  if (fs.existsSync(envFile)) {
    require("dotenv").config({ path: envFile });
    process.env.GROUPAROO_ENV_CONFIG_FILE = envFile;
  }
}
