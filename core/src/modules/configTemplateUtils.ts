import glob from "glob";
import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";
import { getPluginManifest } from "../utils/pluginDetails";
import { utils } from "actionhero";

// in memory cache of templates
let configTemplates: ConfigTemplate[] = [];

export namespace ConfigTemplateUtils {
  export function loadTemplates() {
    if (configTemplates.length > 0) return configTemplates;

    const pluginManifest = getPluginManifest();
    const pluginIndexFiles = utils.ensureNoTsHeaderFiles(
      pluginManifest.plugins
        .map((p) => path.join(p.path, "dist"))
        .concat([path.join(__dirname, "..")])
        .map((p) => path.join(p, "templates", "**", "+(*.js|*.ts)"))
        .map((p) => glob.sync(p))
        .flat()
    );

    for (const i in pluginIndexFiles) {
      const _exports = require(pluginIndexFiles[i]);
      Object.keys(_exports).forEach((name) =>
        configTemplates.push(new _exports[name]())
      );
    }

    configTemplates = configTemplates.sort(
      (a, b) => b.name.length - a.name.length
    );
    return configTemplates;
  }

  export async function resolveFiles(template: ConfigTemplate) {
    let files: string[] = [];

    for (const i in template.files) {
      const foundFiles = glob.sync(
        path.join(template.rootPath, template.files[i])
      );
      files = files.concat(foundFiles);
    }

    return files;
  }
}
