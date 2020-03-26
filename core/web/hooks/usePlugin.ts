import dynamic from "next/dynamic";
import PluginManifest from "./../tmp/pluginManifest.json";

export function usePlugins(key: string) {
  const pluginComponents = [];
  const pluginMetadata = [];

  function lastWordFromCamelCase(s: string) {
    const sentence = s
      .replace(/([A-Z]+)/g, " $1")
      .replace(/([A-Z][a-z])/g, " $1");
    const words = sentence.split(" ");
    const lastWord = words[words.length - 1];
    return lastWord.toLocaleLowerCase();
  }

  PluginManifest.plugins.forEach((plugin) => {
    const pluginName = plugin.name;
    if (plugin?.grouparoo?.webComponents) {
      for (const k in plugin.grouparoo.webComponents) {
        if (k === key) {
          plugin.grouparoo.webComponents[k].forEach((file) => {
            pluginMetadata.push({
              pluginName,
              file,
              key: lastWordFromCamelCase(file),
            });

            if (process.env.GROUPAROO_MONOREPO_APP) {
              pluginComponents.push(
                dynamic(() =>
                  import(
                    `../../../plugins/${pluginName}/src/components/${file}.plugin`
                  )
                )
              );
            } else {
              pluginComponents.push(
                dynamic(() =>
                  import(
                    `../../node_modules/${pluginName}/src/components/${file}.plugin`
                  )
                )
              );
            }
          });
        }
      }
    }
  });

  return [pluginComponents, pluginMetadata];
}
