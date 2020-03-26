import path from "path";
import fs from "fs";
import { getPluginManifest, getParentPath } from "./utils/pluginDetails";

// have a shorter shutdown timeout
if (!process.env.ACTIONHERO_SHUTDOWN_TIMEOUT) {
  process.env.ACTIONHERO_SHUTDOWN_TIMEOUT = (15 * 1000).toString();
}

// load env from .env in development
// this needs to be done before requiring any part of actionhero
const env = process.env.NODE_ENV || "development";
if (env === "development") {
  const envFile = path.resolve(path.join(getParentPath(), ".env"));
  if (fs.existsSync(envFile)) {
    require("dotenv").config({ path: envFile });
    console.log(`modified your runtime environment with ${envFile}`);
  }
}

// have any of the active plugins provided a file to inject into the server's boot process?
const pluginManifest = getPluginManifest();
for (const i in pluginManifest.plugins) {
  const plugin = pluginManifest.plugins[i];
  if (plugin?.grouparoo?.serverInjection) {
    for (const j in plugin.grouparoo.serverInjection) {
      const file = path.join(plugin.path, plugin.grouparoo.serverInjection[j]);
      const module = require(file).default;
      if (typeof module === "function") {
        module();
      }
    }
  }
}

import { Process } from "actionhero";

async function main() {
  const app = new Process();

  app.registerProcessSignals((exitCode) => {
    process.exit(exitCode);
  });

  await app.start();
}

main();
