import { join } from "path";
import fs from "fs";
import { getPluginManifest } from "../utils/pluginDetails";
import InjectedPlugins from "./pluginInjection";

let localNodeModulesPath: string;
if (
  fs.existsSync(
    join(__dirname, "..", "..", "..", "node_modules", "ah-sequelize-plugin")
  )
) {
  // things are installed under this project
  localNodeModulesPath = join(__dirname, "..", "..", "..", "node_modules");
} else {
  // we are installed along-side this project
  localNodeModulesPath = join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "node_modules"
  );
}

const pluginManifest = getPluginManifest();
const parentPlugins = {};
pluginManifest.plugins.map((p) => {
  parentPlugins[p.name] = { path: p.path };
});

// ensure that the ENV variables for the plugins are set
pluginManifest.plugins.forEach((plugin) => {
  if (plugin?.grouparoo?.env?.api) {
    plugin.grouparoo.env.api.forEach((e) => {
      if (!process.env[e]) {
        console.error(
          `\r\n!!! plugin ${plugin.name} requires environment variable ${e} to be set !!!\r\n`
        );
      }
    });
  }
  if (plugin?.grouparoo?.env?.web) {
    plugin.grouparoo.env.web.forEach((e) => {
      if (!process.env[e]) {
        console.error(
          `\r\n!!! plugin ${plugin.name} requires environment variable ${e} to be set !!!\r\n`
        );
      }
    });
  }
});

export const DEFAULT = {
  plugins: () => {
    return Object.assign(
      {
        "ah-sequelize-plugin": {
          path: join(localNodeModulesPath, "ah-sequelize-plugin"),
        },
        "ah-next-plugin": {
          path: join(localNodeModulesPath, "ah-next-plugin"),
        },
      },
      parentPlugins,
      InjectedPlugins
    );
  },
};
