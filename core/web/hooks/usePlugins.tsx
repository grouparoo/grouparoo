import PluginManifest from "../tmp/pluginManifest.json";
import dynamic from "next/dynamic";
import Loader from "../components/loader";

export function usePlugins(pluginKey: string, matchKey?: string) {
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
        if (k === pluginKey) {
          plugin.grouparoo.webComponents[k].forEach((file) => {
            const key = lastWordFromCamelCase(file);
            if (!matchKey || matchKey === key) {
              pluginMetadata.push({
                pluginName,
                file,
                key: key,
              });

              const LoaderFunction = (props) => {
                const Plugin = dynamic(
                  () =>
                    import(`../tmp/plugin/${pluginKey}/${pluginName}/${file}`),
                  { loading: () => <Loader /> }
                );

                return <Plugin {...props} />;
              };

              pluginComponents.push(LoaderFunction);
            }
          });
        }
      }
    }
  });

  if (matchKey) {
    return [pluginComponents[0], pluginMetadata[0]];
  } else {
    return [pluginComponents, pluginMetadata];
  }
}
