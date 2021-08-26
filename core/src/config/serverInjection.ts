import path from "path";
import { getPluginManifest } from "../modules/pluginDetails";

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
