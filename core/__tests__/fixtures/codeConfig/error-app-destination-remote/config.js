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
      id: "data_warehouse", // id -> `data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "fileId",
        _failRemoteValidation: true, // this app is bad
      },
    },

    {
      id: "data_warehouse_destination", // id -> `data_warehouse_destination`
      name: "Data Warehouse Destination",
      class: "Destination",
      type: "test-plugin-export",
      appId: "data_warehouse", // appId -> `data_warehouse`
      syncMode: "additive",
      options: {
        table: "someTable",
        _failRemoteValidation: true, // this destination is bad
      },
    },
  ];
};
