module.exports = async function getConfig() {
  return [
    {
      id: "setting_cluster_name", // this is actually ignored
      class: "Setting",
      pluginName: "core",
      key: "cluster-name",
      value: "Test Cluster",
    },

    {
      id: "data_warehouse", // id -> `app_data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        badConfig: true,
      },
    },
  ];
};
