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
        failRemoteValidation: false, // this app is good
      },
    },

    {
      id: "other_data_warehouse", // id -> `other_data_warehouse`
      name: "Other Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "fileId",
        failRemoteValidation: true, // this app is bad
      },
    },

    {
      id: "some_other_data_warehouse", // id -> `some_other_data_warehouse`
      name: "Some Other Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "fileId2",
        failRemoteValidation: true, // this app is also bad
      },
    },
  ];
};
