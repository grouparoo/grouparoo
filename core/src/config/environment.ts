import fs from "fs";
import path from "path";
import { getParentPath } from "../utils/pluginDetails";

const envFile =
  process.env.GROUPAROO_ENV_CONFIG_FILE ||
  path.resolve(path.join(getParentPath(), ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
  process.env.GROUPAROO_ENV_CONFIG_FILE = envFile;
}
