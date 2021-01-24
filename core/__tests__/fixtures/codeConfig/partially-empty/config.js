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
      id: "data_warehouse", // guid -> `app_data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileGuid: "test-file-path.db",
      },
    },

    {
      id: "users_table", // guid -> `src_data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appGuid -> `app_data_warehouse`
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
      bootstrappedProperty: {
        name: "userId",
        type: "integer",
        id: "user_id", // guid -> `rul_user_id`
        options: {
          column: "id",
        },
      },
    },

    {
      id: "email", // guid -> `rul_email`
      name: "email",
      class: "Property",
      type: "email",
      unique: true,
      isArray: false,
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      options: {
        column: "email",
      },
      filters: [],
    },
  ];
};
