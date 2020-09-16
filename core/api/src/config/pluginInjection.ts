// I am overridden by tests to add additional plugins to the api

let plugins = {};

if (process.env.GROUPAROO_INJECTED_PLUGINS) {
  plugins = JSON.parse(process.env.GROUPAROO_INJECTED_PLUGINS);
}

export default plugins;
