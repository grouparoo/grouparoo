// I am overridden by tests to add additional plugins to the api

let plugins: Record<string, { path: string }> = {};

if (process.env.GROUPAROO_INJECTED_PLUGINS) {
  plugins = JSON.parse(process.env.GROUPAROO_INJECTED_PLUGINS);
}

export default plugins;
