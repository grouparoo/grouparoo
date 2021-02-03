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
        fileId: "test-file-path.db",
      },
    },

    {
      id: "users_table", // id -> `src_data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appId -> `app_data_warehouse`
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
      bootstrappedProperty: {
        name: "userId",
        type: "integer",
        id: "user_id", // id -> `rul_user_id`
        options: {
          column: "id",
        },
      },
    },

    {
      id: "email", // id -> `rul_email`
      name: "email",
      class: "Property",
      type: "email",
      unique: true,
      isArray: false,
      sourceId: "users_table", // sourceId -> `src_users_table`
      options: {
        column: "email",
      },
      filters: [],
    },
  ];
};
